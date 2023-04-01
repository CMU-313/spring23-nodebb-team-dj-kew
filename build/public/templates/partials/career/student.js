
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
    return "<div>\n    " + 
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
      "\" />\n    </form>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
