
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
      "\n\n\n<div class=\"row ip-blacklist\">\n    <div class=\"col-lg-12\">\n        <p class=\"lead\">\n            [[ip-blacklist:lead]]\n        </p>\n        <p>\n            [[ip-blacklist:description]]\n        </p>\n\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">[[ip-blacklist:active-rules]]</div>\n                    <div class=\"panel-body\">\n                        <textarea id=\"blacklist-rules\">" + 
      __escape(guard((context != null) ? context['rules'] : null)) + 
      "</textarea><br />\n                        <button type=\"button\" class=\"btn btn-warning\" data-action=\"test\">\n                            <i class=\"fa fa-bomb\"></i> [[ip-blacklist:validate]]\n                        </button>\n                        <button type=\"button\" class=\"btn btn-primary\" data-action=\"apply\">\n                            <i class=\"fa fa-save\"></i> [[ip-blacklist:apply]]\n                        </button>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">[[ip-blacklist:hints]]</div>\n                    <div class=\"panel-body\">\n                        <p>\n                            [[ip-blacklist:hint-1]]\n                        </p>\n                        <p>\n                            [[ip-blacklist:hint-2]]\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <div><canvas id=\"blacklist:hourly\" height=\"250\"></canvas></div>\n                    </div>\n                    <div class=\"panel-footer\"><small>[[ip-blacklist:analytics.blacklist-hourly]]</small></div>\n                </div>\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <div><canvas id=\"blacklist:daily\" height=\"250\"></canvas></div>\n                    </div>\n                    <div class=\"panel-footer\"><small>[[ip-blacklist:analytics.blacklist-daily]]</small></div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>";
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
    }
  };

  return compiled;
})
