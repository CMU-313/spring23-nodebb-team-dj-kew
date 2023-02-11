import { PostObject, TopicObject, UserObjectSlim, CategoryObject } from '../types';

export type PostField = number | string | boolean | TopicObject | CategoryObject | UserObjectSlim

export interface PostsWrapper {
    pids: string[];
    posts: PostObject[];
    fields: (keyof PostObject)[];
}

export interface PostsMethods {
    getPostsFields: (pids: string[], fields: (keyof PostObject)[]) => Promise<PostObject[]>
    getPostData: (pid: string) => Promise<PostObject>;
    getPostsData: (pids: string[]) => Promise<PostObject[]>;
    getPostField: (pid: string, field: (keyof PostObject)) => Promise<PostField>;
    getPostFields: (pid: string, fields: (keyof PostObject)[]) => Promise<PostObject>;
    setPostField: (pid: string, field: (keyof PostObject), value: PostField) => Promise<void>;
    setPostFields: (pid: string, data: PostObject) => Promise<void>;
    getPostSummaryByPids: (pids: string[], uid: string, options: any) => Promise<PostObject[]>;
    parsePost: (post: PostObject[]) => Promise<PostObject>;
    overrideGuestHandle: (post: PostObject, handle: string) => void;
}

