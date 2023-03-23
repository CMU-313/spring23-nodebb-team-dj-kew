
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
      "\n\n<div class=\"clearfix\">\n    <div class=\"pull-right\">\n        <div class=\"btn-group\">\n            <button id=\"new-folder\" class=\"btn-primary\"><i class=\"fa fa-folder\"></i> [[admin/manage/uploads:new-folder]]</button>\n        </div>\n        <div class=\"btn-group\">\n            <button id=\"upload\" class=\"btn-success\"><i class=\"fa fa-upload\"></i> [[global:upload]]</button>\n        </div>\n    </div>\n</div>\n\n<div class=\"table-responsive\">\n    <table class=\"table table-striped users-table\">\n        <thead>\n            <tr>\n                <th>[[admin/manage/uploads:filename]]</th>\n                " + 
      (guard((context != null) ? context['showPids'] : null) ?
        "<th class=\"text-right\">[[admin/manage/uploads:usage]]</th>" :
        "") + 
      "\n                <th class=\"text-right\">[[admin/manage/uploads:size/filecount]]</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            " + 
      compiled.blocks['files'](helpers, context, guard, iter, helper) + 
      "\n        </tbody>\n    </table>\n</div>\n\n<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div>";
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
    'files': function files(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['files'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <tr data-path=\"" + 
          __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['path'] : null)) + 
          "\">\n                " + 
          (guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['isDirectory'] : null) ?
            "\n                <td class=\"col-md-6\" role=\"button\">\n                    <i class=\"fa fa-fw fa-folder-o\"></i> <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/admin/manage/uploads?dir=" + 
              __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['path'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['name'] : null)) + 
              "</a>\n                </td>\n                " :
            "") + 
          "\n\n                " + 
          (guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['isFile'] : null) ?
            "\n                <td class=\"col-md-6\">\n                    <i class=\"fa fa-fw fa-file-text-o\"></i> <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['url'] : null)) + 
              "\" target=\"_blank\">" + 
              __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['name'] : null)) + 
              "</a>\n                </td>\n                " :
            "") + 
          "\n\n                " + 
          (guard((context != null) ? context['showPids'] : null) ?
            "\n                <td class=\"col-md-3 text-right\">\n                    " + 
              iter(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['inPids'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n                    <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/post/" + 
                  __escape(guard(value)) + 
                  "\"><span class=\"label label-default\">" + 
                  __escape(guard(value)) + 
                  "</span></a>\n                    ";
              }, function alt() {
                return "";
              }) + 
              "\n                    " + 
              (guard((context != null && context['files'] != null && context['files'][key0] != null && context['files'][key0]['inPids'] != null) ? context['files'][key0]['inPids']['length'] : null) ?
                "" :
                "\n                    <span class=\"label label-danger\">[[admin/manage/uploads:orphaned]]</span>\n                    ") + 
              "\n                </td>\n                " :
            "") + 
          "\n\n                <td class=\"col-md-2 text-right\">" + 
          (guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['isFile'] : null) ?
            __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['sizeHumanReadable'] : null)) :
            "[[admin/manage/uploads:filecount, " + 
              __escape(guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['fileCount'] : null)) + 
              "]]") + 
          "</td>\n\n                <td role=\"button\" class=\"col-md-1 text-right\"><i class=\"delete fa fa-fw fa-trash-o " + 
          (guard((context != null && context['files'] != null && context['files'][key0] != null) ? context['files'][key0]['isFile'] : null) ?
            "" :
            " hidden") + 
          "\"></i></td>\n            </tr>\n            ";
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
