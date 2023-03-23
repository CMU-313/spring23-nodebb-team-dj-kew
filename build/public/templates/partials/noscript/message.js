
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
    return (guard((context != null) ? context['noScriptMessage'] : null) ?
        "\n<noscript>\n    <div class=\"alert alert-info\">\n        <p>\n            " + 
          __escape(guard((context != null) ? context['noScriptMessage'] : null)) + 
          "\n        </p>\n    </div>\n</noscript>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
