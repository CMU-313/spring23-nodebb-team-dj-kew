
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"settings\">\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 content-header\">\n            [[admin/admin:settings-header-contents]]\n        </div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <nav class=\"section-content\">\n                <ul></ul>\n            </nav>\n        </div>\n    </div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/web-crawler:crawlability-settings]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form>\n            <strong>[[admin/settings/web-crawler:robots-txt]]</strong><br />\n            <textarea class=\"form-control\" data-field=\"robots:txt\"></textarea>\n        </form>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/web-crawler:sitemap-feed-settings]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form>\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"feeds:disableRSS\">\n                    <span class=\"mdl-switch__label\"><strong>[[admin/settings/web-crawler:disable-rss-feeds]]</strong></span>\n                </label>\n            </div>\n\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"feeds:disableSitemap\">\n                    <span class=\"mdl-switch__label\"><strong>[[admin/settings/web-crawler:disable-sitemap-xml]]</strong></span>\n                </label>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"sitemapTopics\">[[admin/settings/web-crawler:sitemap-topics]]</label>\n                <input id=\"sitemapTopics\" class=\"form-control\" type=\"text\" data-field=\"sitemapTopics\" />\n            </div>\n\n            <br />\n            <p>\n                <button id=\"clear-sitemap-cache\" class=\"btn btn-warning\">[[admin/settings/web-crawler:clear-sitemap-cache]]</button>\n                <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/sitemap.xml\" target=\"_blank\" class=\"btn btn-link\">[[admin/settings/web-crawler:view-sitemap]]</a>\n            </p>\n\n        </form>\n    </div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
