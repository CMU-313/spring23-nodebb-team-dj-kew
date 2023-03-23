
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
    return "<li data-type=\"item\" class=\"list-group-item\">\n    <div class=\"row\">\n        <div class=\"col-xs-9\">\n            <span class=\"label label-primary\">" + 
      (guard((context != null) ? context['uid'] : null) ?
        "uid " + 
          __escape(guard((context != null) ? context['uid'] : null)) :
        "master") + 
      "</span>\n            " + 
      (guard((context != null) ? context['token'] : null) ?
        "<input type=\"text\" readonly=\"readonly\" value=\"" + 
          __escape(guard((context != null) ? context['token'] : null)) + 
          "\" size=\"32\" />" :
        "<em class=\"text-warning\">[[admin/settings/api:token-on-save]]</em>") + 
      "<br />\n            <p>\n                " + 
      (guard((context != null) ? context['description'] : null) ?
        "\n                " + 
          __escape(guard((context != null) ? context['description'] : null)) + 
          "\n                " :
        "\n                <em>[[admin/settings/api:no-description]]</em>\n                ") + 
      "\n                <br />\n                <small>" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "</small>\n            </p>\n        </div>\n        <div class=\"col-xs-3 text-right\">\n            <button type=\"button\" data-type=\"edit\" class=\"btn btn-info\">Edit</button>\n            <button type=\"button\" data-type=\"remove\" class=\"btn btn-danger\">Delete</button>\n        </div>\n    </div>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
