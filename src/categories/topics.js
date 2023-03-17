'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
const database_1 = __importDefault(require('../database'))
const topics_1 = __importDefault(require('../topics'))
const plugins_1 = __importDefault(require('../plugins'))
const meta_1 = __importDefault(require('../meta'))
const privileges_1 = __importDefault(require('../privileges'))
const user_1 = __importDefault(require('../user'))
module.exports = function (Categories) {
  async function filterScheduledTids (tids) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const scores = await database_1.default.sortedSetScores('topics:scheduled', tids)
    const now = Date.now()
    return tids.filter((tid, index) => tid && (!scores[index] || scores[index] <= now))
  }
  Categories.getCategoryTopics = async function (data) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const results = await plugins_1.default.hooks.fire('filter:category.topics.prepare', data)
    const tids = await Categories.getTopicIds(results)
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    let topicsData = await topics_1.default.getTopicsByTids(tids, data.uid)
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    topicsData = await user_1.default.blocks.filter(data.uid, topicsData)
    if (!topicsData.length) {
      return { topics: [], uid: data.uid }
    }
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    topics_1.default.calculateTopicIndices(topicsData, data.start)
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const res = await plugins_1.default.hooks.fire('filter:category.topics.get', { cid: data.cid, topics: topicsData, uid: data.uid })
    return { topics: res.topics, nextStart: data.stop + 1 }
  }
  Categories.getTopicIds = async function (data) {
    const dataForPinned = Object.assign({}, data)
    dataForPinned.start = 0
    dataForPinned.stop = -1
    const [pinnedTids, set, direction] = await Promise.all([
      Categories.getPinnedTids(dataForPinned),
      Categories.buildTopicsSortedSet(data),
      Categories.getSortedSetRangeDirection(data.sort)
    ])
    const totalPinnedCount = pinnedTids.length
    const pinnedTidsOnPage = pinnedTids.slice(data.start, data.stop !== -1 ? data.stop + 1 : undefined)
    const pinnedCountOnPage = pinnedTidsOnPage.length
    const topicsPerPage = data.stop - data.start + 1
    const normalTidsToGet = Math.max(0, topicsPerPage - pinnedCountOnPage)
    if (!normalTidsToGet && data.stop !== -1) {
      return pinnedTidsOnPage
    }
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (plugins_1.default.hooks.hasListeners('filter:categories.getTopicIds')) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const result = await plugins_1.default.hooks.fire('filter:categories.getTopicIds', {
        tids: [],
        data,
        pinnedTids: pinnedTidsOnPage,
        allPinnedTids: pinnedTids,
        totalPinnedCount,
        normalTidsToGet
      })
      return result && result.tids
    }
    let { start } = data
    if (start > 0 && totalPinnedCount) {
      start -= totalPinnedCount - pinnedCountOnPage
    }
    const stop = data.stop === -1 ? data.stop : start + normalTidsToGet - 1
    let normalTids
    const reverse = direction === 'highest-to-lowest'
    if (Array.isArray(set)) {
      const weights = set.map((s, index) => (index ? 0 : 1))
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      normalTids = await database_1.default[reverse ? 'getSortedSetRevIntersect' : 'getSortedSetIntersect']({ sets: set, start, stop, weights })
    } else {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      normalTids = await database_1.default[reverse ? 'getSortedSetRevRange' : 'getSortedSetRange'](set, start, stop)
    }
    normalTids = normalTids.filter(tid => !pinnedTids.includes(tid))
    return pinnedTidsOnPage.concat(normalTids)
  }
  Categories.getTopicCount = async function (data) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (plugins_1.default.hooks.hasListeners('filter:categories.getTopicCount')) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const result = await plugins_1.default.hooks.fire('filter:categories.getTopicCount', {
        topicCount: data.category.topic_count,
        data
      })
      return result && result.topicCount
    }
    const set = await Categories.buildTopicsSortedSet(data)
    if (Array.isArray(set)) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      return await database_1.default.sortedSetIntersectCard(set)
    } else if (data.targetUid && set) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      return await database_1.default.sortedSetCard(set)
    }
    return data.category.topic_count
  }
  Categories.buildTopicsSortedSet = async function (data) {
    const { cid } = data
    let set = `cid:${cid}:tids`
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const sort = (data.sort || (data.settings && data.settings.categoryTopicSort) || meta_1.default.config.categoryTopicSort || 'newest_to_oldest')
    if (sort === 'most_posts') {
      set = `cid:${cid}:tids:posts`
    } else if (sort === 'most_votes') {
      set = `cid:${cid}:tids:votes`
    } else if (sort === 'most_views') {
      set = `cid:${cid}:tids:views`
    }
    if (data.tag) {
      if (Array.isArray(data.tag)) {
        set = [set].concat(data.tag.map(tag => `tag:${tag}:topics`))
      } else {
        set = [set, `tag:${data.tag}:topics`]
      }
    }
    if (data.targetUid) {
      set = (Array.isArray(set) ? set : [set]).concat([`cid:${cid}:uid:${data.targetUid}:tids`])
    }
    const result = await plugins_1.default.hooks.fire('filter:categories.buildTopicsSortedSet', {
      set,
      data
    })
    return result && result.set
  }
  Categories.getSortedSetRangeDirection = async function (sort) {
    sort = sort || 'newest_to_oldest'
    const direction = ['newest_to_oldest', 'most_posts', 'most_votes', 'most_views'].includes(sort) ? 'highest-to-lowest' : 'lowest-to-highest'
    const result = await plugins_1.default.hooks.fire('filter:categories.getSortedSetRangeDirection', {
      sort,
      direction
    })
    return result && result.direction
  }
  Categories.getAllTopicIds = async function (cid, start, stop) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return await database_1.default.getSortedSetRange([`cid:${cid}:tids:pinned`, `cid:${cid}:tids`], start, stop)
  }
  Categories.getPinnedTids = async function (data) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (plugins_1.default.hooks.hasListeners('filter:categories.getPinnedTids')) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const result = await plugins_1.default.hooks.fire('filter:categories.getPinnedTids', {
        pinnedTids: [],
        data
      })
      return result && result.pinnedTids
    }
    const [allPinnedTids, canSchedule] = await Promise.all([
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      database_1.default.getSortedSetRevRange(`cid:${data.cid}:tids:pinned`, data.start, data.stop),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      privileges_1.default.categories.can('topics:schedule', data.cid, data.uid)
    ])
    const pinnedTids = canSchedule ? allPinnedTids : await filterScheduledTids(allPinnedTids)
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return await topics_1.default.tools.checkPinExpiry(pinnedTids)
  }
  Categories.modifyTopicsByPrivilege = function (topics, privileges) {
    if (!Array.isArray(topics) || !topics.length || privileges.view_deleted) {
      return
    }
    topics.forEach((topic) => {
      if (!topic.scheduled && topic.deleted && !topic.isOwner) {
        topic.title = '[[topic:topic_is_deleted]]'
        if (topic.hasOwnProperty('titleRaw')) {
          topic.titleRaw = '[[topic:topic_is_deleted]]'
        }
        topic.slug = topic.tid
        topic.teaser = null
        topic.noAnchor = true
        topic.tags = []
      }
      topic.visible = privileges.isAdminOrMod || topic.isOwner || !topic.isPrivate
    })
  }
  Categories.onNewPostMade = async function (cid, pinned, postData) {
    if (!cid || !postData) {
      return
    }
    const promises = [
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      database_1.default.sortedSetAdd(`cid:${cid}:pids`, postData.timestamp, postData.pid),
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      database_1.default.incrObjectField(`category:${cid}`, 'post_count')
    ]
    if (!pinned) {
      // The next line calls a function in a module that has not been updated to TS yet
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      promises.push(database_1.default.sortedSetIncrBy(`cid:${cid}:tids:posts`, 1, postData.tid))
    }
    await Promise.all(promises)
    await Categories.updateRecentTidForCid(cid)
  }
}
