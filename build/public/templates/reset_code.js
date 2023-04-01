
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
      "\n\n\n" + 
      (guard((context != null) ? context['valid'] : null) ?
        "\n<div class=\"well\">\n    " + 
          (guard((context != null) ? context['displayExpiryNotice'] : null) ?
            "\n    <div class=\"alert alert-warning\">\n        [[reset_password:password_expired]]\n    </div>\n    " :
            "") + 
          "\n    <div class=\"alert alert-success hidden\" id=\"success\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        <strong>[[reset_password:password_changed.title]]</strong>\n        <p>[[reset_password:password_changed.message]]</p>\n    </div>\n    <div class=\"alert alert-warning hidden\" id=\"notice\">\n        <strong></strong>\n        <p></p>\n    </div>\n    <form onsubmit=\"return false;\" id=\"reset-form\" class=\"row\">\n        <div class=\"col-sm-6\">\n            <label for=\"password\">[[reset_password:new_password]]</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:new_password]]\" id=\"password\" /><br />\n        </div>\n        <div class=\"col-sm-6\">\n            <label for=\"repeat\">[[reset_password:repeat_password]]</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:repeat_password]]\" id=\"repeat\" /><br />\n        </div>\n        <div class=\"col-xs-12\">\n            <button class=\"btn btn-primary btn-block\" id=\"reset\" type=\"submit\">[[reset_password:reset_password]]</button>\n        </div>\n    </form>\n</div>\n" :
        "\n<div class=\"panel panel-default panel-danger\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">[[reset_password:wrong_reset_code.title]]</h3>\n    </div>\n    <div class=\"panel-body\">\n        <p>[[reset_password:wrong_reset_code.message]]</p>\n    </div>\n</div>\n");
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
