
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
    return "<small data-editor=\"" + 
      __escape(guard((context != null && context['editor'] != null) ? context['editor']['userslug'] : null)) + 
      "\" component=\"post/editor\" class=\"hidden\">[[global:last_edited_by, " + 
      __escape(guard((context != null && context['editor'] != null) ? context['editor']['username'] : null)) + 
      "]] <span class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['editedISO'] : null)) + 
      "\"></span></small>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
