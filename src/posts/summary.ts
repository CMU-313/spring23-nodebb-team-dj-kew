import validator from 'validator';
import _ from 'lodash';
import topics from '../topics';
import user from '../user';
import plugins from '../plugins';
import categories from '../categories';
import utils from '../utils';
import { PostSummaryOptions, PostsMethods, PostsWrapper, TopicsAndCategories, CategoryObject, PostObject, TopicObject, UserObject } from '../types';

export = function (Posts : PostsMethods) {
    function toObject(key: string, data: UserObject[] | TopicObject[] | CategoryObject[]) {
        const obj: {[k: string]: UserObject | TopicObject | CategoryObject } = {};
        for (let i = 0; i < data.length; i += 1) {
            const k = data[i][key] as string;
            obj[k] = data[i];
        }
        return obj;
    }

    async function getTopicAndCategories(tids) {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const topicsData = await topics.getTopicsFields(tids, [
            'uid', 'tid', 'title', 'cid', 'tags', 'slug',
            'deleted', 'scheduled', 'postcount', 'mainPid', 'teaserPid',
        ]) as TopicObject[];
        const cids = _.uniq(topicsData.map(topic => topic && topic.cid));

        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const categoriesData = await categories.getCategoriesFields(cids, [
            'cid', 'name', 'icon', 'slug', 'parentCid',
            'bgColor', 'color', 'backgroundImage', 'imageClass',
        ]) as CategoryObject[];
        return { topics: topicsData, categories: categoriesData };
    }


    function stripTags(content: string): string {
        if (content) {
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
            return utils.stripHTMLTags(content, utils.stripTags);
        }
        return content;
    }

    async function parsePosts(posts: PostObject[], options: PostSummaryOptions) {
        return await Promise.all(posts.map(async (post) => {
            if (!post.content || !options.parse) {
                // The next line calls a function in a module that has not been updated to TS yet
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
                post.content = post.content ? validator.escape(String(post.content)) : post.content;
                return post;
            }
            post = await Posts.parsePost(post);
            if (options.stripTags) {
                post.content = stripTags(post.content);
            }
            return post;
        }));
    }

    Posts.getPostSummaryByPids = async function (pids, uid, options) {
        if (!Array.isArray(pids) || !pids.length) {
            return [];
        }

        options.stripTags = options.hasOwnProperty('stripTags') ? options.stripTags : false;
        options.parse = options.hasOwnProperty('parse') ? options.parse : true;
        options.extraFields = options.hasOwnProperty('extraFields') ? options.extraFields : [];

        const fields = ['pid', 'tid', 'content', 'uid', 'timestamp', 'deleted', 'upvotes', 'downvotes', 'replies', 'handle', 'isAnon'].concat(options.extraFields);

        let posts = await Posts.getPostsFields(pids, fields as (keyof PostObject)[]);
        posts = posts.filter(Boolean);
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        posts = await user.blocks.filter(uid, posts) as PostObject[];

        const uids = _.uniq(posts.map(p => p && p.uid));
        const tids = _.uniq(posts.map(p => p && p.tid));

        const [users, topicsAndCategories] = await Promise.all([
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            user.getUsersFields(uids, ['uid', 'username', 'userslug', 'picture', 'status']) as UserObject[],
            getTopicAndCategories(tids) as TopicsAndCategories,
        ]);

        const uidToUser = toObject('uid', users) as {[k: string]: UserObject};
        const tidToTopic = toObject('tid', topicsAndCategories.topics) as {[k: string]: TopicObject};
        const cidToCategory = toObject('cid', topicsAndCategories.categories) as {[k: string]: CategoryObject};

        posts.forEach((post) => {
            // If the post author isn't represented in the retrieved users' data,
            // then it means they were deleted, assume guest.
            if (!uidToUser.hasOwnProperty(post.uid)) {
                post.uid = 0;
            }
            post.user = uidToUser[post.uid];
            Posts.overrideGuestHandle(post, post.handle);
            post.handle = undefined;
            post.topic = tidToTopic[post.tid];
            post.category = post.topic && cidToCategory[post.topic.cid];
            post.isMainPost = post.topic && post.pid === post.topic.mainPid;
            post.deleted = post.deleted === 1;
            post.timestampISO = utils.toISOString(post.timestamp) as string;
        });

        posts = posts.filter(post => tidToTopic[post.tid]);

        posts = await parsePosts(posts, options);
        const result = await plugins.hooks.fire('filter:post.getPostSummaryByPids', { posts: posts, uid: uid }) as PostsWrapper;
        return result.posts;
    };
};
