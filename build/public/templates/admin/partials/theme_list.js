
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
    return compiled.blocks['themes'](helpers, context, guard, iter, helper) + 
      "\n";
  }

  compiled.blocks = {
    'themes': function themes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['themes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\" data-type=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['type'] : null)) + 
          "\" data-theme=\"" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['id'] : null)) + 
          "\"" + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['css'] : null) ?
            " data-css=\"" + 
              __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['css'] : null)) + 
              "\"" :
            "") + 
          ">\n    <div class=\"theme-card mdl-card mdl-shadow--2dp\">\n        <div class=\"mdl-card__title mdl-card--expand\" style=\"background-image: url('" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['screenshot_url'] : null)) + 
          "');\"></div>\n        <div class=\"mdl-card__supporting-text\">\n            <h2 class=\"mdl-card__title-text\">" + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['name'] : null)) + 
          "</h2>\n            <p>\n                " + 
          __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['description'] : null)) + 
          "\n            </p>\n\n            " + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['url'] : null) ?
            "\n            <p>\n                <a href=\"" + 
              __escape(guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['url'] : null)) + 
              "\" target=\"_blank\">[[admin/appearance/themes:homepage]]</a>\n            </p>\n            " :
            "") + 
          "\n        </div>\n        <div class=\"mdl-card__actions mdl-card--border\">\n            <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" data-action=\"use\">\n                " + 
          (guard((context != null && context['themes'] != null && context['themes'][key0] != null) ? context['themes'][key0]['skin'] : null) ?
            "[[admin/appearance/skins:select-skin]]" :
            "[[admin/appearance/themes:select-theme]]") + 
          "\n            </a>\n        </div>\n    </div>\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
