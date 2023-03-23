
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
    return "<div class=\"row manage-users\">\n    <div class=\"col-lg-12\">\n        <div class=\"clearfix\">\n\n            <div class=\"pull-right\">\n                <div class=\"btn-group\">\n                    <button class=\"btn btn-primary dropdown-toggle\" id=\"action-dropdown\" data-toggle=\"dropdown\" type=\"button\" disabled=\"disabled\">[[admin/manage/users:edit]] <span class=\"caret\"></span></button>\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\n                        <li><a href=\"#\" class=\"validate-email\"><i class=\"fa fa-fw fa-check\"></i> [[admin/manage/users:validate-email]]</a></li>\n                        <li><a href=\"#\" class=\"send-validation-email\"><i class=\"fa fa-fw fa-mail-forward\"></i> [[admin/manage/users:send-validation-email]]</a></li>\n                        <li><a href=\"#\" class=\"password-reset-email\"><i class=\"fa fa-fw fa-key\"></i> [[admin/manage/users:password-reset-email]]</a></li>\n                        <li><a href=\"#\" class=\"force-password-reset\"><i class=\"fa fa-fw fa-unlock-alt\"></i> [[admin/manage/users:force-password-reset]]</a></li>\n                        <li><a href=\"#\" class=\"manage-groups\"><i class=\"fa fa-fw fa-users\"></i> [[admin/manage/users:manage-groups]]</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a href=\"#\" class=\"ban-user\"><i class=\"fa fa-fw fa-gavel\"></i> [[admin/manage/users:ban]]</a></li>\n                        <li><a href=\"#\" class=\"ban-user-temporary\"><i class=\"fa fa-fw fa-clock-o\"></i> [[admin/manage/users:temp-ban]]</a></li>\n                        <li><a href=\"#\" class=\"unban-user\"><i class=\"fa fa-fw fa-comment-o\"></i> [[admin/manage/users:unban]]</a></li>\n                        <li><a href=\"#\" class=\"reset-lockout\"><i class=\"fa fa-fw fa-unlock\"></i> [[admin/manage/users:reset-lockout]]</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a href=\"#\" class=\"delete-user\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete]]</a></li>\n                        <li><a href=\"#\" class=\"delete-user-content\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete-content]]</a></li>\n                        <li><a href=\"#\" class=\"delete-user-and-content\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:purge]]</a></li>\n                    </ul>\n                </div>\n                <div class=\"btn-group\">\n                    <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"><i class=\"fa fa-ellipsis-v\"></i></button>\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\n                        <li><a href=\"#\" data-action=\"create\">[[admin/manage/users:create]]</a></li>\n                        " + 
      (guard((context != null) ? context['showInviteButton'] : null) ?
        "<li><a href=\"#\" component=\"user/invite\">[[admin/manage/users:invite]]</a></li>" :
        "") + 
      "\n                        <li><a target=\"_blank\" href=\"#\" class=\"export-csv\">[[admin/manage/users:download-csv]]</a></li>\n                    </ul>\n                </div>\n            </div>\n\n            <form class=\"form-inline pull-left\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" id=\"user-search\" value=\"" + 
      __escape(guard((context != null) ? context['query'] : null)) + 
      "\">\n                    <span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\n                </div>\n                <select id=\"user-search-by\" class=\"form-control\">\n                    <option value=\"username\" " + 
      (guard((context != null) ? context['searchBy_username'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.username]]</option>\n                    <option value=\"email\" " + 
      (guard((context != null) ? context['searchBy_email'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.email]]</option>\n                    <option value=\"uid\" " + 
      (guard((context != null) ? context['searchBy_uid'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.uid]]</option>\n                    <option value=\"ip\" " + 
      (guard((context != null) ? context['searchBy_ip'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.ip]]</option>\n                </select>\n                <select id=\"results-per-page\" class=\"form-control\">\n                    <option value=\"50\">[[admin/manage/users:50-per-page]]</option>\n                    <option value=\"100\">[[admin/manage/users:100-per-page]]</option>\n                    <option value=\"250\">[[admin/manage/users:250-per-page]]</option>\n                    <option value=\"500\">[[admin/manage/users:500-per-page]]</option>\n                </select>\n\n                <div class=\"btn-group\" id=\"filter-by\">\n                    <button type=\"button\" class=\"btn btn-link dropdown-toggle\" data-toggle=\"dropdown\">\n                        [[admin/manage/users:filter-by]] <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li data-filter-by=\"unverified\" role=\"presentation\">\n                            <a role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_unverified'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.unvalidated]]</a>\n                        </li>\n                        <li data-filter-by=\"verified\" role=\"presentation\">\n                            <a role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_verified'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.validated]]</a>\n                        </li>\n                        <li data-filter-by=\"banned\" role=\"presentation\">\n                            <a role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_banned'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.banned]]</a>\n                        </li>\n                    </ul>\n                </div>\n            </form>\n        </div>\n\n        <hr/>\n\n        <div class=\"search " + 
      __escape(guard((context != null) ? context['search_display'] : null)) + 
      "\">\n            <i class=\"fa fa-spinner fa-spin hidden\"></i>\n\n            <div id=\"user-found-notify\" class=\"label label-info " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "" :
        "hidden") + 
      "\">[[admin/manage/users:alerts.x-users-found, " + 
      __escape(guard((context != null) ? context['matchCount'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['timing'] : null)) + 
      "]]</div>\n\n            <div id=\"user-notfound-notify\" class=\"label label-danger " + 
      (guard((context != null) ? context['query'] : null) ?
        "" :
        "hidden") + 
      " " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/users:search.not-found]]</div>\n        </div>\n\n        " + 
      (guard((context != null) ? context['inactive'] : null) ?
        "\n        <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/users/inactive?months=3&resultsPerPage=" + 
          __escape(guard((context != null) ? context['resultsPerPage'] : null)) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.3-months]]</a>\n        <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/users/inactive?months=6&resultsPerPage=" + 
          __escape(guard((context != null) ? context['resultsPerPage'] : null)) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.6-months]]</a>\n        <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/users/inactive?months=12&resultsPerPage=" + 
          __escape(guard((context != null) ? context['resultsPerPage'] : null)) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.12-months]]</a>\n        " :
        "") + 
      "\n\n        <div class=\"table-responsive\">\n            <table class=\"table table-striped users-table\">\n                <thead>\n                    <tr>\n                        <th><input component=\"user/select/all\" type=\"checkbox\"/></th>\n                        <th class=\"text-right text-muted\">[[admin/manage/users:users.uid]]</th>\n                        <th class=\"text-muted\">[[admin/manage/users:users.username]]</th>\n                        <th class=\"text-muted\">[[admin/manage/users:users.email]]</th>\n                        <th class=\"text-muted\">[[admin/manage/users:users.ip]]</th>\n                        <th data-sort=\"postcount\" class=\"text-right pointer\">[[admin/manage/users:users.postcount]] " + 
      (guard((context != null) ? context['sort_postcount'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n                        <th data-sort=\"reputation\" class=\"text-right pointer\">[[admin/manage/users:users.reputation]] " + 
      (guard((context != null) ? context['sort_reputation'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n                        <th data-sort=\"flags\" class=\"text-right pointer\">[[admin/manage/users:users.flags]] " + 
      (guard((context != null) ? context['sort_flags'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n                        <th data-sort=\"joindate\" class=\"pointer\">[[admin/manage/users:users.joined]] " + 
      (guard((context != null) ? context['sort_joindate'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n                        <th data-sort=\"lastonline\" class=\"pointer\">[[admin/manage/users:users.last-online]] " + 
      (guard((context != null) ? context['sort_lastonline'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    " + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n                </tbody>\n            </table>\n        </div>\n\n        <div component=\"pagination\" class=\"text-center pagination-container" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n    <ul class=\"pagination hidden-xs\">\n        <li class=\"previous pull-left" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n        </li>\n\n        " + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n\n        <li class=\"next pull-right" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n        </li>\n    </ul>\n\n    <ul class=\"pagination hidden-sm hidden-md hidden-lg\">\n        <li class=\"first" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
      "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n        </li>\n\n        <li class=\"previous" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n        </li>\n\n        <li component=\"pagination/select-page\" class=\"page select-page\">\n            <a href=\"#\">" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "</a>\n        </li>\n\n        <li class=\"next" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n        </li>\n\n        <li class=\"last" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div>\n\n    </div>\n</div>\n";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <tr class=\"user-row\">\n                        <th><input component=\"user/select/single\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" type=\"checkbox\"/></th>\n                        <td class=\"text-right\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "</td>\n                        <td>\n                            <i title=\"[[admin/manage/users:users.banned]]\" class=\"ban fa fa-gavel text-danger" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['banned'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\n                            <i class=\"administrator fa fa-shield text-success" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['administrator'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\n                            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\"> " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n                        </td>\n                        <td>\n                            " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null) ?
            "\n                            <i class=\"validated fa fa-check text-success" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:confirmed'] : null) ?
                "" :
                " hidden") + 
              "\" title=\"validated\"></i>\n                            <i class=\"notvalidated fa fa-check text-muted" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:confirmed'] : null) ?
                " hidden" :
                "") + 
              "\" title=\"not validated\"></i>\n                            " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null)) + 
              "\n                            " :
            "\n                            <i class=\"notvalidated fa fa-check text-muted\" title=\"not validated\"></i>\n                            <em class=\"text-muted\">[[admin/manage/users:users.no-email]]</em>\n                            ") + 
          "\n                        </td>\n                        <td>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['ip'] : null)) + 
          "</td>\n                        <td class=\"text-right\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)) + 
          "</td>\n                        <td class=\"text-right\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)) + 
          "</td>\n                        <td class=\"text-right\">" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null) ?
            __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)) :
            "0") + 
          "</td>\n                        <td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
          "\"></span></td>\n                        <td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
          "\"></span></td>\n                    </tr>\n                    ";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            " + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n            <li component=\"pagination/select-page\" class=\"page select-page\">\n                <a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n            </li>\n            " :
            "\n            <li class=\"page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n                <a href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n            </li>\n            ") + 
          "\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
