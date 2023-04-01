
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
    return "<div class=\"form-group\">\n    <p class=\"lead\">[[user:consent.lead]]</p>\n    <p>[[user:consent.intro]]</p>\n    <div class=\"checkbox\">\n        <label>\n            <input type=\"checkbox\" name=\"gdpr_agree_data\" id=\"gdpr_agree_data\"> <strong>[[register:gdpr_agree_data]]</strong>\n        </label>\n    </div>\n    <p>\n        [[user:consent.email_intro]]\n        " + 
      (guard((context != null) ? context['digestEnabled'] : null) ?
        "\n        [[user:consent.digest_frequency, " + 
          __escape(guard((context != null) ? context['digestFrequency'] : null)) + 
          "]]\n        " :
        "\n        [[user:consent.digest_off]]\n        ") + 
      "\n    </p>\n    \n    <div class=\"checkbox\">\n        <label>\n            <input type=\"checkbox\" name=\"gdpr_agree_email\" id=\"gdpr_agree_email\"> <strong>[[register:gdpr_agree_email]]</strong>\n        </label>\n    </div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
