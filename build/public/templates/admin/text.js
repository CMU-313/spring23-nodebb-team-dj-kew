
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
    return "<textarea class=\"form-control\" rows=\"6\" name=\"text\" placeholder=\"Enter Text / Markdown\"></textarea>\n<hr />\n<label>\n\tCategory:<br />\n\t<small>Set the category ID you want to display this widget on.</small>\n</label>\n<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />\n<br/>\n<div class=\"checkbox\">\n\t<label>\n\t\t<input type=\"checkbox\" name=\"parseAsPost\" checked />\n\t\tParse as a Post? (Take all post-related plugins into effect)\n\t</label>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
