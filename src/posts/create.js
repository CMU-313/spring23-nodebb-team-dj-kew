"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const meta_1 = __importDefault(require("../meta"));
const database_1 = __importDefault(require("../database"));
const plugins_1 = __importDefault(require("../plugins"));
const user_1 = __importDefault(require("../user"));
const topics_1 = __importDefault(require("../topics"));
const categories_1 = __importDefault(require("../categories"));
const groups_1 = __importDefault(require("../groups"));
const utils_1 = __importDefault(require("../utils"));
module.exports = function (Posts) {
    Posts.create = async function (data) {
        // This is an internal method, consider using Topics.reply instead
        const { uid } = data;
        const { tid } = data;
        const { isAnon } = data;
        const content = data.content.toString();
        const timestamp = data.timestamp || Date.now();
        const isMain = data.isMain || false;
        if (!uid && parseInt(uid, 10) !== 0) {
            throw new Error('[[error:invalid-uid]]');
        }
        if (data.toPid && !utils_1.default.isNumber(data.toPid)) {
            throw new Error('[[error:invalid-pid]]');
        }
        const pid = await database_1.default.incrObjectField('global', 'nextPid');
        let postData = {
            pid: pid,
            uid: uid,
            tid: tid,
            content: content,
            timestamp: timestamp,
            isAnon: isAnon,
        };
        if (data.toPid) {
            postData.toPid = data.toPid;
        }
        if (data.ip && meta_1.default.config.trackIpPerPost) {
            postData.ip = data.ip;
        }
        if (data.handle && !parseInt(uid, 10)) {
            postData.handle = data.handle;
        }
        let result = await plugins_1.default.hooks.fire('filter:post.create', { post: postData, data: data });
        postData = result.post;
        await database_1.default.setObject(`post:${postData.pid}`, postData);
        const topicData = await topics_1.default.getTopicFields(tid, ['cid', 'pinned']);
        postData.cid = topicData.cid;
        await Promise.all([
            database_1.default.sortedSetAdd('posts:pid', timestamp, postData.pid),
            database_1.default.incrObjectField('global', 'postCount'),
            user_1.default.onNewPostMade(postData),
            topics_1.default.onNewPostMade(postData),
            categories_1.default.onNewPostMade(topicData.cid, topicData.pinned, postData),
            groups_1.default.onNewPostMade(postData),
            addReplyTo(postData, timestamp),
            Posts.uploads.sync(postData.pid),
        ]);
        result = await plugins_1.default.hooks.fire('filter:post.get', { post: postData, uid: data.uid });
        result.post.isMain = isMain;
        plugins_1.default.hooks.fire('action:post.save', { post: lodash_1.default.clone(result.post) });
        return result.post;
    };
    async function addReplyTo(postData, timestamp) {
        if (!postData.toPid) {
            return;
        }
        await Promise.all([
            database_1.default.sortedSetAdd(`pid:${postData.toPid}:replies`, timestamp, postData.pid),
            database_1.default.incrObjectField(`post:${postData.toPid}`, 'replies'),
        ]);
    }
};
