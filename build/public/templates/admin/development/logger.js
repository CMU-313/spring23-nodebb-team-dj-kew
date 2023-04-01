
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
    return "<div class=\"settings\">\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 content-header\">\n            [[admin/admin:settings-header-contents]]\n        </div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <nav class=\"section-content\">\n                <ul></ul>\n            </nav>\n        </div>\n    </div>\n<div class=\"row logger\">\n    <div class=\"col-lg-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/development/logger:logger-settings]]</div>\n            <div class=\"panel-body\">\n                <p>\n                    [[admin/development/logger:description]]\n                </p>\n                <br/>\n                <p>\n                    [[admin/development/logger:explanation]]\n                </p>\n                <br/>\n\n                <form>\n\n                    <label>\n                        <input type=\"checkbox\" data-field=\"loggerStatus\"> <strong>[[admin/development/logger:enable-http]]</strong>\n                    </label>\n                    <br/>\n                    <br/>\n\n                    <label>\n                        <input type=\"checkbox\" data-field=\"loggerIOStatus\"> <strong>[[admin/development/logger:enable-socket]]</strong>\n                    </label>\n                    <br/>\n                    <br/>\n\n                    <label for=\"loggerPath\">[[admin/development/logger:file-path]]</label>\n                    <input id=\"loggerPath\" class=\"form-control\" type=\"text\" placeholder=\"[[admin/development/logger:file-path-placeholder]]\" data-field=\"loggerPath\" />\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
