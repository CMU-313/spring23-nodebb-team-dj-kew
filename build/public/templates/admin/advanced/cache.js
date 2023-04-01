
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
    return "<div class=\"settings\">\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 content-header\">\n            [[admin/admin:settings-header-contents]]\n        </div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <nav class=\"section-content\">\n                <ul></ul>\n            </nav>\n        </div>\n    </div>\n<div class=\"row post-cache\">\n    <div class=\"col-lg-12\">\n        <div class=\"row\">\n            " + 
      compiled.blocks['caches'](helpers, context, guard, iter, helper) + 
      "\n            \n        </div>\n    </div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n\n";
  }

  compiled.blocks = {
    'caches': function caches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['caches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <div class=\"col-lg-3\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">[[admin/advanced/cache:" + 
          __escape(key) + 
          "-cache]]</div>\n                    <div class=\"panel-body\">\n                        <div class=\"checkbox\" data-name=\"" + 
          __escape(key) + 
          "\">\n                            <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                                <input class=\"mdl-switch__input\" type=\"checkbox\" " + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['enabled'] : null) ?
            "checked" :
            "") + 
          ">\n                            </label>\n                        </div>\n\n                        <span>" + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['length'] : null) ?
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['length'] : null)) :
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['itemCount'] : null))) + 
          " / " + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['max'] : null) ?
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['max'] : null)) :
            __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['maxSize'] : null))) + 
          "</span><br/>\n\n                        <div class=\"progress\">\n                            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "%;\">\n                                [[admin/advanced/cache:percent-full, " + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['percentFull'] : null)) + 
          "]]\n                            </div>\n                        </div>\n\n                        <label>Hits:</label> <span>" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['hits'] : null)) + 
          "</span><br/>\n                        <label>Misses:</label> <span>" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['misses'] : null)) + 
          "</span><br/>\n                        <label>Hit Ratio:</label> <span>" + 
          __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['hitRatio'] : null)) + 
          "</span><br/>\n                        " + 
          (guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['ttl'] : null) ?
            "<label>TTL:</label> <span>" + 
              __escape(guard((context != null && context['caches'] != null && context['caches'][key0] != null) ? context['caches'][key0]['ttl'] : null)) + 
              "</span></br>" :
            "") + 
          "\n                        " + 
          ((key == "post") ?
            "\n                        <hr/>\n                        <div class=\"form-group\">\n                            <label for=\"postCacheSize\">[[admin/advanced/cache:post-cache-size]]</label>\n                            <input id=\"postCacheSize\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"postCacheSize\">\n                        </div>\n                        " :
            "") + 
          "\n                        <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/api/admin/advanced/cache/dump?name=" + 
          __escape(key) + 
          "\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-download\"></i></a>\n                        <a class=\"btn btn-sm btn-danger clear\" data-name=\"" + 
          __escape(key) + 
          "\"><i class=\"fa fa-trash\"></i></a>\n                    </div>\n                </div>\n            </div>\n            ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
