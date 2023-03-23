
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
    return "<div class=\"form-group\">\n    <label for=\"expiry\">[[topic:pin-modal-expiry]]</label>\n    <input id=\"expiry\" type=\"date\" class=\"form-control\" />\n    <p class=\"help-block\">[[topic:pin-modal-help]]</p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
