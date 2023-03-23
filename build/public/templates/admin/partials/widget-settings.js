
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
    return "<br />\n<label>[[admin/extend/widgets:title]]</label>\n<input type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"[[admin/extend/widgets:title.placeholder]]\" /><br />\n\n<label>[[admin/extend/widgets:container]]</label>\n<textarea rows=\"4\" class=\"form-control container-html\" name=\"container\" placeholder=\"[[admin/extend/widgets:container.placeholder]]\"></textarea>\n\n<br/>\n<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <label>[[admin/extend/widgets:show-to-groups]]</label>\n        <select name=\"groups\" class=\"form-control\" multiple size=\"10\">\n            " + 
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
      "\n        </select>\n    </div>\n</div>\n\n<div class=\"checkbox\">\n<label><input name=\"hide-mobile\" type=\"checkbox\"> [[admin/extend/widgets:hide-on-mobile]]</input></label>\n</div>\n";
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
