
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
    return "<form>\n    <input type=\"hidden\" name=\"token\" />\n    <input type=\"hidden\" name=\"timestamp\" />\n    <div class=\"form-group\">\n        <label for=\"uid\">[[admin/settings/api:uid]]</label>\n        <input type=\"text\" inputmode=\"numeric\" pattern=\"\\d+\" name=\"uid\" class=\"form-control\" placeholder=\"1\" />\n        <p class=\"help-text\">\n            [[admin/settings/api:uid-help-text]]\n        </p>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"description\">[[admin/settings/api:description]]</label>\n        <input type=\"text\" name=\"description\" class=\"form-control\" placeholder=\"Description\" />\n    </div>\n</form>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
