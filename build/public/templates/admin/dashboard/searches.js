
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
    return "<div class=\"row dashboard\">\n    <div class=\"col-xs-12\">\n        <a class=\"btn btn-link\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/dashboard\">\n            <i class=\"fa fa-chevron-left\"></i>\n            [[admin/dashboard:back-to-dashboard]]\n        </a>\n\n\n        <table class=\"table table-striped search-list\">\n            <tbody>\n                " + 
      (guard((context != null && context['searches'] != null) ? context['searches']['length'] : null) ?
        "" :
        "\n                <tr>\n                    <td colspan=4\" class=\"text-center\"><em>[[admin/dashboard:details.no-searches]]</em></td>\n                </tr>\n                ") + 
      "\n                " + 
      compiled.blocks['searches'](helpers, context, guard, iter, helper) + 
      "\n            </tbody>\n        </table>\n    </div>\n</div>";
  }

  compiled.blocks = {
    'searches': function searches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['searches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <tr>\n                    <td>" + 
          __escape(guard((context != null && context['searches'] != null && context['searches'][key0] != null) ? context['searches'][key0]['value'] : null)) + 
          "</a></td>\n                    <td class=\"text-right\">" + 
          __escape(guard((context != null && context['searches'] != null && context['searches'][key0] != null) ? context['searches'][key0]['score'] : null)) + 
          "</td>\n                </tr>\n                ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
