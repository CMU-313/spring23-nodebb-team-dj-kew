
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
    return "<div class=\"form-group\">\n    <label for=\"agree-terms\">[[register:terms_of_use]]</label>\n    <div class=\"tos\">" + 
      __escape(guard((context != null) ? context['termsOfUse'] : null)) + 
      "</div>\n    <div class=\"checkbox\">\n        <label>\n            <input type=\"checkbox\" name=\"agree-terms\" id=\"agree-terms\"> [[register:agree_to_terms_of_use]]\n        </label>\n    </div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
