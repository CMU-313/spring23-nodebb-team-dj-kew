
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
    return "<div class=\"popular-tags\">\n" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n</div>\n";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<span class=\"inline-block\">\n\t<a href=\"" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "?tag=" + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/tags/" + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null))) + 
          "\"><span class=\"tag-item tag-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) + 
          "\" style=\"" + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null) ?
            "color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null)) + 
              ";" :
            "") + 
          " " + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null) ?
            "background-color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null)) + 
              ";" :
            "") + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) + 
          "</span><span class=\"tag-topic-count\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</span></a>\n\t</span>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
