
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
    return "<div class=\"row\">\n    " + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n    <div class=\"col-lg-1\">\n        <button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i></button>\n    </div>\n    " :
        "") + 
      "\n    <div class=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "col-lg-11" :
        "col-lg-12") + 
      "\">\n        <div class=\"input-group\">\n            <input class=\"form-control\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\n            <span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\n        </div>\n    </div>\n</div>\n\n<table component=\"groups/members\" class=\"table table-striped table-hover\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\">\n    <tbody>\n    " + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\n    </tbody>\n</table>";
  }

  compiled.blocks = {
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\">\n        <td>\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">\n                " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['picture'] : null) ?
            "\n                <img class=\"avatar avatar-sm avatar-rounded\" src=\"" + 
              __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['picture'] : null)) + 
              "\" alt=\"\" />\n                " :
            "\n                <div class=\"avatar avatar-sm avatar-rounded\" style=\"background-color: " + 
              __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['icon:text'] : null)) + 
              "</div>\n                ") + 
          "\n            </a>\n        </td>\n        <td class=\"member-name\">\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a> <i title=\"[[groups:owner]]\" class=\"user-owner-icon fa fa-star text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n\n            " + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\n            <div class=\"owner-controls btn-group pull-right\">\n                <a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\n                    <i class=\"fa fa-star\"></i>\n                </a>\n\n                <a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\n                    <i class=\"fa fa-ban\"></i>\n                </a>\n            </div>\n            " :
            "") + 
          "\n        </td>\n    </tr>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
