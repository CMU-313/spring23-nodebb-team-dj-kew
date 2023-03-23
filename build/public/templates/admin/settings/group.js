
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
    return "<div class=\"settings\">\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 content-header\">\n            [[admin/admin:settings-header-contents]]\n        </div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <nav class=\"section-content\">\n                <ul></ul>\n            </nav>\n        </div>\n    </div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/group:general]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form role=\"form\">\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowPrivateGroups\">\n                    <span class=\"mdl-switch__label\"><strong>[[admin/settings/group:private-groups]]</strong></span>\n                </label>\n            </div>\n\n            <p class=\"help-block\">\n                [[admin/settings/group:private-groups.help]]\n            </p>\n            <p class=\"help-block\">\n                [[admin/settings/group:private-groups.warning]]\n            </p>\n\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowMultipleBadges\">\n                    <span class=\"mdl-switch__label\"><strong>[[admin/settings/group:allow-multiple-badges]]</strong></span>\n                </label>\n            </div>\n\n            <p class=\"help-block\">\n                [[admin/settings/group:allow-multiple-badges-help]]\n            </p>\n\n            <label for=\"maximumGroupNameLength\">[[admin/settings/group:max-name-length]]</label>\n            <input id=\"maximumGroupNameLength\" class=\"form-control\" type=\"text\" placeholder=\"255\" data-field=\"maximumGroupNameLength\" />\n\n            <label for=\"maximumGroupTitleLength\">[[admin/settings/group:max-title-length]]</label>\n            <input id=\"maximumGroupTitleLength\" class=\"form-control\" type=\"text\" placeholder=\"40\" data-field=\"maximumGroupTitleLength\" />\n        </form>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/group:cover-image]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form role=\"form\">\n            <label for=\"groups:defaultCovers\"><strong>[[admin/settings/group:default-cover]]</strong></label>\n            <p class=\"help-block\">\n                [[admin/settings/group:default-cover-help]]\n            </p>\n            <input type=\"text\" class=\"form-control input-lg\" id=\"groups:defaultCovers\" data-field=\"groups:defaultCovers\" data-field-type=\"tagsinput\" value=\"/assets/images/cover-default.png\" placeholder=\"https://example.com/group1.png, https://example.com/group2.png\" /><br />\n        </form>\n    </div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
