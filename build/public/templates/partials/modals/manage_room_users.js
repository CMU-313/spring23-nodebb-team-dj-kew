
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
    return compiled.blocks['users'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"list-group-item\">\n    " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['canKick'] : null) ?
            "<button class=\"pull-right btn btn-xs btn-link\" data-action=\"kick\" data-uid=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
              "\">[[modules:chat.kick]]</button>" :
            "") + 
          "\n    " + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "\n    <span>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          " " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['isOwner'] : null) ?
            "<i class=\"fa fa-star text-warning\" title=\"[[modules:chat.owner]]\"></i>" :
            "") + 
          "</span>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
