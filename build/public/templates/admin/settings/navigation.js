
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
    return "<div class=\"row\" id=\"navigation\">\n    <div class=\"col-lg-9\">\n        <div class=\"clearfix\">\n            <ul id=\"active-navigation\" class=\"nav navbar-nav\">\n                " + 
      compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
      "\n            </ul>\n        </div>\n\n        <hr/>\n\n        <ul id=\"enabled\">\n            " + 
      compiled.blocks['enabled'](helpers, context, guard, iter, helper) + 
      "\n        </ul>\n    </div>\n\n    <div class=\"col-lg-3\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/settings/navigation:available-menu-items]]</div>\n            <div class=\"panel-body\">\n                <ul id=\"available\">\n                    <li data-id=\"custom\" class=\"clearfix\">\n                        <div data-id=\"custom\" class=\"drag-item alert alert-success pull-left\">\n                            <i class=\"fa fa-fw fa-plus-circle\"></i>\n                        </div>\n                        <p>\n                            <strong>[[admin/settings/navigation:custom-route]]</strong>\n                        </p>\n                    </li>\n                    " + 
      compiled.blocks['available'](helpers, context, guard, iter, helper) + 
      "\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <li data-index=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['index'] : null)) + 
          "\" class=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
          " " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['selected'] : null) ?
            " active " :
            "") + 
          "\">\n                    <a href=\"#\" title=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
          "\" id=\"" + 
          __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
          "\" class=\"" + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['enabled'] : null) ?
            "" :
            "text-muted") + 
          "\">\n                        <i class=\"nav-icon fa fa-fw " + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
            __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) :
            "") + 
          "\"></i><i class=\"dropdown-icon fa fa-caret-down" + 
          (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\n                    </a>\n                </li>\n                ";
      }, function alt() {
        return "";
      });
    },
    'enabled': function enabled(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['enabled'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <li data-index=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['index'] : null)) + 
          "\" class=\"well " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['selected'] : null) ?
            "" :
            "hidden") + 
          "\">\n                <form>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 text-right\">\n                            " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "\n                            <button class=\"btn btn-warning toggle\">[[admin/settings/navigation:btn.disable]]</button>\n                            " :
            "\n                            <button class=\"btn btn-success toggle\">[[admin/settings/navigation:btn.enable]]</button>\n                            ") + 
          "\n                            <button class=\"btn btn-danger delete\">[[admin/settings/navigation:btn.delete]]</button>\n                            <input type=\"hidden\" name=\"enabled\" value=\"" + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['enabled'] : null) ?
            "on" :
            "") + 
          "\" />\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-1\">\n                            <div class=\"form-group\">\n                                <label>[[admin/settings/navigation:icon]]</label>\n                                <br/>\n                                <span class=\"iconPicker\"><i class=\"fa fa-2x " + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null)) + 
          "\"></i>\n                                    <a class=\"change-icon-link " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null) ?
            "hidden" :
            "") + 
          "\" href=\"#\">[[admin/settings/navigation:change-icon]]</a>\n                                    <input class=\"form-control\" type=\"hidden\" name=\"iconClass\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['iconClass'] : null)) + 
          "\" />\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"form-group\">\n                                <label for=\"nav:route\">[[admin/settings/navigation:route]]</label>\n                                <input id=\"nav:route\" class=\"form-control\" type=\"text\" name=\"route\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['route'] : null)) + 
          "\" />\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label for=\"nav:class\">[[admin/settings/navigation:class]]</label>\n                                <input id=\"nav:class\" class=\"form-control\" type=\"text\" name=\"class\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['class'] : null)) + 
          "\" />\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label for=\"nav:id\">[[admin/settings/navigation:id]]</label>\n                                <input id=\"nav:id\" class=\"form-control\" type=\"text\" name=\"id\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['id'] : null)) + 
          "\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label for=\"nav:text\">[[admin/settings/navigation:text]]</label>\n                                <input id=\"nav:text\" class=\"form-control unescape\" type=\"text\" name=\"text\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['text'] : null)) + 
          "\" />\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label for=\"nav:text-class\">[[admin/settings/navigation:text-class]]</label>\n                                <input id=\"nav:text-class\" class=\"form-control\" type=\"text\" name=\"textClass\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['textClass'] : null)) + 
          "\" />\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label for=\"nav:tooltip\">[[admin/settings/navigation:tooltip]]</label>\n                                <input id=\"nav:tooltip\" class=\"form-control unescape\" type=\"text\" name=\"title\" value=\"" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['title'] : null)) + 
          "\" />\n                            </div>\n                        </div>\n                    </div>\n\n                    <strong>[[admin/settings/navigation:groups]]</strong>\n                    <div>\n                        <select name=\"groups\" class=\"form-control\" size=\"10\" multiple>\n                            " + 
          iter(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['groups'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                            <option value=\"" + 
              __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['displayName'] : null)) + 
              "\"" + 
              (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['selected'] : null) ?
                " selected" :
                "") + 
              ">" + 
              __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null && context['enabled'][key0]['groups'] != null && context['enabled'][key0]['groups'][key1] != null) ? context['enabled'][key0]['groups'][key1]['displayName'] : null)) + 
              "</option>\n                            ";
          }, function alt() {
            return "";
          }) + 
          "\n                        </select>\n                    </div>\n\n                    <div class=\"checkbox\">\n                        <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                            <input class=\"mdl-switch__input\" type=\"checkbox\" name=\"targetBlank\" " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['targetBlank'] : null) ?
            "checked" :
            "") + 
          "/>\n                            <span class=\"mdl-switch__label\"><strong>[[admin/settings/navigation:open-new-window]]</strong></span>\n                        </label>\n                    </div>\n\n                    <div class=\"checkbox\">\n                        <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                            <input class=\"mdl-switch__input\" type=\"checkbox\" name=\"dropdown\" " + 
          (guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['dropdown'] : null) ?
            "checked" :
            "") + 
          "/>\n                            <span class=\"mdl-switch__label\"><strong>[[admin/settings/navigation:dropdown]]</strong></span>\n                        </label>\n                    </div>\n                    <div>\n                        <p class=\"help-block\">\n                            [[admin/settings/navigation:dropdown-placeholder]]\n                        </p>\n                        <textarea name=\"dropdownContent\" rows=\"5\" class=\"form-control\">" + 
          __escape(guard((context != null && context['enabled'] != null && context['enabled'][key0] != null) ? context['enabled'][key0]['dropdownContent'] : null)) + 
          "</textarea>\n                    </div>\n                </form>\n            </li>\n            ";
      }, function alt() {
        return "";
      });
    },
    'available': function available(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['available'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <li data-id=\"" + 
          __escape(index) + 
          "\" class=\"clearfix\">\n                        <div data-id=\"" + 
          __escape(index) + 
          "\" class=\"drag-item alert " + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['core'] : null) ?
            "alert-warning" :
            "alert-info") + 
          " pull-left\">\n                            <i class=\"fa fa-fw " + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['iconClass'] : null) ?
            __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['iconClass'] : null)) :
            "fa-navicon") + 
          "\"></i>\n                        </div>\n                        <p>\n                            <strong>" + 
          __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['text'] : null)) + 
          "</strong> " + 
          __escape(guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['route'] : null)) + 
          " <br/>\n                            " + 
          (guard((context != null && context['available'] != null && context['available'][key0] != null) ? context['available'][key0]['core'] : null) ?
            " [[admin/settings/navigation:core]] " :
            " [[admin/settings/navigation:plugin]] ") + 
          "\n                        </p>\n                    </li>\n                    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
