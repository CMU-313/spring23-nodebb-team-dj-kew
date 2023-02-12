import { CategoryObject } from './category';
import { TopicObject } from './topic';
import { UserObjectSlim } from './user';

export type PostObject = {
  pid: number;
  tid: number;
  content: string;
  uid: number;
  timestamp: number;
  deleted: boolean | number;
  upvotes: number;
  downvotes: number;
  votes: number;
  timestampISO: string;
  user: UserObjectSlim;
  topic: TopicObject;
  category: CategoryObject;
  isMainPost: boolean | number;
  replies: number;
  handle: string;
  edited?: boolean | number;
  editedISO?: string;
  isAnon?: boolean | string;
  isMain?: boolean;
};

export type PostObjectPartial = {
  pid?: number;
  tid?: number;
  content?: string;
  uid?: number | string;
  timestamp?: number;
  deleted?: boolean | number;
  upvotes?: number;
  downvotes?: number;
  votes?: number;
  timestampISO?: string;
  user?: UserObjectSlim;
  topic?: TopicObject;
  category?: CategoryObject;
  isMainPost?: boolean | number;
  replies?: number;
  handle?: string;
  edited?: boolean | number;
  editedISO?: string;
  isAnon?: boolean | string;
  toPid?: number | string;
  ip?: number | string;
  cid?: number;
  isMain?: boolean;
}

export type PostField = number | string | boolean | TopicObject | CategoryObject | UserObjectSlim | null;

export type OptionalPost = PostObject | null;

export type OptionalPostList = OptionalPost[] | null;

export interface PostWrapper {
  post: OptionalPost;
}

export interface PostsWrapper {
    posts?: OptionalPostList;
}

export interface TopicsAndCategories {
    topics?: TopicObject[];
    categories?: CategoryObject[];
}

export interface PostSummaryOptions {
    stripTags?: boolean;
    parse?: boolean;
    extraFields?: string[];
}

export interface PostsMethods {
    getPostsFields: (pids: number[], fields: (keyof PostObject)[]) => Promise<OptionalPostList>
    getPostData: (pid: number) => Promise<OptionalPost>;
    getPostsData: (pids: number[]) => Promise<OptionalPostList>;
    getPostField: (pid: number, field: (keyof PostObject)) => Promise<PostField>;
    getPostFields: (pid: number, fields: (keyof PostObject)[]) => Promise<OptionalPost>;
    setPostField: (pid: number, field: (keyof PostObject), value: PostField) => Promise<void>;
    setPostFields: (pid: number, data: PostObject) => Promise<void>;
    getPostSummaryByPids: (pids: number[], uid: number, options: PostSummaryOptions) => Promise<OptionalPostList>;
    parsePost: (post: OptionalPost) => Promise<OptionalPost>;
    overrideGuestHandle: (post: PostObject, handle: string) => void;

    create: (data: PostObjectPartial) => Promise<PostObject>;
    uploads: any;
}

