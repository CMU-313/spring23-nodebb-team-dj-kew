
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
      "\n    </div>\n</div>\n\n\n    <div class=\"row\">\n        <h1>" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h1>\n        <div class=\"col-lg-12\">\n            <div class=\"btn-group bottom-sheet\" component=\"category/watch/all\">\n                <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n                    <span>[[user:change_all]]</span>\n                    <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\" component=\"category/watching\" data-state=\"watching\"><i class=\"fa fa-fw fa-inbox\"></i> [[category:watching]]<p class=\"help-text\"><small>[[category:watching.description]]</small></p></a></li>\n                    <li><a href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\"><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]<p class=\"help-text\"><small>[[category:not-watching.description]]</small></p></a></li>\n                    <li><a href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\"><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]<p class=\"help-text\"><small>[[category:ignoring.description]]</small></p></a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-lg-12\">\n            <ul class=\"categories\" itemscope itemtype=\"http://www.schema.org/ItemList\">\n                " + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n            </ul>\n            <div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div>\n        </div>\n    </div>\n</div>\n";
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
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <li component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['parentCid'] : null)) + 
          "\" class=\"row clearfix\">\n    <meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\">\n\n    <div class=\"content col-xs-12 col-md-10 col-sm-12 depth-" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['depth'] : null)) + 
          "\">\n        <div class=\"icon pull-left\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
          "\">\n            <i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
          "\"></i>\n        </div>\n\n        <h2 class=\"title\">\n            " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isSection'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\n" :
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\n") + 
              "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n</a>\n") + 
          "\n        </h2>\n        <div>\n            " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null) ?
            "\n            <div class=\"description\">\n                " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
              "\n            </div>\n            " :
            "") + 
          "\n        </div>\n    </div>\n\n    " + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n<div class=\"btn-group topic-watch-dropdown bottom-sheet\" component=\"topic/watch\">\n\n    <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\n        <span component=\"category/watching/menu\" " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isWatched'] : null) ?
                "" :
                "class=\"hidden\"") + 
              "><i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:watching]]</span></span>\n\n        <span component=\"category/notwatching/menu\" " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isNotWatched'] : null) ?
                "" :
                "class=\"hidden\"") + 
              "><i class=\"fa fa-fw fa-clock-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:not-watching]]</span></span>\n\n        <span component=\"category/ignoring/menu\" " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isIgnored'] : null) ?
                "" :
                "class=\"hidden\"") + 
              "><i class=\"fa fa-fw fa-eye-slash\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:ignoring]]</span></span>\n\n        <span class=\"caret\"></span>\n    </button>\n\n    <ul class=\"dropdown-menu dropdown-menu-right\">\n        <li><a href=\"#\" component=\"category/watching\" data-state=\"watching\"><i component=\"category/watching/check\" class=\"fa fa-fw " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isWatched'] : null) ?
                "fa-check" :
                "") + 
              "\"></i><i class=\"fa fa-fw fa-inbox\"></i> [[category:watching]]<p class=\"help-text\"><small>[[category:watching.description]]</small></p></a></li>\n\n        <li><a href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\"><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isNotWatched'] : null) ?
                "fa-check" :
                "") + 
              "\"></i><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]<p class=\"help-text\"><small>[[category:not-watching.description]]</small></p></a></li>\n\n        <li><a href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\"><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isIgnored'] : null) ?
                "fa-check" :
                "") + 
              "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]<p class=\"help-text\"><small>[[category:ignoring.description]]</small></p></a></li>\n    </ul>\n</div>\n" :
            "") + 
          "\n</li>\n\n                ";
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
