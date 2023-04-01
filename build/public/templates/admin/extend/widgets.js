
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
    return "<div id=\"widgets\" class=\"row\">\n    <div class=\"col-md-8\" id=\"active-widgets\">\n        <ul class=\"nav nav-pills\">\n\n            <li role=\"presentation\" class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"selected-template\">" + 
      __escape(guard((context != null && context['templates'] != null && context['templates']['0'] != null) ? context['templates']['0']['template'] : null)) + 
      "</span> <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    " + 
      compiled.blocks['templates'](helpers, context, guard, iter, helper) + 
      "\n                </ul>\n            </li>\n        </ul>\n\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"tab-content\">\n                " + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <div class=\"tab-pane " + 
          (index === 0 ?
            "active" :
            "") + 
          "\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\">\n                    " + 
          iter(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['areas'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                        <div class=\"area\" data-template=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "\" data-location=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "\">\n                            <h4>" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['name'] : null)) + 
              " <small>" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              " / " + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "</small></h4>\n                            <div class=\"well widget-area\">\n\n                            </div>\n                        </div>\n                    ";
          }, function alt() {
            return "";
          }) + 
          "\n                    </div>\n                ";
      }, function alt() {
        return "";
      }) + 
      "\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/extend/widgets:available]]</div>\n            <div class=\"panel-body\">\n                <div class=\"available-widgets\">\n                    <p>[[admin/extend/widgets:explanation]]</p>\n                    " + 
      (guard((context != null && context['availableWidgets'] != null) ? context['availableWidgets']['length'] : null) ?
        "" :
        "\n                    <div class=\"alert alert-info\">[[admin/extend/widgets:none-installed, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/extend/plugins]]</div>\n                    ") + 
      "\n                    <p>\n                        <select id=\"widget-selector\" class=\"form-control\">\n                            " + 
      compiled.blocks['availableWidgets'](helpers, context, guard, iter, helper) + 
      "\n                        </select>\n                    </p>\n                    <div class=\"row\">\n                        " + 
      iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                        <div class=\"col-xs-12\">\n                            <div data-widget=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\" class=\"panel widget-panel panel-default pointer hide\">\n                                <div class=\"panel-heading\">\n                                    <strong>" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</strong>\n                                    <small><br />" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['description'] : null)) + 
          "</small>\n                                </div>\n                                <div class=\"panel-body hidden\">\n                                    <form>\n                                        " + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['content'] : null)) + 
          "\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                        ";
      }, function alt() {
        return "";
      }) + 
      "\n                    </div>\n\n                    <div class=\"btn-group\" component=\"clone\">\n                        <button type=\"button\" class=\"btn btn-primary\" component=\"clone/button\">[[admin/extend/widgets:clone-from]] ...</button>\n                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                            <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu pull-right\">\n                            " + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                            " + 
          (index === 0 ?
            "" :
            "\n                            <li><a href=\"#\">" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "</a></li>\n                            ") + 
          "\n                            ";
      }, function alt() {
        return "";
      }) + 
      "\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/extend/widgets:containers.available]]</div>\n            <div class=\"panel-body\">\n                <p>[[admin/extend/widgets:containers.explanation]]</p>\n                <div class=\"available-containers\">\n                    <div class=\"containers\">\n                        <div class=\"pointer\" style=\"padding: 20px; border: 1px dotted #dedede; margin-bottom: 20px;\" data-container-html=\" \">\n                            [[admin/extend/widgets:containers.none]]\n                        </div>\n                        <div class=\"well pointer\" data-container-html='<div class=\"well\">" + 
      "{{body}}</div>'>\n                            [[admin/extend/widgets:container.well]]\n                        </div>\n                        <div class=\"jumbotron pointer\" data-container-html='<div class=\"jumbotron\">" + 
      "{{body}}</div>'>\n                            [[admin/extend/widgets:container.jumbotron]]\n                        </div>\n                        <div class=\"panel\" data-container-html='<div class=\"panel panel-default\"><div class=\"panel-body\">" + 
      "{{body}}</div></div>'>\n                            <div class=\"panel-body pointer\">\n                                [[admin/extend/widgets:container.panel]]\n                            </div>\n                        </div>\n                        <div class=\"panel panel-default pointer\" data-container-html='<div class=\"panel panel-default\"><div class=\"panel-heading\"><h3 class=\"panel-title\">" + 
      "{{title}}</h3></div><div class=\"panel-body\">" + 
      "{{body}}</div></div>'>\n                            <div class=\"panel-heading\">\n                                [[admin/extend/widgets:container.panel-header]]\n                                <div class=\"pull-right color-selector\">\n                                    <button data-class=\"panel-default\" class=\"btn btn-xs\">&nbsp;&nbsp;</button>\n                                    <button data-class=\"panel-primary\" class=\"btn btn-xs btn-primary\">&nbsp;&nbsp;</button>\n                                    <button data-class=\"panel-success\" class=\"btn btn-xs btn-success\">&nbsp;&nbsp;</button>\n                                    <button data-class=\"panel-info\" class=\"btn btn-xs btn-info\">&nbsp;&nbsp;</button>\n                                    <button data-class=\"panel-warning\" class=\"btn btn-xs btn-warning\">&nbsp;&nbsp;</button>\n                                    <button data-class=\"panel-danger\" class=\"btn btn-xs btn-danger\">&nbsp;&nbsp;</button>\n                                </div>\n                            </div>\n                            <div class=\"panel-body\">\n                                [[admin/extend/widgets:container.panel-body]]\n                            </div>\n                        </div>\n\n                        <div class=\"alert alert-info pointer\" data-container-html='<div class=\"alert alert-info\">" + 
      "{{body}}</div>'>\n                            [[admin/extend/widgets:container.alert]]\n                            <div class=\"pull-right color-selector\">\n                                <button data-class=\"alert-success\" class=\"btn btn-xs btn-success\">&nbsp;&nbsp;</button>\n                                <button data-class=\"alert-info\" class=\"btn btn-xs btn-info\">&nbsp;&nbsp;</button>\n                                <button data-class=\"alert-warning\" class=\"btn btn-xs btn-warning\">&nbsp;&nbsp;</button>\n                                <button data-class=\"alert-danger\" class=\"btn btn-xs btn-danger\">&nbsp;&nbsp;</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    'templates': function templates(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <li><a href=\"#\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\" data-toggle=\"pill\">" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "</a></li>\n                    ";
      }, function alt() {
        return "";
      });
    },
    'availableWidgets': function availableWidgets(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                            <option value=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</option>\n                            ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
