
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
    return "<div id=\"themes\" class=\"themes\">\n    <div class=\"directory row text-center\" id=\"installed_themes\">\n        <i class=\"fa fa-refresh fa-spin\"></i> [[admin/appearance/themes:checking-for-installed]]\n    </div>\n</div>\n\n<button id=\"revert_theme\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">undo</i>\n</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
