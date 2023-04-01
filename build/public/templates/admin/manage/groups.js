
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
    return "<div class=\"row\">\n    <div class=\"col-lg-3 pull-right\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"[[admin/manage/groups:search-placeholder]]\" id=\"group-search\">\n            <span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\n        </div>\n    </div>\n</div>\n<div class=\"row groups\">\n    <div class=\"col-xs-12\">\n        <table class=\"table table-striped groups-list\">\n            <thead>\n                <tr>\n                    <th>[[admin/manage/groups:name]]</th>\n                    <th>[[admin/manage/groups:badge]]</th>\n                    <th>[[admin/manage/groups:properties]]</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                " + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n            </tbody>\n            <tfoot>\n                <tr>\n                    <td colspan=\"6\"><br /><br /></td>\n                </tr>\n            </tfoot>\n        </table>\n\n        <div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div>\n    </div>\n\n    <div class=\"modal fade\" id=\"create-modal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                    <h4 class=\"modal-title\">[[admin/manage/groups:create]]</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"alert alert-danger hide\" id=\"create-modal-error\"></div>\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"create-group-name\">[[admin/manage/groups:name]]</label>\n                            <input type=\"text\" class=\"form-control\" id=\"create-group-name\" placeholder=\"[[admin/manage/groups:name]]\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"create-group-desc\">[[admin/manage/groups:description]]</label>\n                            <input type=\"text\" class=\"form-control\" id=\"create-group-desc\" placeholder=\"[[admin/manage/groups:description-placeholder]]\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label>\n                                <input id=\"create-group-private\" name=\"private\" type=\"checkbox\" checked>\n                                <strong>[[admin/manage/groups:private]]</strong>\n                            </label>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>\n                                <input id=\"create-group-hidden\" name=\"hidden\" type=\"checkbox\">\n                                <strong>[[admin/manage/groups:hidden]]</strong>\n                            </label>\n                        </div>\n\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                        [[global:close]]\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">\n                        [[admin/manage/groups:create-button]]\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<button id=\"create\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">add</i>\n</button>\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <tr data-groupname=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\" data-name-encoded=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['nameEncoded'] : null)) + 
          "\">\n                    <td>\n                        <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</a> (" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['memberCount'] : null)) + 
          ")\n                        <p class=\"description\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['description'] : null)) + 
          "</p>\n                    </td>\n                    <td>\n                        <span class=\"label label-default\" style=\"color:" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['textColor'] : null)) + 
          "; background-color: " + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['labelColor'] : null)) + 
          ";\">" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitle'] : null)) + 
          "</span>\n                    </td>\n                    <td>\n                        " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['system'] : null) ?
            "\n                        <span class=\"label label-danger\">[[admin/manage/groups:system]]</span>\n                        " :
            "") + 
          "\n                        " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['private'] : null) ?
            "\n                        <span class=\"label label-primary\">[[admin/manage/groups:private]]</span>\n                        " :
            "") + 
          "\n                        " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['hidden'] : null) ?
            "\n                        <span class=\"label label-default\">[[admin/manage/groups:hidden]]</span>\n                        " :
            "") + 
          "\n                    </td>\n\n                    <td>\n                        <div class=\"btn-group\">\n                            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/api/admin/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['nameEncoded'] : null)) + 
          "/csv\" class=\"btn btn-default\">[[admin/manage/groups:download-csv]]</a>\n\n                            <div component=\"category-selector\" class=\"btn-group\">\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n        <span>[[admin/manage/groups:privileges]]</span> <span class=\"caret\"></span>\n    </button>\n    <div component=\"category-selector-search\" class=\"hidden\">\n        <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n    </div>\n    <ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu dropdown-menu-right\" role=\"menu\">\n        <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n            <a role=\"menuitem\">[[search:no-matches]]</a>\n        </li>\n        " + 
          iter(guard((context != null) ? context['categories'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n        <li role=\"presentation\" class=\"category " + 
              (guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['disabledClass'] : null) ?
                "disabled" :
                "") + 
              "\" data-cid=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['cid'] : null)) + 
              "\" data-name=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['name'] : null)) + 
              "\" data-parent-cid=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['parentCid'] : null)) + 
              "\">\n            <a role=\"menuitem\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['level'] : null)) + 
              "<span component=\"category-markup\">" + 
              (guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['icon'] : null) ?
                "<span class=\"fa-stack\" style=\"" + 
                  __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
                  "\"><i style=\"color: " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['color'] : null)) + 
                  ";\" class=\"fa fa-stack-1x fa-fw " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['icon'] : null)) + 
                  "\"></i></span>" :
                "") + 
              " " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['name'] : null)) + 
              "</span></a>\n        </li>\n        ";
          }, function alt() {
            return "";
          }) + 
          "\n    </ul>\n</div>\n\n                            " + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['system'] : null) ?
            "" :
            "\n                            <button class=\"btn btn-danger\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\n                            ") + 
          "\n                        </div>\n                    </td>\n                </tr>\n                ";
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
