
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
    return "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"[[flags:modal-title]]\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\">\n                    [[flags:modal-title]]\n                </h4>\n            </div>\n            <div class=\"modal-body\">\n                <p class=\"lead\">\n                    [[flags:modal-body, " + 
      __escape(guard((context != null) ? context['type'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "]]\n                </p>\n                <div>\n                    <div class=\"radio\">\n                        <label for=\"flag-reason-spam\">\n                            <input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-spam\" value=\"[[flags:modal-reason-spam]]\">\n                            [[flags:modal-reason-spam]]\n                        </label>\n                    </div>\n\n                    <div class=\"radio\">\n                        <label for=\"flag-reason-offensive\">\n                            <input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-offensive\" value=\"[[flags:modal-reason-offensive]]\">\n                            [[flags:modal-reason-offensive]]\n                        </label>\n                    </div>\n\n                    <div class=\"radio\">\n                        <label for=\"flag-reason-other\">\n                            <input type=\"radio\" name=\"flag-reason\" id=\"flag-reason-other\" value=\"[[flags:modal-reason-other]]\">\n                            [[flags:modal-reason-other]]\n                        </label>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" id=\"flag-reason-custom\" placeholder=\"[[flags:modal-reason-custom]]\" disabled=\"disabled\"></textarea>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-primary pull-right\" id=\"flag-post-commit\" disabled>[[flags:modal-submit]]</button>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
