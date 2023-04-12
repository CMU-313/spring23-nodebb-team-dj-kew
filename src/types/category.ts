import { PostObject } from './post';
import { SettingsObject } from './settings';
import { TopicObject } from './topic';

export type CategoryObject = {
  cid: number;
  name: string;
  description: string;
  descriptionParsed: string;
  icon: string;
  bgColor: string;
  color: string;
  slug: string;
  parentCid: number;
  topic_count: number;
  post_count: number;
  disabled: number;
  order: number;
  link: string;
  numRecentReplies: number;
  class: string;
  imageClass: string;
  isSection: number;
  minTags: number;
  maxTags: number;
  postQueue: number;
  totalPostCount: number;
  totalTopicCount: number;
  subCategoriesPerPage: number;
};

export type OptionalCategory = CategoryObject | null;
export type OptionalCategoryList = OptionalCategory[] | null;

export type CategoryOptionalProperties = {
  cid: number;
  backgroundImage: string;
};

export type TopicCountData = {
  cid: string;
  category?: CategoryObject;
  targetUid?: string;
}

export type TopicIdsData = {
  cid: string;
  uid: string;
  start: number;
  stop: number;
  sort?: string;
}

export type CategoryTopicsData = {
  uid?: string;
  cid: string;
  start?: number;
  stop?: number;
}

export type CategoryTopicsResult = {
  topics?: TopicObject[]
  uid?: string|number;
  nextStart?: number;
}

export type BuildTopicsSortedSetData = {
  cid: string;
  sort?: string;
  settings?: SettingsObject;
  tag?: string | string[];
  targetUid?: string;
}

export type PinnedTidsData = {
  cid: string;
  uid: string;
  start: number;
  stop: number;
}

export type TopicPrivilege = {
  view_deleted: boolean;
  isAdminOrMod: boolean;
}

export interface CategoryMethods {
  getCategoryTopics: (data: CategoryTopicsData) => Promise<CategoryTopicsResult>;
  getTopicIds: (data: TopicIdsData) => Promise<(string|number)[]>;
  getTopicCount: (data: TopicCountData) => Promise<number>;
  buildTopicsSortedSet: (data: BuildTopicsSortedSetData) => Promise<string|string[]>;
  getSortedSetRangeDirection: (sort: string) => Promise<string>;
  getAllTopicIds: (cid: string, start: number, stop: number) => Promise<(string|number)[]>;
  getPinnedTids: (data: PinnedTidsData) => Promise<(string|number)[]>;
  modifyTopicsByPrivilege: (topics: TopicObject[], privileges: TopicPrivilege) => void;
  onNewPostMade: (cid: string, pinned: boolean, postData: PostObject) => Promise<void>;
  updateRecentTidForCid: (cid: string) => Promise<void>;
}
