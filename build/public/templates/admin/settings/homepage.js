
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
    return "<div class=\"settings\">\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 content-header\">\n            [[admin/admin:settings-header-contents]]\n        </div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <nav class=\"section-content\">\n                <ul></ul>\n            </nav>\n        </div>\n    </div>\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/homepage:home-page]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <p>\n            [[admin/settings/homepage:description]]\n        </p>\n        <form class=\"row\">\n            <div class=\"col-sm-12\">\n                <label for=\"homePageRoute\">[[admin/settings/homepage:home-page-route]]</label>\n                <select id=\"homePageRoute\" class=\"form-control\" data-field=\"homePageRoute\">\n                    " + 
      compiled.blocks['routes'](helpers, context, guard, iter, helper) + 
      "\n                </select>\n                <div id=\"homePageCustom\" style=\"display: none;\">\n                    <br>\n                    <label for=\"homePageCustomInput\">[[admin/settings/homepage:custom-route]]</label>\n                    <input id=\"homePageCustomInput\" type=\"text\" class=\"form-control\" data-field=\"homePageCustom\"/>\n                    <p class=\"help-block\">[[user:custom_route_help]]</p>\n                </div>\n                <br>\n                <div class=\"checkbox\">\n                    <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                        <input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowUserHomePage\">\n                        <span class=\"mdl-switch__label\"><strong>[[admin/settings/homepage:allow-user-home-pages]]</strong></span>\n                    </label>\n                </div>\n                <br>\n                <label for=\"homePageTitle\">[[admin/settings/homepage:home-page-title]]</label>\n                <input id=\"homePageTitle\" class=\"form-control\" type=\"text\" data-field=\"homePageTitle\" placeholder=\"[[pages:home]]\">\n            </div>\n        </form>\n    </div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n\n";
  }

  compiled.blocks = {
    'routes': function routes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['routes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <option value=\"" + 
          __escape(guard((context != null && context['routes'] != null && context['routes'][key0] != null) ? context['routes'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['routes'] != null && context['routes'][key0] != null) ? context['routes'][key0]['name'] : null)) + 
          "</option>\n                    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
