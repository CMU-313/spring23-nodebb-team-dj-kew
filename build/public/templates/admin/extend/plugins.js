
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
    return (guard((context != null) ? context['canChangeState'] : null) ?
        "" :
        "\n<div class=\"alert alert-warning\">[[error:plugins-set-in-configuration]]</div>\n") + 
      "\n<ul class=\"nav nav-pills\">\n    <li>\n        <a href=\"#trending\" data-toggle=\"tab\">\n            [[admin/extend/plugins:trending]]\n            <i class=\"fa fa-star\"></i>\n        </a>\n    </li>\n    <li class=\"active\">\n        <a href=\"#installed\" data-toggle=\"tab\">\n            [[admin/extend/plugins:installed]]\n            <span class=\"badge\">" + 
      __escape(guard((context != null) ? context['installedCount'] : null)) + 
      "</span>\n        </a>\n    </li>\n    <li>\n        <a href=\"#active\" data-toggle=\"tab\">\n            [[admin/extend/plugins:active]]\n            <span class=\"badge\">" + 
      __escape(guard((context != null) ? context['activeCount'] : null)) + 
      "</span>\n        </a>\n    </li>\n    <li>\n        <a href=\"#deactive\" data-toggle=\"tab\">\n            [[admin/extend/plugins:inactive]]\n            <span class=\"badge\">" + 
      __escape(guard((context != null) ? context['inactiveCount'] : null)) + 
      "</span>\n        </a>\n    </li>\n    <li>\n        <a href=\"#upgrade\" data-toggle=\"tab\">\n            [[admin/extend/plugins:out-of-date]]\n            <span class=\"badge\">" + 
      __escape(guard((context != null) ? context['upgradeCount'] : null)) + 
      "</span>\n        </a>\n    </li>\n    <li>\n        <a href=\"#download\" data-toggle=\"tab\">[[admin/extend/plugins:find-plugins]]</a>\n    </li>\n</ul>\n<br />\n\n<div class=\"plugins row\">\n    <div class=\"acp-sidebar col-lg-3 col-lg-push-9\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/extend/plugins:plugin-search]]</div>\n            <div class=\"panel-body\">\n                <input autofocus class=\"form-control\" type=\"text\" id=\"plugin-search\" placeholder=\"[[admin/extend/plugins:plugin-search-placeholder]]\"/><br/>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"checkbox\">\n                    <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                        <input id=\"plugin-submit-usage\" class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"submitPluginUsage\" " + 
      (guard((context != null) ? context['submitPluginUsage'] : null) ?
        "checked" :
        "") + 
      "/>\n                        <span class=\"mdl-switch__label\">[[admin/extend/plugins:submit-anonymous-usage]]</span>\n                    </label>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/extend/plugins:reorder-plugins]]</div>\n            <div class=\"panel-body\">\n                <button class=\"btn btn-default btn-block\" id=\"plugin-order\"><i class=\"fa fa-exchange\"></i> [[admin/extend/plugins:order-active]]</button>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/extend/plugins:dev-interested]]</div>\n            <div class=\"panel-body\">\n                <p>\n                    [[admin/extend/plugins:docs-info]]\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-lg-9 col-lg-pull-3\">\n        <div class=\"tab-content\">\n            <div class=\"tab-pane fade\" id=\"trending\">\n                <div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n                <ul class=\"trending\">\n                    " + 
      compiled.blocks['trending'](helpers, context, guard, iter, helper) + 
      "\n                </ul>\n            </div>\n            <div class=\"tab-pane fade active in\" id=\"installed\">\n                <div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n                <ul class=\"installed\">\n                    " + 
      compiled.blocks['installed'](helpers, context, guard, iter, helper) + 
      "\n                </ul>\n            </div>\n            <div class=\"tab-pane fade\" id=\"active\">\n                <div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n                <ul class=\"active\"></ul>\n            </div>\n            <div class=\"tab-pane fade\" id=\"deactive\">\n                <div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n                <ul class=\"deactive\"></ul>\n            </div>\n            <div class=\"tab-pane fade\" id=\"upgrade\">\n                <div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n                <ul class=\"upgrade\"></ul>\n            </div>\n            <div class=\"tab-pane fade\" id=\"download\">\n                <div class=\"alert alert-info no-plugins hide\">[[admin/extend/plugins:none-found]]</div>\n                <ul class=\"download\">\n                    " + 
      compiled.blocks['download'](helpers, context, guard, iter, helper) + 
      "\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"order-active-plugins-modal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                    <h4 class=\"modal-title\">[[admin/extend/plugins:order-active]]</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>\n                        [[admin/extend/plugins:order.description]]\n                    </p>\n                    <p>\n                        [[admin/extend/plugins:order.explanation]]\n                    </p>\n                    <ul class=\"plugin-list\"></ul>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">[[global:buttons.close]]</button>\n                    <button type=\"button\" class=\"btn btn-primary\" id=\"save-plugin-order\">[[global:save]]</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n\n\n";
  }

  compiled.blocks = {
    'trending': function trending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['trending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                                        " + 
          (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['error'] : null) ?
            "" :
            "\n                    <li id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['version'] : null)) + 
              "\" class=\"clearfix " + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\n                        <div class=\"pull-right controls\">\n                            " + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['installed'] : null) ?
                "\n                                " + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['isTheme'] : null) ?
                    "\n                                <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-info\">[[admin/extend/plugins:plugin-item.themes]]</a>\n                                " :
                    "\n                                <button data-action=\"toggleActive\" class=\"btn " + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                        " btn-warning" :
                        " btn-success") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n                                <i class=\"fa fa-power-off\"></i> " + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                        "[[admin/extend/plugins:plugin-item.deactivate]]" :
                        "[[admin/extend/plugins:plugin-item.activate]]") + 
                      "</button>\n                                ") + 
                  "\n\n                                <button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\n                                " + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['active'] : null) ?
                    "\n                                " + 
                      (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['settingsRoute'] : null) ?
                        "\n                                <a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-primary\"><i class=\"fa fa-wrench\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n                                " :
                        "") + 
                      "\n                                " :
                    "") + 
                  "\n                            " :
                "\n                                <button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n                            ") + 
              "\n                        </div>\n\n                        <h2><strong>" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['name'] : null)) + 
              "</strong></h2>\n\n                        " + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['description'] : null) ?
                "\n                        <p>" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['description'] : null)) + 
                  "</p>\n                        " :
                "") + 
              "\n                        " + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n                        <small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['latest'] : null)) + 
              "</strong></small>\n\n                        " + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['outdated'] : null) ?
                "\n                        <button data-action=\"upgrade\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n                        <p>\n                            " + 
                  (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['isCompatible'] : null) ?
                    "\n                            <i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\n                            " :
                    "\n                            <i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n                            ") + 
                  "\n                        </p>\n                        " :
                "") + 
              "\n\n                        " + 
              (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null) ?
                "\n                        <p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['url'] : null)) + 
                  "</a></p>\n                        " :
                "") + 
              "\n                    </li>\n                    ") + 
          "\n                    " + 
          (guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['error'] : null) ?
            "\n                    <li data-plugin-id=\"" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\n                        <div class=\"pull-right\">\n                            <button class=\"btn btn-default disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n                            <button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n                        </div>\n\n                        <h2><strong>" + 
              __escape(guard((context != null && context['trending'] != null && context['trending'][key0] != null) ? context['trending'][key0]['id'] : null)) + 
              "</strong></h2>\n                        <p>\n                            [[admin/extend/plugins:plugin-item.unknown-explanation]]\n                        </p>\n                    </li>\n                    " :
            "") + 
          "\n\n                    ";
      }, function alt() {
        return "";
      });
    },
    'installed': function installed(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['installed'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                                        " + 
          (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['error'] : null) ?
            "" :
            "\n                    <li id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" data-plugin-index=\"" + 
              __escape(index) + 
              "\" data-plugin-id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" data-version=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['version'] : null)) + 
              "\" class=\"clearfix " + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                "active" :
                "") + 
              "\">\n                        <div class=\"pull-right controls\">\n                            " + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['installed'] : null) ?
                "\n                                " + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['isTheme'] : null) ?
                    "\n                                <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/admin/appearance/themes\" class=\"btn btn-info\">[[admin/extend/plugins:plugin-item.themes]]</a>\n                                " :
                    "\n                                <button data-action=\"toggleActive\" class=\"btn " + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                        " btn-warning" :
                        " btn-success") + 
                      " " + 
                      (guard((context != null) ? context['canChangeState'] : null) ?
                        "" :
                        "disabled") + 
                      "\">\n                                <i class=\"fa fa-power-off\"></i> " + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                        "[[admin/extend/plugins:plugin-item.deactivate]]" :
                        "[[admin/extend/plugins:plugin-item.activate]]") + 
                      "</button>\n                                ") + 
                  "\n\n                                <button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\n                                " + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['active'] : null) ?
                    "\n                                " + 
                      (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['settingsRoute'] : null) ?
                        "\n                                <a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['settingsRoute'] : null)) + 
                          "\" class=\"btn btn-primary\"><i class=\"fa fa-wrench\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n                                " :
                        "") + 
                      "\n                                " :
                    "") + 
                  "\n                            " :
                "\n                                <button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n                            ") + 
              "\n                        </div>\n\n                        <h2><strong>" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['name'] : null)) + 
              "</strong></h2>\n\n                        " + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['description'] : null) ?
                "\n                        <p>" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['description'] : null)) + 
                  "</p>\n                        " :
                "") + 
              "\n                        " + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['outdated'] : null) ?
                "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
                "") + 
              "\n                        <small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['version'] : null)) + 
              "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['latest'] : null)) + 
              "</strong></small>\n\n                        " + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['outdated'] : null) ?
                "\n                        <button data-action=\"upgrade\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n                        <p>\n                            " + 
                  (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['isCompatible'] : null) ?
                    "\n                            <i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                      __escape(guard((context != null) ? context['version'] : null)) + 
                      "]]\n                            " :
                    "\n                            <i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n                            ") + 
                  "\n                        </p>\n                        " :
                "") + 
              "\n\n                        " + 
              (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null) ?
                "\n                        <p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['url'] : null)) + 
                  "</a></p>\n                        " :
                "") + 
              "\n                    </li>\n                    ") + 
          "\n                    " + 
          (guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['error'] : null) ?
            "\n                    <li data-plugin-id=\"" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "\" class=\"clearfix\">\n                        <div class=\"pull-right\">\n                            <button class=\"btn btn-default disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n                            <button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n                        </div>\n\n                        <h2><strong>" + 
              __escape(guard((context != null && context['installed'] != null && context['installed'][key0] != null) ? context['installed'][key0]['id'] : null)) + 
              "</strong></h2>\n                        <p>\n                            [[admin/extend/plugins:plugin-item.unknown-explanation]]\n                        </p>\n                    </li>\n                    " :
            "") + 
          "\n\n                    ";
      }, function alt() {
        return "";
      });
    },
    'download': function download(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['download'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                                        <li id=\"" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['id'] : null)) + 
          "\" data-plugin-id=\"" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['id'] : null)) + 
          "\" class=\"clearfix\">\n                        <div class=\"pull-right\">\n                            <button data-action=\"toggleActive\" class=\"btn btn-success hidden\"><i class=\"fa fa-power-off\"></i> [[admin/extend/plugins:plugin-item.activate]]</button>\n                            <button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n                        </div>\n\n                        <h2><strong>" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['name'] : null)) + 
          "</strong></h2>\n\n                        " + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['description'] : null) ?
            "\n                        <p>" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['description'] : null)) + 
              "</p>\n                        " :
            "") + 
          "\n\n                        <small>[[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
          __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['latest'] : null)) + 
          "</strong></small>\n                        <p>\n                            " + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['isCompatible'] : null) ?
            "\n                            <i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
              __escape(guard((context != null) ? context['version'] : null)) + 
              "]]\n                            " :
            "\n                            <i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n                            ") + 
          "\n                        </p>\n\n                        " + 
          (guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null) ?
            "\n                        <p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['download'] != null && context['download'][key0] != null) ? context['download'][key0]['url'] : null)) + 
              "</a></p>\n                        " :
            "") + 
          "\n                    </li>\n\n                    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
