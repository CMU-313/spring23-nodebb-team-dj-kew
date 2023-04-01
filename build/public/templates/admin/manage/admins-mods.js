
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
    return "<div class=\"admins-mods\">\n    <h4>" + 
      (guard((context != null && context['admins'] != null) ? context['admins']['icon'] : null) ?
        "<i class=\"fa " + 
          __escape(guard((context != null && context['admins'] != null) ? context['admins']['icon'] : null)) + 
          "\"></i> " :
        "") + 
      "[[admin/manage/admins-mods:administrators]]</h4>\n    <div class=\"administrator-area\">\n    " + 
      compiled.blocks['admins.members'](helpers, context, guard, iter, helper) + 
      "\n    </div>\n    <input id=\"admin-search\" class=\"form-control\" placeholder=\"[[admin/manage/admins-mods:add-administrator]]\" />\n\n    <br/>\n\n    <h4>" + 
      (guard((context != null && context['globalMods'] != null) ? context['globalMods']['icon'] : null) ?
        "<i class=\"fa " + 
          __escape(guard((context != null && context['globalMods'] != null) ? context['globalMods']['icon'] : null)) + 
          "\"></i> " :
        "") + 
      "[[admin/manage/admins-mods:global-moderators]]</h4>\n    <div class=\"global-moderator-area\">\n    " + 
      compiled.blocks['globalMods.members'](helpers, context, guard, iter, helper) + 
      "\n    </div>\n\n    <div id=\"no-global-mods-warning\" class=\"" + 
      (guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null) ? context['globalMods']['members']['length'] : null) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/admins-mods:no-global-moderators]]</div>\n\n    <input id=\"global-mod-search\" class=\"form-control\" placeholder=\"[[admin/manage/admins-mods:add-global-moderator]]\" />\n\n    <br/>\n\n    <h4 id=\"moderators-title\">[[admin/manage/admins-mods:moderators]]</h4>\n\n    " + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n    " + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\n    <div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
          ";\"></i></span> " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) :
        "\n    <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread_tools.select_category]]") + 
          "</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          "\"></i></span>\n    ") + 
      "</span> <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden\">\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n    <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n        <a role=\"menu-item\">[[search:no-matches]]</a>\n    </li>\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n\n    " + 
      (guard((context != null && context['categoryMods'] != null) ? context['categoryMods']['length'] : null) ?
        "" :
        "\n    <div><p class=\"well\">[[admin/manage/admins-mods:no-sub-categories]]</p></div>\n    ") + 
      "\n\n    " + 
      compiled.blocks['categoryMods'](helpers, context, guard, iter, helper) + 
      "\n    <div>\n        <div component=\"pagination\" class=\"text-center pagination-container" + 
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
    'admins.members': function adminsmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['admins'] != null) ? context['admins']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <div class=\"user-card pull-left\" data-uid=\"" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['uid'] : null)) + 
          "\">\n            " + 
          (guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['picture'] : null) ?
            "\n            <img class=\"avatar avatar-sm\" src=\"" + 
              __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['picture'] : null)) + 
              "\" alt=\"\" />\n            " :
            "\n            <div class=\"avatar avatar-sm\" style=\"background-color: " + 
              __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['icon:text'] : null)) + 
              "</div>\n            ") + 
          "\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['username'] : null)) + 
          "</a>\n            <i class=\"remove-user-icon fa fa-times\" role=\"button\"></i>\n        </div>\n    ";
      }, function alt() {
        return "";
      });
    },
    'globalMods.members': function globalModsmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['globalMods'] != null) ? context['globalMods']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <div class=\"user-card pull-left\" data-uid=\"" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['uid'] : null)) + 
          "\">\n            " + 
          (guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['picture'] : null) ?
            "\n            <img class=\"avatar avatar-sm\" src=\"" + 
              __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['picture'] : null)) + 
              "\" alt=\"\" />\n            " :
            "\n            <div class=\"avatar avatar-sm\" style=\"background-color: " + 
              __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['icon:text'] : null)) + 
              "</div>\n            ") + 
          "\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['username'] : null)) + 
          "</a>\n            <i class=\"remove-user-icon fa fa-times\" role=\"button\"></i>\n        </div>\n    ";
      }, function alt() {
        return "";
      });
    },
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
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n        <a role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'categoryMods': function categoryMods(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryMods'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <div class=\"categories category-wrapper category-depth-" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['depth'] : null)) + 
          "\">\n    <h4>" + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['name'] : null)) + 
          " " + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['subCategoryCount'] : null) ?
            "<small><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/admin/manage/admins-mods?cid=" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
              "#moderators-title\">[[admin/manage/admins-mods:subcategories, " + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['subCategoryCount'] : null)) + 
              "]]</a></small>" :
            "") + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['disabled'] : null) ?
            "<span class=\"badge badge-primary\">[[admin/manage/admins-mods:disabled]]</span>" :
            "") + 
          "</h4>\n    <div class=\"moderator-area\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\">\n        " + 
          iter(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['moderators'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n            <div class=\"user-card pull-left\" data-uid=\"" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['uid'] : null)) + 
              "\">\n                " + 
              (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['picture'] : null) ?
                "\n                <img class=\"avatar avatar-sm\" src=\"" + 
                  __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['picture'] : null)) + 
                  "\" alt=\"\" />\n                " :
                "\n                <div class=\"avatar avatar-sm\" style=\"background-color: " + 
                  __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['icon:bgColor'] : null)) + 
                  ";\">" + 
                  __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['icon:text'] : null)) + 
                  "</div>\n                ") + 
              "\n                <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['username'] : null)) + 
              "</a>\n                <i class=\"remove-user-icon fa fa-times\" role=\"button\"></i>\n            </div>\n        ";
          }, function alt() {
            return "";
          }) + 
          "\n    </div>\n\n    <div data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\" class=\"no-moderator-warning " + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null) ? context['categoryMods'][key0]['moderators']['length'] : null) ?
            "hidden" :
            "") + 
          "\">[[admin/manage/admins-mods:no-moderators]]</div>\n\n    <input data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\" class=\"form-control moderator-search\" placeholder=\"[[admin/manage/admins-mods:add-moderator]]\" />\n    </div>\n    <br/>\n    ";
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
