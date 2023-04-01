
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
    return "<noscript>\n    <div class=\"alert alert-danger\">\n        <p>\n            Your browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you have been placed in <strong>read-only mode</strong>.\n        </p>\n        <p>\n            Please download a browser that supports JavaScript, or enable it if it's disabled (i.e. NoScript).\n        </p>\n    </div>\n</noscript>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
