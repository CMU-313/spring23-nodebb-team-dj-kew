
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
    return "<div class=\"datetime-picker\">\n\t<input class=\"form-control\" type=\"date\" max=\"2100-12-31\" pattern=\"[0-9]" + 
      "{2}-[0-9]" + 
      "{2}-[0-9]" + 
      "{4}\" required aria-label=\"[[modules:composer.schedule-date]]\" tabindex=\"1\">\n\t<input class=\"form-control\" type=\"time\" pattern=\"[0-9]" + 
      __escape(guard((context != null) ? context['2'] : null)) + 
      ":[0-9]" + 
      __escape(guard((context != null) ? context['2'] : null)) + 
      "\" required aria-label=\"[[modules:composer.schedule-time]]\" tabindex=\"1\">\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
