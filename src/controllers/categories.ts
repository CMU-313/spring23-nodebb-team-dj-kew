import nconf from 'nconf';
import _ from 'lodash';
import { Request, Response } from 'express';
import categories from '../categories';
import meta from '../meta';
import posts from '../posts';
import pagination from '../pagination';
import helpers from './helpers';
import privileges from '../privileges';
import { CategoryObject } from '../types';

interface ExtendedRequest extends Request {
    uid: number;
}

/**
 * The original JS file had its export like
 * "module.exports.list = async function list(....."
 * In TS, this is supposed to be like:
 * "export async function list (..."
 * But when I did that, ESLint complains and tells me to do
 * "export default async function list (..."
 * since it sees that list is the only function exported in this file.
 * But little does ESLint know that if I do that, then the compiled JS
 *  file would do the equivalent of:
 * "module.exports.default = async function list(..."
 * which might mess up other modules that are trying to include
 * this file (and tests would fail).
 * So this dummy function is included just so that ESLint won't complain
 * about the export syntax.
 */
// The next line calls a function in a module that has not been updated to TS yet
// eslint-disable-next-line import/prefer-default-export
export async function list(req: ExtendedRequest, res: Response) {
    res.locals.metaTags = [{
        name: 'title',
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        content: String(meta.config.title || 'NodeBB'),
    }, {
        property: 'og:type',
        content: 'website',
    }];

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const categoriesPerPage = meta.config.categoriesPerPage as number;
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const allRootCids = await categories.getAllCidsFromSet('cid:0:children') as number[];
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const rootCids = await privileges.categories.filterCids('find', allRootCids, req.uid) as number[];
    const pageCount = Math.max(1, Math.ceil(rootCids.length / categoriesPerPage));
    const page = Math.min(parseInt(req.query.page as string, 10) || 1, pageCount);
    const start = Math.max(0, (page - 1) * categoriesPerPage);

    const stop = start + categoriesPerPage - 1;
    const pageCids = rootCids.slice(start, stop + 1);

    const allChildCids = _.flatten(await Promise.all(pageCids.map(categories.getChildrenCids)));
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const childCids = await privileges.categories.filterCids('find', allChildCids, req.uid) as number[];
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const categoryData = await
    categories.getCategories(pageCids.concat(childCids), req.uid) as (CategoryObject[] | null);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const tree = categories.getTree(categoryData, 0);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await categories.getRecentTopicReplies(categoryData, req.uid, req.query);

    const data = {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        title: (meta.config.homePageTitle as string) || '[[pages:home]]',
        selectCategoryLabel: '[[pages:categories]]',
        categories: tree,
        pagination: pagination.create(page, pageCount, req.query),
        breadcrumbs: undefined,
    };

    data.categories.forEach((category) => {
        if (category) {
            helpers.trimChildren(category);
            helpers.setCategoryTeaser(category);
        }
    });

    if (req.originalUrl.startsWith(`${nconf.get('relative_path') as string}/api/categories`) || req.originalUrl.startsWith(`${nconf.get('relative_path') as string}/categories`)) {
        data.title = '[[pages:categories]]';
        data.breadcrumbs = helpers.buildBreadcrumbs([{ text: data.title }]);
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        res.locals.metaTags.push({
            property: 'og:title',
            content: '[[pages:categories]]',
        });
    }
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    for await (const c of data.categories) {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        for await (const p of c.posts) {
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            p.isAnon = await posts.getPostField(p.pid, 'isAnon') as boolean;
        }
    }

    res.render('categories', data);
}
