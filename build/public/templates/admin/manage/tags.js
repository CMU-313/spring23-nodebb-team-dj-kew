
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
    return "<div class=\"tags row\">\n    <div class=\"col-lg-9\">\n        <div class=\"panel panel-default tag-management\">\n            <div class=\"panel-body\">\n                <div class=\"alert alert-info\">\n                    <p>[[admin/manage/tags:description]]</p>\n                </div>\n\n                " + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "" :
        "\n                [[admin/manage/tags:none]]\n                ") + 
      "\n\n                <div class=\"tag-list\">\n                    " + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-lg-3 acp-sidebar\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <button class=\"btn btn-primary btn-block\" id=\"create\">[[admin/manage/tags:create]]</button>\n                <button class=\"btn btn-primary btn-block\" id=\"rename\">[[admin/manage/tags:rename]]</button>\n                <button class=\"btn btn-warning btn-block\" id=\"deleteSelected\">[[admin/manage/tags:delete]]</button>\n                <hr />\n                <a class=\"btn btn-default btn-block\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/settings/tags\">\n                    <i class=\"fa fa-external-link\"></i>\n                    [[admin/manage/tags:settings]]\n                </a>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <input class=\"form-control\" type=\"text\" id=\"tag-search\" placeholder=\"[[admin/manage/tags:search]]\"/><br/>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"create-modal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                    <h4 class=\"modal-title\">[[admin/manage/tags:create]]</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"create-tag-name\">[[admin/manage/tags:name]]</label>\n                            <input type=\"text\" class=\"form-control\" id=\"create-tag-name\" placeholder=\"[[admin/manage/tags:name]]\" />\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">[[admin/manage/tags:create]]</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"rename-modal hidden\">\n        <div class=\"form-group\">\n            <label for=\"value\">[[admin/manage/tags:name]]</label>\n            <input id=\"value\" data-name=\"value\" value=\"\" class=\"form-control\" />\n        </div>\n    </div>\n</div>\n";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <div class=\"tag-row\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\">\n                        <div>\n                            <span class=\"mdl-chip mdl-chip--contact tag-item\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\" style=\"\n                                " + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null) ?
            "color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null)) + 
              ";" :
            "") + 
          "\n                                " + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null) ?
            "background-color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null)) + 
              ";" :
            "") + 
          "\">\n                                <span class=\"mdl-chip__contact mdl-color--light-blue mdl-color-text--white tag-topic-count\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</span>\n                                <span class=\"mdl-chip__text\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span>\n                            </span>\n                        </div>\n                    </div>\n                    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
