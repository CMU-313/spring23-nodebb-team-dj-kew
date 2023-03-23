
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
    return "data-tid=\"" + 
      __escape(guard((context != null && context['topics'] != null) ? context['topics']['tid'] : null)) + 
      "\" data-index=\"" + 
      __escape(guard((context != null && context['topics'] != null) ? context['topics']['index'] : null)) + 
      "\" data-cid=\"" + 
      __escape(guard((context != null && context['topics'] != null) ? context['topics']['cid'] : null)) + 
      "\" itemprop=\"itemListElement\" itemscope itemtype=\"https://schema.org/ListItem\"";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
