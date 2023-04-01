
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
    return "<div class=\"settings\">\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 content-header\">\n            [[admin/admin:settings-header-contents]]\n        </div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <nav class=\"section-content\">\n                <ul></ul>\n            </nav>\n        </div>\n    </div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/tags:tag]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form>\n            <div class=\"form-group\">\n                <a class=\"btn btn-primary\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/tags\">\n                    <i class=\"fa fa-external-link\"></i>\n                    [[admin/settings/tags:link-to-manage]]\n                </a>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"systemTags\">[[admin/settings/tags:system-tags]]</label>\n                <input id=\"systemTags\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"systemTags\" data-field-type=\"tagsinput\" />\n                <p class=\"help-block\">\n                    [[admin/settings/tags:system-tags-help]]\n                </p>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"minimumTagsPerTopics\">[[admin/settings/tags:min-per-topic]]</label>\n                <input id=\"minimumTagsPerTopics\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"minimumTagsPerTopic\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"maximumTagsPerTopics\">[[admin/settings/tags:max-per-topic]]</label>\n                <input id=\"maximumTagsPerTopics\" type=\"text\" class=\"form-control\" value=\"5\" data-field=\"maximumTagsPerTopic\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"minimumTagLength\">[[admin/settings/tags:min-length]]</label>\n                <input id=\"minimumTagLength\" type=\"text\" class=\"form-control\" value=\"3\" data-field=\"minimumTagLength\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"maximumTagLength\">[[admin/settings/tags:max-length]]</label>\n                <input id=\"maximumTagLength\" type=\"text\" class=\"form-control\" value=\"15\" data-field=\"maximumTagLength\">\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/tags:related-topics]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form>\n            <div class=\"form-group\">\n                <label for=\"maximumRelatedTopics\">[[admin/settings/tags:max-related-topics]]</label>\n                <input id=\"maximumRelatedTopics\" type=\"text\" class=\"form-control\" value=\"5\" data-field=\"maximumRelatedTopics\">\n            </div>\n        </form>\n    </div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
