
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
    return "<label>Amount of Tags to display:</label>\n<input type=\"text\" class=\"form-control\" name=\"numTags\" placeholder=\"8\" />\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
