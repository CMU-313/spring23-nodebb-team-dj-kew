
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
    return "<form role=\"form\" class=\"composer-default-settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">General</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" name=\"composeRouteEnabled\" />\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Use a separate route for the composer</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
