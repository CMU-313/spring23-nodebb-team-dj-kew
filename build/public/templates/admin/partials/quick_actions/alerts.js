
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
    return "<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "alert-info") + 
      " well-sm\">\n    <span>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</span>\n    " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "\n    <span style=\"margin-left: 10px\">\n        <a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n            <u>[[admin/menu:alerts.upgrade, " + 
          __escape(guard((context != null) ? context['latestVersion'] : null)) + 
          "]]</u>\n        </a>\n    </span>\n    " :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
