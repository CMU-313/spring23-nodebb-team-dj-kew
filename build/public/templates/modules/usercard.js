
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
    return "<div class=\"persona-usercard\">\n    <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\">\n        " + 
      (guard((context != null) ? context['picture'] : null) ?
        "\n        <div class=\"usercard-picture\" style=\"background-image:url(" + 
          __escape(guard((context != null) ? context['picture'] : null)) + 
          ")\"></div>\n        " :
        "\n        <div class=\"usercard-picture\" style=\"background-color: " + 
          __escape(guard((context != null) ? context['icon:bgColor'] : null)) + 
          ";\">" + 
          __escape(guard((context != null) ? context['icon:text'] : null)) + 
          "</div>\n        ") + 
      "\n    </a>\n    <div class=\"usercard-body\">\n        <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\">\n            <span class=\"usercard-name\">" + 
      (guard((context != null) ? context['fullname'] : null) ?
        __escape(guard((context != null) ? context['fullname'] : null)) :
        __escape(guard((context != null) ? context['username'] : null))) + 
      "</span><br />\n            <span class=\"usercard-username\">" + 
      (guard((context != null) ? context['banned'] : null) ?
        "[[user:banned]]" :
        "@" + 
          __escape(guard((context != null) ? context['username'] : null))) + 
      "</span>\n            " + 
      (guard((context != null) ? context['banned'] : null) ?
        "" :
        "\n            <i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null) ? context['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null) ? context['status'] : null)) + 
          "]]\"></i>\n            ") + 
      "\n        </a>\n\n        <div class=\"row usercard-info\">\n            <div class=\"col-xs-4\">\n                <small>[[global:posts]]</small>\n                <span class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</span>\n            </div>\n            <div class=\"col-xs-4\">\n                <small>[[global:reputation]]</small>\n                <span class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['reputation'] : null)) + 
      "</span>\n            </div>\n\n            <button class=\"btn-morph persona-fab " + 
      (guard((context != null) ? context['banned'] : null) ?
        " hide" :
        "") + 
      "\">\n                <span>\n                    <span class=\"s1\"></span>\n                    <span class=\"s2\"></span>\n                    <span class=\"s3\"></span>\n                </span>\n            </button>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
