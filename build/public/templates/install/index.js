
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
    return "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>NodeBB Web Installer</title>\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"bootstrap.min.css\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"installer.css\">\n\n    <script type=\"text/javascript\" async defer src=\"/assets/installer.min.js\"></script>\n</head>\n\n<body>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" href=\"#\">NodeBB</a>\n            </div>\n\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"/\">Installer</a></li>\n                <li><a href=\"https://docs.nodebb.org\" target=\"_blank\">Get Help</a></li>\n                <li><a href=\"https://community.nodebb.org\" target=\"_blank\">Community</a></li>\n            </ul>\n        </div>\n    </nav>\n    " + 
      (guard((context != null) ? context['installing'] : null) ?
        "" :
        "\n    <div class=\"container " + 
          (guard((context != null) ? context['success'] : null) ?
            "hide" :
            "") + 
          "\">\n        <p>\n            <h1>Welcome to the NodeBB Installer</h1>\n            You are just a few steps away from launching your own NodeBB forum!\n        </p>\n        <form id=\"install\" action=\"/\" method=\"post\">\n            " + 
          (guard((context != null) ? context['skipGeneralSetup'] : null) ?
            "" :
            "\n            <div class=\"general\">\n                <p>\n                    <h1><small>General Instance Setup</small></h1>\n                    <hr />\n                </p>\n\n                <div class=\"row input-row\">\n                    <div class=\"col-sm-7 col-xs-12 input-field\">\n                        <label for=\"install:url\">Web Address (URL)</label>\n                        <input id=\"install:url\" type=\"text\" class=\"form-control\" name=\"url\" value=\"" + 
              (guard((context != null) ? context['url'] : null) ?
                __escape(guard((context != null) ? context['url'] : null)) :
                "") + 
              "\" placeholder=\"http://localhost:4567\" />\n                    </div>\n                    <div class=\"col-sm-5 help-text\" data-help=\"This is the address that resolves to your NodeBB forum. If no port is specified, <code>4567</code> will be used.\"></div>\n                </div>\n            </div>\n            ") + 
          "\n            <div class=\"admin\">\n                <p>\n                    <h1><small>Create an Administrator account</small></h1>\n                    <hr />\n                </p>\n\n                <div class=\"row input-row\">\n                    <div class=\"col-sm-7 col-xs-12 input-field\">\n                        <label for=\"admin:username\">Username</label>\n                        <input id=\"admin:username\" type=\"text\" class=\"form-control\" name=\"admin:username\" value=\"" + 
          (guard((context != null) ? context['admin:username'] : null) ?
            __escape(guard((context != null) ? context['admin:username'] : null)) :
            "") + 
          "\" placeholder=\"Username\" />\n                    </div>\n                    <div class=\"col-sm-5 help-text\" data-help=\"Enter an <strong>alphanumeric username</strong>. Spaces between words are allowed. You can always change your username later on your profile page.\"></div>\n                </div>\n                <div class=\"row input-row\">\n                    <div class=\"col-sm-7 col-xs-12 input-field\">\n                        <label for=\"admin:email\">Email Address</label>\n                        <input id=\"admin:email\" type=\"text\" class=\"form-control\" name=\"admin:email\" value=\"" + 
          (guard((context != null) ? context['admin:email'] : null) ?
            __escape(guard((context != null) ? context['admin:email'] : null)) :
            "") + 
          "\" placeholder=\"Email Address\" />\n                    </div>\n                    <div class=\"col-sm-5 help-text\" data-help=\"Please enter your email address.\"></div>\n                </div>\n                <div class=\"row input-row\">\n                    <div class=\"col-sm-7 col-xs-12 input-field\">\n                        <label for=\"admin:password\">Password</label>\n                        <input id=\"admin:password\" type=\"password\" class=\"form-control\" name=\"admin:password\" value=\"" + 
          (guard((context != null) ? context['admin:password'] : null) ?
            __escape(guard((context != null) ? context['admin:password'] : null)) :
            "") + 
          "\" placeholder=\"Password\" data-minimum-strength=\"" + 
          __escape(guard((context != null) ? context['minimumPasswordStrength'] : null)) + 
          "\" data-minimum-length=\"" + 
          __escape(guard((context != null) ? context['minimumPasswordLength'] : null)) + 
          "\" />\n                    </div>\n                    <div class=\"col-sm-5 help-text\" data-help=\"Use a combination of numbers, symbols, and different cases. You can change the strictness of password creation in the Admin Control Panel. Minimum " + 
          __escape(guard((context != null) ? context['minimumPasswordLength'] : null)) + 
          " characters.\"></div>\n                </div>\n                <div class=\"row input-row\">\n                    <div class=\"col-sm-7 col-xs-12 input-field\">\n                        <label for=\"admin:passwordConfirm\">Confirm Password</label>\n                        <input id=\"admin:passwordConfirm\" type=\"password\" class=\"form-control\" name=\"admin:passwordConfirm\" value=\"" + 
          (guard((context != null) ? context['admin:passwordConfirm'] : null) ?
            __escape(guard((context != null) ? context['admin:passwordConfirm'] : null)) :
            "") + 
          "\" placeholder=\"Confirm Password\" />\n                    </div>\n                    <div class=\"col-sm-5 help-text\" data-help=\"Please confirm your password.\"></div>\n                </div>\n            </div>\n\n            " + 
          (guard((context != null) ? context['error'] : null) ?
            "\n            <a id=\"database-error\"></a>\n            " :
            "") + 
          "\n\n            " + 
          (guard((context != null) ? context['skipDatabaseSetup'] : null) ?
            "" :
            "\n            <div class=\"database\">\n                <p>\n                    <h1><small>Configure your database</small></h1>\n                    <hr />\n                </p>\n\n                <div class=\"row input-row\">\n                    <div class=\"col-sm-7 col-xs-12 input-field\">\n                        <label for=\"install:database\">Database Type</label>\n                        <select id=\"install:database\" class=\"form-control\" name=\"database\">\n                            <option value=\"mongo\">MongoDB</option>\n                            <option value=\"redis\">Redis</option>\n                            <option value=\"postgres\">PostgreSQL</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-5 help-text\" data-help=\"Leave the fields blank to use the default settings.\">" + 
              (guard((context != null) ? context['error'] : null) ?
                "There was an error connecting to your database. Please try again." :
                "") + 
              "</div>\n                </div>\n\n                <div id=\"database-config\"></div>\n            </div>\n            ") + 
          "\n\n            <button id=\"submit\" type=\"submit\" class=\"btn btn-lg btn-success\">Install NodeBB <i class=\"working hide\"></i></button>\n        </form>\n    </div>\n    ") + 
      "\n\n    " + 
      (guard((context != null) ? context['installing'] : null) ?
        "\n    <div id=\"installing\" class=\"container\">\n        <p>\n            <h1>Hang tight! Your NodeBB is being installed.</h1>\n        </p>\n    </div>\n    " :
        "") + 
      "\n\n    <div class=\"container " + 
      (guard((context != null) ? context['success'] : null) ?
        "" :
        "hide") + 
      "\">\n        <p>\n            <h1>Congratulations! Your NodeBB has been set-up.</h1>\n\n            <button id=\"launch\" data-url=\"" + 
      __escape(guard((context != null) ? context['launchUrl'] : null)) + 
      "\" class=\"btn btn-lg btn-success\">Launch NodeBB <i class=\"working hide\"></i></button>\n        </p>\n    </div>\n\n    <div class=\"hide\">\n        " + 
      compiled.blocks['databases'](helpers, context, guard, iter, helper) + 
      "\n    </div>\n</body>\n</html>";
  }

  compiled.blocks = {
    'databases': function databases(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['databases'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <div data-database=\"" + 
          __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null) ? context['databases'][key0]['name'] : null)) + 
          "\">\n             " + 
          iter(guard((context != null && context['databases'] != null && context['databases'][key0] != null) ? context['databases'][key0]['questions'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                <div class=\"row input-row\">\n                    <div class=\"col-sm-7 col-xs-12 input-field\">\n                        <label for=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['name'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['description'] : null)) + 
              "</label>\n                        <input id=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['name'] : null)) + 
              "\" type=\"" + 
              (guard((context != null) ? context['hidden'] : null) ?
                "password" :
                "text") + 
              "\" class=\"form-control\" name=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['name'] : null)) + 
              "\" placeholder=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['default'] : null)) + 
              "\" value=\"" + 
              __escape(guard((context != null && context['databases'] != null && context['databases'][key0] != null && context['databases'][key0]['questions'] != null && context['databases'][key0]['questions'][key1] != null) ? context['databases'][key0]['questions'][key1]['default'] : null)) + 
              "\" />\n                    </div>\n                </div>\n            ";
          }, function alt() {
            return "";
          }) + 
          "\n        </div>\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
