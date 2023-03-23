
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
    return "<div class=\"settings\">\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 content-header\">\n            [[admin/admin:settings-header-contents]]\n        </div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <nav class=\"section-content\">\n                <ul></ul>\n            </nav>\n        </div>\n    </div>\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/sockets:reconnection]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <form>\n            <div class=\"form-group\">\n                <label for=\"maxReconnectionAttempts\">[[admin/settings/sockets:max-attempts]]</label>\n                <input class=\"form-control\" id=\"maxReconnectionAttempts\" type=\"text\" value=\"5\" placeholder=\"[[admin/settings/sockets:default-placeholder, 5]]\" data-field=\"maxReconnectionAttempts\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"reconnectionDelay\">[[admin/settings/sockets:delay]]</label>\n                <input class=\"form-control\" id=\"reconnectionDelay\" type=\"text\" value=\"1500\" placeholder=\"[[admin/settings/sockets:default-placeholder, 1500]]\" data-field=\"reconnectionDelay\" />\n            </div>\n        </form>\n    </div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
