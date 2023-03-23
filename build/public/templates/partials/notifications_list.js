
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
    return "\n" + 
      (guard((context != null && context['notifications'] != null) ? context['notifications']['length'] : null) ?
        "" :
        "\n<li class=\"no-notifs\"><a href=\"#\">[[notifications:no_notifs]]</a></li>\n") + 
      "\n\n" + 
      compiled.blocks['notifications'](helpers, context, guard, iter, helper) + 
      "\n";
  }

  compiled.blocks = {
    'notifications': function notifications(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notifications'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['readClass'] : null)) + 
          "\" data-nid=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['nid'] : null)) + 
          "\" data-path=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['path'] : null)) + 
          "\" " + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['pid'] : null) ?
            " data-pid=\"" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['pid'] : null)) + 
              "\"" :
            "") + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['tid'] : null) ?
            " data-tid=\"" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['tid'] : null)) + 
              "\"" :
            "") + 
          ">\n    " + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null) ?
            "\n    " + 
              (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['from'] : null) ?
                "\n    <a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['userslug'] : null)) + 
                  "\"><img class=\"pull-left user-img avatar avatar-md avatar-rounded\"src=\"" + 
                  __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null)) + 
                  "\" /></a>\n    " :
                "") + 
              "\n    " :
            "\n    <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['userslug'] : null)) + 
              "\"><div class=\"pull-left avatar avatar-md avatar-rounded\" style=\"background-color: " + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:text'] : null)) + 
              "</div></a>\n    ") + 
          "\n\n    <a href=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['path'] : null)) + 
          "\" class=\"notification-chat-content deco-none\">\n        <span class=\"text\">" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['bodyShort'] : null)) + 
          "</span>\n    </a>\n\n    <div class=\"notification-chat-controls\">\n        " + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['nid'] : null) ?
            "<div class=\"mark-read\" aria-label=\"Mark Read\"></div>" :
            "") + 
          "\n        <span class=\"relTime\">" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['timeago'] : null)) + 
          "</span>\n    </div>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
