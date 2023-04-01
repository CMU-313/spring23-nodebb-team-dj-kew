
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
    return "[[admin/extend/plugins:license.intro, " + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      ", " + 
      __escape(guard((context != null && context['license'] != null) ? context['license']['name'] : null)) + 
      "]]\n\n<blockquote>" + 
      __escape(guard((context != null && context['license'] != null) ? context['license']['text'] : null)) + 
      "</blockquote>\n\n[[admin/extend/plugins:license.cta]]";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
