
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
    return "<div class=\"settings\">\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 content-header\">\n            [[admin/admin:settings-header-contents]]\n        </div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <nav class=\"section-content\">\n                <ul></ul>\n            </nav>\n        </div>\n    </div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/languages:language-settings]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <p>\n            [[admin/settings/languages:description]]\n        </p>\n\n        <form class=\"row\">\n            <div class=\"form-group col-sm-6\">\n                <label for=\"language\">[[admin/settings/languages:default-language]]</label>\n                <select id=\"language\" data-field=\"defaultLang\" class=\"form-control\">\n                    " + 
      compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
      "\n                </select>\n            </div>\n        </form>\n\n        <form class=\"row\">\n            <div class=\"form-group col-sm-6\">\n                <div class=\"checkbox\">\n                    <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                        <input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"autoDetectLang\" " + 
      (guard((context != null) ? context['autoDetectLang'] : null) ?
        "checked" :
        "") + 
      "/>\n                        <span class=\"mdl-switch__label\">[[admin/settings/languages:auto-detect]]</span>\n                    </label>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['languages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <option value=\"" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          "\" " + 
          (guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['name'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          ")</option>\n                    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
