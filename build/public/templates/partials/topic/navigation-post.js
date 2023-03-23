
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
    return "<div class=\"clearfix\">\n    <div class=\"icon pull-left\">\n        <a href=\"" + 
      (guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null) ?
        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['userslug'] : null)) :
        "#") + 
      "\">\n            " + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['post'] != null) ? context['post']['user'] : null), "sm", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
      " " + 
      __escape(guard((context != null && context['post'] != null && context['post']['user'] != null) ? context['post']['user']['username'] : null)) + 
      "\n        </a>\n    </div>\n    <small class=\"pull-right\">\n        <span class=\"timeago\" title=\"" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['timestampISO'] : null)) + 
      "\"></span>\n    </small>\n</div>\n\n<div>" + 
      __escape(guard((context != null && context['post'] != null) ? context['post']['content'] : null)) + 
      "</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
