
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
    return "<div class=\"stats text-muted\">\n    <i class=\"fa fa-fw fa-user\" title=\"[[global:posters]]\"></i>\n    <span title=\"" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "</span>\n</div>\n<div class=\"stats text-muted\">\n    <i class=\"fa fa-fw fa-pencil\" title=\"[[global:posts]]\"></i>\n    <span component=\"topic/post-count\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</span>\n</div>\n<div class=\"stats text-muted\">\n    <i class=\"fa fa-fw fa-eye\" title=\"[[global:views]]\"></i>\n    <span class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "</span>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
