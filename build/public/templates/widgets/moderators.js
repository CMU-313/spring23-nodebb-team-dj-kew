
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
    return "<div class=\"moderators\">\n\t" + 
      compiled.blocks['moderators'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'moderators': function moderators(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['moderators'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<a data-uid=\"" + 
          __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['uid'] : null)) + 
          "\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['userslug'] : null)) + 
          "\">\n\t\t" + 
          (guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['picture'] : null) ?
            "\n\t\t<img title=\"" + 
              __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['username'] : null)) + 
              "\" src=\"" + 
              __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['picture'] : null)) + 
              "\" class=\"avatar avatar-sm not-responsive\" />\n\t\t" :
            "\n\t\t<div title=\"" + 
              __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['username'] : null)) + 
              "\" class=\"avatar avatar-sm not-responsive\" style=\"background-color: " + 
              __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['moderators'] != null && context['moderators'][key0] != null) ? context['moderators'][key0]['icon:text'] : null)) + 
              "</div>\n\t\t") + 
          "\n\t</a>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
