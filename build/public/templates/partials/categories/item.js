
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n    <meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\n\n    <div class=\"content col-xs-12 " + 
      (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
        "col-md-10 col-sm-12" :
        "col-md-7 col-sm-9") + 
      "\">\n        <div class=\"icon pull-left\" style=\"" + 
      __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
      "\">\n            <i class=\"fa fa-fw " + 
      __escape(guard((context != null) ? context['icon'] : null)) + 
      "\"></i>\n        </div>\n\n        <h2 class=\"title\">\n            " + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n" :
        "\n" + 
          (guard((context != null) ? context['link'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null) ? context['link'] : null)) + 
              "\" itemprop=\"url\">\n" :
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null)) + 
              "\" itemprop=\"url\">\n") + 
          "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n</a>\n") + 
      "\n        </h2>\n        <div>\n            " + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\n            <div class=\"description\">\n                " + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "\n            </div>\n            " :
        "") + 
      "\n            " + 
      (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
        "" :
        "\n            " + 
          __escape(helper(context, helpers, 'generateChildrenCategories', [guard(value)])) + 
          "\n            ") + 
      "\n        </div>\n        <span class=\"visible-xs pull-right\">\n            " + 
      (guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null) ?
        "\n            <a class=\"permalink\" href=\"" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['url'] : null)) + 
          "\">\n                <small class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null)) + 
          "\"></small>\n            </a>\n            " :
        "") + 
      "\n        </span>\n    </div>\n\n    " + 
      (guard((context != null) ? context['link'] : null) ?
        "" :
        "\n    <div class=\"col-md-1 hidden-sm hidden-xs stats\">\n        <span class=\"" + 
          __escape(guard((context != null) ? context['unread-class'] : null)) + 
          " human-readable-number\" title=\"" + 
          __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
          "</span><br />\n        <small>[[global:topics]]</small>\n    </div>\n    <div class=\"col-md-1 hidden-sm hidden-xs stats\">\n        <span class=\"" + 
          __escape(guard((context != null) ? context['unread-class'] : null)) + 
          " human-readable-number\" title=\"" + 
          __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
          "</span><br />\n        <small>[[global:posts]]</small>\n    </div>\n    " + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "" :
            "\n    <div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\n        <div class=\"card background-link-container\" style=\"border-color: " + 
              __escape(guard((context != null) ? context['bgColor'] : null)) + 
              "\">\n    " + 
              compiled.blocks['./posts'](helpers, context, guard, iter, helper) + 
              "\n\n    " + 
              (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
                "" :
                "\n    <div component=\"category/posts\">\n        <div class=\"post-content\">\n            [[category:no_new_posts]]\n        </div>\n    </div>\n    ") + 
              "\n</div>\n\n    </div>\n    ") + 
          "\n    ") + 
      "\n</li>\n";
  }

  compiled.blocks = {
    './posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    " + 
          (index === 0 ?
            "\n    <div component=\"category/posts\">\n        <a class=\"background-link\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\"></a>\n        <p>\n            " + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isAnon'] : null) ?
                "\n            <strong>\n                <div itemprop=\"author\">Anonymous</div>\n            </strong>\n            " :
                "\n            <strong>\n                <a href=\"" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
                    __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/user/" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
                    "#") + 
                  "\" itemprop=\"author\" data-username=\"" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
                  "\" data-uid=\"" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
                  "</a>\n            </strong>\n            ") + 
              "\n            " + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isAnon'] : null) ?
                "\n            " :
                "\n            <a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
                  "</a>\n            ") + 
              "\n            <a class=\"permalink\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\">\n                <small class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
              "\"></small>\n            </a>\n        </p>\n        <div class=\"post-content\">\n            " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\n        </div>\n    </div>\n    " :
            "") + 
          "\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
