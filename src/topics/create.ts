import _ from 'lodash'

import db from '../database'
import utils from '../utils'
import slugify from '../slugify'
import plugins from '../plugins'
import analytics from '../analytics'
import user from '../user'
import meta from '../meta'
import posts from '../posts'
import privileges from '../privileges'
import categories from '../categories'
import translator from '../translator'
import { PostObjectPartial, PostWrapper, SettingsObject, TopicData, TopicObject, TopicPostData, TopicMethods, TopicWrapper, UserObjectSlim } from '../types'

function check (item: string, min: string, max: string, minError: string, maxError: string) {
  // Trim and remove HTML (latter for composers that send in HTML, like redactor)
  if (typeof item === 'string') {
    item = utils.stripHTMLTags(item).trim()
  }

  if (item === null || item === undefined || item.length < parseInt(min, 10)) {
    throw new Error(`[[error:${minError}, ${min}]]`)
  } else if (item.length > parseInt(max, 10)) {
    throw new Error(`[[error:${maxError}, ${max}]]`)
  }
}

async function guestHandleValid (data: TopicData) {
  // The next line calls a function in a module that has not been updated to TS yet
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  if (meta.config.allowGuestHandles && parseInt(data.uid as string, 10) === 0 && data.handle) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (data.handle.length > meta.config.maximumUsernameLength) {
      throw new Error('[[error:guest-handle-invalid]]')
    }
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const exists = await user.existsBySlug(slugify(data.handle))
    if (exists) {
      throw new Error('[[error:username-taken]]')
    }
  }
}

async function canReply (data: TopicData, topicData: TopicObject) {
  if (!topicData) {
    throw new Error('[[error:no-topic]]')
  }
  const { tid, uid } = data
  const { cid, deleted, locked, scheduled } = topicData

  const [canReply, canSchedule, isAdminOrMod]: boolean[] = await Promise.all([
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    privileges.topics.can('topics:reply', tid, uid) as boolean,
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    privileges.topics.can('topics:schedule', tid, uid) as boolean,
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    privileges.categories.isAdminOrMod(cid, uid) as boolean
  ])

  if (locked && !isAdminOrMod) {
    throw new Error('[[error:topic-locked]]')
  }

  if (!scheduled && deleted && !isAdminOrMod) {
    throw new Error('[[error:topic-deleted]]')
  }

  if (scheduled && !canSchedule) {
    throw new Error('[[error:no-privileges]]')
  }

  if (!canReply) {
    throw new Error('[[error:no-privileges]]')
  }
}

export = function (Topics: TopicMethods) {
  async function onNewPost (postData: PostObjectPartial, data: TopicData) {
    const { tid } = postData
    const { uid } = postData
    await Topics.markAsUnreadForAll(tid)
    await Topics.markAsRead([tid], uid)
    const [
      userInfo,
      topicInfo
    ]: Array<UserObjectSlim | TopicObject> = await Promise.all([
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      posts.getUserInfoForPosts([postData.uid], uid) as UserObjectSlim[],
      Topics.getTopicFields(tid, ['tid', 'uid', 'title', 'slug', 'cid', 'postcount', 'mainPid', 'scheduled']),
      Topics.addParentPosts([postData]),
      Topics.syncBacklinks(postData),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      posts.parsePost(postData)
    ]) as Array<UserObjectSlim | TopicObject>

    postData.user = userInfo[0] as UserObjectSlim
    postData.topic = topicInfo as TopicObject
    postData.index = (topicInfo.postcount as unknown) as number - 1

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    posts.overrideGuestHandle(postData, data.handle)

    postData.votes = 0
    postData.bookmarked = false
    postData.display_edit_tools = true
    postData.display_delete_tools = true
    postData.display_moderator_tools = true
    postData.display_move_tools = true
    postData.selfPost = false
    postData.timestampISO = utils.toISOString(postData.timestamp) as string
    postData.topic.title = String(postData.topic.title)

    return postData
  }

  Topics.create = async function (data) {
    // This is an internal method, consider using Topics.post instead
    const timestamp = data.timestamp || Date.now()

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const tid: number = await db.incrObjectField('global', 'nextTid') as number

    const title: string = slugify(data.title) as string

    let topicData: TopicData = {
      tid,
      uid: data.uid,
      cid: data.cid,
      mainPid: 0,
      title: data.title,
      slug: `${tid}/${title || 'topic'}`,
      timestamp,
      lastposttime: 0,
      postcount: 0,
      viewcount: 0,
      isAnon: data.isAnon,
      isPrivate: data.isPrivate
    }

    if (Array.isArray(data.tags) && (data.tags.length > 0)) {
      topicData.tags = data.tags.join(',')
    }

    const result = await plugins.hooks.fire('filter:topic.create', { topic: topicData, data }) as TopicWrapper
    topicData = result.topic
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await db.setObject(`topic:${topicData.tid}`, topicData)

    const timestampedSortedSetKeys = [
      'topics:tid',
            `cid:${topicData.cid}:tids`,
            `cid:${topicData.cid}:uid:${topicData.uid}:tids`
    ]

    const scheduled = timestamp > Date.now()
    if (scheduled) {
      timestampedSortedSetKeys.push('topics:scheduled')
    }

    await Promise.all([
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      db.sortedSetsAdd(timestampedSortedSetKeys, timestamp, topicData.tid),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      db.sortedSetsAdd([
        'topics:views', 'topics:posts', 'topics:votes',
                `cid:${topicData.cid}:tids:votes`,
                `cid:${topicData.cid}:tids:posts`,
                `cid:${topicData.cid}:tids:views`
      ], 0, topicData.tid),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      user.addTopicIdToUser(topicData.uid, topicData.tid, timestamp),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      db.incrObjectField(`category:${topicData.cid}`, 'topic_count'),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      db.incrObjectField('global', 'topicCount'),
      Topics.createTags(data.tags, topicData.tid, timestamp),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      scheduled ? Promise.resolve() : categories.updateRecentTid(topicData.cid, topicData.tid)
    ])
    if (scheduled) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await Topics.scheduled.pin(tid, topicData)
    }

    plugins.hooks.fire('action:topic.save', { topic: _.clone(topicData), data }) as TopicWrapper
    return topicData.tid
  }

  Topics.post = async function (data) {
    data = await plugins.hooks.fire('filter:topic.post', data) as TopicData
    const { uid } = data
    const { isAnon } = data
    const { isPrivate } = data

    data.isAnon = isAnon
    data.isPrivate = isPrivate

    data.title = String(data.title).trim()
    data.tags = data.tags || []
    if (data.content) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      data.content = utils.rtrim(data.content) as string
    }
    Topics.checkTitle(data.title)
    await Topics.validateTags(data.tags, data.cid, uid)
    data.tags = await Topics.filterTags(data.tags, data.cid)
    if (!data.fromQueue) {
      Topics.checkContent(data.content)
    }

    const [categoryExists, canCreate, canTag]: boolean[] = await Promise.all([
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      categories.exists(data.cid) as boolean,
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      privileges.categories.can('topics:create', data.cid, uid) as boolean,
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      privileges.categories.can('topics:tag', data.cid, uid) as boolean
    ])

    if (!categoryExists) {
      throw new Error('[[error:no-category]]')
    }

    if (!canCreate || (!canTag && data.tags.length)) {
      throw new Error('[[error:no-privileges]]')
    }

    await guestHandleValid(data)
    if (!data.fromQueue) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await user.isReadyToPost(uid, data.cid)
    }

    const tid = await Topics.create(data)

    let postData: PostObjectPartial = data
    postData.tid = tid
    postData.ip = data.req ? data.req.ip : null
    postData.isMain = true
    postData.isAnon = isAnon
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    postData = await posts.create(postData) as PostObjectPartial
    postData = await onNewPost(postData, data)

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const settings: SettingsObject = await user.getSettings(uid) as SettingsObject
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const topics: TopicObject[] = await Topics.getTopicsByTids([postData.tid], uid)

    if (!Array.isArray(topics) || (topics.length === 0)) {
      throw new Error('[[error:no-topic]]')
    }

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (uid as number > 0 && settings.followTopicsOnCreate) {
      await Topics.follow(postData.tid, uid)
    }
    const topicData = topics[0]
    topicData.unreplied = true
    topicData.mainPost = postData
    topicData.index = 0
    postData.index = 0

    if (topicData.scheduled) {
      await Topics.delete(tid)
    }

    analytics.increment(['topics', `topics:byCid:${topicData.cid}`])
    plugins.hooks.fire('action:topic.post', { topic: topicData, post: postData, data }) as TopicPostData

    if (parseInt(uid as string, 10) && !topicData.scheduled) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await user.notifications.sendTopicNotificationToFollowers(uid, topicData, postData)
    }

    return {
      topicData,
      postData
    }
  }

  Topics.reply = async function (data) {
    data = await plugins.hooks.fire('filter:topic.reply', data) as TopicData
    const { tid } = data
    const { uid } = data
    const { isAnon } = data
    const { isPrivate } = data

    data.isAnon = isAnon
    data.isPrivate = isPrivate

    const topicData = await Topics.getTopicData(tid)

    await canReply(data, topicData)

    data.cid = topicData.cid

    await guestHandleValid(data)
    if (data.content) {
      data.content = utils.rtrim(data.content) as string
    }
    if (!data.fromQueue) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await user.isReadyToPost(uid, data.cid)
      Topics.checkContent(data.content)
    }

    // For replies to scheduled topics, don't have a timestamp older than topic's itself
    if (topicData.scheduled) {
      data.timestamp = topicData.lastposttime as number + 1
    }

    data.ip = data.req ? data.req.ip : null
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    let postData = await posts.create(data) as PostObjectPartial
    postData = await onNewPost(postData, data)

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const settings = await user.getSettings(uid) as SettingsObject
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (uid as number > 0 && settings.followTopicsOnReply) {
      await Topics.follow(postData.tid, uid)
    }

    if (parseInt(uid as string, 10)) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      user.setUserField(uid, 'lastonline', Date.now())
    }

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (parseInt(uid as string, 10) || meta.config.allowGuestReplyNotifications) {
      const { displayname } = postData.user

      Topics.notifyFollowers(postData, uid, {
        type: 'new-reply',
        bodyShort: translator.compile('notifications:user_posted_to', displayname, postData.topic.title),
        nid: `new_post:tid:${postData.topic.tid}:pid:${postData.pid}:uid:${uid}`,
        mergeId: `notifications:user_posted_to|${postData.topic.tid}`
      })
    }

    analytics.increment(['posts', `posts:byCid:${data.cid}`])
    plugins.hooks.fire('action:topic.reply', { post: _.clone(postData), data }) as PostWrapper

    return postData
  }

  Topics.checkTitle = function (title) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    check(title, meta.config.minimumTitleLength as string, meta.config.maximumTitleLength as string, 'title-too-short', 'title-too-long')
  }

  Topics.checkContent = function (content) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    check(content, meta.config.minimumPostLength as string, meta.config.maximumPostLength as string, 'content-too-short', 'content-too-long')
  }
}
