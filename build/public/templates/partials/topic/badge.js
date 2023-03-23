
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
    return compiled.blocks['posts.user.selectedGroups'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'posts.user.selectedGroups': function postsuserselectedGroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['selectedGroups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['slug'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/groups/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['slug'] : null)) + 
              "\"><small class=\"label group-label inline-block\" style=\"color:" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['textColor'] : null)) + 
              ";background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['labelColor'] : null)) + 
              ";\">" + 
              (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['icon'] : null) ?
                "<i class=\"fa " + 
                  __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['icon'] : null)) + 
                  "\"></i> " :
                "") + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['userTitle'] : null)) + 
              "</small></a>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
