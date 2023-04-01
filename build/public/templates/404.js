
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
    return "<div class=\"alert alert-danger\">\n    <strong>" + 
      __escape(guard((context != null) ? context['path'] : null)) + 
      " [[global:404.title]]</strong>\n    " + 
      (guard((context != null) ? context['error'] : null) ?
        "\n    <p>" + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          "</p>\n    " :
        "\n    <p>[[global:404.message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "]]</p>\n    ") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
