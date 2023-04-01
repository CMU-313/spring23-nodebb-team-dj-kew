
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
    return compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"btn-group pull-right\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n            Privileges <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"find\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['find'] : null) ?
            "active" :
            "") + 
          "\">Find Category</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"read\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['read'] : null) ?
            "active" :
            "") + 
          "\">Access Category</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"topics:read\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['topics:read'] : null) ?
            "active" :
            "") + 
          "\">Access Topics</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"topics:create\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['topics:create'] : null) ?
            "active" :
            "") + 
          "\">Create Topics</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"topics:reply\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['topics:reply'] : null) ?
            "active" :
            "") + 
          "\">Reply to Topics</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"posts:edit\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['posts:edit'] : null) ?
            "active" :
            "") + 
          "\">Edit Posts</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"posts:delete\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['posts:delete'] : null) ?
            "active" :
            "") + 
          "\">Delete Posts</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"topics:delete\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['topics:delete'] : null) ?
            "active" :
            "") + 
          "\">Delete Topics</a></li>\n            <li role=\"presentation\" class=\"divider\"></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"mods\" class=\"" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['privileges'] != null) ? context['users'][key0]['privileges']['mods'] : null) ?
            "active" :
            "") + 
          "\">Moderator</a></li>\n        </ul>\n    </div>\n    <img src=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['picture'] : null)) + 
          "\" alt=\"\" /> " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
