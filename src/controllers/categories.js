"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummy = exports.list = void 0;
const nconf_1 = __importDefault(require("nconf"));
const lodash_1 = __importDefault(require("lodash"));
const categories_1 = __importDefault(require("../categories"));
const meta_1 = __importDefault(require("../meta"));
const posts_1 = __importDefault(require("../posts"));
const pagination_1 = __importDefault(require("../pagination"));
const helpers_1 = __importDefault(require("./helpers"));
const privileges_1 = __importDefault(require("../privileges"));
async function list(req, res) {
    var _a, e_1, _b, _c, _d, e_2, _e, _f;
    res.locals.metaTags = [{
            name: 'title',
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            content: String(meta_1.default.config.title || 'NodeBB'),
        }, {
            property: 'og:type',
            content: 'website',
        }];
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const categoriesPerPage = meta_1.default.config.categoriesPerPage;
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const allRootCids = await categories_1.default.getAllCidsFromSet('cid:0:children');
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const rootCids = await privileges_1.default.categories.filterCids('find', allRootCids, req.uid);
    const pageCount = Math.max(1, Math.ceil(rootCids.length / categoriesPerPage));
    const page = Math.min(parseInt(req.query.page, 10) || 1, pageCount);
    const start = Math.max(0, (page - 1) * categoriesPerPage);
    const stop = start + categoriesPerPage - 1;
    const pageCids = rootCids.slice(start, stop + 1);
    const allChildCids = lodash_1.default.flatten(await Promise.all(pageCids.map(categories_1.default.getChildrenCids)));
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const childCids = await privileges_1.default.categories.filterCids('find', allChildCids, req.uid);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const categoryData = await categories_1.default.getCategories(pageCids.concat(childCids), req.uid);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const tree = categories_1.default.getTree(categoryData, 0);
    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await categories_1.default.getRecentTopicReplies(categoryData, req.uid, req.query);
    const data = {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        title: meta_1.default.config.homePageTitle || '[[pages:home]]',
        selectCategoryLabel: '[[pages:categories]]',
        categories: tree,
        pagination: pagination_1.default.create(page, pageCount, req.query),
        breadcrumbs: undefined,
    };
    data.categories.forEach((category) => {
        if (category) {
            helpers_1.default.trimChildren(category);
            helpers_1.default.setCategoryTeaser(category);
        }
    });
    if (req.originalUrl.startsWith(`${nconf_1.default.get('relative_path')}/api/categories`) || req.originalUrl.startsWith(`${nconf_1.default.get('relative_path')}/categories`)) {
        data.title = '[[pages:categories]]';
        data.breadcrumbs = helpers_1.default.buildBreadcrumbs([{ text: data.title }]);
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        res.locals.metaTags.push({
            property: 'og:title',
            content: '[[pages:categories]]',
        });
    }
    try {
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        for (var _g = true, _h = __asyncValues(data.categories), _j; _j = await _h.next(), _a = _j.done, !_a;) {
            _c = _j.value;
            _g = false;
            try {
                const c = _c;
                try {
                    // The next line calls a function in a module that has not been updated to TS yet
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                    for (var _k = true, _l = (e_2 = void 0, __asyncValues(c.posts)), _m; _m = await _l.next(), _d = _m.done, !_d;) {
                        _f = _m.value;
                        _k = false;
                        try {
                            const p = _f;
                            // The next line calls a function in a module that has not been updated to TS yet
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                            p.isAnon = await posts_1.default.getPostField(p.pid, 'isAnon');
                        }
                        finally {
                            _k = true;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (!_k && !_d && (_e = _l.return)) await _e.call(_l);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            finally {
                _g = true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (!_g && !_a && (_b = _h.return)) await _b.call(_h);
        }
        finally { if (e_1) throw e_1.error; }
    }
    res.render('categories', data);
}
exports.list = list;
function dummy() {
    console.log('dummy function');
}
exports.dummy = dummy;
