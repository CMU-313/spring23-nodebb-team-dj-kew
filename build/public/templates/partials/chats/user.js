
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
    return "<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['rooms'] != null && context['rooms']['users'] != null) ? context['rooms']['users']['userslug'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null) ? context['rooms']['users'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
      "</a>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
