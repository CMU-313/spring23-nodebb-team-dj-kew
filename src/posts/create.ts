// Referenced @ziyanwang1’s TypeScript translation from P1: https://github.com/CMU-313/NodeBB/pull/91

import _ from 'lodash'

import meta from '../meta'
import db from '../database'
import plugins from '../plugins'
import user from '../user'
import topics from '../topics'
import categories from '../categories'
import groups from '../groups'
import { PostObjectPartial, PostsMethods, PostWrapper, TopicObject } from '../types'
import utils from '../utils'

async function addReplyTo (postData: PostObjectPartial, timestamp: number) {
  if (!postData.toPid) {
    return
  }
  await Promise.all([
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    db.sortedSetAdd(`pid:${postData.toPid}:replies`, timestamp, postData.pid),
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    db.incrObjectField(`post:${postData.toPid}`, 'replies')
  ])
}

export = function (Posts: PostsMethods) {
  Posts.create = async function (data) {
    // This is an internal method, consider using Topics.reply instead
    const { uid } = data
    const { tid } = data
    const { isAnon } = data
    const content = data.content.toString()
    const timestamp = data.timestamp || Date.now()
    const isMain = data.isMain || false

    if (!uid && parseInt(uid as string, 10) !== 0) {
      throw new Error('[[error:invalid-uid]]')
    }

    if (data.toPid && !utils.isNumber(data.toPid)) {
      throw new Error('[[error:invalid-pid]]')
    }

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const pid = await db.incrObjectField('global', 'nextPid') as number
    let postData: PostObjectPartial = {
      pid,
      uid,
      tid,
      content,
      timestamp,
      isAnon
    }

    if (data.toPid) {
      postData.toPid = data.toPid
    }
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (data.ip && meta.config.trackIpPerPost) {
      postData.ip = data.ip
    }
    if (data.handle && !parseInt(uid as string, 10)) {
      postData.handle = data.handle
    }

    let result = await plugins.hooks.fire('filter:post.create', { post: postData, data }) as PostWrapper
    postData = result.post
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await db.setObject(`post:${postData.pid}`, postData)

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const topicData = await topics.getTopicFields(tid, ['cid', 'pinned']) as TopicObject
    postData.cid = topicData.cid

    await Promise.all([
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      db.sortedSetAdd('posts:pid', timestamp, postData.pid),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      db.incrObjectField('global', 'postCount'),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      user.onNewPostMade(postData),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      topics.onNewPostMade(postData),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      categories.onNewPostMade(topicData.cid, topicData.pinned, postData),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      groups.onNewPostMade(postData),
      addReplyTo(postData, timestamp),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      Posts.uploads.sync(postData.pid)
    ])

    result = await plugins.hooks.fire('filter:post.get', { post: postData, uid: data.uid }) as PostWrapper
    result.post.isMain = isMain
    plugins.hooks.fire('action:post.save', { post: _.clone(result.post) }) as PostWrapper
    return result.post
  }
}
