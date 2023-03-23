
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
    return "<div class=\"social\">\n    <form role=\"form\">\n        <div class=\"row\">\n            <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/social:post-sharing]]</div>\n            <div class=\"col-sm-10 col-xs-12\">\n                <div class=\"form-group\" id=\"postSharingNetworks\">\n                    " + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n                    <small>[[admin/settings/social:info-plugins-additional]]</small>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <div class=\"checkbox\">\n                        <label for=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                            <input type=\"checkbox\" class=\"mdl-switch__input\" id=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" data-field=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" name=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\" " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['activated'] : null) ?
            "checked" :
            "") + 
          " />\n                            <span class=\"mdl-switch__label\"><i class=\"fa " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['class'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['name'] : null)) + 
          "</span>\n                        </label>\n                    </div>\n                    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
