
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
    return "<div class=\"settings\">\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 content-header\">\n            [[admin/admin:settings-header-contents]]\n        </div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <nav class=\"section-content\">\n                <ul></ul>\n            </nav>\n        </div>\n    </div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:pagination]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form>\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"usePagination\">\n                    <span class=\"mdl-switch__label\"><strong>[[admin/settings/pagination:enable]]</strong></span>\n                </label>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:posts]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form>\n            <strong>[[admin/settings/pagination:posts-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"postsPerPage\"><br/>\n            <strong>[[admin/settings/pagination:max-posts-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"maxPostsPerPage\"><br/>\n        </form>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:topics]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form>\n            <strong>[[admin/settings/pagination:topics-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"topicsPerPage\"><br />\n            <strong>[[admin/settings/pagination:max-topics-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"maxTopicsPerPage\"><br/>\n        </form>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:categories]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form>\n            <strong>[[admin/settings/pagination:categories-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"50\" data-field=\"categoriesPerPage\"><br />\n        </form>\n    </div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
