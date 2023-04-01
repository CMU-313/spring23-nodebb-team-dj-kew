
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
    return "<input type=\"text\" class=\"form-control\" id=\"roomName\" placeholder=\"[[modules:chat.rename-placeholder]]\" value=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\" />\n<p class=\"help-block\">\n    [[modules:chat.rename-help]]\n</p>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
