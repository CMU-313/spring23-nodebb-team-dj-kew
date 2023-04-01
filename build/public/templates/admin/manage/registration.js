
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
    return "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"registration panel panel-primary\">\n            <div class=\"panel-heading\">\n                [[admin/manage/registration:queue]]\n            </div>\n            " + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "" :
        "\n            <p class=\"panel-body\">\n                [[admin/manage/registration:description, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/settings/user#user-registration]]\n            </p>\n            ") + 
      "\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped users-list\">\n                    <thead>\n                        <tr>\n                            <th>[[admin/manage/registration:list.name]]</th>\n                            <th>[[admin/manage/registration:list.email]]</th>\n                            <th class=\"hidden-xs\">[[admin/manage/registration:list.ip]]</th>\n                            <th class=\"hidden-xs\">[[admin/manage/registration:list.time]]</th>\n                            " + 
      compiled.blocks['customHeaders'](helpers, context, guard, iter, helper) + 
      "\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        " + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n                    </tbody>\n                </table>\n            </div>\n\n            <div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div>\n        </div>\n\n        <div class=\"invitations panel panel-success\">\n            <div class=\"panel-heading\">\n                [[admin/manage/registration:invitations]]\n            </div>\n            <p class=\"panel-body\">\n                [[admin/manage/registration:invitations.description]]\n            </p>\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped invites-list\">\n                    <thead>\n                        <tr>\n                            <th>[[admin/manage/registration:invitations.inviter-username]]</th>\n                            <th>[[admin/manage/registration:invitations.invitee-email]]</th>\n                            <th>[[admin/manage/registration:invitations.invitee-username]]</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        " + 
      compiled.blocks['invites'](helpers, context, guard, iter, helper) + 
      "\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n";
  }

  compiled.blocks = {
    'customHeaders': function customHeaders(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['customHeaders'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                            <th class=\"hidden-xs\">" + 
          __escape(guard((context != null && context['customHeaders'] != null && context['customHeaders'][key0] != null) ? context['customHeaders'][key0]['label'] : null)) + 
          "</th>\n                            ";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <tr data-username=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['usernameEscaped'] : null)) + 
          "\">\n                            <td>\n                                " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['usernameSpam'] : null) ?
            "\n                                <i class=\"fa fa-times-circle text-danger\" title=\"[[admin/manage/registration:list.username-spam, " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['username'] != null) ? context['users'][key0]['spamData']['username']['frequency'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['username'] != null) ? context['users'][key0]['spamData']['username']['appears'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['username'] != null) ? context['users'][key0]['spamData']['username']['confidence'] : null)) + 
              "]]\"></i>\n                                " :
            "\n                                " + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['spamChecked'] : null) ?
                "\n                                <i class=\"fa fa-check text-success\"></i>\n                                " :
                "") + 
              "\n                                ") + 
          "\n                                " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "\n                            </td>\n                            <td>\n                                " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailSpam'] : null) ?
            "\n                                <i class=\"fa fa-times-circle text-danger\" title=\"[[admin/manage/registration:list.email-spam, " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['email'] != null) ? context['users'][key0]['spamData']['email']['frequency'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['email'] != null) ? context['users'][key0]['spamData']['email']['appears'] : null)) + 
              "]]\"></i>\n                                " :
            "\n                                " + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['spamChecked'] : null) ?
                "\n                                <i class=\"fa fa-check text-success\"></i>\n                                " :
                "") + 
              "\n                                ") + 
          "\n                                " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null)) + 
          "\n                            </td>\n                            <td class=\"hidden-xs\">\n                                " + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['ipSpam'] : null) ?
            "\n                                <i class=\"fa fa-times-circle text-danger\" title=\"[[admin/manage/registration:list.ip-spam, " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['ip'] != null) ? context['users'][key0]['spamData']['ip']['frequency'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['ip'] != null) ? context['users'][key0]['spamData']['ip']['appears'] : null)) + 
              "]]\"></i>\n                                " :
            "\n                                " + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['spamChecked'] : null) ?
                "\n                                <i class=\"fa fa-check text-success\"></i>\n                                " :
                "") + 
              "\n                                ") + 
          "\n                                " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['ip'] : null)) + 
          "\n                                " + 
          iter(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['ipMatch'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                                <br>\n                                " + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['picture'] : null) ?
                "\n                                <img src=\"" + 
                  __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['picture'] : null)) + 
                  "\" class=\"user-img\" alt=\"\" />\n                                " :
                "\n                                <div class=\"user-img avatar avatar-sm\" style=\"background-color: " + 
                  __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['icon:bgColor'] : null)) + 
                  ";\">" + 
                  __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['icon:text'] : null)) + 
                  "</div>\n                                ") + 
              "\n                                <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/uid/" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['uid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['username'] : null)) + 
              "</a>\n                                ";
          }, function alt() {
            return "";
          }) + 
          "\n                            </td>\n                            <td class=\"hidden-xs\">\n                                <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['timestampISO'] : null)) + 
          "\"></span>\n                            </td>\n\n                            " + 
          iter(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['customRows'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                            <td class=\"hidden-xs\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['customRows'] != null && context['users'][key0]['customRows'][key1] != null) ? context['users'][key0]['customRows'][key1]['value'] : null)) + 
              "</td>\n                            ";
          }, function alt() {
            return "";
          }) + 
          "\n\n                            <td>\n                                <div class=\"btn-group pull-right\">\n                                    <button class=\"btn btn-success btn-xs\" data-action=\"accept\"><i class=\"fa fa-check\"></i></button>\n                                    <button class=\"btn btn-danger btn-xs\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\n                                    " + 
          iter(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['customActions'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                                    <button id=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['customActions'] != null && context['users'][key0]['customActions'][key1] != null) ? context['users'][key0]['customActions'][key1]['id'] : null)) + 
              "\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['customActions'] != null && context['users'][key0]['customActions'][key1] != null) ? context['users'][key0]['customActions'][key1]['title'] : null)) + 
              "\" class=\"btn btn-xs " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['customActions'] != null && context['users'][key0]['customActions'][key1] != null) ? context['users'][key0]['customActions'][key1]['class'] : null)) + 
              "\">\n                                        <i class=\"fa " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['customActions'] != null && context['users'][key0]['customActions'][key1] != null) ? context['users'][key0]['customActions'][key1]['icon'] : null)) + 
              "\"></i>\n                                    </button>\n                                    ";
          }, function alt() {
            return "";
          }) + 
          "\n                                </div>\n                            </td>\n                        </tr>\n                        ";
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
    },
    'invites': function invites(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['invites'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        " + 
          iter(guard((context != null && context['invites'] != null && context['invites'][key0] != null) ? context['invites'][key0]['invitations'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                        <tr data-invitation-mail=\"" + 
              __escape(guard((context != null && context['invites'] != null && context['invites'][key0] != null && context['invites'][key0]['invitations'] != null && context['invites'][key0]['invitations'][key1] != null) ? context['invites'][key0]['invitations'][key1]['email'] : null)) + 
              "\"\n                                data-invited-by=\"" + 
              __escape(guard((context != null && context['invites'] != null && context['invites'][key0] != null) ? context['invites'][key0]['username'] : null)) + 
              "\">\n                            <td class =\"invited-by\">" + 
              (index === 0 ?
                __escape(guard((context != null && context['invites'] != null && context['invites'][key0] != null) ? context['invites'][key0]['username'] : null)) :
                "") + 
              "</td>\n                            <td>" + 
              __escape(guard((context != null && context['invites'] != null && context['invites'][key0] != null && context['invites'][key0]['invitations'] != null && context['invites'][key0]['invitations'][key1] != null) ? context['invites'][key0]['invitations'][key1]['email'] : null)) + 
              "</td>\n                            <td>" + 
              __escape(guard((context != null && context['invites'] != null && context['invites'][key0] != null && context['invites'][key0]['invitations'] != null && context['invites'][key0]['invitations'][key1] != null) ? context['invites'][key0]['invitations'][key1]['username'] : null)) + 
              "\n                                <div class=\"btn-group pull-right\">\n                                    <button class=\"btn btn-danger btn-xs\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\n                                </div>\n                            </td>\n                        </tr>\n                        ";
          }, function alt() {
            return "";
          }) + 
          "\n                        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
