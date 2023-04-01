
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
    return "<div id=\"" + 
      __escape(guard((context != null) ? context['alert_id'] : null)) + 
      "\" class=\"alert alert-dismissable alert-" + 
      __escape(guard((context != null) ? context['type'] : null)) + 
      " clearfix\" component=\"toaster/toast\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n\n    " + 
      (guard((context != null) ? context['image'] : null) ?
        "\n    <img src=\"" + 
          __escape(guard((context != null) ? context['image'] : null)) + 
          "\">\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null) ? context['title'] : null) ?
        "\n    <strong>" + 
          __escape(guard((context != null) ? context['title'] : null)) + 
          "</strong>\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null) ? context['message'] : null) ?
        "\n    <p>" + 
          __escape(guard((context != null) ? context['message'] : null)) + 
          "</p>\n    " :
        "") + 
      "\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
