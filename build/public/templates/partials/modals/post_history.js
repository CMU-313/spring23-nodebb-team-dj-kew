
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
    return "<p class=\"number-of-diffs\">\n    " + 
      (guard((context != null) ? context['numDiffs'] : null) ?
        "\n    [[topic:diffs.description, " + 
          __escape(guard((context != null) ? context['numDiffs'] : null)) + 
          "]]\n    " :
        "\n    [[topic:diffs.no-revisions-description, " + 
          __escape(guard((context != null) ? context['numDiffs'] : null)) + 
          "]]\n    ") + 
      "\n</p>\n" + 
      (guard((context != null) ? context['numDiffs'] : null) ?
        "\n<div class=\"form-group\">\n    <select class=\"form-control\">\n        " + 
          compiled.blocks['diffs'](helpers, context, guard, iter, helper) + 
          "\n    </select>\n\n    <hr />\n\n    <ul class=\"posts-list diffs\"></ul>\n\n    " + 
          (guard((context != null) ? context['editable'] : null) ?
            "\n    <button class=\"btn btn-primary\" data-action=\"restore\">[[topic:diffs.restore]]</button>\n    " :
            "") + 
          "\n    " + 
          (guard((context != null) ? context['deletable'] : null) ?
            "\n    <button class=\"btn btn-danger\" data-action=\"delete\">[[topic:diffs.delete]]</button>\n    " :
            "") + 
          "\n    " + 
          (guard((context != null) ? context['editable'] : null) ?
            "\n    <p class=\"help-block\">[[topic:diffs.restore-description]]</p>\n    " :
            "") + 
          "\n\n</div>\n" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    'diffs': function diffs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['diffs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <option value=\"" + 
          __escape(guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['timestamp'] : null)) + 
          "\">\n            " + 
          __escape(guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['pretty'] : null)) + 
          "\n            " + 
          (guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['username'] : null) ?
            "[" + 
              __escape(guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['username'] : null)) + 
              "]" :
            "") + 
          "\n            " + 
          (index === 0 ?
            "([[topic:diffs.current-revision]])" :
            "") + 
          "\n            " + 
          (index === length - 1 ?
            "([[topic:diffs.original-revision]])" :
            "") + 
          "\n        </option>\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
