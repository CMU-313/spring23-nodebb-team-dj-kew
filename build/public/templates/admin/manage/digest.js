
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
    return "<p class=\"lead\">[[admin/manage/digest:lead]]</p>\n<p>[[admin/manage/digest:disclaimer]]</p>\n<p>[[admin/manage/digest:disclaimer-continued]]</p>\n\n<hr />\n\n<table class=\"table table-striped\">\n    <thead>\n        <th>[[admin/manage/digest:user]]</th>\n        <th>[[admin/manage/digest:subscription]]</th>\n        <th>[[admin/manage/digest:last-delivery]]</th>\n        <th></th>\n    </thead>\n    <tbody>\n        " + 
      compiled.blocks['delivery'](helpers, context, guard, iter, helper) + 
      "\n        " + 
      (guard((context != null && context['delivery'] != null) ? context['delivery']['length'] : null) ?
        "" :
        "\n        <tr>\n            <td colspan=\"4\">\n                <div class=\"alert alert-success\">\n                    [[admin/manage/digest:no-delivery-data]]\n                </div>\n            </td>\n        </tr>\n        ") + 
      "\n    </tbody>\n    <tfoot>\n        <tr>\n            <td colspan=\"4\"><div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div></td>\n        </tr>\n        <tr>\n            <td colspan=\"4\">\n                <em>[[admin/manage/digest:default-help, " + 
      __escape(guard((context != null) ? context['default'] : null)) + 
      "]]</em>\n            </td>\n        </tr>\n        <tr>\n            <td colspan=\"4\">\n                [[admin/manage/digest:manual-run]]\n                <button class=\"btn btn-xs btn-default\" data-action=\"resend-day\">[[admin/settings/user:digest-freq.daily]]</button>\n                <button class=\"btn btn-xs btn-default\" data-action=\"resend-week\">[[admin/settings/user:digest-freq.weekly]]</button>\n                <button class=\"btn btn-xs btn-default\" data-action=\"resend-biweek\">[[admin/settings/user:digest-freq.biweekly]]</button>\n                <button class=\"btn btn-xs btn-default\" data-action=\"resend-month\">[[admin/settings/user:digest-freq.monthly]]</button>\n            </td>\n        </tr>\n    </tfoot>\n</table>\n";
  }

  compiled.blocks = {
    'delivery': function delivery(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['delivery'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <tr>\n            <td><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['delivery'] != null) ? context['delivery'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['username'] : null)) + 
          "</a></td>\n            <td>" + 
          (guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['setting'] : null) ?
            __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['setting'] : null)) :
            "<em>[[admin/manage/digest:default]]</em>") + 
          "</td>\n            <td>" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['lastDelivery'] : null)) + 
          "</td>\n            <td><button class=\"btn btn-xs btn-default\" data-action=\"resend\" data-uid=\"" + 
          __escape(guard((context != null && context['delivery'] != null && context['delivery'][key0] != null) ? context['delivery'][key0]['uid'] : null)) + 
          "\">[[admin/manage/digest:resend]]</button></td>\n        </tr>\n        ";
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
