
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
    return compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-name=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">\n    <div class=\"btn-group pull-right\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n            Privileges <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"groups:find\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:find'] : null) ?
            "active" :
            "") + 
          "\">Find Category</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"groups:read\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:read'] : null) ?
            "active" :
            "") + 
          "\">Access Category</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:read\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:topics:read'] : null) ?
            "active" :
            "") + 
          "\">Access Topics</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:create\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:topics:create'] : null) ?
            "active" :
            "") + 
          "\">Create Topics</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:reply\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:topics:reply'] : null) ?
            "active" :
            "") + 
          "\">Reply to Topics</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"groups:posts:edit\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:posts:edit'] : null) ?
            "active" :
            "") + 
          "\">Edit Posts</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"groups:posts:delete\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:posts:delete'] : null) ?
            "active" :
            "") + 
          "\">Delete Posts</a></li>\n            <li role=\"presentation\"><a href=\"#\" data-priv=\"groups:topics:delete\" class=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['privileges'] != null) ? context['groups'][key0]['privileges']['groups:topics:delete'] : null) ?
            "active" :
            "") + 
          "\">Delete Topics</a></li>\n        </ul>\n    </div>\n    " + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
