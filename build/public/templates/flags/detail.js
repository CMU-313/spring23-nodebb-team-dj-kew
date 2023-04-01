
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n    " + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <h2 class=\"h4\">\n            " + 
      __escape(guard((context != null) ? context['target_readable'] : null)) + 
      "\n            <small><span class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['datetimeISO'] : null)) + 
      "\"></span></small>\n        </h2>\n\n        <hr />\n\n        " + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['post'] : null) ?
        "\n        <div class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['target'] != null) ? context['target']['user'] : null), "lg", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['username'] : null)) + 
          "</a></h4>\n                " + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['content'] : null)) + 
          "\n            </div>\n        </div>\n        " :
        "") + 
      "\n\n        " + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['user'] : null) ?
        "\n        <div class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['target'] : null), "lg", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['username'] : null)) + 
          "</a></h4>\n                <p class=\"lead\">\n                    <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">[[flags:user-view]]</a> |\n                    <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "/edit\">[[flags:user-edit]]</a>\n                </p>\n            </div>\n        </div>\n        " :
        "") + 
      "\n\n        " + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['empty'] : null) ?
        "\n        <div class=\"alert alert-warning\">[[flags:target-purged]]</div>\n        " :
        "") + 
      "\n\n        <hr />\n\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <form role=\"form\" id=\"attributes\">\n                    <div class=\"form-group\">\n                        <h2 class=\"h4\">[[flags:reports]]</h2>\n                        <ul class=\"list-group\" component=\"flag/reports\">\n                            " + 
      compiled.blocks['reports'](helpers, context, guard, iter, helper) + 
      "\n                        </ul>\n                    </div>\n                    <div class=\"form-group\">\n                        <h2 class=\"h4\" for=\"state\">[[flags:state]]</h2>\n                        <select class=\"form-control\" id=\"state\" name=\"state\" disabled>\n                            <option value=\"open\">[[flags:state-open]]</option>\n                            <option value=\"wip\">[[flags:state-wip]]</option>\n                            <option value=\"resolved\">[[flags:state-resolved]]</option>\n                            <option value=\"rejected\">[[flags:state-rejected]]</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <h2 class=\"h4\" for=\"assignee\">[[flags:assignee]]</h2>\n                        <select class=\"form-control\" id=\"assignee\" name=\"assignee\" disabled>\n                            <option value=\"\">[[flags:no-assignee]]</option>\n                            " + 
      compiled.blocks['assignees'](helpers, context, guard, iter, helper) + 
      "\n                        </select>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-block btn-primary\" data-action=\"update\">[[flags:update]]</button>\n                </form>\n\n                <hr />\n\n                <form role=\"form\">\n                    <div class=\"form-group\">\n                        <h2 class=\"h4\" for=\"note\">[[flags:notes]]</h2>\n                        <textarea id=\"note\" class=\"form-control\"></textarea>\n                        <button type=\"button\" class=\"btn btn-block btn-primary\" data-action=\"appendNote\">[[flags:add-note]]</button>\n                    </div>\n                </form>\n\n                <div component=\"flag/notes\">\n                    " + 
      (guard((context != null && context['notes'] != null) ? context['notes']['length'] : null) ?
        "" :
        "\n                    <div class=\"alert alert-success text-center\">[[flags:no-notes]]</div>\n                    ") + 
      "\n                    " + 
      compiled.blocks['notes'](helpers, context, guard, iter, helper) + 
      "\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <h2 class=\"h4\">[[flags:quick-actions]]</h2>\n\n                <a class=\"btn btn-default btn-block\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['type_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['targetId'] : null)) + 
      "\">\n                    <i class=\"fa fa-external-link\"></i>\n                    [[flags:go-to-target]]\n                </a>\n\n                <a class=\"btn btn-default btn-block\" href=\"#\" data-action=\"assign\">\n                    <i class=\"fa fa-id-card-o\"></i>\n                    [[flags:assign-to-me]]\n                </a>\n\n                " + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['post'] : null) ?
        "\n                " + 
          (guard((context != null && context['target'] != null) ? context['target']['deleted'] : null) ?
            "\n                <a class=\"btn btn-danger btn-block\" href=\"#\" data-action=\"purge-post\"><i class=\"fa fa-trash\"></i> [[flags:purge-post]]</a>\n                <a class=\"btn btn-success btn-block\" href=\"#\" data-action=\"restore-post\"><i class=\"fa fa-reply\"></i><i class=\"fa fa-trash\"></i> [[flags:restore-post]]</a>\n                " :
            "\n                <a class=\"btn btn-danger btn-block\" href=\"#\" data-action=\"delete-post\"><i class=\"fa fa-trash\"></i> [[flags:delete-post]]</a>\n                ") + 
          "\n                " :
        "") + 
      "\n\n                " + 
      (guard((context != null && context['target'] != null) ? context['target']['uid'] : null) ?
        "\n                <div class=\"btn-group btn-block\" data-uid=\"" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">\n                    <button type=\"button\" class=\"btn btn-default btn-block dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fa fa-street-view\"></i>\n                        [[flags:flagged-user]]\n                        <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">[[flags:view-profile]]</a></li>\n                        " + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n                            <li><a href=\"#\" data-action=\"chat\">[[flags:start-new-chat]]</a></li>\n                        ") + 
          "\n                        <li role=\"separator\" class=\"divider\"></li>\n                        " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['ban'] : null) ?
            "\n                        <li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['banned'] : null) ?
                "hidden" :
                "") + 
              "\"><a href=\"#\" data-action=\"ban\">[[user:ban_account]]</a></li>\n                        <li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['banned'] : null) ?
                "" :
                "hidden") + 
              "\"><a href=\"#\" data-action=\"unban\">[[user:unban_account]]</a></li>\n                        " :
            "") + 
          "\n                        " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['mute'] : null) ?
            "\n                        <li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['muted'] : null) ?
                "hidden" :
                "") + 
              "\"><a href=\"#\" data-action=\"mute\">[[user:mute_account]]</a></li>\n                        <li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['muted'] : null) ?
                "" :
                "hidden") + 
              "\"><a href=\"#\" data-action=\"unmute\">[[user:unmute_account]]</a></li>\n                        " :
            "") + 
          "\n                        " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['admin:users'] : null) ?
            "\n                        <li><a href=\"#\" data-action=\"delete-account\">[[user:delete_account_as_admin]]</a></li>\n                        <li><a href=\"#\" data-action=\"delete-content\">[[user:delete_content]]</a></li>\n                        <li><a href=\"#\" data-action=\"delete-all\">[[user:delete_all]]</a></li>\n                        " :
            "") + 
          "\n                    </ul>\n                </div>\n                " :
        "") + 
      "\n\n                <hr />\n\n                <h2 class=\"h4\">[[flags:history]]</h2>\n                <div component=\"flag/history\">\n                    " + 
      (guard((context != null && context['history'] != null) ? context['history']['length'] : null) ?
        "" :
        "\n                    <div class=\"alert alert-success text-center\">[[flags:no-history]]</div>\n                    ") + 
      "\n                    " + 
      compiled.blocks['history'](helpers, context, guard, iter, helper) + 
      "\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\n        <meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n        " + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n            <span itemprop=\"name\">\n                " + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\n                " + 
          (index === length - 1 ?
            "\n                " + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\n                " + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\n                " :
            "") + 
          "\n            </span>\n        " + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'reports': function reports(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['reports'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                            <li class=\"list-group-item\">\n                                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null && context['reports'][key0]['reporter'] != null) ? context['reports'][key0]['reporter']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['reporter'] : null), "sm", guard((context != null) ? context['false'] : null)])) + 
          "</a>\n                                &ndash; <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['timestampISO'] : null)) + 
          "\"></span>\n                                <blockquote><em>" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['value'] : null)) + 
          "</em></blockquote>\n                            </li>\n                            ";
      }, function alt() {
        return "";
      });
    },
    'assignees': function assignees(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['assignees'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                            <option value=\"" + 
          __escape(guard((context != null && context['assignees'] != null && context['assignees'][key0] != null) ? context['assignees'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['assignees'] != null && context['assignees'][key0] != null) ? context['assignees'][key0]['username'] : null)) + 
          "</option>\n                            ";
      }, function alt() {
        return "";
      });
    },
    'notes': function notes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <div class=\"media\" data-datetime=\"" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['datetime'] : null)) + 
          "\" data-index=\"" + 
          __escape(index) + 
          "\">\n                        <div class=\"media-left\">\n                            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['user'] : null), "md", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\n                        </div>\n                        <div class=\"media-body\">\n                            <h4 class=\"media-heading\">\n                                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['username'] : null)) + 
          "</a>\n                                <small><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['datetimeISO'] : null)) + 
          "\"></span></small>\n                            </h4>\n                            " + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['content'] : null)) + 
          "\n                        </div>\n                        <div class=\"media-right\">\n                            <a href=\"#\" data-action=\"prepare-edit\"><i class=\"fa fa-pencil\"></i></a>\n                            <a href=\"#\" data-action=\"delete-note\"><i class=\"fa fa-trash text-danger\"></i></a>\n                        </div>\n                    </div>\n                    ";
      }, function alt() {
        return "";
      });
    },
    'history': function history(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['history'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <div class=\"media\">\n                        <div class=\"media-left\">\n                            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['user'] : null), "md", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\n                        </div>\n                        <div class=\"media-body\">\n                            <h4 class=\"media-heading\">\n                                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['username'] : null)) + 
          "</a>\n                                <small><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['datetimeISO'] : null)) + 
          "\"></span></small>\n                            </h4>\n                            <ul>\n                                " + 
          iter(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['fields'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                                <li>\n                                    <span class=\"label label-primary\">[[flags:" + 
              __escape(key) + 
              "]]</span>" + 
              (guard(value) ?
                " &rarr; <span class=\"label label-default\">" + 
                  __escape(guard(value)) + 
                  "</span>" :
                "") + 
              "\n                                </li>\n                                ";
          }, function alt() {
            return "";
          }) + 
          "\n                                " + 
          iter(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['meta'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                                <li>\n                                    <span class=\"label label-" + 
              guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['labelClass'] : null) + 
              "\">" + 
              guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['key'] : null) + 
              "</span>" + 
              (guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['value'] : null) ?
                " &rarr; <span class=\"label label-default\">" + 
                  guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['value'] : null) + 
                  "</span>" :
                "") + 
              "\n                                </li>\n                                ";
          }, function alt() {
            return "";
          }) + 
          "\n                            </ul>\n                        </div>\n                    </div>\n                    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
