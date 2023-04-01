
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
    return "<!DOCTYPE html>\n<html lang=\"" + 
      __escape(helper(context, helpers, 'localeToHTML', [guard((context != null) ? context['userLang'] : null), guard((context != null) ? context['defaultLang'] : null)])) + 
      "\" " + 
      (guard((context != null) ? context['languageDirection'] : null) ?
        "data-dir=\"" + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          "\" style=\"direction: " + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          ";\"" :
        "") + 
      ">\n<head>\n    <title>" + 
      __escape(guard((context != null) ? context['browserTitle'] : null)) + 
      "</title>\n    " + 
      compiled.blocks['metaTags'](helpers, context, guard, iter, helper) + 
      "\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/client" + 
      (guard((context != null) ? context['bootswatchSkin'] : null) ?
        "-" + 
          __escape(guard((context != null) ? context['bootswatchSkin'] : null)) :
        "") + 
      ".css?" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
      "\" />\n    " + 
      compiled.blocks['linkTags'](helpers, context, guard, iter, helper) + 
      "\n\n    <script>\n        var config = JSON.parse('" + 
      guard((context != null) ? context['configJSON'] : null) + 
      "');\n        var app = {\n            user: JSON.parse('" + 
      guard((context != null) ? context['userJSON'] : null) + 
      "')\n        };\n    </script>\n\n    " + 
      (guard((context != null) ? context['useCustomHTML'] : null) ?
        "\n    " + 
          guard((context != null) ? context['customHTML'] : null) + 
          "\n    " :
        "") + 
      "\n    " + 
      (guard((context != null) ? context['useCustomCSS'] : null) ?
        "\n    <style>" + 
          guard((context != null) ? context['customCSS'] : null) + 
          "</style>\n    " :
        "") + 
      "\n</head>\n\n<body class=\"" + 
      __escape(guard((context != null) ? context['bodyClass'] : null)) + 
      " skin-" + 
      (guard((context != null) ? context['bootswatchSkin'] : null) ?
        __escape(guard((context != null) ? context['bootswatchSkin'] : null)) :
        "noskin") + 
      "\">\n    <nav id=\"menu\" class=\"slideout-menu hidden\">\n        <section class=\"menu-section\" data-section=\"navigation\">\n    <ul class=\"menu-section-list\"></ul>\n</section>\n\n\n    </nav>\n    <nav id=\"chats-menu\" class=\"slideout-menu hidden\">\n        " + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<ul class=\"nav nav-pills\">\n    <li>\n        <a href=\"#notifications\" data-toggle=\"tab\"><span class=\"counter unread-count\" component=\"notifications/icon\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
          "\"></span> <i class=\"fa fa-fw fa-bell\"></i></a>\n    </li>\n    " + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n    <li>\n        <a href=\"#chats\" data-toggle=\"tab\"><i class=\"counter unread-count\" component=\"chat/icon\" data-content=\"" + 
              __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
              "\"></i> <i class=\"fa fa-fw fa-comment\"></i></a>\n    </li>\n    ") + 
          "\n    <li class=\"active\">\n        <a href=\"#profile\" data-toggle=\"tab\">\n            " + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "sm", guard((context != null) ? context['true'] : null), "user-icon"])) + 
          "\n            <i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
          "\"></i>\n        </a>\n    </li>\n</ul>\n\n<div class=\"tab-content\">\n    <div class=\"tab-pane fade active in\" id=\"profile\">\n        <section class=\"menu-section\" data-section=\"profile\">\n            <ul class=\"menu-section-list\" component=\"header/usercontrol\"></ul>\n        </section>\n    </div>\n    <div class=\"tab-pane fade\" id=\"notifications\">\n        <section class=\"menu-section\" data-section=\"notifications\">\n            <ul class=\"menu-section-list notification-list-mobile\" component=\"notifications/list\"></ul>\n            <p class=\"menu-section-list\"><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/notifications\">[[notifications:see_all]]</a></p>\n        </section>\n    </div>\n    " + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n    <div class=\"tab-pane fade\" id=\"chats\">\n        <section class=\"menu-section\" data-section=\"chats\">\n            <ul class=\"menu-section-list chat-list\" component=\"chat/list\">\n                <a class=\"navigation-link\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/chats\">[[modules:chat.see_all]]</a>\n            </ul>\n        </section>\n    </div>\n    ") + 
          "\n</div>\n" :
        "") + 
      "\n    </nav>\n\n    <main id=\"panel\" class=\"slideout-panel\">\n        <nav class=\"navbar navbar-default navbar-fixed-top header\" id=\"header-menu\" component=\"navbar\">\n            <div class=\"container\">\n                            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle pull-left\" id=\"mobile-menu\">\n                    <i class=\"fa fa-lg fa-fw fa-bars unread-count\" data-content=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['mobileUnread'] : null)) + 
      "\" data-unread-url=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['unreadUrl'] : null)) + 
      "\"></i>\n                </button>\n                " + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n                <button type=\"button\" class=\"navbar-toggle\" id=\"mobile-chats\">\n                    <span component=\"notifications/icon\" class=\"notification-icon fa fa-fw fa-bell-o unread-count\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
          "\"></span>\n                    <span component=\"chat/icon\" class=\"notification-icon fa fa-fw fa-comments unread-count\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
          "\"></span>\n                    " + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "md", guard((context != null) ? context['true'] : null)])) + 
          "\n                </button>\n                " :
        "") + 
      "\n\n                " + 
      (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
        "\n                <div class=\"navbar-search visible-xs pull-right\">\n                    <form action=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/search\" method=\"GET\">\n                        <button type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-lg fa-fw fa-search\" title=\"[[global:header.search]]\"></i></button>\n                        <input autocomplete=\"off\" type=\"text\" class=\"form-control hidden\" name=\"term\" placeholder=\"[[global:search]]\"/>\n                        <button class=\"btn btn-primary hidden\" type=\"submit\"></button>\n                        <input type=\"text\" class=\"hidden\" name=\"in\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['searchDefaultInQuick'] : null)) + 
          "\" />\n                    </form>\n                    <div class=\"quick-search-container hidden\">\n                        <div class=\"quick-search-results-container\"></div>\n                    </div>\n                </div>\n                " :
        "") + 
      "\n\n                " + 
      (guard((context != null) ? context['brand:logo'] : null) ?
        "\n                <a href=\"" + 
          (guard((context != null) ? context['brand:logo:url'] : null) ?
            __escape(guard((context != null) ? context['brand:logo:url'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/") + 
          "\">\n                    <img alt=\"" + 
          __escape(guard((context != null) ? context['brand:logo:alt'] : null)) + 
          "\" class=\"" + 
          __escape(guard((context != null) ? context['brand:logo:display'] : null)) + 
          " forum-logo\" src=\"" + 
          __escape(guard((context != null) ? context['brand:logo'] : null)) + 
          "?" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
          "\" />\n                </a>\n                " :
        "") + 
      "\n                " + 
      (guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null) ?
        "\n                <a href=\"" + 
          (guard((context != null) ? context['title:url'] : null) ?
            __escape(guard((context != null) ? context['title:url'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/") + 
          "\">\n                    <h1 class=\"navbar-brand forum-title\">" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "</h1>\n                </a>\n                " :
        "") + 
      "\n\n                <div component=\"navbar/title\" class=\"visible-xs hidden\">\n                    <span></span>\n                </div>\n            </div>\n\n            <div id=\"nav-dropdown\" class=\"hidden-xs\">\n                " + 
      (guard((context != null) ? context['maintenanceHeader'] : null) ?
        "\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/login\">\n                            <i class=\"fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg\"></i>\n                            <span>[[global:login]]</span>\n                        </a>\n                    </li>\n                </ul>\n                " :
        "\n                " + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n\n                <ul id=\"logged-in-menu\" class=\"nav navbar-nav navbar-right\">\n                    <li class=\"notifications dropdown text-center hidden-xs\" component=\"notifications\">\n                        <a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/notifications\" title=\"[[global:header.notifications]]\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"notif_dropdown\" data-ajaxify=\"false\" role=\"button\">\n                            <i component=\"notifications/icon\" class=\"fa fa-fw fa-bell-o unread-count\" data-content=\"" + 
              __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
              "\"></i>\n                        </a>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"notif_dropdown\">\n                            <li>\n                                <ul component=\"notifications/list\" class=\"notification-list\">\n                                    <li class=\"loading-text\">\n                                        <a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:notifications.loading]]</a>\n                                    </li>\n                                </ul>\n                            </li>\n                            <li class=\"notif-dropdown-link\">\n                                <div class=\"btn-group btn-group-justified\">\n                                    <a role=\"button\" href=\"#\" class=\"btn btn-secondary mark-all-read\"><i class=\"fa fa-check-double\"></i> [[notifications:mark_all_read]]</a>\n                                    <a class=\"btn btn-secondary\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/notifications\"><i class=\"fa fa-list\"></i> [[notifications:see_all]]</a>\n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n\n                    " + 
              (guard((context != null) ? context['canChat'] : null) ?
                "\n                    <li class=\"chats dropdown\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
                  "/chats\" title=\"[[global:header.chats]]\" id=\"chat_dropdown\" component=\"chat/dropdown\" data-ajaxify=\"false\" role=\"button\">\n                            <i component=\"chat/icon\" class=\"fa fa-comment-o fa-fw unread-count\" data-content=\"" + 
                  __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
                  "\"></i> <span class=\"visible-xs-inline\">[[global:header.chats]]</span>\n                        </a>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"chat_dropdown\">\n                            <li>\n                                <ul component=\"chat/list\" class=\"chat-list chats-list\">\n                                    <li class=\"loading-text\">\n                                        <a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:chats.loading]]</a>\n                                    </li>\n                                </ul>\n                            </li>\n                            <li class=\"notif-dropdown-link\">\n                                <div class=\"btn-group btn-group-justified\">\n                                    <a class=\"btn btn-secondary mark-all-read\" href=\"#\" component=\"chats/mark-all-read\"><i class=\"fa fa-check-double\"></i> [[modules:chat.mark_all_read]]</a>\n                                    <a class=\"btn btn-secondary\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
                  "/chats\"><i class=\"fa fa-comments\"></i> [[modules:chat.see_all]]</a>\n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n                    " :
                "") + 
              "\n\n                    <li id=\"user_label\" class=\"dropdown\">\n                        <label for=\"user-control-list-check\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"user_dropdown\" title=\"[[global:header.profile]]\" role=\"button\">\n                            " + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "md", guard((context != null) ? context['true'] : null)])) + 
              "\n                            <span id=\"user-header-name\" class=\"visible-xs-inline\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</span>\n                        </label>\n                        <input type=\"checkbox\" class=\"hidden\" id=\"user-control-list-check\" aria-hidden=\"true\">\n                        <ul id=\"user-control-list\" component=\"header/usercontrol\" class=\"dropdown-menu\" aria-labelledby=\"user_dropdown\">\n                            <li>\n                                <a component=\"header/profilelink\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "\">\n                                    <i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
              "\"></i> <span component=\"header/username\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</span>\n                                </a>\n                            </li>\n                            <li role=\"presentation\" class=\"divider\"></li>\n                            <li>\n                                <a href=\"#\" class=\"user-status\" data-status=\"online\">\n                                    <i class=\"fa fa-fw fa-circle status online\"></i><span " + 
              (guard((context != null && context['user'] != null) ? context['user']['online'] : null) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:online]]</span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"user-status\" data-status=\"away\">\n                                    <i class=\"fa fa-fw fa-circle status away\"></i><span " + 
              (guard((context != null && context['user'] != null) ? context['user']['away'] : null) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:away]]</span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"user-status\" data-status=\"dnd\">\n                                    <i class=\"fa fa-fw fa-circle status dnd\"></i><span " + 
              (guard((context != null && context['user'] != null) ? context['user']['dnd'] : null) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:dnd]]</span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"user-status\" data-status=\"offline\">\n                                    <i class=\"fa fa-fw fa-circle status offline\"></i><span " + 
              (guard((context != null && context['user'] != null) ? context['user']['offline'] : null) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:invisible]]</span>\n                                </a>\n                            </li>\n                            <li role=\"presentation\" class=\"divider\"></li>\n                            <li>\n                                <a component=\"header/profilelink/edit\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/edit\">\n                                    <i class=\"fa fa-fw fa-edit\"></i> <span>[[user:edit-profile]]</span>\n                                </a>\n                            </li>\n                            <li>\n                                <a component=\"header/profilelink/settings\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/settings\">\n                                    <i class=\"fa fa-fw fa-gear\"></i> <span>[[user:settings]]</span>\n                                </a>\n                            </li>\n                            " + 
              (guard((context != null) ? context['showModMenu'] : null) ?
                "\n                            <li role=\"presentation\" class=\"divider\"></li>\n                            <li class=\"dropdown-header\">[[pages:moderator-tools]]</li>\n                            <li>\n                                <a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/flags\">\n                                    <i class=\"fa fa-fw fa-flag\"></i> <span>[[pages:flagged-content]]</span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/post-queue\">\n                                    <i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/ip-blacklist\">\n                                    <i class=\"fa fa-fw fa-ban\"></i> <span>[[pages:ip-blacklist]]</span>\n                                </a>\n                            </li>\n                            " :
                "\n                            " + 
                  (guard((context != null) ? context['postQueueEnabled'] : null) ?
                    "\n                            <li>\n                                <a href=\"" + 
                      __escape(guard((context != null) ? context['relative_path'] : null)) + 
                      "/post-queue\">\n                                    <i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\n                                </a>\n                            </li>\n                            " :
                    "") + 
                  "\n                            ") + 
              "\n\n                            <li role=\"presentation\" class=\"divider\"></li>\n                            <li component=\"user/logout\">\n                                <form method=\"post\" action=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/logout\">\n                                    <input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
              "\">\n                                    <input type=\"hidden\" name=\"noscript\" value=\"true\">\n                                    <button type=\"submit\" class=\"btn btn-link\">\n                                        <i class=\"fa fa-fw fa-sign-out\"></i><span> [[global:logout]]</span>\n                                    </button>\n                                </form>\n                            </li>\n                        </ul>\n                    </li>\n\n                </ul>\n                " :
            "\n                <ul id=\"logged-out-menu\" class=\"nav navbar-nav navbar-right\">\n                    " + 
              (guard((context != null) ? context['allowRegistration'] : null) ?
                "\n                    <li>\n                        <a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/register\">\n                            <i class=\"fa fa-pencil fa-fw hidden-sm hidden-md hidden-lg\"></i>\n                            <span>[[global:register]]</span>\n                        </a>\n                    </li>\n                    " :
                "") + 
              "\n                    <li>\n                        <a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/login\">\n                            <i class=\"fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg\"></i>\n                            <span>[[global:login]]</span>\n                        </a>\n                    </li>\n                </ul>\n                ") + 
          "\n                " + 
          (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
            "\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <form id=\"search-form\" class=\"navbar-form navbar-right hidden-xs\" role=\"search\" method=\"GET\">\n                            <button id=\"search-button\" type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-search fa-fw\" title=\"[[global:header.search]]\"></i></button>\n                            <div class=\"hidden\" id=\"search-fields\">\n                                <div class=\"form-group\">\n                                    <input autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\">\n                                    <a href=\"#\"><i class=\"fa fa-gears fa-fw advanced-search-link\"></i></a>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-default hide\">[[global:search]]</button>\n                            </div>\n                        </form>\n                        <div id=\"quick-search-container\" class=\"quick-search-container hidden\">\n                            <div class=\"checkbox filter-category\">\n                                <label>\n                                    <input type=\"checkbox\" checked><span class=\"name\"></span>\n                                </label>\n                            </div>\n                            <div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n                            <div class=\"quick-search-results-container\"></div>\n                        </div>\n                    </li>\n                    <li class=\"visible-xs\" id=\"search-menu\">\n                        <a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/search\">\n                            <i class=\"fa fa-search fa-fw\"></i> [[global:search]]\n                        </a>\n                    </li>\n                </ul>\n                " :
            "") + 
          "\n\n                <ul class=\"nav navbar-nav navbar-right hidden-xs\">\n                    <li>\n                        <a href=\"#\" id=\"reconnect\" class=\"hide\" title=\"[[global:reconnecting-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "]]\">\n                            <i class=\"fa fa-check\"></i>\n                        </a>\n                    </li>\n                </ul>\n\n                <ul id=\"main-nav\" class=\"nav navbar-nav\">\n                    " + 
          compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
          "\n                </ul>\n\n                ") + 
      "\n            </div>\n\n            </div>\n        </nav>\n        <div class=\"container\" id=\"content\">\n        <noscript>\n    <div class=\"alert alert-danger\">\n        <p>\n            Your browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you have been placed in <strong>read-only mode</strong>.\n        </p>\n        <p>\n            Please download a browser that supports JavaScript, or enable it if it's disabled (i.e. NoScript).\n        </p>\n    </div>\n</noscript>\n        " + 
      (guard((context != null) ? context['noScriptMessage'] : null) ?
        "\n<noscript>\n    <div class=\"alert alert-info\">\n        <p>\n            " + 
          __escape(guard((context != null) ? context['noScriptMessage'] : null)) + 
          "\n        </p>\n    </div>\n</noscript>\n" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    'metaTags': function metaTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['metaTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildMetaTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'linkTags': function linkTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['linkTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildLinkTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    " + 
          (helper(context, helpers, 'displayMenuItem', [context, index]) ?
            "\n                    <li class=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " dropdown" :
                "") + 
              "\">\n                        <a title=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['title'] : null)) + 
              "\" class=\"navigation-link " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "dropdown-toggle" :
                "") + 
              "\"\n                        " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" " :
                " href=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
                  "\"") + 
              " " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null) ?
                "id=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
                  "\"" :
                "") + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['targetBlank'] : null) ?
                " target=\"_blank\"" :
                "") + 
              ">\n                            " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
                "\n                            <i class=\"fa fa-fw " + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) + 
                  "\" data-content=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
                  "\"></i>\n                            " :
                "") + 
              "\n                            " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null) ?
                "\n                            <span class=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['textClass'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null)) + 
                  "</span>\n                            " :
                "") + 
              "\n                            " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "\n                            <i class=\"fa fa-caret-down\"></i>\n                            " :
                "") + 
              "\n                        </a>\n                        " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "\n                        <ul class=\"dropdown-menu\">\n                            " + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdownContent'] : null)) + 
                  "\n                        </ul>\n                        " :
                "") + 
              "\n                    </li>\n                    " :
            "") + 
          "\n                    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
