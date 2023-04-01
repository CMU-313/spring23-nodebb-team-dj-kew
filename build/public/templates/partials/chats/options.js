
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
    return "<div class=\"dropdown pull-right\">\n  <button class=\"close\" data-toggle=\"dropdown\" component=\"chat/controlsToggle\"><i class=\"fa fa-gear\"></i></button>\n  <ul class=\"dropdown-menu dropdown-menu-right pull-right\" component=\"chat/controls\">\n    <li class=\"dropdown-header\">[[modules:chat.options]]</li>\n    <li>\n      <a href=\"#\" data-action=\"members\"><i class=\"fa fa-fw fa-cog\"></i> [[modules:chat.manage-room]]</a>\n    </li>\n    <li>\n      <a href=\"#\" data-action=\"rename\"><i class=\"fa fa-fw fa-edit\"></i> [[modules:chat.rename-room]]</a>\n    </li>\n    <li>\n      <a href=\"#\" data-action=\"leave\"><i class=\"fa fa-fw fa-sign-out\"></i> [[modules:chat.leave]]</a>\n    </li>\n    " + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n    <li role=\"separator\" class=\"divider\"></li>\n    <li class=\"dropdown-header\">[[modules:chat.in-room]]</li>\n    " + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n    " :
        "") + 
      "\n  </ul>\n</div>\n";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li>\n      <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
