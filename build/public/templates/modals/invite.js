
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
    return "<div class=\"form-group\">\n    <label for=\"invite-modal-emails\">[[users:prompt-email]]</label>\n    <input id=\"invite-modal-emails\" type=\"text\" class=\"form-control\" placeholder=\"friend1@example.com,friend2@example.com\" />\n</div>\n<div class=\"form-group\">\n    <label for=\"invite-modal-groups\">[[users:groups-to-join]]</label>\n    <select id=\"invite-modal-groups\" class=\"form-control\" multiple size=\"5\">\n        " + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n    </select>\n</div>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
