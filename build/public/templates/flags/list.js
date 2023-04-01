
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
      "\n\n\n<div class=\"row\">\n    <div class=\"col-sm-4 col-md-3\">\n        <div class=\"text-center\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body collapse\" id=\"flags-daily-wrapper\" aria-expanded=\"false\">\n            <div><canvas id=\"flags:daily\" height=\"150\"></canvas></div>\n        </div>\n        <div class=\"panel-footer\" data-toggle=\"collapse\" data-target=\"#flags-daily-wrapper\" aria-controls=\"#flags-daily-wrapper\"><small>[[flags:graph-label]]</small>&nbsp;<i class=\"fa fa-sort\"></i></div>\n    </div>\n</div>\n\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">[[flags:quick-filters]]</h3>\n    </div>\n    <div class=\"panel-body\">\n        <ul>\n            <li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/flags?quick=mine\">[[flags:filter-quick-mine]]</a></li>\n        </ul>\n    </div>\n</div>\n\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">[[flags:filters]]</h3>\n    </div>\n    <div class=\"panel-body\">\n        <form role=\"form\" component=\"flags/filters\">\n            <fieldset>\n                <div class=\"form-group\">\n                    <label for=\"filter-cid\">[[flags:filter-cid]]</label>\n                    <div class=\"input-group\">\n                    <div component=\"category/dropdown\" class=\"btn-group category-dropdown-container bottom-sheet\">\n   <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    " + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
          ";\"></i></span> <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "</span>" :
        "\n    <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[unread:all_categories]]</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-list\"></i></span>") + 
      " <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden\">\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n    <li role=\"presentation\" class=\"category\" data-all=\"all\">\n        <a role=\"menu-item\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) + 
      "\"><i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "invisible" :
        "") + 
      "\"></i> [[unread:all_categories]]</a>\n    </li>\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"sort\">[[flags:sort]]</label>\n                    <select class=\"form-control\" id=\"sort\" name=\"sort\">\n                        <optgroup label=\"[[flags:sort-all]]\">\n                            <option value=\"newest\">[[flags:sort-newest]]</option>\n                            <option value=\"oldest\">[[flags:sort-oldest]]</option>\n                            <option value=\"reports\">[[flags:sort-reports]]</option>\n                        </optgroup>\n                        <optgroup label=\"[[flags:sort-posts-only]]\">\n                            <option value=\"downvotes\">[[flags:sort-downvotes]]</option>\n                            <option value=\"upvotes\">[[flags:sort-upvotes]]</option>\n                            <option value=\"replies\">[[flags:sort-replies]]</option>\n                        </optgroup>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"filter-state\">[[flags:filter-state]]</label>\n                    <select class=\"form-control\" id=\"filter-state\" name=\"state\">\n                        <option value=\"\">[[flags:state-all]]</option>\n                        <option value=\"open\">[[flags:state-open]]</option>\n                        <option value=\"wip\">[[flags:state-wip]]</option>\n                        <option value=\"resolved\">[[flags:state-resolved]]</option>\n                        <option value=\"rejected\">[[flags:state-rejected]]</option>\n                    </select>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"filter-type\">[[flags:filter-type]]</label>\n                    <select class=\"form-control\" id=\"filter-type\" name=\"type\">\n                        <option value=\"\">[[flags:filter-type-all]]</option>\n                        <option value=\"post\">[[flags:filter-type-post]]</option>\n                        <option value=\"user\">[[flags:filter-type-user]]</option>\n                    </select>\n                </div>\n            </fieldset>\n\n            <fieldset class=\"collapse" + 
      (guard((context != null) ? context['expanded'] : null) ?
        " in" :
        "") + 
      "\" id=\"more-filters\" aria-expanded=\"" + 
      __escape(guard((context != null) ? context['expanded'] : null)) + 
      "\">\n                <div class=\"form-group\">\n                    <label for=\"filter-assignee\">[[flags:filter-assignee]]</label>\n                    <input type=\"text\" class=\"form-control\" id=\"filter-assignee\" name=\"assignee\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"filter-targetUid\">[[flags:filter-targetUid]]</label>\n                    <input type=\"text\" class=\"form-control\" id=\"filter-targetUid\" name=\"targetUid\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"filter-reporterId\">[[flags:filter-reporterId]]</label>\n                    <input type=\"text\" class=\"form-control\" id=\"filter-reporterId\" name=\"reporterId\" />\n                </div>\n            </fieldset>\n\n            " + 
      (guard((context != null) ? context['expanded'] : null) ?
        "\n            <button type=\"button\" class=\"btn btn-link btn-block\" data-toggle=\"collapse\" data-target=\"#more-filters\" aria-controls=\"#more-filters\" data-text-variant=\"[[flags:more-filters]] \">[[flags:fewer-filters]]&nbsp;<i class=\"fa fa-sort\"></i></button>\n            " :
        "\n            <button type=\"button\" class=\"btn btn-link btn-block\" data-toggle=\"collapse\" data-target=\"#more-filters\" aria-controls=\"#more-filters\" data-text-variant=\"[[flags:fewer-filters]] \">[[flags:more-filters]]&nbsp;<i class=\"fa fa-sort\"></i></button>\n            ") + 
      "\n            <button type=\"button\" id=\"apply-filters\" class=\"btn btn-primary btn-block\">[[flags:apply-filters]]</button>\n        </form>\n    </div>\n</div>\n    </div>\n    <div class=\"col-sm-8 col-md-9\">\n        " + 
      (guard((context != null) ? context['hasFilter'] : null) ?
        "\n        <div class=\"alert alert-warning\">\n            <p class=\"pull-right\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/flags\">[[flags:filter-reset]]</a>\n            </p>\n            [[flags:filter-active]]\n        </div>\n        " :
        "") + 
      "\n\n        <div class=\"btn-group pull-right\" component=\"flags/bulk-actions\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" autocomplete=\"off\" aria-haspopup=\"true\" aria-expanded=\"false\" disabled=\"disabled\">\n                <i class=\"fa fa-clone\"></i> [[flags:bulk-actions]] <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\" data-action=\"bulk-assign\">[[flags:assign-to-me]]</a></li>\n                <li><a href=\"#\" data-action=\"bulk-mark-resolved\">[[flags:bulk-resolve]]</a></li>\n            </ul>\n        </div>\n\n        <table class=\"table table-striped table-hover\" component=\"flags/list\">\n            <thead>\n                <tr>\n                    <th>\n                        <input type=\"checkbox\" data-action=\"toggle-all\" autocomplete=\"off\" />\n                    </th>\n                    <th></th>\n                    <th><span class=\"hidden-xs\">[[flags:reports]] </span><i class=\"fa fa-user-plus\"></i></th>\n                    <th><span class=\"hidden-xs\">[[flags:first-reported]] </span><i class=\"fa fa-clock-o\"></i></th>\n                    <th>[[flags:state]]</th>\n                </tr>\n            </thead>\n            <tbody>\n                " + 
      (guard((context != null && context['flags'] != null) ? context['flags']['length'] : null) ?
        "" :
        "\n                <tr>\n                    <td colspan=\"5\">\n                        <div class=\"alert alert-success text-center\">\n                            [[flags:no-flags]]\n                        </div>\n                    </td>\n                </tr>\n                ") + 
      "\n                " + 
      compiled.blocks['flags'](helpers, context, guard, iter, helper) + 
      "\n            </tbody>\n        </table>\n\n        <div component=\"pagination\" class=\"text-center pagination-container" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n    <ul class=\"pagination hidden-xs\">\n        <li class=\"previous pull-left" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n        </li>\n\n        " + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n\n        <li class=\"next pull-right" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n        </li>\n    </ul>\n\n    <ul class=\"pagination hidden-sm hidden-md hidden-lg\">\n        <li class=\"first" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
      "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n        </li>\n\n        <li class=\"previous" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n        </li>\n\n        <li component=\"pagination/select-page\" class=\"page select-page\">\n            <a href=\"#\">" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "</a>\n        </li>\n\n        <li class=\"next" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n        </li>\n\n        <li class=\"last" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n            <a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div>\n    </div>\n</div>\n";
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
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\n        <a role=\"menu-item\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i><span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i class=\"fa fa-fw fa-stack-1x " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\" style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'flags': function flags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['flags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <tr data-flag-id=\"" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['flagId'] : null)) + 
          "\">\n                    <td>\n                        <input type=\"checkbox\" autocomplete=\"off\" />\n                    </td>\n                    <td>\n                        <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/flags/" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['flagId'] : null)) + 
          "\">\n                            <strong>" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['target_readable'] : null)) + 
          "</strong>\n                        </a>\n                    </td>\n                    <td>\n                        " + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['heat'] : null)) + 
          "\n                    </td>\n                    <td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['datetimeISO'] : null)) + 
          "\"></span></td>\n                    <td><span class=\"label label-" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['labelClass'] : null)) + 
          "\">[[flags:state-" + 
          __escape(guard((context != null && context['flags'] != null && context['flags'][key0] != null) ? context['flags'][key0]['state'] : null)) + 
          "]]</span></td>\n                </tr>\n                ";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            " + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n            <li component=\"pagination/select-page\" class=\"page select-page\">\n                <a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n            </li>\n            " :
            "\n            <li class=\"page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n                <a href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n            </li>\n            ") + 
          "\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
