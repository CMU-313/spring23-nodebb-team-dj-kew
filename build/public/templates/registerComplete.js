
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
      "\n\n\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\n        <p class=\"lead text-center\">\n            " + 
      (guard((context != null) ? context['register'] : null) ?
        "[[register:interstitial.intro-new]]" :
        "[[register:interstitial.intro]]") + 
      "\n        </p>\n\n        " + 
      (guard((context != null && context['errors'] != null) ? context['errors']['length'] : null) ?
        "\n        <div class=\"alert alert-warning\">\n            <p>\n                [[register:interstitial.errors-found]]\n            </p>\n            <ul>\n                " + 
          compiled.blocks['errors'](helpers, context, guard, iter, helper) + 
          "\n            </ul>\n        </div>\n        " :
        "") + 
      "\n    </div>\n</div>\n\n<form role=\"form\" method=\"post\" action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register/complete/?_csrf=" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\" enctype=\"multipart/form-data\">\n    " + 
      compiled.blocks['sections'](helpers, context, guard, iter, helper) + 
      "\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\n            <div class=\"btn-group btn-block\">\n                <button class=\"btn btn-block btn-primary\">[[topic:composer.submit]]</button>\n                <button class=\"btn btn-block btn-link\" formaction=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register/abort?_csrf=" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\">" + 
      (guard((context != null) ? context['register'] : null) ?
        "[[register:cancel_registration]]" :
        "[[modules:bootbox.cancel]]") + 
      "</button>\n            </div>\n        </div>\n    </div>\n</form>";
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
    'errors': function errors(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['errors'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <li>" + 
          __escape(guard(value)) + 
          "</li>\n                ";
      }, function alt() {
        return "";
      });
    },
    'sections': function sections(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sections'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                    " + 
          __escape(guard(value)) + 
          "\n                </div>\n            </div>\n        </div>\n    </div>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
