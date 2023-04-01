
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
    return "<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <label>[[admin/extend/widgets:show-to-groups]]</label>\n        <select name=\"groups\" class=\"form-control\" multiple size=\"10\">\n            " + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n        </select>\n    </div>\n    <div class=\"col-lg-6\">\n        <label>[[admin/extend/widgets:hide-from-groups]]</label>\n        <select name=\"groupsHideFrom\" class=\"form-control\" multiple size=\"10\">\n            " + 
      iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n            ";
      }, function alt() {
        return "";
      }) + 
      "\n        </select>\n    </div>\n</div>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n            ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
