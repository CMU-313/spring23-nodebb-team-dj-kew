import _ from 'lodash';
import meta from '../meta';
import topics from '../topics';
import user from '../user';
import helpers from './helpers';
import categories from '../categories';
import plugins from '../plugins';
import privsCategories from './categories';
import { CategoryObject, TopicObject } from '../types';

export function canViewDeletedScheduled(topic: TopicObject,
    privileges: {view_deleted?: boolean, view_scheduled?: boolean} = {},
    viewDeleted = false, viewScheduled = false) {
    if (!topic) {
        return false;
    }
    const { deleted = false, scheduled = false } = topic;
    const { view_deleted = viewDeleted, view_scheduled = viewScheduled } = privileges;

    // conceptually exclusive, scheduled topics deemed to be not deleted (they can only be purged)
    if (scheduled) {
        return view_scheduled;
    } else if (deleted) {
        return view_deleted;
    }

    return true;
}

export async function get(tid: string, uid: string | number) : Promise<TopicObject> {
    uid = parseInt(uid as string, 10);

    const privs = [
        'topics:reply', 'topics:read', 'topics:schedule', 'topics:tag',
        'topics:delete', 'posts:edit', 'posts:history',
        'posts:delete', 'posts:view_deleted', 'read', 'purge',
    ];

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const topicData: TopicObject = await topics.getTopicFields(tid, ['cid', 'uid', 'locked', 'deleted', 'scheduled']) as TopicObject;
    const [userPrivileges, isAdministrator, isModerator, disabled] = await Promise.all([
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        helpers.isAllowedTo(privs, uid, topicData.cid) as boolean[],
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        user.isAdministrator(uid) as boolean,
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        user.isModerator(uid, topicData.cid) as boolean,
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        categories.getCategoryField(topicData.cid, 'disabled') as boolean,
    ]);
    const privData : {[key: string]: boolean} = _.zipObject(privs, userPrivileges);
    const isOwner = uid > 0 && uid === topicData.uid;
    const isAdminOrMod = isAdministrator || isModerator;
    const editable = isAdminOrMod;
    const deletable = (privData['topics:delete'] && (isOwner || isModerator)) || isAdministrator;
    const mayReply = canViewDeletedScheduled(topicData, {}, false, privData['topics:schedule']);

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return await plugins.hooks.fire('filter:privileges.topics.get', {
        'topics:reply': (privData['topics:reply'] && ((!topicData.locked && mayReply) || isModerator)) || isAdministrator,
        'topics:read': privData['topics:read'] || isAdministrator,
        'topics:schedule': privData['topics:schedule'] || isAdministrator,
        'topics:tag': privData['topics:tag'] || isAdministrator,
        'topics:delete': (privData['topics:delete'] && (isOwner || isModerator)) || isAdministrator,
        'posts:edit': (privData['posts:edit'] && (!topicData.locked || isModerator)) || isAdministrator,
        'posts:history': privData['posts:history'] || isAdministrator,
        'posts:delete': (privData['posts:delete'] && (!topicData.locked || isModerator)) || isAdministrator,
        'posts:view_deleted': privData['posts:view_deleted'] || isAdministrator,
        read: privData.read || isAdministrator,
        purge: (privData.purge && (isOwner || isModerator)) || isAdministrator,

        view_thread_tools: editable || deletable,
        editable: editable,
        deletable: deletable,
        view_deleted: isAdminOrMod || isOwner || privData['posts:view_deleted'],
        view_scheduled: privData['topics:schedule'] || isAdministrator,
        isAdminOrMod: isAdminOrMod,
        disabled: disabled,
        tid: tid,
        uid: uid,

        visible: isAdminOrMod || isOwner || !topicData.isPrivate,
    }) as TopicObject;
}

export async function can(privilege: string, tid: string | number, uid: string | number) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const cid: (string | number) = await topics.getTopicField(tid, 'cid') as (string | number);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return await privsCategories.can(privilege, cid, uid) as boolean;
}

export async function filterTids(privilege: string, tids: (number | string)[], uid: (number | string)) {
    if (!Array.isArray(tids) || !tids.length) {
        return [];
    }

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const topicsData = await topics.getTopicsFields(tids, ['tid', 'cid', 'deleted', 'scheduled']) as TopicObject[];
    const cids = _.uniq(topicsData.map(topic => topic.cid));
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const results = await privsCategories.getBase(privilege, cids, uid) as {
        categories: CategoryObject[];
        allowedTo: boolean[];
        isAdmin: boolean[];
        view_deleted: boolean[];
        view_scheduled: boolean[];
    };

    const allowedCids = cids.filter((cid, index) => (
        !results.categories[index].disabled &&
        (results.allowedTo[index] || results.isAdmin)
    ));

    const cidsSet = new Set(allowedCids);
    const canViewDeleted : {[key: number]: boolean} = _.zipObject(cids, results.view_deleted);
    const canViewScheduled : {[key: number]: boolean} = _.zipObject(cids, results.view_scheduled);

    tids = topicsData.filter(t => (
        cidsSet.has(t.cid) &&
        (results.isAdmin || canViewDeletedScheduled(t, {}, canViewDeleted[t.cid], canViewScheduled[t.cid]))
    )).map(t => t.tid);

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const data = await plugins.hooks.fire('filter:privileges.topics.filter', {
        privilege: privilege,
        uid: uid,
        tids: tids,
    }) as {
        tids: (number | string)[]
    };
    return data ? data.tids : [];
}

export async function filterUids(privilege: string, tid: (number | string), uids: (number|string)[]) {
    if (!Array.isArray(uids) || !uids.length) {
        return [];
    }

    uids = _.uniq(uids);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const topicData = await topics.getTopicFields(tid, ['tid', 'cid', 'deleted', 'scheduled']) as TopicObject;
    const [disabled, allowedTo, isAdmins] = await Promise.all([
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        categories.getCategoryField(topicData.cid, 'disabled') as boolean[],
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        helpers.isUsersAllowedTo(privilege, uids, topicData.cid) as boolean[],
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        user.isAdministrator(uids) as boolean[],
    ]);

    if (topicData.scheduled) {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const canViewScheduled = await helpers.isUsersAllowedTo('topics:schedule', uids, topicData.cid) as {[key: number]: boolean};
        uids = uids.filter((uid, index) => canViewScheduled[index]);
    }

    return uids.filter((uid, index) => !disabled &&
            ((allowedTo[index] && (topicData.scheduled || !topicData.deleted)) || isAdmins[index]));
}

export async function canPurge(tid: (number | string), uid: (number | string)) {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const cid = await topics.getTopicField(tid, 'cid') as (number | string);
    const [purge, owner, isAdmin, isModerator] = await Promise.all([
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        privsCategories.isUserAllowedTo('purge', cid, uid) as boolean,
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        topics.isOwner(tid, uid) as boolean,
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        user.isAdministrator(uid) as boolean,
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        user.isModerator(uid, cid) as boolean,
    ]);
    return (purge && (owner || isModerator)) || isAdmin;
}

export async function canDelete(tid: (number | string), uid: (number | string)): Promise<boolean> {
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const topicData = await topics.getTopicFields(tid, ['uid', 'cid', 'postcount', 'deleterUid']) as TopicObject;
    const [isModerator, isAdministrator, isOwner, allowedTo] = await Promise.all([
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        user.isModerator(uid, topicData.cid) as boolean,
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        user.isAdministrator(uid) as boolean,
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        topics.isOwner(tid, uid) as boolean,
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        helpers.isAllowedTo('topics:delete', uid, [topicData.cid]) as boolean,
    ]);

    if (isAdministrator) {
        return true;
    }

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const { preventTopicDeleteAfterReplies } = meta.config as { preventTopicDeleteAfterReplies: number | null};
    if (!isModerator && preventTopicDeleteAfterReplies &&
        (topicData.postcount as number - 1) >= preventTopicDeleteAfterReplies) {
        const langKey = preventTopicDeleteAfterReplies > 1 ?
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            `[[error:cant-delete-topic-has-replies, ${meta.config.preventTopicDeleteAfterReplies as string}]]` :
            '[[error:cant-delete-topic-has-reply]]';
        throw new Error(langKey);
    }

    const { deleterUid } = topicData;
    return allowedTo[0] && ((isOwner && (deleterUid === 0 || deleterUid === topicData.uid)) || isModerator);
}

export async function isAdminOrMod(tid: (number | string), uid: (number | string)): Promise<boolean> {
    if (parseInt(uid as string, 10) <= 0) {
        return false;
    }
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const cid = await topics.getTopicField(tid, 'cid') as (number | string);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return await privsCategories.isAdminOrMod(cid, uid) as boolean;
}


export async function isOwnerOrAdminOrMod(tid: (number | string), uid: (number | string)) {
    const [isOwner, isAdminOrM] = await Promise.all([
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        topics.isOwner(tid, uid) as boolean,
        isAdminOrMod(tid, uid),
    ]);
    return isOwner || isAdminOrM;
}


export async function canEdit(tid: (number | string), uid: (number | string)) {
    return await isOwnerOrAdminOrMod(tid, uid);
}



