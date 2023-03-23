
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
    return "<div class=\"alert alert-danger\">\n    <strong>[[global:500.title]]</strong>\n    <p>[[global:500.message]]</p>\n    <p>" + 
      __escape(guard((context != null) ? context['path'] : null)) + 
      "</p>\n    " + 
      (guard((context != null) ? context['error'] : null) ?
        "<p>" + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          "</p>" :
        "") + 
      "\n\n    " + 
      (guard((context != null) ? context['returnLink'] : null) ?
        "\n    <p>[[error:goback]]</p>\n    " :
        "") + 
      "\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
