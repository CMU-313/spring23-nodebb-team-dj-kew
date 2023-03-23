
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
    return (guard((context != null) ? context['error'] : null) ?
        "\n<div class=\"alert alert-warning\">\n    <strong>[[email:unsub.failure.title]]</strong>\n    <p>[[email:unsub.failure.message, " + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/me/settings]]</p>\n" :
        "\n<div class=\"alert alert-success\">\n    <strong>[[global:alert.success]]</strong>\n    <p>[[email:unsub.success, " + 
          __escape(guard((context != null && context['payload'] != null) ? context['payload']['template'] : null)) + 
          "]]</p>\n") + 
      "\n    <hr />\n\n    <p>\n        <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\">[[notifications:back_to_home, " + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
      "]]</a>\n    </p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
