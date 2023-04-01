
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
    return "<div class=\"search-widget\">\n\t<form action=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/search\" method=\"GET\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-6 " + 
      (guard((context != null) ? context['showInControl'] : null) ?
        "col-md-10" :
        " col-md-12 ") + 
      "\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"term\" placeholder=\"Search\"/>\n\t\t\t\t\t<div class=\"input-group-btn\">\n\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">\n\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"quick-search-container hidden\" style=\"right: auto; z-index: 1001;\">\n\t\t\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"" + 
      (guard((context != null) ? context['showInControl'] : null) ?
        "col-xs-2 col-md-2 " :
        " hidden ") + 
      "\">\n\t\t\t\t<select name=\"in\" class=\"form-control\">\n\t\t\t\t\t" + 
      compiled.blocks['inOptions'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n<script>\n(function() {\n\tasync function prepareSearch() {\n\t\tconst isQuickSearchEnabled = " + 
      __escape(guard((context != null) ? context['enableQuickSearch'] : null)) + 
      ";\n\t\tif (isQuickSearchEnabled) {\n\t\t\tconst search = await app.require('search');\n\t\t\tconst searchWidget =  $('.search-widget');\n\t\t\tfunction enableQuickSearch () {\n\t\t\t\tsearch.enableQuickSearch({\n\t\t\t\t\tsearchElements: {\n\t\t\t\t\t\tinputEl: searchWidget.find('input[name=\"term\"]'),\n\t\t\t\t\t\tresultEl: searchWidget.find('.quick-search-container'),\n\t\t\t\t\t},\n\t\t\t\t\tsearchOptions: {\n\t\t\t\t\t\tin: searchWidget.find('select[name=\"in\"]').val(),\n\t\t\t\t\t},\n\t\t\t\t});\n\t\t\t}\n\t\t\tenableQuickSearch();\n\t\t\tsearchWidget.find('select[name=\"in\"]').on('change', function () {\n\t\t\t\tenableQuickSearch();\n\t\t\t\tsearchWidget.find('input[name=\"term\"]').trigger('refresh');\n\t\t\t});\n\t\t}\n\t}\n\tif (document.readyState === 'loading') {\n\t\tdocument.addEventListener('DOMContentLoaded', prepareSearch);\n\t} else {\n\t\tprepareSearch();\n\t}\n})();\n</script>\n";
  }

  compiled.blocks = {
    'inOptions': function inOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['inOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['inOptions'] != null && context['inOptions'][key0] != null) ? context['inOptions'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['inOptions'] != null && context['inOptions'][key0] != null) ? context['inOptions'][key0]['selected'] : null) ?
            " selected " :
            "") + 
          ">" + 
          __escape(guard((context != null && context['inOptions'] != null && context['inOptions'][key0] != null) ? context['inOptions'][key0]['label'] : null)) + 
          "</option>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
