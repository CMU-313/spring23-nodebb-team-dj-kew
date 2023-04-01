
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
    return "<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
