
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
    return "<div class=\"account\">\n    " + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n    " + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\n<div data-widget-area=\"header\">\n    " + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n\n<div class=\"cover\" component=\"account/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null) ? context['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null) ? context['cover:position'] : null)) + 
      ";\">\n    <div class=\"avatar-wrapper\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\n        " + 
      (guard((context != null) ? context['picture'] : null) ?
        "\n        <img src=\"" + 
          __escape(guard((context != null) ? context['picture'] : null)) + 
          "\" class=\"avatar avatar-xl avatar-rounded\" />\n        " :
        "\n        <div class=\"avatar avatar-xl avatar-rounded\" style=\"background-color: " + 
          __escape(guard((context != null) ? context['icon:bgColor'] : null)) + 
          ";\" title=\"" + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['icon:text'] : null)) + 
          "</div>\n        ") + 
      "\n        <i component=\"user/status\" class=\"fa fa-circle status " + 
      __escape(guard((context != null) ? context['status'] : null)) + 
      "\" title=\"[[global:" + 
      __escape(guard((context != null) ? context['status'] : null)) + 
      "]]\"></i>\n\n        " + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n        " + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n        <button class=\"btn-morph persona-fab " + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "heart" :
                "plus") + 
              "\" title=\"" + 
              (guard((context != null) ? context['isFollowing'] : null) ?
                "[[global:unfollow]]" :
                "[[global:follow]]") + 
              "\">\n            <span>\n                <span class=\"s1\"></span>\n                <span class=\"s2\"></span>\n                <span class=\"s3\"></span>\n            </span>\n        </button>\n        ") + 
          "\n        " :
        "") + 
      "\n    </div>\n\n    <div class=\"container\">\n        <div class=\"btn-group account-fab bottom-sheet\">\n    <button type=\"button\" class=\"persona-fab dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fa fa-ellipsis-v\"></i>\n    </button>\n    <ul class=\"dropdown-menu dropdown-menu-right\">\n        " + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n        " + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n        " + 
              (guard((context != null) ? context['banned'] : null) ?
                "" :
                "\n        " + 
                  (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
                    "" :
                    "\n        <li class=\"" + 
                      (guard((context != null) ? context['hasPrivateChat'] : null) ?
                        "" :
                        "hidden") + 
                      "\">\n            <a component=\"account/chat\" href=\"#\">[[user:chat_with, " + 
                      __escape(guard((context != null) ? context['username'] : null)) + 
                      "]]</a>\n        </li>\n        <li>\n            <a component=\"account/new-chat\" href=\"#\">[[user:new_chat_with, " + 
                      __escape(guard((context != null) ? context['username'] : null)) + 
                      "]]</a>\n        </li>\n        ") + 
                  "\n        <li>\n            <a component=\"account/flag\" href=\"#\">[[user:flag-profile]]</a>\n        </li>\n        <li>\n            <a component=\"account/block\" href=\"#\">" + 
                  (guard((context != null) ? context['isBlocked'] : null) ?
                    "[[user:unblock_user]]" :
                    "[[user:block_user]]") + 
                  "</a>\n        </li>\n        <li role=\"separator\" class=\"divider\"></li>\n        ") + 
              "\n        ") + 
          "\n        " :
        "") + 
      "\n        <li>\n            <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"inline-block\" id=\"profile\">[[user:profile]]</a>\n        </li>\n        " + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit\">[[user:edit]]</a></li>\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\">[[user:settings]]</a></li>\n        " :
        "") + 
      "\n\n        " + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n        " + 
          ((guard((context != null) ? context['canBan'] : null) || guard((context != null) ? context['canMute'] : null)) ?
            "\n        <li role=\"separator\" class=\"divider\"></li>\n        <li class=\"dropdown-header\">[[user:admin_actions_label]]</li>\n        " :
            "") + 
          "\n        " + 
          (guard((context != null) ? context['canBan'] : null) ?
            "\n        <li class=\"" + 
              (guard((context != null) ? context['banned'] : null) ?
                "hide" :
                "") + 
              "\">\n            <a component=\"account/ban\" href=\"#\">[[user:ban_account]]</a>\n        </li>\n        <li class=\"" + 
              (guard((context != null) ? context['banned'] : null) ?
                "" :
                "hide") + 
              "\">\n            <a component=\"account/unban\" href=\"#\">[[user:unban_account]]</a>\n        </li>\n        " :
            "") + 
          "\n        " + 
          (guard((context != null) ? context['canMute'] : null) ?
            "\n        <li class=\"" + 
              (guard((context != null) ? context['muted'] : null) ?
                "hide" :
                "") + 
              "\">\n            <a component=\"account/mute\" href=\"#\">[[user:mute_account]]</a>\n        </li>\n        <li class=\"" + 
              (guard((context != null) ? context['muted'] : null) ?
                "" :
                "hide") + 
              "\">\n            <a component=\"account/unmute\" href=\"#\">[[user:unmute_account]]</a>\n        </li>\n        " :
            "") + 
          "\n        " + 
          (guard((context != null) ? context['isAdmin'] : null) ?
            "\n        <li>\n            <a component=\"account/delete-account\" href=\"#\" class=\"\">[[user:delete_account_as_admin]]</a>\n            <a component=\"account/delete-content\" href=\"#\" class=\"\">[[user:delete_content]]</a>\n            <a component=\"account/delete-all\" href=\"#\" class=\"\">[[user:delete_all]]</a>\n        </li>\n        " :
            "") + 
          "\n        ") + 
      "\n\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\">[[user:following]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "</span></a></li>\n        <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\">[[user:followers]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "</span></a></li>\n        " + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/blocks\">[[user:blocks]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['blocks'] : null)) + 
          "</span></a></li>\n        " :
        "") + 
      "\n        <li role=\"separator\" class=\"divider\"></li>\n        <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\">[[global:topics]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['topics'] : null)) + 
      "</span></a></li>\n        <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\">[[global:posts]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "</span></a></li>\n        " + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/best\">[[global:best]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['best'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['best'] : null)) + 
          "</span></a></li>\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/controversial\">[[global:controversial]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['controversial'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['controversial'] : null)) + 
          "</span></a></li>\n        ") + 
      "\n        <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\">[[global:header.groups]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['groups'] : null)) + 
      "</span></a></li>\n\n        " + 
      (guard((context != null) ? context['canEdit'] : null) ?
        "\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/categories\">[[user:watched_categories]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['categoriesWatched'] : null)) + 
          "</span></a></li>\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/bookmarks\">[[user:bookmarks]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['bookmarks'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['bookmarks'] : null)) + 
          "</span></a></li>\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/watched\">[[user:watched]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['watched'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['watched'] : null)) + 
          "</span></a></li>\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/ignored\">[[user:ignored]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['ignored'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['ignored'] : null)) + 
          "</span></a></li>\n        " + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n        <li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/upvoted\">[[global:upvoted]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
              __escape(guard((context != null && context['counts'] != null) ? context['counts']['upvoted'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['counts'] != null) ? context['counts']['upvoted'] : null)) + 
              "</span></a></li>\n        " + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\n        <li><a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null) ? context['userslug'] : null)) + 
                  "/downvoted\">[[global:downvoted]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
                  __escape(guard((context != null && context['counts'] != null) ? context['counts']['downvoted'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['counts'] != null) ? context['counts']['downvoted'] : null)) + 
                  "</span></a></li>\n        ") + 
              "\n        ") + 
          "\n        <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/uploads\">[[global:uploads]] <span class=\"badge badge-default pull-right formatted-number\" title=\"" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['counts'] != null) ? context['counts']['uploaded'] : null)) + 
          "</span></a></li>\n        " :
        "") + 
      "\n\n        " + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\n    </ul>\n</div>\n\n\n        " + 
      (guard((context != null) ? context['allowCoverPicture'] : null) ?
        "\n        " + 
          (guard((context != null) ? context['canEdit'] : null) ?
            "\n        <div class=\"controls\">\n            <span class=\"upload\"><i class=\"fa fa-fw fa-4x fa-upload\"></i></span>\n            <span class=\"resize\"><i class=\"fa fa-fw fa-4x fa-arrows\"></i></span>\n            <span class=\"remove\"><i class=\"fa fa-fw fa-4x fa-times\"></i></span>\n        </div>\n        <div class=\"save\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n        <div class=\"indicator\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n        " :
            "") + 
          "\n        " :
        "") + 
      "\n    </div>\n</div>\n\n\n    <div class=\"profile row\">\n        <h1 class=\"fullname\">" + 
      (guard((context != null) ? context['fullname'] : null) ?
        __escape(guard((context != null) ? context['fullname'] : null)) :
        __escape(guard((context != null) ? context['username'] : null))) + 
      "</h1>\n        <h2 class=\"username\">" + 
      (guard((context != null) ? context['banned'] : null) ?
        "[[user:banned]]" :
        "@" + 
          __escape(guard((context != null) ? context['username'] : null))) + 
      "</h2>\n        " + 
      (guard((context != null) ? context['isAdminOrGlobalModeratorOrModerator'] : null) ?
        "\n        " + 
          (guard((context != null) ? context['banned'] : null) ?
            "\n        <div class=\"text-center\">\n        " + 
              (guard((context != null) ? context['banned_until'] : null) ?
                "\n        [[user:info.banned-until, " + 
                  __escape(guard((context != null) ? context['banned_until_readable'] : null)) + 
                  "]]\n        " :
                "\n        [[user:info.banned-permanently]]\n        ") + 
              "\n        </div>\n        " :
            "") + 
          "\n        " :
        "") + 
      "\n\n        " + 
      (guard((context != null && context['selectedGroup'] != null) ? context['selectedGroup']['length'] : null) ?
        "\n        <div class=\"text-center\">\n        " + 
          compiled.blocks['selectedGroup'](helpers, context, guard, iter, helper) + 
          "\n        </div>\n        <br/>\n        " :
        "") + 
      "\n\n        " + 
      (guard((context != null) ? context['aboutme'] : null) ?
        "\n        <span component=\"aboutme\" class=\"text-center aboutme\">" + 
          __escape(guard((context != null) ? context['aboutmeParsed'] : null)) + 
          "</span>\n        " :
        "") + 
      "\n\n        <div class=\"account-stats\">\n            " + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n            <div class=\"stat\">\n                <div class=\"human-readable-number\" title=\"" + 
          __escape(guard((context != null) ? context['reputation'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['reputation'] : null)) + 
          "</div>\n                <span class=\"stat-label\">[[global:reputation]]</span>\n            </div>\n            ") + 
      "\n\n            <div class=\"stat\">\n                <div class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['profileviews'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['profileviews'] : null)) + 
      "</div>\n                <span class=\"stat-label\">[[user:profile_views]]</span>\n            </div>\n\n            <div class=\"stat\">\n                <div><a class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['posts'] : null)) + 
      "</a></div>\n                <span class=\"stat-label\">[[global:posts]]</span>\n            </div>\n\n            <div class=\"stat\">\n                <div><a class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['followers'] : null)) + 
      "</a></div>\n                <span class=\"stat-label\">[[user:followers]]</span>\n            </div>\n\n            <div class=\"stat\">\n                <div><a class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\">" + 
      __escape(guard((context != null && context['counts'] != null) ? context['counts']['following'] : null)) + 
      "</a></div>\n                <span class=\"stat-label\">[[user:following]]</span>\n            </div>\n        </div>\n\n        <div class=\"text-center profile-meta\">\n            <span>[[user:joined]]</span>\n            <strong class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['joindateISO'] : null)) + 
      "\"></strong>\n\n            <span>[[user:lastonline]]</span>\n            <strong class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['lastonlineISO'] : null)) + 
      "\"></strong><br />\n\n            " + 
      (guard((context != null) ? context['email'] : null) ?
        "\n            <span>[[user:email]]</span>\n            <strong><i class=\"fa fa-eye-slash " + 
          __escape(guard((context != null) ? context['emailClass'] : null)) + 
          "\" title=\"[[user:email_hidden]]\"></i> " + 
          __escape(guard((context != null) ? context['email'] : null)) + 
          "</strong>\n            " :
        "") + 
      "\n\n            " + 
      (guard((context != null) ? context['websiteName'] : null) ?
        "\n            <span>[[user:website]]</span>\n            <strong><a href=\"" + 
          __escape(guard((context != null) ? context['websiteLink'] : null)) + 
          "\" rel=\"nofollow noopener noreferrer\">" + 
          __escape(guard((context != null) ? context['websiteName'] : null)) + 
          "</a></strong>\n            " :
        "") + 
      "\n\n            " + 
      (guard((context != null) ? context['location'] : null) ?
        "\n            <span>[[user:location]]</span>\n            <strong>" + 
          __escape(guard((context != null) ? context['location'] : null)) + 
          "</strong>\n            " :
        "") + 
      "\n\n            " + 
      (guard((context != null) ? context['age'] : null) ?
        "\n            <span>[[user:age]]</span>\n            <strong>" + 
          __escape(guard((context != null) ? context['age'] : null)) + 
          "</strong>\n            " :
        "") + 
      "\n        </div>\n    </div>\n\n\n    <hr />\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 account-block hidden\">\n            <div class=\"account-picture-block text-center\">\n                <span>\n                    <span class=\"account-username\"> " + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "</span>\n                </span>\n\n                " + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n                <a component=\"account/unfollow\" href=\"#\" class=\"btn btn-default" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            " hide") + 
          "\">[[user:unfollow]]</a>\n                <a component=\"account/follow\" href=\"#\" class=\"btn btn-primary" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            " hide" :
            "") + 
          "\">[[user:follow]]</a>\n                ") + 
      "\n            </div>\n        </div>\n    </div>\n\n    " + 
      (guard((context != null && context['groups'] != null) ? context['groups']['length'] : null) ?
        "\n    <div class=\"row\">\n        <div class=\"col-xs-12 hidden\">\n            " + 
          compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
          "\n        </div>\n    </div>\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null && context['ips'] != null) ? context['ips']['length'] : null) ?
        "\n    <div class=\"row\">\n        <div class=\"col-xs-12 hidden\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">[[global:recentips]]</h3>\n            </div>\n            <div class=\"panel-body\">\n            " + 
          compiled.blocks['ips'](helpers, context, guard, iter, helper) + 
          "\n            </div>\n        </div>\n    </div>\n    " :
        "") + 
      "\n\n    <div class=\"row\">\n        " + 
      (guard((context != null && context['bestPosts'] != null) ? context['bestPosts']['length'] : null) ?
        "\n        <div class=\"col-lg-12 col-xs-12\">\n            <h1>[[pages:account/best, " + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "]]</h1>\n\n            <div class=\"col-xs-12\">\n                <ul component=\"posts\" class=\"posts-list\">\n                " + 
          compiled.blocks['bestPosts'](helpers, context, guard, iter, helper) + 
          "\n                </ul>\n            </div>\n        </div>\n        " :
        "") + 
      "\n        " + 
      (guard((context != null && context['latestPosts'] != null) ? context['latestPosts']['length'] : null) ?
        "\n        <div class=\"col-lg-12 col-xs-12\">\n            <h1>[[pages:account/latest-posts, " + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "]]</h1>\n            <div class=\"col-xs-12\">\n                <ul component=\"posts\" class=\"posts-list\">\n                " + 
          compiled.blocks['latestPosts'](helpers, context, guard, iter, helper) + 
          "\n                </ul>\n            </div>\n        </div>\n        " :
        "") + 
      "\n    </div>\n\n    <div id=\"user-action-alert\" class=\"alert alert-success hide\"></div>\n</div>\n";
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
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    " + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n    ";
      }, function alt() {
        return "";
      });
    },
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        " + 
          (index === 0 ?
            "\n        <li role=\"separator\" class=\"divider\"></li>\n        " :
            "") + 
          "\n        <li id=\"" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['id'] : null)) + 
          "\" class=\"plugin-link " + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['public'] : null) ?
            "public" :
            "private") + 
          "\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['route'] : null)) + 
          "\">" + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null) ?
            "<i class=\"fa fa-fw " + 
              __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['name'] : null)) + 
          "</a></li>\n        ";
      }, function alt() {
        return "";
      });
    },
    'selectedGroup': function selectedGroup(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['selectedGroup'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        " + 
          (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['slug'] : null) ?
            "\n            <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/groups/" + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['slug'] : null)) + 
              "\"><small class=\"label group-label inline-block\" style=\"color:" + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['textColor'] : null)) + 
              ";background-color: " + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['labelColor'] : null)) + 
              ";\">" + 
              (guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['icon'] : null) ?
                "<i class=\"fa " + 
                  __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['icon'] : null)) + 
                  "\"></i> " :
                "") + 
              __escape(guard((context != null && context['selectedGroup'] != null && context['selectedGroup'][key0] != null) ? context['selectedGroup'][key0]['userTitle'] : null)) + 
              "</small></a>\n        " :
            "") + 
          "\n        ";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\"><span class=\"label group-label inline-block\" style=\"background-color: " + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['labelColor'] : null)) + 
          ";\">" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitle'] : null)) + 
          "</span></a>\n            ";
      }, function alt() {
        return "";
      });
    },
    'ips': function ips(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['ips'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <div>" + 
          __escape(guard((context != null && context['ips'] != null) ? context['ips'][key0] : null)) + 
          "</div>\n            ";
      }, function alt() {
        return "";
      });
    },
    'bestPosts': function bestPosts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['bestPosts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <li component=\"post\" class=\"posts-list-item row" + 
          (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null) ? context['bestPosts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null) ? context['bestPosts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"col-lg-11 col-sm-10 col-xs-9 post-body\">\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['pid'] : null)) + 
          "\">\n            " + 
          (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null) ? context['bestPosts'][key0]['topic']['title'] : null)) + 
          "\n        </a>\n\n        <div component=\"post/content\" class=\"content\">\n            " + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['content'] : null)) + 
          "\n        </div>\n\n        <small class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['category'] != null) ? context['bestPosts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted_in, " + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['category'] != null) ? context['bestPosts'][key0]['category']['name'] : null)) + 
          "]]</a></small>\n\n        " + 
          (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['isMainPost'] : null) ?
            "\n        " + 
              (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null && context['bestPosts'][key0]['topic']['tags'] != null) ? context['bestPosts'][key0]['topic']['tags']['length'] : null) ?
                "\n        <span class=\"tag-list\">\n            " + 
                  iter(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null) ? context['bestPosts'][key0]['topic']['tags'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n            <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/tags/" + 
                      __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null && context['bestPosts'][key0]['topic']['tags'] != null && context['bestPosts'][key0]['topic']['tags'][key1] != null) ? context['bestPosts'][key0]['topic']['tags'][key1]['valueEncoded'] : null)) + 
                      "\"><span class=\"tag tag-item tag-class-" + 
                      __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null && context['bestPosts'][key0]['topic']['tags'] != null && context['bestPosts'][key0]['topic']['tags'][key1] != null) ? context['bestPosts'][key0]['topic']['tags'][key1]['class'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null && context['bestPosts'][key0]['topic']['tags'] != null && context['bestPosts'][key0]['topic']['tags'][key1] != null) ? context['bestPosts'][key0]['topic']['tags'][key1]['valueEscaped'] : null)) + 
                      "</span></a>\n            ";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n        </span>\n        " :
                "") + 
              "\n        " :
            "") + 
          "\n\n        <div class=\"post-info\">\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['user'] != null) ? context['bestPosts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['user'] : null), "md", guard((context != null) ? context['true'] : null), "user-img not-responsive"])) + 
          "</a>\n\n            <div class=\"post-author\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['user'] != null) ? context['bestPosts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['user'] != null) ? context['bestPosts'][key0]['user']['displayname'] : null)) + 
          "</a><br />\n                <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n            </div>\n        </div>\n    </div>\n</li>\n                ";
      }, function alt() {
        return "";
      });
    },
    'latestPosts': function latestPosts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['latestPosts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <li component=\"post\" class=\"posts-list-item row" + 
          (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null) ? context['latestPosts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null) ? context['latestPosts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"col-lg-11 col-sm-10 col-xs-9 post-body\">\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['pid'] : null)) + 
          "\">\n            " + 
          (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null) ? context['latestPosts'][key0]['topic']['title'] : null)) + 
          "\n        </a>\n\n        <div component=\"post/content\" class=\"content\">\n            " + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['content'] : null)) + 
          "\n        </div>\n\n        <small class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['category'] != null) ? context['latestPosts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted_in, " + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['category'] != null) ? context['latestPosts'][key0]['category']['name'] : null)) + 
          "]]</a></small>\n\n        " + 
          (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['isMainPost'] : null) ?
            "\n        " + 
              (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null && context['latestPosts'][key0]['topic']['tags'] != null) ? context['latestPosts'][key0]['topic']['tags']['length'] : null) ?
                "\n        <span class=\"tag-list\">\n            " + 
                  iter(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null) ? context['latestPosts'][key0]['topic']['tags'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n            <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/tags/" + 
                      __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null && context['latestPosts'][key0]['topic']['tags'] != null && context['latestPosts'][key0]['topic']['tags'][key1] != null) ? context['latestPosts'][key0]['topic']['tags'][key1]['valueEncoded'] : null)) + 
                      "\"><span class=\"tag tag-item tag-class-" + 
                      __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null && context['latestPosts'][key0]['topic']['tags'] != null && context['latestPosts'][key0]['topic']['tags'][key1] != null) ? context['latestPosts'][key0]['topic']['tags'][key1]['class'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null && context['latestPosts'][key0]['topic']['tags'] != null && context['latestPosts'][key0]['topic']['tags'][key1] != null) ? context['latestPosts'][key0]['topic']['tags'][key1]['valueEscaped'] : null)) + 
                      "</span></a>\n            ";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n        </span>\n        " :
                "") + 
              "\n        " :
            "") + 
          "\n\n        <div class=\"post-info\">\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['user'] != null) ? context['latestPosts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['user'] : null), "md", guard((context != null) ? context['true'] : null), "user-img not-responsive"])) + 
          "</a>\n\n            <div class=\"post-author\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['user'] != null) ? context['latestPosts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['user'] != null) ? context['latestPosts'][key0]['user']['displayname'] : null)) + 
          "</a><br />\n                <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n            </div>\n        </div>\n    </div>\n</li>\n                ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
