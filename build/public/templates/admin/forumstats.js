
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
    return "<label>Stats Class:</label>\n<input type=\"text\" class=\"form-control\" name=\"statsClass\" placeholder=\"well\" />";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
