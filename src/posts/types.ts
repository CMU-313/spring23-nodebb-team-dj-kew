import { PostObject, TopicObject, UserObjectSlim, CategoryObject } from '../types';

export type PostField = number | string | boolean | TopicObject | CategoryObject | UserObjectSlim | null;

export type OptionalPost = PostObject | null;

export type OptionalPostList = OptionalPost[] | null;

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
    getPostsFields: (pids: string[], fields: (keyof PostObject)[]) => Promise<OptionalPostList>
    getPostData: (pid: string) => Promise<OptionalPost>;
    getPostsData: (pids: string[]) => Promise<OptionalPostList>;
    getPostField: (pid: string, field: (keyof PostObject)) => Promise<PostField>;
    getPostFields: (pid: string, fields: (keyof PostObject)[]) => Promise<OptionalPost>;
    setPostField: (pid: string, field: (keyof PostObject), value: PostField) => Promise<void>;
    setPostFields: (pid: string, data: PostObject) => Promise<void>;
    getPostSummaryByPids: (pids: string[], uid: string, options: PostSummaryOptions) => Promise<OptionalPostList>;
    parsePost: (post: OptionalPost) => Promise<OptionalPost>;
    overrideGuestHandle: (post: PostObject, handle: string) => void;
}

