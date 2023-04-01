
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
    return "<div class=\"row\">\r\n\t<div class=\"col-lg-12\">\r\n\t\t<div class=\"panel panel-default\">\r\n\r\n\t\t\t<div class=\"panel-heading\"><h4>DB Search</h4></div>\r\n\r\n\t\t\t<div class=\"panel-body\">\r\n\r\n\t\t\t\t<div class=\"alert alert-info\">\r\n\t\t\t\tTopics Indexed: <strong id=\"topics-indexed\">" + 
      __escape(guard((context != null) ? context['topicsIndexed'] : null)) + 
      "</strong> / <strong>" + 
      __escape(guard((context != null) ? context['topicCount'] : null)) + 
      "</strong>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"progress\">\r\n\t\t\t\t\t<div class=\"topic-progress progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + 
      __escape(guard((context != null && context['progressData'] != null) ? context['progressData']['topicsPercent'] : null)) + 
      "%;min-width: 2em;\">" + 
      __escape(guard((context != null && context['progressData'] != null) ? context['progressData']['topicsPercent'] : null)) + 
      "%</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"alert alert-info\">\r\n\t\t\t\tPosts Indexed: <strong id=\"posts-indexed\">" + 
      __escape(guard((context != null) ? context['postsIndexed'] : null)) + 
      "</strong> / <strong>" + 
      __escape(guard((context != null) ? context['postCount'] : null)) + 
      "</strong>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"progress\">\r\n\t\t\t\t\t<div class=\"post-progress progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + 
      __escape(guard((context != null && context['progressData'] != null) ? context['progressData']['postsPercent'] : null)) + 
      "%;min-width: 2em;\">" + 
      __escape(guard((context != null && context['progressData'] != null) ? context['progressData']['postsPercent'] : null)) + 
      "%</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<button class=\"btn btn-warning\" id=\"reindex\" " + 
      (guard((context != null) ? context['working'] : null) ?
        "disabled" :
        "") + 
      ">Re Index</button>\r\n\t\t\t\t<button class=\"btn btn-danger\" id=\"clear-index\">Clear Index</button>\r\n\t\t\t\t<span id=\"work-in-progress\" class=\"" + 
      (guard((context != null) ? context['working'] : null) ?
        "" :
        "hidden") + 
      "\">\r\n\t\t\t\t\t<i class=\"fa fa-gear fa-spin\"></i> Working...\r\n\t\t\t\t</span>\r\n\t\t\t\t<hr/>\r\n\r\n\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t<label>Select categories to exclude from indexing</label>\r\n\t\t\t\t\t<select multiple class=\"form-control\" id=\"exclude-categories\" size=\"10\">\r\n\t\t\t\t\t\t" + 
      compiled.blocks['allCategories'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['languageSupported'] : null) ?
        "\r\n\t\t\t\t<form class=\"form\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Index Language</label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"indexLanguage\">\r\n\t\t\t\t\t\t\t\t\t" + 
          compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<button class=\"btn btn-primary\" id=\"changeLanguage\">Change Language</button>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t<form class=\"form\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Topic Limit</label>\r\n\t\t\t\t\t\t\t\t<input id=\"topicLimit\" type=\"text\" class=\"form-control\" placeholder=\"Number of topics to return\" value=\"" + 
      __escape(guard((context != null) ? context['topicLimit'] : null)) + 
      "\">\r\n\t\t\t\t\t\t\t\t<label>Post Limit</label>\r\n\t\t\t\t\t\t\t\t<input id=\"postLimit\" type=\"text\" class=\"form-control\" placeholder=\"Number of posts to return\" value=\"" + 
      __escape(guard((context != null) ? context['postLimit'] : null)) + 
      "\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\r\n\t\t\t\t<button class=\"btn btn-primary\" id=\"save\">Save</button>\r\n\r\n\t\t\t\t<input id=\"csrf_token\" type=\"hidden\" value=\"" + 
      __escape(guard((context != null) ? context['csrf'] : null)) + 
      "\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'allCategories': function allCategories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['allCategories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['allCategories'] != null && context['allCategories'][key0] != null) ? context['allCategories'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['allCategories'] != null && context['allCategories'][key0] != null) ? context['allCategories'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['allCategories'] != null && context['allCategories'][key0] != null) ? context['allCategories'][key0]['text'] : null)) + 
          "</option>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['languages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['name'] : null)) + 
          "</option>\r\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
