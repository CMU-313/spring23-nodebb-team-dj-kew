
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
    return "<ul component=\"category\" class=\"topic-list\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\" data-set=\"" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "\">\n    " + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\n        " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['visible'] : null) ?
            "\n        <li component=\"category/topic\" class=\"row clearfix category-item " + 
              __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
              "\" data-tid=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" data-cid=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['cid'] : null)) + 
              "\" itemprop=\"itemListElement\" itemscope itemtype=\"https://schema.org/ListItem\">\n            <link itemprop=\"url\" content=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "\" />\n            <meta itemprop=\"name\" content=\"" + 
              __escape(helper(context, helpers, 'stripTags', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)])) + 
              "\" />\n            <meta itemprop=\"itemListOrder\" content=\"descending\" />\n            <meta itemprop=\"position\" content=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" />\n            <a id=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" component=\"topic/anchor\"></a>\n\n            <div class=\"col-md-6 col-sm-9 col-xs-10 content\">\n                \n                <div class=\"avatar pull-left\">\n\n                    " + 
              (guard((context != null) ? context['showSelect'] : null) ?
                "\n                    " + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['isAnon'] : null) ?
                    "\n                    " :
                    "\n                    <div class=\"select\" component=\"topic/select\">\n                        " + 
                      (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
                        "\n                        <img src=\"" + 
                          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
                          "\" class=\"user-img not-responsive\" />\n                        " :
                        "\n                        " + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "46", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                          "\n                        ") + 
                      "\n                        <i class=\"fa fa-check\"></i>\n                    </div>\n                    ") + 
                  "\n                    " :
                "") + 
              "\n\n                    " + 
              (guard((context != null) ? context['showSelect'] : null) ?
                "" :
                "\n                    " + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['isAnon'] : null) ?
                    "\n                    " :
                    "\n                    <a href=\"" + 
                      (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
                        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/user/" + 
                          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
                        "#") + 
                      "\" class=\"pull-left\">\n                        " + 
                      (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
                        "\n                        <img src=\"" + 
                          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
                          "\" class=\"user-img not-responsive\" />\n                        " :
                        "\n                        " + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "46", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                          "\n                        ") + 
                      "\n                    </a>\n                    ") + 
                  "\n                    ") + 
              "\n                </div>\n                \n\n                <h2 component=\"topic/header\" class=\"title\">\n                    <i component=\"topic/scheduled\" class=\"fa fa-clock-o " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) ?
                "" :
                "hide") + 
              "\" title=\"[[topic:scheduled]]\"></i>\n                    <i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
              ((guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) || !guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinned'] : null)) ?
                "hide" :
                "") + 
              "\" title=\"" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiry'] : null) ?
                "[[topic:pinned-with-expiry, " + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiryISO'] : null)) + 
                  "]]" :
                "[[topic:pinned]]") + 
              "\"></i>\n                    <i component=\"topic/locked\" class=\"fa fa-lock " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['locked'] : null) ?
                "" :
                "hide") + 
              "\" title=\"[[topic:locked]]\"></i>\n                    <i component=\"topic/moved\" class=\"fa fa-arrow-circle-right " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['oldCid'] : null) ?
                "" :
                "hide") + 
              "\" title=\"[[topic:moved]]\"></i>\n                    " + 
              iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['icons'] : null), function each(key1, index, length, value) {
                var key = key1;
                return __escape(guard(value));
              }, function alt() {
                return "";
              }) + 
              "\n\n\n                    " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['noAnchor'] : null) ?
                "\n                    <span>" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
                  "</span><br />\n                    " :
                "\n                    <a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                    "/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                    "") + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
                  "</a><br />\n                    ") + 
              "\n\n                    " + 
              (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
                "" :
                "\n                    <small>\n                        <a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['slug'] : null)) + 
                  "\"><span class=\"fa-stack fa-lg\" style=\"" + 
                  __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['category'] : null)])) + 
                  "\"><i style=\"color:" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['color'] : null)) + 
                  ";\" class=\"fa " + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['icon'] : null)) + 
                  " fa-stack-1x\"></i></span> " + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['name'] : null)) + 
                  "</a> &bull;\n                    </small>\n                    ") + 
              "\n\n                    " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null) ? context['topics'][key0]['tags']['length'] : null) ?
                "\n                    <span class=\"tag-list hidden-xs\">\n                        " + 
                  iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tags'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n                        <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/tags/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEncoded'] : null)) + 
                      "\"><span class=\"tag tag-item tag-class-" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['class'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEscaped'] : null)) + 
                      "</span></a>\n                        ";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n                        <small>&bull;</small>\n                    </span>\n                    " :
                "") + 
              "\n                    \n                    \n                    <small class=\"hidden-xs\">\n                        <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
              "\"></span> &bull; \n\n                        " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['isAnon'] : null) ?
                "\n                        <strong>\n                            <span itemprop=\"author\">Anonymous</span>\n                        </strong>\n                        " :
                "\n                        <a href=\"" + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
                    __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/user/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
                    "#") + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['displayname'] : null)) + 
                  "</a>\n                        ") + 
              "\n                    </small>\n                    <small class=\"visible-xs-inline\">\n                        " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestamp'] : null) ?
                "\n                        <span class=\"timeago\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
                  "\"></span>\n                        " :
                "\n                        <span class=\"timeago\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
                  "\"></span>\n                        ") + 
              "\n                    </small>\n                </h2>\n            </div>\n\n            <div class=\"mobile-stat col-xs-2 visible-xs text-right\">\n                <span class=\"human-readable-number\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
              "</span> <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
              "\"><i class=\"fa fa-arrow-circle-right\"></i></a>\n            </div>\n\n            <div class=\"col-md-1 hidden-sm hidden-xs stats stats-votes\">\n                " + 
              (guard((context != null) ? context['reputation:disabled'] : null) ?
                "" :
                "\n                <span class=\"human-readable-number\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
                  "</span><br />\n                <small>[[global:votes]]</small>\n                ") + 
              "\n            </div>\n\n            <div class=\"col-md-1 hidden-sm hidden-xs stats stats-postcount\">\n                <span class=\"human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
              "</span><br />\n                <small>[[global:posts]]</small>\n            </div>\n\n            <div class=\"col-md-1 hidden-sm hidden-xs stats stats-viewcount\">\n                <span class=\"human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
              "</span><br />\n                <small>[[global:views]]</small>\n            </div>\n\n            <div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\n                <div class=\"card background-link-container\" style=\"border-color: " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['bgColor'] : null)) + 
              "\">\n                    <a class=\"background-link\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
              "\"></a>\n                    " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['unreplied'] : null) ?
                "\n                    <p>\n                        [[category:no_replies]]\n                    </p>\n                    " :
                "\n                    " + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['pid'] : null) ?
                    "\n                    <p>\n                        " + 
                      (guard((context != null && context['posts'] != null) ? context['posts']['isAnon'] : null) ?
                        "\n                        " :
                        "\n                        <a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/user/" + 
                          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) + 
                          "\">" + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['user'] : null), "24", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                          "</a>\n                        ") + 
                      "\n                        <a class=\"permalink\" href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/topic/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                      "/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                      "\">\n                            <span class=\"timeago\" title=\"" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
                      "\"></span>\n                        </a>\n                    </p>\n                    <div class=\"post-content\">\n                        " + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['content'] : null)) + 
                      "\n                    </div>\n                    " :
                    "") + 
                  "\n                    ") + 
              "\n                </div>\n            </div>\n        </li>\n        " :
            "") + 
          "\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
