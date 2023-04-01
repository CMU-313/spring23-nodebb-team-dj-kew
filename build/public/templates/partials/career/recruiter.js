
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
    return "<div>\n    Below is a list of all students who have signed up for this feature. Our new \n    ML-based system also provides a recommendation based on intial student application\n    details. \n\n    Note: The ML system is currently under testing and should only be taken as a \n    recommendation, not an official decision.\n</div>\n<div class=\"career-block\">\n    " + 
      compiled.blocks['allData'](helpers, context, guard, iter, helper) + 
      "    \n</div>\n";
  }

  compiled.blocks = {
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
    }
  };

  return compiled;
})
