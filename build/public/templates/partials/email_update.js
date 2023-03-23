
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
    return "<div class=\"form-group\">\n    <p>[[user:emailUpdate.intro]]</p>\n    " + 
      (guard((context != null) ? context['requireEmailAddress'] : null) ?
        "\n    <p>[[user:emailUpdate.required]]</p>\n    " :
        "\n    <p>[[user:emailUpdate.optional]]</p>\n    ") + 
      "\n    <div class=\"form-group\">\n        <label for=\"email\">[[global:email]]</label>\n        <input class=\"form-control\" type=\"text\" id=\"email\" name=\"email\" placeholder=\"" + 
      __escape(guard((context != null) ? context['email'] : null)) + 
      "\" value=\"" + 
      __escape(guard((context != null) ? context['email'] : null)) + 
      "\" />\n        <p class=\"help-block\">[[user:emailUpdate.change-instructions]]</p>\n    </div>\n\n    " + 
      (guard((context != null) ? context['issuePasswordChallenge'] : null) ?
        "\n    <div class=\"form-group\">\n        <label for=\"password\">[[register:password]]</label>\n        <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" />\n        <p class=\"help-block\">[[user:emailUpdate.password-challenge]]</p>\n    </div>\n    " :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
