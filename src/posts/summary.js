"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const validator_1 = __importDefault(require("validator"));
const lodash_1 = __importDefault(require("lodash"));
const topics_1 = __importDefault(require("../topics"));
const user_1 = __importDefault(require("../user"));
const plugins_1 = __importDefault(require("../plugins"));
const categories_1 = __importDefault(require("../categories"));
const utils_1 = __importDefault(require("../utils"));
module.exports = function (Posts) {
    function toObject(key, data) {
        const obj = {};
        for (let i = 0; i < data.length; i += 1) {
            const k = data[i][key];
            obj[k] = data[i];
        }
        return obj;
    }
    async function getTopicAndCategories(tids) {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const topicsData = await topics_1.default.getTopicsFields(tids, [
            'uid', 'tid', 'title', 'cid', 'tags', 'slug',
            'deleted', 'scheduled', 'postcount', 'mainPid', 'teaserPid',
        ]);
        const cids = lodash_1.default.uniq(topicsData.map(topic => topic && topic.cid));
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const categoriesData = await categories_1.default.getCategoriesFields(cids, [
            'cid', 'name', 'icon', 'slug', 'parentCid',
            'bgColor', 'color', 'backgroundImage', 'imageClass',
        ]);
        return { topics: topicsData, categories: categoriesData };
    }
    function stripTags(content) {
        if (content) {
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
            return utils_1.default.stripHTMLTags(content, utils_1.default.stripTags);
        }
        return content;
    }
    async function parsePosts(posts, options) {
        return await Promise.all(posts.map(async (post) => {
            if (!post.content || !options.parse) {
                // The next line calls a function in a module that has not been updated to TS yet
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
                post.content = post.content ? validator_1.default.escape(String(post.content)) : post.content;
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
        let posts = await Posts.getPostsFields(pids, fields);
        posts = posts.filter(Boolean);
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        posts = await user_1.default.blocks.filter(uid, posts);
        const uids = lodash_1.default.uniq(posts.map(p => p && p.uid));
        const tids = lodash_1.default.uniq(posts.map(p => p && p.tid));
        const [users, topicsAndCategories] = await Promise.all([
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            user_1.default.getUsersFields(uids, ['uid', 'username', 'userslug', 'picture', 'status']),
            getTopicAndCategories(tids),
        ]);
        const uidToUser = toObject('uid', users);
        const tidToTopic = toObject('tid', topicsAndCategories.topics);
        const cidToCategory = toObject('cid', topicsAndCategories.categories);
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
            post.timestampISO = utils_1.default.toISOString(post.timestamp);
        });
        posts = posts.filter(post => tidToTopic[post.tid]);
        posts = await parsePosts(posts, options);
        const result = await plugins_1.default.hooks.fire('filter:post.getPostSummaryByPids', { posts: posts, uid: uid });
        return result.posts;
    };
};
