import db from '../database';
import topics from '../topics';
import plugins from '../plugins';
import meta from '../meta';
import privileges from '../privileges';
import user from '../user';
import { CategoryMethods, CategoryTopicsResult, TopicIdsData, TopicObject } from '../types';

export = function (Categories: CategoryMethods) {
    async function filterScheduledTids(tids: (number|string)[]) : Promise<(number|string)[]> {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const scores = await db.sortedSetScores('topics:scheduled', tids) as {[key: number]: number};
        const now: number = Date.now();
        return tids.filter((tid, index) => tid && (!scores[index] || scores[index] <= now));
    }

    Categories.getCategoryTopics = async function (data) {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const results: TopicIdsData = await plugins.hooks.fire('filter:category.topics.prepare', data) as TopicIdsData;
        const tids = await Categories.getTopicIds(results);
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        let topicsData: TopicObject[] = await topics.getTopicsByTids(tids, data.uid) as TopicObject[];
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        topicsData = await user.blocks.filter(data.uid, topicsData) as TopicObject[];

        if (!topicsData.length) {
            return { topics: [], uid: data.uid };
        }
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        topics.calculateTopicIndices(topicsData, data.start);

        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const res: CategoryTopicsResult = await plugins.hooks.fire('filter:category.topics.get', { cid: data.cid, topics: topicsData, uid: data.uid }) as CategoryTopicsResult;
        return { topics: res.topics, nextStart: data.stop + 1 };
    };

    Categories.getTopicIds = async function (data) {
        const dataForPinned = { ...data };
        dataForPinned.start = 0;
        dataForPinned.stop = -1;

        const [pinnedTids, set, direction] = await Promise.all([
            Categories.getPinnedTids(dataForPinned),
            Categories.buildTopicsSortedSet(data),
            Categories.getSortedSetRangeDirection(data.sort),
        ]);

        const totalPinnedCount = pinnedTids.length;
        const pinnedTidsOnPage = pinnedTids.slice(data.start, data.stop !== -1 ? data.stop + 1 : undefined);
        const pinnedCountOnPage = pinnedTidsOnPage.length;
        const topicsPerPage = data.stop - data.start + 1;
        const normalTidsToGet = Math.max(0, topicsPerPage - pinnedCountOnPage);

        if (!normalTidsToGet && data.stop !== -1) {
            return pinnedTidsOnPage;
        }

        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        if (plugins.hooks.hasListeners('filter:categories.getTopicIds')) {
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            const result = await plugins.hooks.fire('filter:categories.getTopicIds', {
                tids: [],
                data: data,
                pinnedTids: pinnedTidsOnPage,
                allPinnedTids: pinnedTids,
                totalPinnedCount: totalPinnedCount,
                normalTidsToGet: normalTidsToGet,
            }) as {
                tids: (string|number)[]
            };
            return result && result.tids;
        }

        let { start } = data;
        if (start > 0 && totalPinnedCount) {
            start -= totalPinnedCount - pinnedCountOnPage;
        }

        const stop = data.stop === -1 ? data.stop : start + normalTidsToGet - 1;
        let normalTids: (number|string)[];
        const reverse = direction === 'highest-to-lowest';
        if (Array.isArray(set)) {
            const weights = set.map((s, index) => (index ? 0 : 1));
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            normalTids = await db[reverse ? 'getSortedSetRevIntersect' : 'getSortedSetIntersect']({ sets: set, start: start, stop: stop, weights: weights }) as (string|number)[];
        } else {
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            normalTids = await db[reverse ? 'getSortedSetRevRange' : 'getSortedSetRange'](set, start, stop) as (string|number)[];
        }
        normalTids = normalTids.filter(tid => !pinnedTids.includes(tid));
        return pinnedTidsOnPage.concat(normalTids);
    };

    Categories.getTopicCount = async function (data) {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        if (plugins.hooks.hasListeners('filter:categories.getTopicCount')) {
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            const result = await plugins.hooks.fire('filter:categories.getTopicCount', {
                topicCount: data.category.topic_count,
                data: data,
            }) as {
                topicCount: number;
            };
            return result && result.topicCount;
        }
        const set = await Categories.buildTopicsSortedSet(data);
        if (Array.isArray(set)) {
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            return await db.sortedSetIntersectCard(set) as number;
        } else if (data.targetUid && set) {
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            return await db.sortedSetCard(set) as number;
        }
        return data.category.topic_count;
    };

    Categories.buildTopicsSortedSet = async function (data) {
        const { cid } = data;
        let set: string | string[] = `cid:${cid}:tids`;
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const sort: string = (data.sort || (data.settings && data.settings.categoryTopicSort) || meta.config.categoryTopicSort || 'newest_to_oldest') as string;

        if (sort === 'most_posts') {
            set = `cid:${cid}:tids:posts`;
        } else if (sort === 'most_votes') {
            set = `cid:${cid}:tids:votes`;
        } else if (sort === 'most_views') {
            set = `cid:${cid}:tids:views`;
        }

        if (data.tag) {
            if (Array.isArray(data.tag)) {
                set = [set].concat(data.tag.map(tag => `tag:${tag}:topics`));
            } else {
                set = [set, `tag:${data.tag}:topics`];
            }
        }

        if (data.targetUid) {
            set = (Array.isArray(set) ? set : [set]).concat([`cid:${cid}:uid:${data.targetUid}:tids`]);
        }

        const result = await plugins.hooks.fire('filter:categories.buildTopicsSortedSet', {
            set: set,
            data: data,
        }) as {
            set: string|string[]
        };
        return result && result.set;
    };

    Categories.getSortedSetRangeDirection = async function (sort) {
        sort = sort || 'newest_to_oldest';
        const direction = ['newest_to_oldest', 'most_posts', 'most_votes', 'most_views'].includes(sort) ? 'highest-to-lowest' : 'lowest-to-highest';
        const result = await plugins.hooks.fire('filter:categories.getSortedSetRangeDirection', {
            sort: sort,
            direction: direction,
        }) as {
            direction: string
        };
        return result && result.direction;
    };

    Categories.getAllTopicIds = async function (cid, start, stop) {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        return await db.getSortedSetRange([`cid:${cid}:tids:pinned`, `cid:${cid}:tids`], start, stop) as (string|number)[];
    };

    Categories.getPinnedTids = async function (data) {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        if (plugins.hooks.hasListeners('filter:categories.getPinnedTids')) {
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            const result = await plugins.hooks.fire('filter:categories.getPinnedTids', {
                pinnedTids: [],
                data: data,
            }) as {
                pinnedTids: (string|number)[]
            };
            return result && result.pinnedTids;
        }
        const [allPinnedTids, canSchedule] = await Promise.all([
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            db.getSortedSetRevRange(`cid:${data.cid}:tids:pinned`, data.start, data.stop) as (number|string)[],
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            privileges.categories.can('topics:schedule', data.cid, data.uid) as boolean,
        ]);
        const pinnedTids = canSchedule ? allPinnedTids : await filterScheduledTids(allPinnedTids);

        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        return await topics.tools.checkPinExpiry(pinnedTids) as (string|number)[];
    };

    Categories.modifyTopicsByPrivilege = function (topics, privileges) {
        if (!Array.isArray(topics) || !topics.length) {
            return;
        }

        topics.forEach((topic) => {
            if (!topic.scheduled && topic.deleted && !topic.isOwner && !privileges.view_deleted) {
                topic.title = '[[topic:topic_is_deleted]]';
                if (topic.hasOwnProperty('titleRaw')) {
                    topic.titleRaw = '[[topic:topic_is_deleted]]';
                }
                topic.slug = topic.tid;
                topic.teaser = null;
                topic.noAnchor = true;
                topic.tags = [];
            }

            topic.visible = privileges.isAdminOrMod || topic.isOwner || !topic.isPrivate;
        });
    };

    Categories.onNewPostMade = async function (cid, pinned, postData) {
        if (!cid || !postData) {
            return;
        }
        const promises = [
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            db.sortedSetAdd(`cid:${cid}:pids`, postData.timestamp, postData.pid),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            db.incrObjectField(`category:${cid}`, 'post_count'),
        ];
        if (!pinned) {
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            promises.push(db.sortedSetIncrBy(`cid:${cid}:tids:posts`, 1, postData.tid));
        }
        await Promise.all(promises);
        await Categories.updateRecentTidForCid(cid);
    };
};
