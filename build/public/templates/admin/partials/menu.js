
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
    return "<nav id=\"menu\" class=\"hidden-md hidden-lg\">\n    <section class=\"menu-section quick-actions\">\n        <ul class=\"menu-section-list\">\n            " + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n            <div class=\"button-group\">\n                <li component=\"logout\">\n    <a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\n        <i class=\"fa fw-fw fa-sign-out\"></i>\n    </a>\n</li>\n\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\n<li>\n    <a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\n        <i class=\"fa fa-fw fa-repeat\"></i>\n    </a>\n</li>\n<li>\n    <a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\n        <i class=\"fa fa-fw fa-refresh\"></i>\n    </a>\n</li>\n" :
            "") + 
          "\n\n<li>\n    <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\n        <i class=\"fa fa-fw fa-home\"></i>\n    </a>\n</li>\n            </div>\n            " :
        "") + 
      "\n\n            <div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "alert-info") + 
      " well-sm\">\n    <span>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</span>\n    " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "\n    <span style=\"margin-left: 10px\">\n        <a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n            <u>[[admin/menu:alerts.upgrade, " + 
          __escape(guard((context != null) ? context['latestVersion'] : null)) + 
          "]]</u>\n        </a>\n    </span>\n    " :
        "") + 
      "\n</div>\n        </ul>\n    </section>\n\n    " + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\n    <section class=\"menu-section\">\n        <h3 class=\"menu-section-title\">[[admin/menu:section-manage]]</h3>\n        <ul class=\"menu-section-list\">\n            " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a></li>" :
            "") + 
          "\n            " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a></li>" :
            "") + 
          "\n            " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a></li>" :
            "") + 
          "\n            " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a></li>" :
            "") + 
          "\n            " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a></li>" :
            "") + 
          "\n            " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a></li>" :
            "") + 
          "\n            " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\n            <li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a></li>\n            <li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a></li>\n            <li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a></li>\n\n            <li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a></li>\n            <li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a></li>\n            " :
            "") + 
          "\n        </ul>\n    </section>\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n    <section class=\"menu-section\">\n        <h3 class=\"menu-section-title\">[[admin/menu:section-settings]]</h3>\n        <ul class=\"menu-section-list\">\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/homepage\">[[admin/menu:settings/homepage]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/guest\">[[admin/menu:settings/guest]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/languages\">[[admin/menu:settings/languages]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/social\">[[admin/menu:settings/social]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a></li>\n        </ul>\n    </section>\n    <section class=\"menu-section\">\n        <h3 class=\"menu-section-title\">[[admin/menu:section-appearance]]</h3>\n        <ul class=\"menu-section-list\">\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a></li>\n        </ul>\n    </section>\n\n    <section class=\"menu-section\">\n        <h3 class=\"menu-section-title\">[[admin/menu:section-extend]]</h3>\n        <ul class=\"menu-section-list\">\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a></li>\n        </ul>\n    </section>\n\n    " + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\n    <section class=\"menu-section\">\n        <h3 class=\"menu-section-title\">[[admin/menu:section-plugins]]</h3>\n        <ul class=\"menu-section-list\">\n            " + 
              compiled.blocks['plugins'](helpers, context, guard, iter, helper) + 
              "\n        </ul>\n    </section>\n    " :
            "") + 
          "\n\n    " + 
          (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
            "\n    <section class=\"menu-section\">\n        <h3 class=\"menu-section-title\">[[admin/menu:section-social-auth]]</h3>\n        <ul class=\"menu-section-list\">\n            " + 
              compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
              "\n        </ul>\n    </section>\n    " :
            "") + 
          "\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n    <section class=\"menu-section\">\n        <h3 class=\"menu-section-title\">[[admin/menu:section-advanced]]</h3>\n        <ul class=\"menu-section-list\">\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a></li>\n            <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a></li>\n            " + 
          (guard((context != null) ? context['env'] : null) ?
            "\n            <li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a></li>\n            " :
            "") + 
          "\n        </ul>\n    </section>\n    " :
        "") + 
      "\n</nav>\n\n<main id=\"panel\">\n    <nav class=\"header\" id=\"header\">\n        <div class=\"pull-left\">\n            <div id=\"mobile-menu\">\n                <div class=\"bar\"></div>\n                <div class=\"bar\"></div>\n                <div class=\"bar\"></div>\n            </div>\n            <h1 id=\"main-page-title\"></h1>\n        </div>\n\n        <ul class=\"quick-actions hidden-xs hidden-sm\">\n            <li component=\"logout\">\n    <a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\n        <i class=\"fa fw-fw fa-sign-out\"></i>\n    </a>\n</li>\n\n" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n<li>\n    <a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\n        <i class=\"fa fa-fw fa-repeat\"></i>\n    </a>\n</li>\n<li>\n    <a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\n        <i class=\"fa fa-fw fa-refresh\"></i>\n    </a>\n</li>\n" :
        "") + 
      "\n\n<li>\n    <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\n        <i class=\"fa fa-fw fa-home\"></i>\n    </a>\n</li>\n\n            " + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n            <form role=\"search\">\n                <div id=\"acp-search\" >\n                    <div class=\"dropdown\" data-text=\"[[admin/menu:search.placeholder]]\">\n                        <input type=\"text\" data-toggle=\"dropdown\" class=\"form-control\">\n                        <ul class=\"dropdown-menu dropdown-menu-right state-start-typing\" role=\"menu\">\n                            <li role=\"presentation\" class=\"no-results\">\n                                <a>[[admin/menu:search.no-results]]</a>\n                            </li>\n                            <li role=\"presentation\" class=\"divider search-forum\"></li>\n                            <li role=\"presentation\" class=\"search-forum\">\n                                <a role=\"menuitem\" target=\"_top\" href=\"#\">\n                                    [[admin/menu:search.search-forum]]\n                                </a>\n                            </li>\n                            <li role=\"presentation\" class=\"keep-typing\">\n                                <a>[[admin/menu:search.keep-typing]]</a>\n                            </li>\n                            <li role=\"presentation\" class=\"start-typing\">\n                                <a>[[admin/menu:search.start-typing]]</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </form>\n            " :
        "") + 
      "\n\n            " + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n            <div class=\"alert " + 
          (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "alert-warning" :
            "alert-info") + 
          " well-sm\">\n    <span>[[admin/menu:alerts.version, " + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "]]</span>\n    " + 
          (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "\n    <span style=\"margin-left: 10px\">\n        <a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n            <u>[[admin/menu:alerts.upgrade, " + 
              __escape(guard((context != null) ? context['latestVersion'] : null)) + 
              "]]</u>\n        </a>\n    </span>\n    " :
            "") + 
          "\n</div>\n            " :
        "") + 
      "\n\n            <li class=\"reconnect-spinner\">\n                <a href=\"#\" id=\"reconnect\" class=\"hide\" title=\"[[admin/menu:connection-lost, " + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "]]\">\n                    <i class=\"fa fa-check\"></i>\n                </a>\n            </li>\n        </ul>\n\n\n        <ul id=\"main-menu\">\n            " + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:dashboard'] : null) ?
        "\n            <li class=\"dropdown menu-item\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-dashboard]]</a>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard\">[[admin/menu:dashboard/overview]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/logins\">[[admin/menu:dashboard/logins]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/users\">[[admin/menu:dashboard/users]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/topics\">[[admin/menu:dashboard/topics]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/searches\">[[admin/menu:dashboard/searches]]</a></li>\n                </ul>\n            </li>\n            " :
        "") + 
      "\n\n            " + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\n            <li class=\"dropdown menu-item\">\n                <a id=\"manage-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-manage]]</a>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "<li><a id=\"manage-categories\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a></li>" :
            "") + 
          "\n                    " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a></li>" :
            "") + 
          "\n                    " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "<li><a id=\"manage-users\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a></li>" :
            "") + 
          "\n                    " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a></li>" :
            "") + 
          "\n                    " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a></li>" :
            "") + 
          "\n                    " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a></li>" :
            "") + 
          "\n                    " + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\n                    <li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a></li>\n                    <li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a></li>\n                    <li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a></li>\n                    <li role=\"separator\" class=\"divider\"></li>\n                    <li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a></li>\n                    <li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a></li>\n                    " :
            "") + 
          "\n                </ul>\n            </li>\n            " :
        "") + 
      "\n\n            " + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n            <li class=\"dropdown menu-item\">\n                <a id=\"settings-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-settings]]</a>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li><a id=\"settings-general\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/homepage\">[[admin/menu:settings/homepage]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/guest\">[[admin/menu:settings/guest]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/languages\">[[admin/menu:settings/languages]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/social\">[[admin/menu:settings/social]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a></li>\n                </ul>\n            </li>\n            <li class=\"dropdown menu-item\">\n                <a id=\"appearance-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-appearance]]</a>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li><a id=\"appearance-themes\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a></li>\n                    <li><a id=\"appearance-skins\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a></li>\n                    <li><a id=\"appearance-customise\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a></li>\n                </ul>\n            </li>\n            <li class=\"dropdown menu-item\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-extend]]</a>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a></li>\n                </ul>\n            </li>\n            " + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\n            <li class=\"dropdown menu-item\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-plugins]]</a>\n                <ul class=\"dropdown-menu plugins-menu\" role=\"menu\">\n                    <li class=\"dropdown-header\">[[admin/menu:section-plugins]]</li>\n                    " + 
              iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
                var key = key0;
                return "\n                    <li>\n                        <a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/admin" + 
                  __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
                  "</a>\n                    </li>\n                    ";
              }, function alt() {
                return "";
              }) + 
              "\n                    " + 
              (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                "\n                    <li class=\"divider\"></li>\n                    " + 
                  (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                    "\n                    <li class=\"dropdown-header\">[[admin/menu:section-social-auth]]</li>\n                    " + 
                      iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
                        var key = key0;
                        return "\n                    <li>\n                        <a href=\"" + 
                          __escape(guard((context != null) ? context['relative_path'] : null)) + 
                          "/admin" + 
                          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
                          "\">" + 
                          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
                          "</a>\n                    </li>\n                    ";
                      }, function alt() {
                        return "";
                      }) + 
                      "\n                    " :
                    "") + 
                  "\n                    " :
                "") + 
              "\n                    <li class=\"divider\"></li>\n                    <li data-link=\"1\">\n                        <a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/extend/plugins#download\">[[admin/menu:extend/plugins.install]]</a>\n                    </li>\n                </ul>\n            </li>\n            " :
            "") + 
          "\n            " :
        "") + 
      "\n\n            " + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n            <li class=\"dropdown menu-item\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-advanced]]</a>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a></li>\n                    <li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a></li>\n                    " + 
          (guard((context != null) ? context['env'] : null) ?
            "\n                    <li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a></li>\n                    " :
            "") + 
          "\n                </ul>\n            </li>\n            " :
        "") + 
      "\n        </ul>\n    </nav>";
  }

  compiled.blocks = {
    'plugins': function plugins(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <li>\n                <a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
          "</a>\n            </li>\n            ";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <li>\n                <a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          "</a>\n            </li>\n            ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
