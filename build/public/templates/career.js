
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
      "\n</div>\n<div class=\"row\">\n    <div class=\"" + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n        <h1 class=\"career-title\">Career</h1>\n        <p>\n            Welcome to the careers page! This is a brand new feature added to allow \n            students to connect with various job recruiters.\n        </p>\n        " + 
      ((!guard((context != null) ? context['accountType'] : null) || (guard((context != null) ? context['accountType'] : null) == "instructor")) ?
        "\n        This page is only available for students and recruiters.\n        " :
        "\n            " + 
          ((guard((context != null) ? context['accountType'] : null) == "student") ?
            "\n                <div>\n    " + 
              (guard((context != null) ? context['newAccount'] : null) ?
                "\n        Ready to get started? Sign up below and find your next job opportunity!\n    " :
                "\n        You have been successfully registered! You can update your personal information below at any time.\n    ") + 
              "\n</div>\n<div class=\"career-block\">\n    <div class=\"alert alert-danger" + 
              (guard((context != null) ? context['error'] : null) ?
                "" :
                " hidden") + 
              "\" id=\"career-error-notify\" >\n        <strong>Registration Error</strong>\n        <p>" + 
              __escape(guard((context != null) ? context['error'] : null)) + 
              "</p>\n    </div>\n    <form component=\"career/local\" class=\"form-horizontal\" role=\"form\" action=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/api/v3/career/register\" method=\"post\">\n        <div class=\"form-group\">\n            <label for=\"student_id\" class=\"col-lg-3 control-label\">Student ID</label>\n            <div class=\"col-lg-9\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Student ID\" name=\"student_id\" value=\"" + 
              __escape(guard((context != null) ? context['student_id'] : null)) + 
              "\" id=\"student_id\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"off\" />\n                <span class=\"register-feedback\" id=\"student-id-notify\"></span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"age\" class=\"col-lg-3 control-label\">Age</label>\n            <div class=\"col-lg-9\">\n                <input class=\"form-control\" type=\"number\" placeholder=\"Age\" name=\"age\" value=\"" + 
              __escape(guard((context != null) ? context['age'] : null)) + 
              "\" id=\"age\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"off\" min=\"18\" max=\"25\"/>\n                <span class=\"register-feedback\" id=\"age-notify\"></span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"gender\" class=\"col-lg-3 control-label\">Gender</label>\n            <div class=\"col-lg-9\">\n                <select class=\"form-control\" name=\"gender\" aria-label=\"Gender\">\n                    <option value=\"M\"" + 
              ((guard((context != null) ? context['gender'] : null) == "M") ?
                " selected" :
                "") + 
              ">Male</option>\n                    <option value=\"F\"" + 
              ((guard((context != null) ? context['gender'] : null) == "F") ?
                " selected" :
                "") + 
              ">Female</option>\n                    <option value=\"O\"" + 
              ((guard((context != null) ? context['gender'] : null) == "O") ?
                " selected" :
                "") + 
              ">Other</option>\n                </select>\n                <span class=\"register-feedback\" id=\"gender-notify\"></span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"major\" class=\"col-lg-3 control-label\">Major</label>\n            <div class=\"col-lg-9\">\n                <select class=\"form-control\" name=\"major\" aria-label=\"Major\">\n                    <option value=\"Computer Science\"" + 
              ((guard((context != null) ? context['major'] : null) == "Computer Science") ?
                " selected" :
                "") + 
              ">Computer Science</option>\n                    <option value=\"Information Systems\"" + 
              ((guard((context != null) ? context['major'] : null) == "Information Systems") ?
                " selected" :
                "") + 
              ">Information Systems</option>\n                    <option value=\"Business\"" + 
              ((guard((context != null) ? context['major'] : null) == "Business") ?
                " selected" :
                "") + 
              ">Business</option>\n                    <option value=\"Math\"" + 
              ((guard((context != null) ? context['major'] : null) == "Math") ?
                " selected" :
                "") + 
              ">Math</option>\n                    <option value=\"Electrical and Computer Engineering\"" + 
              ((guard((context != null) ? context['major'] : null) == "Electrical and Computer Engineering") ?
                " selected" :
                "") + 
              ">Electrical and Computer Engineering</option>\n                    <option value=\"Statistics and Machine Learning\"" + 
              ((guard((context != null) ? context['major'] : null) == "Statistics and Machine Learning") ?
                " selected" :
                "") + 
              ">Statistics and Machine Learning</option>\n                </select>\n                <span class=\"register-feedback\" id=\"major-notify\"></span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"gpa\" class=\"col-lg-3 control-label\">GPA</label>\n            <div class=\"col-lg-9\">\n                <input class=\"form-control\" type=\"number\" placeholder=\"GPA\" name=\"gpa\" value=\"" + 
              __escape(guard((context != null) ? context['gpa'] : null)) + 
              "\" id=\"gpa\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"off\" min=\"0.0\" max=\"4.0\"/>\n                <span class=\"register-feedback\" id=\"gpa-notify\"></span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"extra_curricular\" class=\"col-lg-3 control-label\">Extracurricular Activity</label>\n            <div class=\"col-lg-9\">\n                <select class=\"form-control\" name=\"extra_curricular\" aria-label=\"Extra Curricular\">\n                    <option value=\"Student Theatre\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Student Theatre") ?
                " selected" :
                "") + 
              ">Student Theatre</option>\n                    <option value=\"Buggy\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Buggy") ?
                " selected" :
                "") + 
              ">Buggy</option>\n                    <option value=\"Teaching Assistant\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Teaching Assistant") ?
                " selected" :
                "") + 
              ">Teaching Assistant</option>\n                    <option value=\"Student Government\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Student Government") ?
                " selected" :
                "") + 
              ">Student Government</option>\n                    <option value=\"Society of Women Engineers\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Society of Women Engineers") ?
                " selected" :
                "") + 
              ">Society of Women Engineers</option>\n                    <option value=\"Women in CS\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Women in CS") ?
                " selected" :
                "") + 
              ">Women in CS</option>\n                    <option value=\"Men's Basketball\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Men's Basketball") ?
                " selected" :
                "") + 
              ">Men's Basketball</option>\n                    <option value=\"Men's Golf\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Men's Golf") ?
                " selected" :
                "") + 
              ">Men's Golf</option>\n                    <option value=\"American Football\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "American Football") ?
                " selected" :
                "") + 
              ">American Football</option>\n                    <option value=\"Volleyball\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Volleyball") ?
                " selected" :
                "") + 
              ">Volleyball</option>\n                    <option value=\"Sorority\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Sorority") ?
                " selected" :
                "") + 
              ">Sorority</option>\n                    <option value=\"Fraternity\"" + 
              ((guard((context != null) ? context['extra_curricular'] : null) == "Fraternity") ?
                " selected" :
                "") + 
              ">Fraternity</option>\n                </select>\n                <span class=\"register-feedback\" id=\"extra-curricular-notify\"></span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"num_programming_languages\" class=\"col-lg-3 control-label\">Num. Known Programming Languages</label>\n            <div class=\"col-lg-9\">\n                <input class=\"form-control\" type=\"number\" placeholder=\"# Programming Languages\" name=\"num_programming_languages\" value=\"" + 
              __escape(guard((context != null) ? context['num_programming_languages'] : null)) + 
              "\" id=\"num_programming_languages\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"off\" min=\"1\" max=\"5\"/>\n                <span class=\"register-feedback\" id=\"num-programming-languages-notify\"></span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"num_past_internships\" class=\"col-lg-3 control-label\">Num. Past Internships</label>\n            <div class=\"col-lg-9\">\n                <input class=\"form-control\" type=\"number\" placeholder=\"# Past Internships\" name=\"num_past_internships\" value=\"" + 
              __escape(guard((context != null) ? context['num_past_internships'] : null)) + 
              "\" id=\"num_past_internships\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"off\" min=\"0\" max=\"4\"/>\n                <span class=\"register-feedback\" id=\"num-past-internships-notify\"></span>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <div class=\"col-lg-offset-4 col-lg-6\">\n                <button class=\"btn btn-primary btn-lg btn-block\" id=\"signup\" type=\"submit\">\n                    " + 
              (guard((context != null) ? context['newAccount'] : null) ?
                "\n                        Sign Up\n                    " :
                "\n                        Update\n                    ") + 
              "\n                </button>\n            </div>\n        </div>\n        <input id=\"token\" type=\"hidden\" name=\"token\" value=\"\" />\n        <input id=\"noscript\" type=\"hidden\" name=\"noscript\" value=\"true\" />\n        <input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
              "\" />\n    </form>\n</div>\n\n            " :
            "") + 
          "\n            " + 
          ((guard((context != null) ? context['accountType'] : null) == "recruiter") ?
            "\n                <div>\n    Below is a list of all students who have signed up for this feature. Our new \n    ML-based system also provides a recommendation based on intial student application\n    details. \n\n    Note: The ML system is currently under testing and should only be taken as a \n    recommendation, not an official decision.\n</div>\n<div class=\"career-block\">\n    " + 
              compiled.blocks['allData'](helpers, context, guard, iter, helper) + 
              "    \n</div>\n\n            " :
            "") + 
          "\n        ") + 
      "\n    </div>\n    <div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n        " + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n    </div>\n</div>\n<div data-widget-area=\"footer\">\n    " + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>\n";
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
    'allData': function allData(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['allData'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <div class=\"card\" style=\"width: 28rem;\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">\n                    " + 
          __escape(guard((context != null && context['allData'] != null && context['allData'][key0] != null) ? context['allData'][key0]['student_id'] : null)) + 
          "\n                </div>\n                <div class=\"card-text\">\n                    Major: " + 
          __escape(guard((context != null && context['allData'] != null && context['allData'][key0] != null) ? context['allData'][key0]['major'] : null)) + 
          " <br/>\n                    GPA: " + 
          __escape(guard((context != null && context['allData'] != null && context['allData'][key0] != null) ? context['allData'][key0]['gpa'] : null)) + 
          " <br/>\n                    Extracurricular: " + 
          __escape(guard((context != null && context['allData'] != null && context['allData'][key0] != null) ? context['allData'][key0]['extra_curricular'] : null)) + 
          " <br/>\n                    # Prog Languages: " + 
          __escape(guard((context != null && context['allData'] != null && context['allData'][key0] != null) ? context['allData'][key0]['num_programming_languages'] : null)) + 
          " <br/>\n                    # Past Internships: " + 
          __escape(guard((context != null && context['allData'] != null && context['allData'][key0] != null) ? context['allData'][key0]['num_past_internships'] : null)) + 
          " <br/>\n                </div>\n                <div class=\"prediction\" style=" + 
          __escape(helper(context, helpers, 'getPredictionColor', [guard((context != null && context['allData'] != null && context['allData'][key0] != null) ? context['allData'][key0]['prediction'] : null)])) + 
          ">\n                    " + 
          __escape(helper(context, helpers, 'formatPrediction', [guard((context != null && context['allData'] != null && context['allData'][key0] != null) ? context['allData'][key0]['prediction'] : null)])) + 
          "\n                </div>\n            </div>\n        </div>\n    ";
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
