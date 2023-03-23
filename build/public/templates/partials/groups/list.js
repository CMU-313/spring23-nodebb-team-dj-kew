
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
    return "    " + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <div class=\"col-lg-4 col-md-6 col-sm-12\" component=\"groups/summary\" data-slug=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\">\n        <div class=\"panel panel-default\">\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\" class=\"panel-heading list-cover\" style=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null) ?
            "background-image: url(" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null)) + 
              ");" :
            "") + 
          "\">\n                <h3 class=\"panel-title\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          " <small>" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['memberCount'] : null)) + 
          "</small></h3>\n            </a>\n            <div class=\"panel-body\">\n                <ul class=\"members\">\n                    " + 
          iter(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['members'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                    <li>\n                        <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null) ? context['groups'][key0]['members'][key1] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n                    </li>\n                    ";
          }, function alt() {
            return "";
          }) + 
          "\n                    " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['truncated'] : null) ?
            "\n                    <li class=\"truncated\"><i class=\"fa fa-ellipsis-h\"></i></li>\n                    " :
            "") + 
          "\n                </ul>\n            </div>\n        </div>\n    </div>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
