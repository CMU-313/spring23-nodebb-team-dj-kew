import { CategoryObject, OptionalCategory } from './category'
import { PostObjectPartial } from './post'
import { TagObject } from './tag'
import { UserObjectSlim } from './user'

export interface TopicObject {
  lastposttime: number | string
  category: CategoryObject
  user: UserObjectSlim
  teaser: Teaser
  tags: TagObject[]
  isOwner: boolean
  ignored: boolean
  unread: boolean
  bookmark: number
  unreplied: boolean
  icons: string[]
  isAnon?: boolean | string
  isPrivate?: boolean | string
  tid?: number | string
  thumb?: string
  pinExpiry?: number
  pinExpiryISO?: string | number
  index?: number
  timestampISO?: string | number
  scheduled?: boolean | string
  uid: number | string
  cid: number
  title: string
  slug: string | number
  mainPid: number
  postcount: string | number
  viewcount: string
  postercount: string
  deleted: string
  deleterUid: string | number
  titleRaw: string
  locked: string
  pinned: number
  timestamp: number
  lastposttimeISO: number | string
  upvotes: number
  downvotes: number
  votes: number
  teaserPid: number | string
  thumbs: Thumb[]
  mainPost?: PostObjectPartial
  noAnchor?: boolean
  visible?: boolean
}

export interface Request {
  ip?: number
}

export interface TopicData {
  tid?: number | string
  uid?: number | string
  cid?: number
  mainPid?: number
  title?: string
  slug?: string | number
  timestamp?: number
  lastposttime?: number | string
  postcount?: number | string
  viewcount?: number | string
  isAnon?: boolean | string
  isPrivate?: boolean | string
  tags?: string | undefined[] | TagObject[]
  content?: string
  fromQueue?: boolean
  req?: Request
  ip?: number
  handle?: string
}

export type OptionalTopic = TopicObject | null

export type OptionalTopicList = OptionalTopic[] | null

export type TopicField =
  number | CategoryObject | UserObjectSlim | Teaser | boolean | number | string[] | TagObject[] | Thumb[] | null

export interface TopicsWrapper {
  topics?: OptionalTopicList
}

export interface TopicWrapper {
  topic?: TopicData | null
}

export interface TopicObjectCoreProperties {
  lastposttime: number
  category: CategoryObject
  user: UserObjectSlim
  teaser: Teaser
  tags: TagObject[]
  isOwner: boolean
  ignored: boolean
  unread: boolean
  bookmark: number
  unreplied: boolean
  icons: string[]
}

export interface TopicObjectOptionalProperties {
  tid: number | string
  thumb: string
  pinExpiry: number
  pinExpiryISO: string
  index: number
  timestampISO: string
  scheduled: boolean
  isAnon: boolean
  isPrivate: boolean
}

interface Teaser {
  pid: number
  uid: number | string
  timestamp: number
  tid: number
  content: string
  timestampISO: string
  user: UserObjectSlim
  index: number
}

export type TopicObjectSlim = TopicSlimProperties & TopicSlimOptionalProperties

export interface TopicSlimProperties {
  tid: number
  uid: number | string
  cid: number
  title: string
  slug: string
  mainPid: number
  postcount: string
  viewcount: string
  postercount: string
  scheduled: string
  deleted: string
  deleterUid: string
  titleRaw: string
  locked: string
  pinned: number
  timestamp: string
  timestampISO: number
  lastposttime: string
  lastposttimeISO: number
  pinExpiry: number
  pinExpiryISO: number
  upvotes: string
  downvotes: string
  votes: string
  teaserPid: number | string
  thumbs: Thumb[]
}

export interface Thumb {
  id: number | string
  name: string
  url: string
}

export interface TopicSlimOptionalProperties {
  tid: number | string
  numThumbs: number
}

export interface TopicPostData {
  topicData?: TopicData
  postData?: PostObjectPartial
}

export interface TopicMethods {
  getTopicsFields: (tids: Array<number | string>, fields: string[]) => Promise<OptionalTopicList>
  getTopicField: (tid: (number | string), field: string) => Promise<TopicField>
  getTopicFields: (tid: (number | string), fields: string[]) => Promise<OptionalTopic>
  getTopicData: (tid: (number | string)) => Promise<OptionalTopic>
  getTopicsData: (tids: Array<number | string>) => Promise<OptionalTopicList>
  getCategoryData: (tid: (number | string)) => Promise<OptionalCategory>
  setTopicField: (tid: (number | string), field: string, value: TopicField) => Promise<void>
  setTopicFields: (tid: (number | string), data: OptionalTopic) => Promise<void>
  deleteTopicField: (tid: (number | string), field: string) => Promise<void>
  deleteTopicFields: (tid: (number | string), fields: string[]) => Promise<void>

  create: (data: TopicData) => Promise<string | number>
  createTags: (tags: string | undefined[] | TagObject[], tid: (number | string), timestamp: number) => Promise<void>
  scheduled: any

  post: (data: TopicData) => Promise<TopicPostData>
  checkTitle: (title: string) => void
  validateTags: (tags: string | undefined[] | TagObject[], cid: number, uid: number | string) => Promise<void>
  filterTags: (tags: string | undefined[] | TagObject[], cid: number) => Promise<string | undefined[] | TagObject[]>
  checkContent: (content: string) => void

  getTopicsByTids: (tids: Array<number | string>, uid: number | string) => Promise<OptionalTopic[]>
  follow: (tid: (number | string), uid: number | string) => Promise<void>
  delete: (tid: (number | string)) => Promise<void>

  reply: (data: TopicData) => Promise<PostObjectPartial>
  notifyFollowers: (postData: PostObjectPartial, uid: number | string, obj: {
    type: string
    bodyShort: string
    nid: string
    mergeId: string
  }) => void

  markAsUnreadForAll: (tid: (number | string)) => Promise<void>
  markAsRead: (tids: Array<number | string>, uid: number | string) => Promise<void>
  addParentPosts: (postData: PostObjectPartial[]) => Promise<void>
  syncBacklinks: (postData: PostObjectPartial) => Promise<void>
}
