
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
    return "<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">Theme Settings</div>\n    <div class=\"col-sm-10 col-xs-12\">    \n        <form role=\"form\" class=\"persona-settings\">\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input class=\"mdl-switch__input\" type=\"checkbox\" id=\"hideSubCategories\" name=\"hideSubCategories\">\n                    <span class=\"mdl-switch__label\"><strong>Hide subcategories on categories view</strong></span>\n                </label>\n            </div>\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input class=\"mdl-switch__input\" type=\"checkbox\" id=\"hideCategoryLastPost\" name=\"hideCategoryLastPost\">\n                    <span class=\"mdl-switch__label\"><strong>Hide last post on categories view</strong></span>\n                </label>\n            </div>\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input class=\"mdl-switch__input\" type=\"checkbox\" id=\"enableQuickReply\" name=\"enableQuickReply\">\n                    <span class=\"mdl-switch__label\"><strong>Enable quick reply</strong></span>\n                </label>\n            </div>\n        </form>\n    </div>\n</div>\n    \n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
