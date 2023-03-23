
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
    return "<form role=\"form\" class=\"core-api-settings\">\n    <p class=\"lead\">[[admin/settings/api:lead-text]]</p>\n    <p>[[admin/settings/api:intro]]</p>\n    <p>\n        <a href=\"https://docs.nodebb.org/api\">\n            <i class=\"fa fa-external-link\"></i>\n            [[admin/settings/api:docs]]\n        </a>\n    </p>\n\n    <hr />\n\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/api:settings]]</div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input id=\"requireHttps\" class=\"mdl-switch__input\" type=\"checkbox\" name=\"requireHttps\" />\n                    <span class=\"mdl-switch__label\">[[admin/settings/api:require-https]]</span>\n                </label>\n            </div>\n            <p class=\"help-block\">[[admin/settings/api:require-https-caveat]]</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/api:tokens]]</div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <div class=\"form-group\" data-type=\"sorted-list\" data-sorted-list=\"tokens\" data-item-template=\"admin/partials/api/sorted-list/item\" data-form-template=\"admin/partials/api/sorted-list/form\">\n                <input type=\"hidden\" name=\"tokens\">\n                <ul data-type=\"list\" class=\"list-group\"></ul>\n                <button type=\"button\" data-type=\"add\" class=\"btn btn-info\">Create Token</button>\n            </div>\n        </div>\n    </div>\n</form>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
