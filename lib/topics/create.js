"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
const lodash_1 = __importDefault(require("lodash"));
const database_1 = __importDefault(require("../database"));
const utils_1 = __importDefault(require("../utils"));
const slugify_1 = __importDefault(require("../slugify"));
const plugins_1 = __importDefault(require("../plugins"));
const analytics_1 = __importDefault(require("../analytics"));
const user_1 = __importDefault(require("../user"));
const meta_1 = __importDefault(require("../meta"));
const posts_1 = __importDefault(require("../posts"));
const privileges_1 = __importDefault(require("../privileges"));
const categories_1 = __importDefault(require("../categories"));
const translator_1 = __importDefault(require("../translator"));
function check(item, min, max, minError, maxError) {
  // Trim and remove HTML (latter for composers that send in HTML, like redactor)
  if (typeof item === 'string') {
    item = utils_1.default.stripHTMLTags(item).trim();
  }
  if (item === null || item === undefined || item.length < parseInt(min, 10)) {
    throw new Error(`[[error:${minError}, ${min}]]`);
  } else if (item.length > parseInt(max, 10)) {
    throw new Error(`[[error:${maxError}, ${max}]]`);
  }
}
async function guestHandleValid(data) {
  // The next line calls a function in a module that has not been updated to TS yet
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  if (meta_1.default.config.allowGuestHandles && parseInt(data.uid, 10) === 0 && data.handle) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (data.handle.length > meta_1.default.config.maximumUsernameLength) {
      throw new Error('[[error:guest-handle-invalid]]');
    }
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const exists = await user_1.default.existsBySlug((0, slugify_1.default)(data.handle));
    if (exists) {
      throw new Error('[[error:username-taken]]');
    }
  }
}
async function canReply(data, topicData) {
  if (!topicData) {
    throw new Error('[[error:no-topic]]');
  }
  const {
    tid,
    uid
  } = data;
  const {
    cid,
    deleted,
    locked,
    scheduled
  } = topicData;
  const [canReply, canSchedule, isAdminOrMod] = await Promise.all([
  // The next line calls a function in a module that has not been updated to TS yet
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  privileges_1.default.topics.can('topics:reply', tid, uid),
  // The next line calls a function in a module that has not been updated to TS yet
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  privileges_1.default.topics.can('topics:schedule', tid, uid),
  // The next line calls a function in a module that has not been updated to TS yet
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  privileges_1.default.categories.isAdminOrMod(cid, uid)]);
  if (locked && !isAdminOrMod) {
    throw new Error('[[error:topic-locked]]');
  }
  if (!scheduled && deleted && !isAdminOrMod) {
    throw new Error('[[error:topic-deleted]]');
  }
  if (scheduled && !canSchedule) {
    throw new Error('[[error:no-privileges]]');
  }
  if (!canReply) {
    throw new Error('[[error:no-privileges]]');
  }
}
module.exports = function (Topics) {
  async function onNewPost(postData, data) {
    const {
      tid
    } = postData;
    const {
      uid
    } = postData;
    await Topics.markAsUnreadForAll(tid);
    await Topics.markAsRead([tid], uid);
    const [userInfo, topicInfo] = await Promise.all([
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    posts_1.default.getUserInfoForPosts([postData.uid], uid), Topics.getTopicFields(tid, ['tid', 'uid', 'title', 'slug', 'cid', 'postcount', 'mainPid', 'scheduled']), Topics.addParentPosts([postData]), Topics.syncBacklinks(postData),
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    posts_1.default.parsePost(postData)]);
    postData.user = userInfo[0];
    postData.topic = topicInfo;
    postData.index = topicInfo.postcount - 1;
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    posts_1.default.overrideGuestHandle(postData, data.handle);
    postData.votes = 0;
    postData.bookmarked = false;
    postData.display_edit_tools = true;
    postData.display_delete_tools = true;
    postData.display_moderator_tools = true;
    postData.display_move_tools = true;
    postData.selfPost = false;
    postData.timestampISO = utils_1.default.toISOString(postData.timestamp);
    postData.topic.title = String(postData.topic.title);
    return postData;
  }
  Topics.create = async function (data) {
    // This is an internal method, consider using Topics.post instead
    const timestamp = data.timestamp || Date.now();
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const tid = await database_1.default.incrObjectField('global', 'nextTid');
    const title = (0, slugify_1.default)(data.title);
    let topicData = {
      tid: tid,
      uid: data.uid,
      cid: data.cid,
      mainPid: 0,
      title: data.title,
      slug: `${tid}/${title || 'topic'}`,
      timestamp: timestamp,
      lastposttime: 0,
      postcount: 0,
      viewcount: 0,
      isAnon: data.isAnon,
      isPrivate: data.isPrivate
    };
    if (Array.isArray(data.tags) && data.tags.length) {
      topicData.tags = data.tags.join(',');
    }
    const result = await plugins_1.default.hooks.fire('filter:topic.create', {
      topic: topicData,
      data: data
    });
    topicData = result.topic;
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await database_1.default.setObject(`topic:${topicData.tid}`, topicData);
    const timestampedSortedSetKeys = ['topics:tid', `cid:${topicData.cid}:tids`, `cid:${topicData.cid}:uid:${topicData.uid}:tids`];
    const scheduled = timestamp > Date.now();
    if (scheduled) {
      timestampedSortedSetKeys.push('topics:scheduled');
    }
    await Promise.all([
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    database_1.default.sortedSetsAdd(timestampedSortedSetKeys, timestamp, topicData.tid),
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    database_1.default.sortedSetsAdd(['topics:views', 'topics:posts', 'topics:votes', `cid:${topicData.cid}:tids:votes`, `cid:${topicData.cid}:tids:posts`, `cid:${topicData.cid}:tids:views`], 0, topicData.tid),
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    user_1.default.addTopicIdToUser(topicData.uid, topicData.tid, timestamp),
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    database_1.default.incrObjectField(`category:${topicData.cid}`, 'topic_count'),
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    database_1.default.incrObjectField('global', 'topicCount'), Topics.createTags(data.tags, topicData.tid, timestamp),
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    scheduled ? Promise.resolve() : categories_1.default.updateRecentTid(topicData.cid, topicData.tid)]);
    if (scheduled) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await Topics.scheduled.pin(tid, topicData);
    }
    plugins_1.default.hooks.fire('action:topic.save', {
      topic: lodash_1.default.clone(topicData),
      data: data
    });
    return topicData.tid;
  };
  Topics.post = async function (data) {
    data = await plugins_1.default.hooks.fire('filter:topic.post', data);
    const {
      uid
    } = data;
    const {
      isAnon
    } = data;
    const {
      isPrivate
    } = data;
    data.isAnon = isAnon;
    data.isPrivate = isPrivate;
    data.title = String(data.title).trim();
    data.tags = data.tags || [];
    if (data.content) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      data.content = utils_1.default.rtrim(data.content);
    }
    Topics.checkTitle(data.title);
    await Topics.validateTags(data.tags, data.cid, uid);
    data.tags = await Topics.filterTags(data.tags, data.cid);
    if (!data.fromQueue) {
      Topics.checkContent(data.content);
    }
    const [categoryExists, canCreate, canTag] = await Promise.all([
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    categories_1.default.exists(data.cid),
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    privileges_1.default.categories.can('topics:create', data.cid, uid),
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    privileges_1.default.categories.can('topics:tag', data.cid, uid)]);
    if (!categoryExists) {
      throw new Error('[[error:no-category]]');
    }
    if (!canCreate || !canTag && data.tags.length) {
      throw new Error('[[error:no-privileges]]');
    }
    await guestHandleValid(data);
    if (!data.fromQueue) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await user_1.default.isReadyToPost(uid, data.cid);
    }
    const tid = await Topics.create(data);
    let postData = data;
    postData.tid = tid;
    postData.ip = data.req ? data.req.ip : null;
    postData.isMain = true;
    postData.isAnon = isAnon;
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    postData = await posts_1.default.create(postData);
    postData = await onNewPost(postData, data);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const settings = await user_1.default.getSettings(uid);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const topics = await Topics.getTopicsByTids([postData.tid], uid);
    if (!Array.isArray(topics) || !topics.length) {
      throw new Error('[[error:no-topic]]');
    }
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (uid > 0 && settings.followTopicsOnCreate) {
      await Topics.follow(postData.tid, uid);
    }
    const topicData = topics[0];
    topicData.unreplied = true;
    topicData.mainPost = postData;
    topicData.index = 0;
    postData.index = 0;
    if (topicData.scheduled) {
      await Topics.delete(tid);
    }
    analytics_1.default.increment(['topics', `topics:byCid:${topicData.cid}`]);
    plugins_1.default.hooks.fire('action:topic.post', {
      topic: topicData,
      post: postData,
      data: data
    });
    if (parseInt(uid, 10) && !topicData.scheduled) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await user_1.default.notifications.sendTopicNotificationToFollowers(uid, topicData, postData);
    }
    return {
      topicData: topicData,
      postData: postData
    };
  };
  Topics.reply = async function (data) {
    data = await plugins_1.default.hooks.fire('filter:topic.reply', data);
    const {
      tid
    } = data;
    const {
      uid
    } = data;
    const {
      isAnon
    } = data;
    const {
      isPrivate
    } = data;
    data.isAnon = isAnon;
    data.isPrivate = isPrivate;
    const topicData = await Topics.getTopicData(tid);
    await canReply(data, topicData);
    data.cid = topicData.cid;
    await guestHandleValid(data);
    if (data.content) {
      data.content = utils_1.default.rtrim(data.content);
    }
    if (!data.fromQueue) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await user_1.default.isReadyToPost(uid, data.cid);
      Topics.checkContent(data.content);
    }
    // For replies to scheduled topics, don't have a timestamp older than topic's itself
    if (topicData.scheduled) {
      data.timestamp = topicData.lastposttime + 1;
    }
    data.ip = data.req ? data.req.ip : null;
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    let postData = await posts_1.default.create(data);
    postData = await onNewPost(postData, data);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const settings = await user_1.default.getSettings(uid);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (uid > 0 && settings.followTopicsOnReply) {
      await Topics.follow(postData.tid, uid);
    }
    if (parseInt(uid, 10)) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      user_1.default.setUserField(uid, 'lastonline', Date.now());
    }
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (parseInt(uid, 10) || meta_1.default.config.allowGuestReplyNotifications) {
      const {
        displayname
      } = postData.user;
      Topics.notifyFollowers(postData, uid, {
        type: 'new-reply',
        bodyShort: translator_1.default.compile('notifications:user_posted_to', displayname, postData.topic.title),
        nid: `new_post:tid:${postData.topic.tid}:pid:${postData.pid}:uid:${uid}`,
        mergeId: `notifications:user_posted_to|${postData.topic.tid}`
      });
    }
    analytics_1.default.increment(['posts', `posts:byCid:${data.cid}`]);
    plugins_1.default.hooks.fire('action:topic.reply', {
      post: lodash_1.default.clone(postData),
      data: data
    });
    return postData;
  };
  Topics.checkTitle = function (title) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    check(title, meta_1.default.config.minimumTitleLength, meta_1.default.config.maximumTitleLength, 'title-too-short', 'title-too-long');
  };
  Topics.checkContent = function (content) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    check(content, meta_1.default.config.minimumPostLength, meta_1.default.config.maximumPostLength, 'content-too-short', 'content-too-long');
  };
};