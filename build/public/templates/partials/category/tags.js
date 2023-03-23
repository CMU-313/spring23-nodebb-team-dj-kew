
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
    return (guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['length'] : null) ?
        "\n    " + 
          compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
          "\n" :
        "");
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['value'] : null)) + 
          "\"><span class=\"tag-item\" data-tag=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['value'] : null)) + 
          "\" style=\"" + 
          (guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['color'] : null) ?
            "color: " + 
              __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['color'] : null)) + 
              ";" :
            "") + 
          (guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['bgColor'] : null) ?
            "background-color: " + 
              __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['bgColor'] : null)) + 
              ";" :
            "") + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['value'] : null)) + 
          "</span><span class=\"tag-topic-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['score'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['score'] : null)) + 
          "</span></a>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
