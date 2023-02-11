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
};

export type PostObjectPartial = {
  pid?: number;
  tid?: number;
  content?: string;
  uid?: number;
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
}
