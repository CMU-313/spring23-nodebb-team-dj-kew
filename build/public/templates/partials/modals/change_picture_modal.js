
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
    return "<div class=\"row\">\n    <div class=\"col-xs-6 col-sm-8 col-md-6\">\n        <div class=\"list-group media\">\n            <button type=\"button\" class=\"list-group-item\" data-type=\"default\">\n                <div class=\"media-left\">\n                    " + 
      (guard((context != null) ? context['defaultAvatar'] : null) ?
        "\n                    <img class=\"media-object\" src=\"" + 
          __escape(guard((context != null) ? context['defaultAvatar'] : null)) + 
          "\"  />\n                    " :
        "\n                    <div class=\"user-icon media-object\" style=\"background-color: " + 
          __escape(guard((context != null && context['icon'] != null) ? context['icon']['bgColor'] : null)) + 
          ";\">" + 
          __escape(guard((context != null && context['icon'] != null) ? context['icon']['text'] : null)) + 
          "</div>\n                    ") + 
      "\n                </div>\n                <div class=\"media-body\">\n                    <h4 class=\"media-heading\">[[user:default_picture]]</h4>\n                </div>\n            </button>\n            " + 
      compiled.blocks['pictures'](helpers, context, guard, iter, helper) + 
      "\n        </div>\n    </div>\n    <div class=\"col-xs-6 col-sm-4 col-md-6\">\n        <div class=\"btn-group-vertical btn-block\" role=\"group\">\n            " + 
      (guard((context != null) ? context['allowProfileImageUploads'] : null) ?
        "\n            <button type=\"button\" class=\"btn btn-default\" data-action=\"upload\">\n                <span class=\"hidden-xs hidden-sm\">\n                    [[user:upload_new_picture]]\n                </span>\n                <span class=\"visible-xs-inline visible-sm-inline\">\n                    <i class=\"fa fa-plus\"></i>\n                    <i class=\"fa fa-upload\"></i>\n                </span>\n            </button>\n            " :
        "") + 
      "\n            <button type=\"button\" class=\"btn btn-default\" data-action=\"upload-url\">\n                <span class=\"hidden-xs hidden-sm\">\n                    [[user:upload_new_picture_from_url]]\n                </span>\n                <span class=\"visible-xs-inline visible-sm-inline\">\n                    <i class=\"fa fa-plus\"></i>\n                    <i class=\"fa fa-link\"></i>\n                </span>\n            </button>\n            " + 
      (guard((context != null) ? context['uploaded'] : null) ?
        "\n            <button type=\"button\" class=\"btn btn-default\" data-action=\"remove-uploaded\">\n                <span class=\"hidden-xs hidden-sm\">\n                    [[user:remove_uploaded_picture]]\n                </span>\n                <span class=\"visible-xs-inline visible-sm-inline\">\n                    <i class=\"fa fa-picture-o\"></i>\n                    <i class=\"fa fa-long-arrow-right\"></i>\n                    <i class=\"fa fa-trash-o\"></i>\n                </span>\n            </button>\n            " :
        "") + 
      "\n        </div>\n    </div>\n</div>\n\n<hr />\n\n<h4>[[user:avatar-background-colour]]</h4>\n\n<label><input type=\"radio\" name=\"icon:bgColor\" value=\"transparent\" /><span></span></label>\n" + 
      compiled.blocks['iconBackgrounds'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'pictures': function pictures(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['pictures'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <button type=\"button\" class=\"list-group-item\" data-type=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['type'] : null)) + 
          "\">\n                <div class=\"media-left\">\n                    <img class=\"media-object\" src=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['url'] : null)) + 
          "\" title=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['text'] : null)) + 
          "\" />\n                </div>\n                <div class=\"media-body\">\n                    <h4 class=\"media-heading\">" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['text'] : null)) + 
          "</h4>\n                </div>\n            </button>\n            ";
      }, function alt() {
        return "";
      });
    },
    'iconBackgrounds': function iconBackgrounds(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['iconBackgrounds'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<label><input type=\"radio\" name=\"icon:bgColor\" value=\"" + 
          __escape(guard(value)) + 
          "\" /><span style=\"background-color: " + 
          __escape(guard(value)) + 
          ";\"></span></label>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
