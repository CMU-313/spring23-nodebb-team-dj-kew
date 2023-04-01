
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
    return "<label>Amount of Topics to display:</label>\n<input type=\"text\" class=\"form-control\" name=\"numTopics\" placeholder=\"8\" />\n<label>Select Duration:</label>\n<select name=\"duration\" class=\"form-control\">\n\t<option value=\"day\">Day</option>\n\t<option value=\"week\">Week</option>\n\t<option value=\"month\">Month</option>\n\t<option value=\"alltime\">Alltime</option>\n</select>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
