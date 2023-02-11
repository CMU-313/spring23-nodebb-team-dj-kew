import db from '../database';
import plugins from '../plugins';
import { PostObject } from '../types';
import utils from '../utils';
import { OptionalPost, OptionalPostList, PostsMethods, PostsWrapper } from './types';

const intFields = [
    'uid', 'pid', 'tid', 'deleted', 'timestamp',
    'upvotes', 'downvotes', 'deleterUid', 'edited',
    'replies', 'bookmarks',
];

function modifyPost(post: OptionalPost, fields: (keyof PostObject)[]) {
    if (post) {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        db.parseIntFields(post, intFields, fields);
        if (post.hasOwnProperty('upvotes') && post.hasOwnProperty('downvotes')) {
            post.votes = post.upvotes - post.downvotes;
        }
        if (post.hasOwnProperty('timestamp')) {
            post.timestampISO = utils.toISOString(post.timestamp) as string;
        }
        if (post.hasOwnProperty('edited')) {
            post.editedISO = (post.edited !== 0 ? utils.toISOString(post.edited) : '') as string;
        }
        if (post.hasOwnProperty('isAnon')) {
            post.isAnon = post.isAnon === 'true' || post.isAnon === true;
        }
    }
}

export = function (Posts: PostsMethods) {
    Posts.getPostsFields = async function (pids, fields) {
        if (!Array.isArray(pids) || !pids.length) {
            return [];
        }
        const keys = pids.map(pid => `post:${pid}`);
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const postData = await db.getObjects(keys, fields) as OptionalPostList;
        console.log("post data: ", postData);
        const result = await plugins.hooks.fire('filter:post.getFields', {
            pids: pids,
            posts: postData,
            fields: fields,
        }) as PostsWrapper;
        console.log("result: ", result)
        result.posts.forEach(post => modifyPost(post, fields));
        return result.posts;
    };
  

    Posts.getPostData = async function (pid) {
        const posts = await Posts.getPostsFields([pid], []);
        // ..post data:  [ null ]
        // result:  { pids: [ 9999 ], posts: [ null ], fields: [] }
        return posts && posts.length ? posts[0] : null;
    };

    Posts.getPostsData = async function (pids) {
        return await Posts.getPostsFields(pids, []);
    };

    Posts.getPostField = async function (pid, field) {
        const post = await Posts.getPostFields(pid, [field]);
        return post ? post[field] : null;
    };

    Posts.getPostFields = async function (pid, fields) {
        const posts = await Posts.getPostsFields([pid], fields);
        return posts ? posts[0] : null;
    };

    Posts.setPostField = async function (pid, field, value) {
        await Posts.setPostFields(pid, { [field]: value } as PostObject);
    };

    Posts.setPostFields = async function (pid, data) {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        await db.setObject(`post:${pid}`, data);
        plugins.hooks.fire('action:post.setFields', { data: { ...data, pid } });
    };
};


