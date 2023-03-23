
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
    return "<ul data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\" " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null) ?
            "class=\"disabled\"" :
            "") + 
          ">\n        <div class=\"row category-row\">\n            <div class=\"col-md-9\">\n                <div class=\"clearfix\">\n                    <div class=\"toggle\">\n                        <i class=\"fa fa-chevron-down\"></i>\n                    </div>\n                    <div class=\"information\">\n                        <div class=\"icon\" style=\"\n                            color: " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['color'] : null)) + 
          ";\n                            background-color: " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['bgColor'] : null)) + 
          ";\n                            " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['backgroundImage'] : null) ?
            "\n                            background-image: url('" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['backgroundImage'] : null)) + 
              "');\n                            " :
            "") + 
          "\n                        \">\n                            <i data-name=\"icon\" value=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
          "\" class=\"fa " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
          "\"></i>\n                        </div>\n                        <h5 class=\"category-header\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "</a> " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            "<small><a class=\"text-muted\" href=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
              "\"><i class=\"fa fa-link\"></i> " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
              "</a></small>" :
            "") + 
          "</h5>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"clearfix pull-right text-right\">\n                    <div class=\"btn-group category-tools\">\n                        <button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></button>\n                        <ul class=\"dropdown-menu dropdown-menu-right\">\n                            <li><a href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">[[admin/manage/categories:edit]]</a></li>\n                            <li><a href=\"./categories/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "/analytics\">[[admin/manage/categories:analytics]]</a></li>\n                            <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/privileges/" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">[[admin/manage/categories:privileges]]</a></li>\n\n                            <li><a href=\"" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) :
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null))) + 
          "\" target=\"_blank\">[[admin/manage/categories:view-category]]</a></li>\n\n                            <li>\n                                <a href=\"#\" data-disable-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-action=\"toggle\" data-disabled=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null)) + 
          "\">\n                                " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabled'] : null) ?
            "\n                                [[admin/manage/categories:enable]]\n                                " :
            "\n                                [[admin/manage/categories:disable]]\n                                ") + 
          "\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"set-order\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-order=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['order'] : null)) + 
          "\">[[admin/manage/categories:set-order]]</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <ul class=\"list-unstyled has-more-categories " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['hasMoreSubCategories'] : null) ?
            "" :
            "hidden") + 
          "\">\n            <li>\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/categories?cid=" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "&page=" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['showMorePage'] : null)) + 
          "\" class=\"btn btn-outline-secondary\">[[category:x-more-categories, " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['subCategoriesLeft'] : null)) + 
          "]]</a>\n            </li>\n        </ul>\n    </li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
