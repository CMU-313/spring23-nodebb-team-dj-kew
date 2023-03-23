
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
    return "<textarea class=\"form-control\" rows=\"6\" name=\"html\" placeholder=\"Enter HTML\"></textarea>\n<label>\n\tCategory:<br />\n\t<small>Set the category IDs you want to display this widget on (separated by commas)</small>\n</label>\n<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />\n\n<label>\n\tTopic:<br />\n\t<small>Set the topic IDs you want to display this widget on (separated by commas)</small>\n</label>\n<input type=\"text\" class=\"form-control\" name=\"tid\" placeholder=\"0\" />";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
