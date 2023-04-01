
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
    return "<h1 class=\"text-center\">[[pages:maintenance.text, " + 
      __escape(guard((context != null) ? context['site_title'] : null)) + 
      "]]</h1>\n<h2 class=\"text-center\"><i class=\"fa fa-wrench fa-3x\"></i></h2>\n" + 
      (guard((context != null) ? context['message'] : null) ?
        "\n<div class=\"row maintenance\">\n    <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2\">\n        <p class=\"lead text-center\">[[pages:maintenance.messageIntro]]</p>\n        <div class=\"well\">\n            " + 
          __escape(guard((context != null) ? context['message'] : null)) + 
          "\n        </div>\n    </div>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
