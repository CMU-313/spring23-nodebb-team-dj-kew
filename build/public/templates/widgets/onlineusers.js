
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
    return "<div class=\"active-users\">\n\t" + 
      compiled.blocks['online_users'](helpers, context, guard, iter, helper) + 
      "\n</div>\n";
  }

  compiled.blocks = {
    'online_users': function online_users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['online_users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<a data-uid=\"" + 
          __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['uid'] : null)) + 
          "\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['userslug'] : null)) + 
          "\">\n\t\t" + 
          (guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['picture'] : null) ?
            "\n\t\t<img title=\"" + 
              __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['username'] : null)) + 
              "\" src=\"" + 
              __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['picture'] : null)) + 
              "\" class=\"avatar avatar-sm avatar-rounded not-responsive\" />\n\t\t" :
            "\n\t\t<div title=\"" + 
              __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['username'] : null)) + 
              "\" class=\"avatar avatar-sm avatar-rounded not-responsive\" style=\"background-color: " + 
              __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['online_users'] != null && context['online_users'][key0] != null) ? context['online_users'][key0]['icon:text'] : null)) + 
              "</div>\n\t\t") + 
          "\n\t</a>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
