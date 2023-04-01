
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
    return "<label>Amount of Posts to display:</label>\n<input type=\"text\" class=\"form-control\" name=\"numPosts\" placeholder=\"4\" />\n<label>Select Group</label>\n<select name=\"groupName\" class=\"form-control\">\n\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n</select>\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['name'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['name'] : null)) + 
          "</option>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
