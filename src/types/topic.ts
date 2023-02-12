import { CategoryObject, OptionalCategory } from './category';
import { PostObjectPartial } from './post';
import { TagObject } from './tag';
import { UserObjectSlim } from './user';

export type TopicObject = {
  lastposttime: number | string;
  category: CategoryObject;
  user: UserObjectSlim;
  teaser: Teaser;
  tags: TagObject[];
  isOwner: boolean;
  ignored: boolean;
  unread: boolean;
  bookmark: number;
  unreplied: boolean;
  icons: string[];
  isAnon?: boolean | string;
  tid?: number;
  thumb?: string;
  pinExpiry?: number;
  pinExpiryISO?: string | number;
  index?: number;
  timestampISO?: string | number;
  scheduled?: boolean | string;
  uid: number | string;
  cid: number;
  title: string;
  slug: string;
  mainPid: number;
  postcount: string;
  viewcount: string;
  postercount: string;
  deleted: string;
  deleterUid: string;
  titleRaw: string;
  locked: string;
  pinned: number;
  timestamp: number;
  lastposttimeISO: number | string;
  upvotes: number;
  downvotes: number;
  votes: number;
  teaserPid: number | string;
  thumbs: Thumb[];
  mainPost?: PostObjectPartial;

}

export type Request = {
  ip?: number;
}

export type TopicData = {
  tid?: number;
  uid?: number | string;
  cid?: number;
  mainPid?: number;
  title?: string;
  slug?: string;
  timestamp?: number;
  lastposttime?: number | string;
  postcount?: number | string;
  viewcount?: number | string;
  isAnon?: boolean | string;
  tags?: string | undefined[] | TagObject[];
  content?: string;
  fromQueue?: boolean;
  req?: Request;
  ip?: number;
  handle?: string;
}

export type OptionalTopic = TopicObject | null;

export type OptionalTopicList = OptionalTopic[] | null;

export type TopicField =
  number | CategoryObject | UserObjectSlim | Teaser | boolean | number | string[] | TagObject[] | Thumb[] | null;


export interface TopicsWrapper {
  topics?: OptionalTopicList
}

export interface TopicWrapper {
  topic?: TopicData | null;
}

export type TopicObjectCoreProperties = {
  lastposttime: number;
  category: CategoryObject;
  user: UserObjectSlim;
  teaser: Teaser;
  tags: TagObject[];
  isOwner: boolean;
  ignored: boolean;
  unread: boolean;
  bookmark: number;
  unreplied: boolean;
  icons: string[];
};

export type TopicObjectOptionalProperties = {
  tid: number;
  thumb: string;
  pinExpiry: number;
  pinExpiryISO: string;
  index: number;
  timestampISO: string;
  scheduled: boolean;
  isAnon: boolean;
};

interface Teaser {
  pid: number;
  uid: number | string;
  timestamp: number;
  tid: number;
  content: string;
  timestampISO: string;
  user: UserObjectSlim;
  index: number;
}

export type TopicObjectSlim = TopicSlimProperties & TopicSlimOptionalProperties;

export type TopicSlimProperties = {
  tid: number;
  uid: number | string;
  cid: number;
  title: string;
  slug: string;
  mainPid: number;
  postcount: string;
  viewcount: string;
  postercount: string;
  scheduled: string;
  deleted: string;
  deleterUid: string;
  titleRaw: string;
  locked: string;
  pinned: number;
  timestamp: string;
  timestampISO: number;
  lastposttime: string;
  lastposttimeISO: number;
  pinExpiry: number;
  pinExpiryISO: number;
  upvotes: string;
  downvotes: string;
  votes: string;
  teaserPid: number | string;
  thumbs: Thumb[];
};

export type Thumb = {
  id: number;
  name: string;
  url: string;
};

export type TopicSlimOptionalProperties = {
  tid: number;
  numThumbs: number;
};

export type TopicPostData = {
  topicData?: TopicData;
  postData?: PostObjectPartial;
}

export interface TopicMethods {
  getTopicsFields: (tids: number[], fields: string[]) => Promise<OptionalTopicList>;
  getTopicField: (tid: number, field: string) => Promise<TopicField>;
  getTopicFields: (tid: number, fields: string[]) => Promise<OptionalTopic>;
  getTopicData: (tid: number) => Promise<OptionalTopic>;
  getTopicsData: (tids: number[]) => Promise<OptionalTopicList>;
  getCategoryData: (tid: number) => Promise<OptionalCategory>;
  setTopicField: (tid: number, field: string, value: TopicField) => Promise<void>;
  setTopicFields: (tid: number, data: OptionalTopic) => Promise<void>;
  deleteTopicField: (tid: number, field: string) => Promise<void>;
  deleteTopicFields: (tid: number, fields: string[]) => Promise<void>;

  create: (data: TopicData) => Promise<number>;
  createTags: (tags: string | undefined[] | TagObject[], tid: number, timestamp: number) => Promise<void>;
  scheduled: any;

  post: (data: TopicData) => Promise<TopicPostData>;
  checkTitle: (title: string) => void;
  validateTags: (tags: string | undefined[] | TagObject[], cid: number, uid: number | string) => Promise<void>;
  filterTags: (tags: string | undefined[] | TagObject[], cid: number) => Promise<string | undefined[] | TagObject[]>;
  checkContent: (content: string) => void;

  getTopicsByTids: (tids: number[], uid: number | string) => Promise<OptionalTopic[]>;
  follow: (tid: number, uid: number | string) => Promise<void>;
  delete: (tid: number) => Promise<void>;

  reply: (data: TopicData) => Promise<PostObjectPartial>;
  notifyFollowers: (postData: PostObjectPartial, uid: number | string, obj: {
    type: string,
    bodyShort: string,
    nid: string,
    mergeId: string,
  }) => void;

  markAsUnreadForAll: (tid: number) => Promise<void>;
  markAsRead: (tids: number[], uid: number | string) => Promise<void>;
  addParentPosts: (postData: PostObjectPartial[]) => Promise<void>;
  syncBacklinks: (postData: PostObjectPartial) => Promise<void>;
}
