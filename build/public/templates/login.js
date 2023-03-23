
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
      "\n\n<div data-widget-area=\"header\">\n    " + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"row login\">\n    <div class=\"" + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n        <div class=\"row\">\n            " + 
      (guard((context != null) ? context['allowLocalLogin'] : null) ?
        "\n            <div class=\"" + 
          (guard((context != null) ? context['alternate_logins'] : null) ?
            "col-md-6" :
            "col-md-12") + 
          "\">\n                <div class=\"login-block\">\n                    <div class=\"alert alert-danger\" id=\"login-error-notify\" " + 
          (guard((context != null) ? context['error'] : null) ?
            "style=\"display:block\"" :
            "style=\"display: none;\"") + 
          ">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                        <strong>[[login:failed_login_attempt]]</strong>\n                        <p>" + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          "</p>\n                    </div>\n\n                    <form class=\"form-horizontal\" role=\"form\" method=\"post\" id=\"login-form\">\n                        <div class=\"form-group\">\n                            <label for=\"username\" class=\"col-lg-2 control-label\">" + 
          __escape(guard((context != null) ? context['allowLoginWith'] : null)) + 
          "</label>\n                            <div class=\"col-lg-10\">\n                                <input class=\"form-control\" type=\"text\" placeholder=\"" + 
          __escape(guard((context != null) ? context['allowLoginWith'] : null)) + 
          "\" name=\"username\" id=\"username\" autocorrect=\"off\" autocapitalize=\"off\" value=\"" + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "\"/>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password\" class=\"col-lg-2 control-label\">[[user:password]]</label>\n                            <div class=\"col-lg-10\">\n                                <input class=\"form-control\" type=\"password\" placeholder=\"[[user:password]]\" name=\"password\" id=\"password\" " + 
          (guard((context != null) ? context['username'] : null) ?
            "autocomplete=\"off\"" :
            "") + 
          "/>\n                                <p id=\"caps-lock-warning\" class=\"text-danger hidden\">\n                                    <i class=\"fa fa-exclamation-triangle\"></i> [[login:caps-lock-enabled]]\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-lg-offset-2 col-lg-10\">\n                                <div class=\"checkbox\">\n                                    <label>\n                                        <input type=\"checkbox\" name=\"remember\" id=\"remember\" checked /> [[login:remember_me]]\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        " + 
          compiled.blocks['loginFormEntry'](helpers, context, guard, iter, helper) + 
          "\n                        <input type=\"hidden\" name=\"_csrf\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
          "\" />\n                        <input type=\"hidden\" name=\"noscript\" id=\"noscript\" value=\"true\" />\n                        <div class=\"form-group\">\n                            <div class=\"col-lg-offset-2 col-lg-10\">\n                                <button class=\"btn btn-primary btn-lg btn-block\" id=\"login\" type=\"submit\">[[global:login]]</button>\n                                " + 
          (guard((context != null) ? context['allowRegistration'] : null) ?
            "\n                                <span>[[login:dont_have_account]] <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/register\">[[register:register]]</a></span>\n                                " :
            "") + 
          "\n                                " + 
          (guard((context != null) ? context['allowPasswordReset'] : null) ?
            "\n                                &nbsp; <a id=\"reset-link\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/reset\">[[login:forgot_password]]</a>\n                                " :
            "") + 
          "\n                            </div>\n                        </div>\n                    </form>\n\n                </div>\n            </div>\n            " :
        "") + 
      "\n\n            " + 
      (guard((context != null) ? context['alternate_logins'] : null) ?
        "\n            <div class=\"" + 
          (guard((context != null) ? context['allowLocalLogin'] : null) ?
            "col-md-6" :
            "col-md-12") + 
          "\">\n                <div class=\"alt-login-block\">\n                    <h4>[[login:alternative_logins]]</h4>\n                    <ul class=\"alt-logins\">\n                        " + 
          compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
          "\n                    </ul>\n                </div>\n            </div>\n            " :
        "") + 
      "\n        </div>\n    </div>\n    <div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n        " + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n    </div>\n</div>\n<div data-widget-area=\"footer\">\n    " + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>";
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
    'loginFormEntry': function loginFormEntry(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['loginFormEntry'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <div class=\"form-group loginFormEntry\">\n                            <label for=\"login-" + 
          __escape(guard((context != null && context['loginFormEntry'] != null && context['loginFormEntry'][key0] != null) ? context['loginFormEntry'][key0]['styleName'] : null)) + 
          "\" class=\"col-lg-4 control-label\">" + 
          __escape(guard((context != null && context['loginFormEntry'] != null && context['loginFormEntry'][key0] != null) ? context['loginFormEntry'][key0]['label'] : null)) + 
          "</label>\n                            <div id=\"login-" + 
          __escape(guard((context != null && context['loginFormEntry'] != null && context['loginFormEntry'][key0] != null) ? context['loginFormEntry'][key0]['styleName'] : null)) + 
          "\" class=\"col-lg-8\">" + 
          guard((context != null && context['loginFormEntry'] != null && context['loginFormEntry'][key0] != null) ? context['loginFormEntry'][key0]['html'] : null) + 
          "</div>\n                        </div>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <li class=\"" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          "\"><a rel=\"nofollow noopener noreferrer\" target=\"_top\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['url'] : null)) + 
          "\"><i class=\"fa " + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['icon'] : null)) + 
          " fa-3x\"></i></a></li>\n                        ";
      }, function alt() {
        return "";
      });
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        " + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n        ";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    " + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
