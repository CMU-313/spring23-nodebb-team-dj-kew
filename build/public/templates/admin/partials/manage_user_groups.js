
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
    return compiled.blocks['users'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">\n    <h5>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</h5>\n    <div class=\"group-area\">\n        " + 
          iter(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['groups'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n        <div class=\"group-card pull-left\" data-group-name=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['groups'] != null && context['users'][key0]['groups'][key1] != null) ? context['users'][key0]['groups'][key1]['nameEscaped'] : null)) + 
              "\">\n            <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/admin/manage/groups/" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['groups'] != null && context['users'][key0]['groups'][key1] != null) ? context['users'][key0]['groups'][key1]['nameEncoded'] : null)) + 
              "\"><span class=\"label label-default\" style=\"color:" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['groups'] != null && context['users'][key0]['groups'][key1] != null) ? context['users'][key0]['groups'][key1]['textColor'] : null)) + 
              "; background-color: " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['groups'] != null && context['users'][key0]['groups'][key1] != null) ? context['users'][key0]['groups'][key1]['labelColor'] : null)) + 
              ";\">" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['groups'] != null && context['users'][key0]['groups'][key1] != null) ? context['users'][key0]['groups'][key1]['icon'] : null) ?
                "<i class=\"fa " + 
                  __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['groups'] != null && context['users'][key0]['groups'][key1] != null) ? context['users'][key0]['groups'][key1]['icon'] : null)) + 
                  "\"></i> " :
                "") + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['groups'] != null && context['users'][key0]['groups'][key1] != null) ? context['users'][key0]['groups'][key1]['displayName'] : null)) + 
              " <i class=\"remove-group-icon fa fa-times\" role=\"button\"></i></span></a>\n        </div>\n        ";
          }, function alt() {
            return "";
          }) + 
          "\n    </div>\n    <input data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" class=\"form-control group-search\" placeholder=\"[[admin/manage/users:add-group]]\" />\n</div>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
