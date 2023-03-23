
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
    return "<div class=\"row\">\n    <div class=\"col-lg-9\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 text-center\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <div><canvas id=\"not-found\" height=\"250\"></canvas></div>\n                    </div>\n                    <div class=\"panel-footer\"><small>\n                        <strong>[[admin/advanced/errors:figure-x, 1]]</strong> &ndash; \n                        [[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.404]]]]\n                    </small></div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 text-center\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <div><canvas id=\"toobusy\" height=\"250\"></canvas></div>\n                    </div>\n                    <div class=\"panel-footer\"><small>\n                        <strong>[[admin/advanced/errors:figure-x, 2]]</strong> &ndash; \n                        [[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.503]]]]\n                    </small></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3 acp-sidebar\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/advanced/errors:manage-error-log]]</div>\n            <div class=\"panel-body\">\n                <div class=\"btn-group-vertical btn-block\" role=\"group\">\n                    <a class=\"btn btn-info\" target=\"_top\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/advanced/errors/export\">\n                        <i class=\"fa fa-download\"></i> [[admin/advanced/errors:export-error-log]]\n                    </a>\n                    <button class=\"btn btn-danger\" data-action=\"clear\">\n                        <i class=\"fa fa-trash\"></i> [[admin/advanced/errors:clear-error-log]]\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <i class=\"fa fa-exclamation-triangle\"></i> [[admin/advanced/errors:error.404]]\n            </div>\n            <div class=\"panel-body\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <th>[[admin/advanced/errors:route]]</th>\n                        <th>[[admin/advanced/errors:count]]</th>\n                    </thead>\n                    <tbody>\n                        " + 
      compiled.blocks['not-found'](helpers, context, guard, iter, helper) + 
      "\n                        " + 
      (guard((context != null && context['not-found'] != null) ? context['not-found']['length'] : null) ?
        "" :
        "\n                        <tr>\n                            <td colspan=\"2\">\n                                <div class=\"alert alert-success\">\n                                    [[admin/advanced/errors:no-routes-not-found]]\n                                </div>\n                            </td>\n                        </tr>\n                        ") + 
      "\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    'not-found': function notfound(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['not-found'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <tr>\n                            <td>" + 
          __escape(guard((context != null && context['not-found'] != null && context['not-found'][key0] != null) ? context['not-found'][key0]['value'] : null)) + 
          "</td>\n                            <td>" + 
          __escape(guard((context != null && context['not-found'] != null && context['not-found'][key0] != null) ? context['not-found'][key0]['score'] : null)) + 
          "</td>\n                        </tr>\n                        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
