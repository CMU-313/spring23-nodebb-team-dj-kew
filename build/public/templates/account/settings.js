
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
      "\n    </div>\n</div>\n\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-md-6\">\n            " + 
      (guard((context != null) ? context['disableCustomUserSkins'] : null) ?
        "" :
        "\n            <h4>[[user:select-skin]]</h4>\n            <div class=\"well\">\n                <select class=\"form-control\" id=\"bootswatchSkin\" data-property=\"bootswatchSkin\">\n                    " + 
          compiled.blocks['bootswatchSkinOptions'](helpers, context, guard, iter, helper) + 
          "\n                </select>\n            </div>\n            ") + 
      "\n\n            " + 
      (guard((context != null) ? context['allowUserHomePage'] : null) ?
        "\n            <h4>[[user:select-homepage]]</h4>\n            <div class=\"well\">\n                <div class=\"form-group\">\n                    <label for=\"homePageRoute\">[[user:homepage]]</label>\n                    <select class=\"form-control\" id=\"homePageRoute\" data-property=\"homePageRoute\">\n                        <option value=\"none\">None</option>\n                        " + 
          compiled.blocks['homePageRoutes'](helpers, context, guard, iter, helper) + 
          "\n                    </select>\n                    <p class=\"help-block\">[[user:homepage_description]]</p>\n                </div>\n                <div id=\"homePageCustom\" class=\"form-group\" style=\"display: none;\">\n                    <label for=\"homePageCustom\">[[user:custom_route]]</label>\n                    <input type=\"text\" class=\"form-control\" data-property=\"homePageCustom\" id=\"homePageCustom\" value=\"" + 
          __escape(guard((context != null && context['settings'] != null) ? context['settings']['homePageRoute'] : null)) + 
          "\"/>\n                    <p class=\"help-block\">[[user:custom_route_help]]</p>\n                </div>\n            </div>\n            " :
        "") + 
      "\n\n            <h4>[[global:privacy]]</h4>\n            <div class=\"well\">\n                " + 
      (guard((context != null) ? context['hideEmail'] : null) ?
        "" :
        "\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-property=\"showemail\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['showemail'] : null) ?
            "checked " :
            "") + 
          "/> <strong>[[user:show_email]]</strong>\n                    </label>\n                </div>\n                ") + 
      "\n\n                " + 
      (guard((context != null) ? context['hideFullname'] : null) ?
        "" :
        "\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-property=\"showfullname\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['showfullname'] : null) ?
            "checked" :
            "") + 
          "/> <strong>[[user:show_fullname]]</strong>\n                    </label>\n                </div>\n                ") + 
      "\n                " + 
      (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
        "" :
        "\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-property=\"restrictChat\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['restrictChat'] : null) ?
            "checked" :
            "") + 
          "/> <strong>[[user:restrict_chats]]</strong>\n                    </label>\n                </div>\n                ") + 
      "\n            </div>\n\n            <h4>[[user:browsing]]</h4>\n            <div class=\"well\">\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-property=\"openOutgoingLinksInNewTab\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['openOutgoingLinksInNewTab'] : null) ?
        "checked" :
        "") + 
      "/> <strong>[[user:open_links_in_new_tab]]</strong>\n                    </label>\n                </div>\n                " + 
      (guard((context != null) ? context['inTopicSearchAvailable'] : null) ?
        "\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-property=\"topicSearchEnabled\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['topicSearchEnabled'] : null) ?
            "checked" :
            "") + 
          "/> <strong>[[user:enable_topic_searching]]</strong>\n                    </label>\n                </div>\n                <p class=\"help-block\">[[user:topic_search_help]]</p>\n                " :
        "") + 
      "\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-property=\"updateUrlWithPostIndex\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['updateUrlWithPostIndex'] : null) ?
        "checked" :
        "") + 
      "/> <strong>[[user:update_url_with_post_index]]</strong>\n                    </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-property=\"scrollToMyPost\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['scrollToMyPost'] : null) ?
        "checked" :
        "") + 
      "/> <strong>[[user:scroll_to_my_post]]</strong>\n                    </label>\n                </div>\n            </div>\n\n            <h4>[[global:pagination]]</h4>\n            <div class=\"well\">\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-property=\"usePagination\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['usePagination'] : null) ?
        "checked" :
        "") + 
      "> <strong>[[user:paginate_description]]</strong>\n                    </label>\n                </div>\n\n                <strong>[[user:topics_per_page]] ([[user:max_items_per_page, " + 
      __escape(guard((context != null) ? context['maxTopicsPerPage'] : null)) + 
      "]])</strong><br /> <input type=\"text\" class=\"form-control\" data-property=\"topicsPerPage\" value=\"" + 
      __escape(guard((context != null && context['settings'] != null) ? context['settings']['topicsPerPage'] : null)) + 
      "\"><br />\n                <strong>[[user:posts_per_page]] ([[user:max_items_per_page, " + 
      __escape(guard((context != null) ? context['maxPostsPerPage'] : null)) + 
      "]])</strong><br /> <input type=\"text\" class=\"form-control\" data-property=\"postsPerPage\" value=\"" + 
      __escape(guard((context != null && context['settings'] != null) ? context['settings']['postsPerPage'] : null)) + 
      "\"><br />\n            </div>\n\n            " + 
      (guard((context != null) ? context['disableEmailSubscriptions'] : null) ?
        "" :
        "\n            <h4>[[global:email]]</h4>\n            <div class=\"well\">\n                <div class=\"form-group\">\n                    <label for=\"dailyDigestFreq\">[[user:digest_label]]</label>\n                    <select class=\"form-control\" id=\"dailyDigestFreq\" data-property=\"dailyDigestFreq\" autocomplete=\"off\">\n                        " + 
          compiled.blocks['dailyDigestFreqOptions'](helpers, context, guard, iter, helper) + 
          "\n                    </select>\n                    <p class=\"help-block\">[[user:digest_description]]</p>\n                </div>\n            </div>\n            ") + 
      "\n\n            " + 
      compiled.blocks['customSettings'](helpers, context, guard, iter, helper) + 
      "\n\n        </div>\n\n        <div class=\"col-xs-12 col-md-6\">\n            <h4>[[global:language]]</h4>\n            <div class=\"well\">\n                <div class=\"row\">\n                    <div class=\"form-group col-lg-12\">\n                        <select data-property=\"userLang\" class=\"form-control\">\n                            " + 
      compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
      "\n                        </select>\n                    </div>\n                </div>\n                " + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n                " + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "\n                <label>[[user:acp_language]]</label>\n                <div class=\"row\">\n                    <div class=\"form-group col-lg-12\">\n                        <select data-property=\"acpLang\" class=\"form-control\">\n                            " + 
              compiled.blocks['acpLanguages'](helpers, context, guard, iter, helper) + 
              "\n                        </select>\n                    </div>\n                </div>\n                " :
            "") + 
          "\n                " :
        "") + 
      "\n            </div>\n\n            <h4>[[topic:watch]]</h4>\n            <div class=\"well\">\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-property=\"followTopicsOnCreate\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['followTopicsOnCreate'] : null) ?
        "checked " :
        "") + 
      "/> <strong>[[user:follow_topics_you_create]]</strong>\n                    </label>\n                </div>\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-property=\"followTopicsOnReply\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['followTopicsOnReply'] : null) ?
        "checked" :
        "") + 
      "/> <strong>[[user:follow_topics_you_reply_to]]</strong>\n                    </label>\n                </div>\n                <div class=\"form-group\">\n                    <label>[[user:default-category-watch-state]]</label>\n                    <select class=\"form-control\" data-property=\"categoryWatchState\">\n                        <option value=\"watching\" " + 
      (guard((context != null && context['categoryWatchState'] != null) ? context['categoryWatchState']['watching'] : null) ?
        "selected" :
        "") + 
      ">[[category:watching]]</option>\n                        <option value=\"notwatching\" " + 
      (guard((context != null && context['categoryWatchState'] != null) ? context['categoryWatchState']['notwatching'] : null) ?
        "selected" :
        "") + 
      ">[[category:not-watching]]</option>\n                        <option value=\"ignoring\" " + 
      (guard((context != null && context['categoryWatchState'] != null) ? context['categoryWatchState']['ignoring'] : null) ?
        "selected" :
        "") + 
      ">[[category:ignoring]]</option>\n                    </select>\n                </div>\n            </div>\n\n\n            <h4>[[user:notifications]]</h4>\n            <div class=\"well\">\n                " + 
      compiled.blocks['notificationSettings'](helpers, context, guard, iter, helper) + 
      "\n\n                <div class=\"row\">\n                    <div class=\"col-xs-7\">\n                        <label for=\"upvote-notif-freq\">[[user:upvote-notif-freq]]</label>\n                    </div>\n                    <div class=\"form-group col-xs-5\">\n                        <select class=\"form-control\" id=\"upvote-notif-freq\" name=\"upvote-notif-freq\" data-property=\"upvoteNotifFreq\">\n                            " + 
      compiled.blocks['upvoteNotifFreq'](helpers, context, guard, iter, helper) + 
      "\n                        </select>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-actions\">\n        <a id=\"submitBtn\" href=\"#\" class=\"btn btn-primary\">[[global:save_changes]]</a>\n    </div>\n</div>\n\n";
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
    'bootswatchSkinOptions': function bootswatchSkinOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['bootswatchSkinOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <option value=\"" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions'][key0] != null) ? context['bootswatchSkinOptions'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions'][key0] != null) ? context['bootswatchSkinOptions'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions'][key0] != null) ? context['bootswatchSkinOptions'][key0]['name'] : null)) + 
          "</option>\n                    ";
      }, function alt() {
        return "";
      });
    },
    'homePageRoutes': function homePageRoutes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['homePageRoutes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <option value=\"" + 
          __escape(guard((context != null && context['homePageRoutes'] != null && context['homePageRoutes'][key0] != null) ? context['homePageRoutes'][key0]['route'] : null)) + 
          "\" " + 
          (guard((context != null && context['homePageRoutes'] != null && context['homePageRoutes'][key0] != null) ? context['homePageRoutes'][key0]['selected'] : null) ?
            "selected=\"1\"" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['homePageRoutes'] != null && context['homePageRoutes'][key0] != null) ? context['homePageRoutes'][key0]['name'] : null)) + 
          "</option>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'dailyDigestFreqOptions': function dailyDigestFreqOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['dailyDigestFreqOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <option value=\"" + 
          __escape(guard((context != null && context['dailyDigestFreqOptions'] != null && context['dailyDigestFreqOptions'][key0] != null) ? context['dailyDigestFreqOptions'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['dailyDigestFreqOptions'] != null && context['dailyDigestFreqOptions'][key0] != null) ? context['dailyDigestFreqOptions'][key0]['selected'] : null) ?
            "selected=\"1\"" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['dailyDigestFreqOptions'] != null && context['dailyDigestFreqOptions'][key0] != null) ? context['dailyDigestFreqOptions'][key0]['name'] : null)) + 
          "</option>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'customSettings': function customSettings(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['customSettings'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <h4>" + 
          __escape(guard((context != null && context['customSettings'] != null && context['customSettings'][key0] != null) ? context['customSettings'][key0]['title'] : null)) + 
          "</h4>\n            <div class=\"well\">\n                " + 
          __escape(guard((context != null && context['customSettings'] != null && context['customSettings'][key0] != null) ? context['customSettings'][key0]['content'] : null)) + 
          "\n            </div>\n            ";
      }, function alt() {
        return "";
      });
    },
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['languages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                            <option value=\"" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          "\" " + 
          (guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['name'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          ")</option>\n                            ";
      }, function alt() {
        return "";
      });
    },
    'acpLanguages': function acpLanguages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['acpLanguages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                            <option value=\"" + 
          __escape(guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['code'] : null)) + 
          "\" " + 
          (guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['name'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['code'] : null)) + 
          ")</option>\n                            ";
      }, function alt() {
        return "";
      });
    },
    'notificationSettings': function notificationSettings(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notificationSettings'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <div class=\"row\">\n                    <div class=\"col-xs-7\">\n                        <label>" + 
          __escape(guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['label'] : null)) + 
          "</label>\n                    </div>\n                    <div class=\"form-group col-xs-5\">\n                        <select class=\"form-control\" data-property=\"" + 
          __escape(guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['name'] : null)) + 
          "\">\n                            <option value=\"none\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['none'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:none]]</option>\n                            <option value=\"notification\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['notification'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:notification_only]]</option>\n                            <option value=\"email\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['email'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:email_only]]</option>\n                            <option value=\"notificationemail\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['notificationemail'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:notification_and_email]]</option>\n                        </select>\n                    </div>\n                </div>\n                ";
      }, function alt() {
        return "";
      });
    },
    'upvoteNotifFreq': function upvoteNotifFreq(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['upvoteNotifFreq'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                            <option value=\"" + 
          __escape(guard((context != null && context['upvoteNotifFreq'] != null && context['upvoteNotifFreq'][key0] != null) ? context['upvoteNotifFreq'][key0]['name'] : null)) + 
          "\" " + 
          (guard((context != null && context['upvoteNotifFreq'] != null && context['upvoteNotifFreq'][key0] != null) ? context['upvoteNotifFreq'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">\n                                [[user:upvote-notif-freq." + 
          __escape(guard((context != null && context['upvoteNotifFreq'] != null && context['upvoteNotifFreq'][key0] != null) ? context['upvoteNotifFreq'][key0]['name'] : null)) + 
          "]]\n                            </option>\n                            ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
