
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
    return "<div class=\"card background-link-container\" style=\"border-color: " + 
      __escape(guard((context != null) ? context['bgColor'] : null)) + 
      "\">\n    " + 
      compiled.blocks['./posts'](helpers, context, guard, iter, helper) + 
      "\n\n    " + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n    <div component=\"category/posts\">\n        <div class=\"post-content\">\n            [[category:no_new_posts]]\n        </div>\n    </div>\n    ") + 
      "\n</div>\n";
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
