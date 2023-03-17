import { PostObject } from './post'
import { SettingsObject } from './settings'
import { TopicObject } from './topic'

export interface CategoryObject {
  cid: number
  name: string
  description: string
  descriptionParsed: string
  icon: string
  bgColor: string
  color: string
  slug: string
  parentCid: number
  topic_count: number
  post_count: number
  disabled: number
  order: number
  link: string
  numRecentReplies: number
  class: string
  imageClass: string
  isSection: number
  minTags: number
  maxTags: number
  postQueue: number
  totalPostCount: number
  totalTopicCount: number
  subCategoriesPerPage: number
}

export type OptionalCategory = CategoryObject | null
export type OptionalCategoryList = OptionalCategory[] | null

export interface CategoryOptionalProperties {
  cid: number
  backgroundImage: string
}

export interface TopicCountData {
  cid: string
  category?: CategoryObject
  targetUid?: string
}

export interface TopicIdsData {
  cid: string
  uid: string
  start: number
  stop: number
  sort?: string
}

export interface CategoryTopicsData {
  uid?: string
  cid: string
  start?: number
  stop?: number
}

export interface CategoryTopicsResult {
  topics?: TopicObject[]
  uid?: string | number
  nextStart?: number
}

export interface BuildTopicsSortedSetData {
  cid: string
  sort?: string
  settings?: SettingsObject
  tag?: string | string[]
  targetUid?: string
}

export interface PinnedTidsData {
  cid: string
  uid: string
  start: number
  stop: number
}

export interface TopicPrivilege {
  view_deleted: boolean
  isAdminOrMod: boolean
}

export interface CategoryMethods {
  getCategoryTopics: (data: CategoryTopicsData) => Promise<CategoryTopicsResult>
  getTopicIds: (data: TopicIdsData) => Promise<Array<string | number>>
  getTopicCount: (data: TopicCountData) => Promise<number>
  buildTopicsSortedSet: (data: BuildTopicsSortedSetData) => Promise<string | string[]>
  getSortedSetRangeDirection: (sort: string) => Promise<string>
  getAllTopicIds: (cid: string, start: number, stop: number) => Promise<Array<string | number>>
  getPinnedTids: (data: PinnedTidsData) => Promise<Array<string | number>>
  modifyTopicsByPrivilege: (topics: TopicObject[], privileges: TopicPrivilege) => void
  onNewPostMade: (cid: string, pinned: boolean, postData: PostObject) => Promise<void>
  updateRecentTidForCid: (cid: string) => Promise<void>
}
