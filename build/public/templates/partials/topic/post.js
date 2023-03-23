
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
    return "<div class=\"clearfix post-header\">\n    <div class=\"icon pull-left\">\n        " + 
      (guard((context != null && context['posts'] != null) ? context['posts']['isAnon'] : null) ?
        "\n        " :
        "\n        <a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null)) :
            "#") + 
          "\">\n            " + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null) ? context['posts']['user'] : null), "sm2x", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n            <i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['status'] : null)) + 
          "]]\"></i>\n        </a>\n        ") + 
      "\n    </div>\n\n    <small class=\"pull-left\">\n        " + 
      (guard((context != null && context['posts'] != null) ? context['posts']['isAnon'] : null) ?
        "\n        <strong>\n            <div itemprop=\"author\">Anonymous</div>\n        </strong>\n        " :
        "\n        <strong>\n            <a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null)) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['displayname'] : null)) + 
          "</a>\n        </strong>\n        ") + 
      "\n\n        " + 
      compiled.blocks['posts.user.selectedGroups'](helpers, context, guard, iter, helper) + 
      "\n\n        " + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['banned'] : null) ?
        "\n        <span class=\"label label-danger\">[[user:banned]]</span>\n        " :
        "") + 
      "\n\n        <span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\n            " + 
      (guard((context != null && context['posts'] != null) ? context['posts']['toPid'] : null) ?
        "\n            <a component=\"post/parent\" class=\"btn btn-xs btn-default hidden-xs\" data-topid=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['toPid'] : null)) + 
          "\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['toPid'] : null)) + 
          "\"><i class=\"fa fa-reply\"></i> @" + 
          (guard((context != null && context['posts'] != null && context['posts']['parent'] != null) ? context['posts']['parent']['username'] : null) ?
            __escape(guard((context != null && context['posts'] != null && context['posts']['parent'] != null) ? context['posts']['parent']['username'] : null)) :
            "[[global:guest]]") + 
          "</a>\n            " :
        "") + 
      "\n\n            <span>\n                " + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['custom_profile_info'] != null) ? context['posts']['user']['custom_profile_info']['length'] : null) ?
        "\n                &#124;\n                " + 
          compiled.blocks['posts.user.custom_profile_info'](helpers, context, guard, iter, helper) + 
          "\n                " :
        "") + 
      "\n            </span>\n        </span>\n\n    </small>\n    <small class=\"pull-right\">\n        <span class=\"bookmarked\"><i class=\"fa fa-bookmark-o\"></i></span>\n    </small>\n    <small class=\"pull-right\">\n        <i component=\"post/edit-indicator\" class=\"fa fa-pencil-square" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['posts:history'] : null) ?
        " pointer" :
        "") + 
      " edit-icon " + 
      (guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['username'] : null) ?
        "" :
        "hidden") + 
      "\"></i>\n\n        <small data-editor=\"" + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['userslug'] : null)) + 
      "\" component=\"post/editor\" class=\"hidden\">[[global:last_edited_by, " + 
      __escape(guard((context != null && context['posts'] != null && context['posts']['editor'] != null) ? context['posts']['editor']['username'] : null)) + 
      "]] <span class=\"timeago\" title=\"" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['editedISO'] : null)) + 
      "\"></span></small>\n\n        <span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\n            <a class=\"permalink\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/post/" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['pid'] : null)) + 
      "\"><span class=\"timeago\" title=\"" + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['timestampISO'] : null)) + 
      "\"></span></a>\n        </span>\n    </small>\n</div>\n\n<br />\n\n<div class=\"content\" component=\"post/content\" itemprop=\"text\">\n    " + 
      __escape(guard((context != null && context['posts'] != null) ? context['posts']['content'] : null)) + 
      "\n</div>\n\n<div class=\"post-footer\">\n    " + 
      (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['signature'] : null) ?
        "\n    <div component=\"post/signature\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['uid'] : null)) + 
          "\" class=\"post-signature\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['signature'] : null)) + 
          "</div>\n    " :
        "") + 
      "\n\n    <div class=\"clearfix\">\n    " + 
      (guard((context != null) ? context['hideReplies'] : null) ?
        "" :
        "\n    <a component=\"post/reply-count\" data-target-component=\"post/replies/container\" href=\"#\" class=\"threaded-replies no-select pull-left " + 
          (guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['count'] : null) ?
            "" :
            "hidden") + 
          "\">\n        <span component=\"post/reply-count/avatars\" class=\"avatars " + 
          (guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['hasMore'] : null) ?
            "hasMore" :
            "") + 
          "\">\n            " + 
          compiled.blocks['posts.replies.users'](helpers, context, guard, iter, helper) + 
          "\n        </span>\n\n        <span class=\"replies-count\" component=\"post/reply-count/text\" data-replies=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['count'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['text'] : null)) + 
          "</span>\n        <span class=\"replies-last hidden-xs\">[[topic:last_reply_time]] <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['timestampISO'] : null)) + 
          "\"></span></span>\n\n        <i class=\"fa fa-fw fa-chevron-right\" component=\"post/replies/open\"></i>\n        <i class=\"fa fa-fw fa-chevron-down hidden\" component=\"post/replies/close\"></i>\n        <i class=\"fa fa-fw fa-spin fa-spinner hidden\" component=\"post/replies/loading\"></i>\n    </a>\n    ") + 
      "\n\n    <small class=\"pull-right\">\n        <!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n        <span class=\"post-tools\">\n            <a component=\"post/reply\" href=\"#\" class=\"no-select " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">[[topic:reply]]</a>\n            <a component=\"post/quote\" href=\"#\" class=\"no-select " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">[[topic:quote]]</a>\n        </span>\n\n        " + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n        <span class=\"votes\">\n            <a component=\"post/upvote\" href=\"#\" class=\"" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['upvoted'] : null) ?
            "upvoted" :
            "") + 
          "\">\n                <i class=\"fa fa-chevron-up\"></i>\n            </a>\n\n            <span component=\"post/vote-count\" data-votes=\"" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['votes'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null) ? context['posts']['votes'] : null)) + 
          "</span>\n\n            " + 
          (guard((context != null) ? context['downvote:disabled'] : null) ?
            "" :
            "\n            <a component=\"post/downvote\" href=\"#\" class=\"" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['downvoted'] : null) ?
                "downvoted" :
                "") + 
              "\">\n                <i class=\"fa fa-chevron-down\"></i>\n            </a>\n            ") + 
          "\n        </span>\n        ") + 
      "\n\n        <span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet " + 
      (guard((context != null && context['posts'] != null) ? context['posts']['display_post_menu'] : null) ?
        "" :
        "hidden") + 
      "\">\n    <a href=\"#\" data-toggle=\"dropdown\" data-ajaxify=\"false\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></a>\n    <ul class=\"dropdown-menu dropdown-menu-right hidden\" role=\"menu\"></ul>\n</span>\n\n    </small>\n    </div>\n    <div component=\"post/replies/container\"></div>\n</div>";
  }

  compiled.blocks = {
    'posts.user.selectedGroups': function postsuserselectedGroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['selectedGroups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['slug'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/groups/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['slug'] : null)) + 
              "\"><small class=\"label group-label inline-block\" style=\"color:" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['textColor'] : null)) + 
              ";background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['labelColor'] : null)) + 
              ";\">" + 
              (guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['icon'] : null) ?
                "<i class=\"fa " + 
                  __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['icon'] : null)) + 
                  "\"></i> " :
                "") + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['selectedGroups'] != null && context['posts']['user']['selectedGroups'][key0] != null) ? context['posts']['user']['selectedGroups'][key0]['userTitle'] : null)) + 
              "</small></a>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'posts.user.custom_profile_info': function postsusercustom_profile_info(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['custom_profile_info'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                " + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['custom_profile_info'] != null && context['posts']['user']['custom_profile_info'][key0] != null) ? context['posts']['user']['custom_profile_info'][key0]['content'] : null)) + 
          "\n                ";
      }, function alt() {
        return "";
      });
    },
    'posts.replies.users': function postsrepliesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null && context['posts']['replies'] != null) ? context['posts']['replies']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            " + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts']['replies'] != null && context['posts']['replies']['users'] != null) ? context['posts']['replies']['users'][key0] : null), "xs", guard((context != null) ? context['true'] : null), ""])) + 
          "\n            ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
