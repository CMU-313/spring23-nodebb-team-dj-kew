
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
    return "<div id=\"skins\" class=\"skins\">\n    <div class=\"directory row text-center\" id=\"bootstrap_themes\">\n        <i class=\"fa fa-refresh fa-spin\"></i> [[admin/appearance/skins:loading]]\n    </div>\n\n    <div data-type=\"bootswatch\" data-theme=\"\" data-css=\"\">\n        <button data-action=\"use\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n            <i class=\"material-icons\">undo</i>\n        </button>\n    </div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
