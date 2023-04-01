
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
      compiled.blocks['active_users'](helpers, context, guard, iter, helper) + 
      "\n</div>\n\n<script type=\"text/javascript\">\n\t(function() {\n\t\tfunction handleActiveUsers() {\n\t\t\tfunction onNewTopic(topic) {\n\t\t\t\tvar activeUser = $('.active-users').find('a[data-uid=\"' + topic.uid + '\"]');\n\n\t\t\t\tif (activeUser.length) {\n\t\t\t\t\treturn activeUser.prependTo($('.active-users'));\n\t\t\t\t}\n\n\t\t\t\tapp.parseAndTranslate('widgets/activeusers', 'active_users', {\n\t\t\t\t\trelative_path: config.relative_path,\n\t\t\t\t\tactive_users: [{\n\t\t\t\t\t\tuid: topic.uid,\n\t\t\t\t\t\tusername: topic.user.username,\n\t\t\t\t\t\tuserslug: topic.user.userslug,\n\t\t\t\t\t\tpicture: topic.user.picture,\n\t\t\t\t\t\t'icon:bgColor': topic.user['icon:bgColor'],\n\t\t\t\t\t\t'icon:text': topic.user['icon:text']\n\t\t\t\t\t}]\n\t\t\t\t}, function (html) {\n\t\t\t\t\thtml.prependTo($('.active-users'))\n\t\t\t\t\tapp.createUserTooltips();\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tfunction onAjaxifyEnd() {\n\t\t\t\tsocket.removeListener('event:new_topic', onNewTopic);\n\t\t\t\tif ($('.active-users').length) {\n\t\t\t\t\tsocket.on('event:new_topic', onNewTopic);\n\t\t\t\t} else {\n\t\t\t\t\t$(window).off('action:ajaxify.end', onAjaxifyEnd);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t$(window).on('action:ajaxify.end', onAjaxifyEnd);\n\t\t}\n\n\t\tif (window.jQuery) {\n\t\t\thandleActiveUsers();\n\t\t} else {\n\t\t\twindow.addEventListener('DOMContentLoaded', handleActiveUsers);\n\t\t}\n\t})();\n</script>";
  }

  compiled.blocks = {
    'active_users': function active_users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['active_users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<a data-uid=\"" + 
          __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['uid'] : null)) + 
          "\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['userslug'] : null)) + 
          "\">\n\t\t" + 
          (guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['picture'] : null) ?
            "\n\t\t<img title=\"" + 
              __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['username'] : null)) + 
              "\" src=\"" + 
              __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['picture'] : null)) + 
              "\" class=\"avatar avatar-sm avatar-rounded not-responsive\" />\n\t\t" :
            "\n\t\t<div title=\"" + 
              __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['username'] : null)) + 
              "\" class=\"avatar avatar-sm avatar-rounded not-responsive\" style=\"background-color: " + 
              __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['icon:text'] : null)) + 
              "</div>\n\t\t") + 
          "\n\t</a>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
