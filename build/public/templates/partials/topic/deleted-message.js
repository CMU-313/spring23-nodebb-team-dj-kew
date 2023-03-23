
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
    return "<div component=\"topic/deleted/message\" class=\"alert alert-warning" + 
      (guard((context != null) ? context['deleted'] : null) ?
        "" :
        " hidden") + 
      " clearfix\">\n    <span class=\"pull-left\">[[topic:deleted_message]]</span>\n    <span class=\"pull-right\">\n        " + 
      (guard((context != null) ? context['deleter'] : null) ?
        "\n        <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['userslug'] : null)) + 
          "\">\n            <strong>" + 
          __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['username'] : null)) + 
          "</strong>\n        </a>\n        <small class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['deletedTimestampISO'] : null)) + 
          "\"></small>\n        " :
        "") + 
      "\n    </span>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
