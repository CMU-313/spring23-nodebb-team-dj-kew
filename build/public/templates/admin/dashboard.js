
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
    return "<div class=\"row dashboard\">\n    <div class=\"col-lg-9\">\n        <div class=\"panel panel-default\" id=\"analytics-panel\">\n    <div class=\"panel-heading\">\n        [[admin/dashboard:forum-traffic]]\n        <div class=\"pull-right\">\n            <a href=\"#\"><i class=\"fa fa-fw fa-expand\"></i></a>\n        </div>\n        <div class=\"pull-right\">\n            <a target=\"_blank\" id=\"view-as-json\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/v3/admin/analytics/" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "?type=hourly\"><i class=\"fa fa-fw fa-terminal\"></i></a>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"graph-container\" id=\"analytics-traffic-container\">\n            <canvas id=\"analytics-traffic\" width=\"100%\" height=\"400\"></canvas>\n        </div>\n        <hr/>\n        <div class=\"row\">\n            <div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n                <div><strong id=\"pageViewsThirty\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['month'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['month'] : null)) :
        "0") + 
      "</strong></div>\n                <div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"30\">[[admin/dashboard:page-views-thirty]]</a></div>\n            </div>\n            <div class=\"col-sm-3 text-center pageview-stats\">\n                <div><strong id=\"pageViewsSeven\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['week'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['week'] : null)) :
        "0") + 
      "</strong></div>\n                <div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"7\">[[admin/dashboard:page-views-seven]]</a></div>\n            </div>\n            <div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n                <div><strong id=\"pageViewsPastDay\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['day'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['day'] : null)) :
        "0") + 
      "</strong></div>\n                <div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"hours\" data-amount=\"24\">[[admin/dashboard:page-views-last-day]]</a></div>\n            </div>\n            <div class=\"col-sm-3 text-center pageview-stats\">\n                <div><strong><i class=\"fa fa-clock-o\"></i></strong></div>\n                <div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"custom\">[[admin/dashboard:page-views-custom]]</a></div>\n            </div>\n        </div>\n    </div>\n</div>\n        <div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th></th>\n                <th class=\"text-right\">[[admin/dashboard:stats.yesterday]]</th>\n                <th class=\"text-right\">[[admin/dashboard:stats.today]]</th>\n                <th></th>\n                <th class=\"text-right\">[[admin/dashboard:stats.last-week]]</th>\n                <th class=\"text-right\">[[admin/dashboard:stats.this-week]]</th>\n                <th></th>\n                <th class=\"text-right\">[[admin/dashboard:stats.last-month]]</th>\n                <th class=\"text-right\">[[admin/dashboard:stats.this-month]]</th>\n                <th></th>\n                <th class=\"text-right\">[[admin/dashboard:stats.all]]</th>\n            </tr>\n        </thead>\n        <tbody>\n            " + 
      compiled.blocks['stats'](helpers, context, guard, iter, helper) + 
      "\n        </tbody>\n    </table>\n</div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-3\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">[[admin/dashboard:guest-registered-users]]</div>\n                    <div class=\"panel-body\">\n                        <div class=\"graph-container pie-chart legend-down\">\n                            <canvas id=\"analytics-registered\"></canvas>\n                            <ul class=\"graph-legend\" id=\"analytics-legend\">\n                                <li><div class=\"registered\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:registered]]</span></li>\n                                <li><div class=\"guest\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:guest]]</span></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">[[admin/dashboard:user-presence]]</div>\n                    <div class=\"panel-body\">\n                        <div class=\"graph-container pie-chart legend-down\">\n                            <canvas id=\"analytics-presence\"></canvas>\n                            <ul class=\"graph-legend\" id=\"analytics-presence-legend\">\n                                <li><div class=\"reading-posts\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:reading-posts]]</span></li>\n                                <li><div class=\"on-categories\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:on-categories]]</span></li>\n                                <li><div class=\"browsing-topics\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:browsing-topics]]</span></li>\n                                <li><div class=\"recent\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:recent]]</span></li>\n                                <li><div class=\"unread\"></div><span>(<span class=\"count\"></span>) [[admin/dashboard:unread]]</span></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">[[admin/dashboard:high-presence-topics]]</div>\n                    <div class=\"panel-body\">\n                        <div class=\"graph-container pie-chart legend-down\">\n                            <canvas id=\"analytics-topics\"></canvas>\n                            <ul class=\"graph-legend\" id=\"topics-legend\"></ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">[[admin/dashboard:popular-searches]]</div>\n                    <div class=\"panel-body\">\n                        <div class=\"graph-container pie-chart legend-down\">\n                            <ul class=\"graph-legend\" id=\"popular-searches-legend\">\n                                " + 
      compiled.blocks['popularSearches'](helpers, context, guard, iter, helper) + 
      "\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-lg-3\">\n        " + 
      (guard((context != null) ? context['showSystemControls'] : null) ?
        "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/dashboard:control-panel]]</div>\n            <div class=\"panel-body text-center\">\n                <p>\n                    <button class=\"btn btn-block btn-warning restart\"" + 
          (guard((context != null) ? context['canRestart'] : null) ?
            "" :
            " disabled") + 
          ">[[admin/dashboard:restart]]</button>\n                    <button class=\"btn btn-block btn-danger rebuild-and-restart\"" + 
          (guard((context != null) ? context['canRestart'] : null) ?
            "" :
            " disabled") + 
          ">[[admin/dashboard:rebuild-and-restart]]</button>\n                </p>\n                " + 
          (guard((context != null) ? context['lastrestart'] : null) ?
            "\n                <p>\n                    [[admin/dashboard:last-restarted-by]]<br />\n                    <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/uid/" + 
              __escape(guard((context != null && context['lastrestart'] != null) ? context['lastrestart']['uid'] : null)) + 
              "\"><span class=\"label label-info\">" + 
              __escape(guard((context != null && context['lastrestart'] != null && context['lastrestart']['user'] != null) ? context['lastrestart']['user']['username'] : null)) + 
              "</span></a> <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['lastrestart'] != null) ? context['lastrestart']['timestampISO'] : null)) + 
              "\"></span>\n                </p>\n                " :
            "") + 
          "\n                <p class=\"" + 
          (guard((context != null) ? context['canRestart'] : null) ?
            "help-block" :
            "alert alert-warning") + 
          "\">\n                    " + 
          (guard((context != null) ? context['canRestart'] : null) ?
            "\n                    [[admin/dashboard:restart-warning]]\n                    " :
            "\n                    [[admin/dashboard:restart-disabled]]\n                    ") + 
          "\n                </p>\n                <p>\n                    <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/settings/advanced\" class=\"btn btn-info btn-block\" data-placement=\"bottom\" data-toggle=\"tooltip\" title=\"[[admin/dashboard:maintenance-mode-title]]\">[[admin/dashboard:maintenance-mode]]</a>\n                </p>\n\n                <hr />\n                <span id=\"toggle-realtime\">[[admin/dashboard:realtime-chart-updates]] <strong>OFF</strong> <i class=\"fa fa fa-toggle-off pointer\"></i></span>\n            </div>\n        </div>\n        " :
        "") + 
      "\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/dashboard:active-users]]</div>\n            <div class=\"panel-body\">\n                <div id=\"active-users\" class=\"stats\"></div>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/dashboard:updates]]</div>\n            <div class=\"panel-body\">\n                <div class=\"alert " + 
      (guard((context != null) ? context['lookupFailed'] : null) ?
        "alert-danger" :
        (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "alert-warning" :
            (guard((context != null) ? context['currentPrerelease'] : null) ?
                "alert-info" :
                "alert-success"))) + 
      " version-check\">\n                    <p>[[admin/dashboard:running-version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</p>\n                    <p>\n                    " + 
      (guard((context != null) ? context['lookupFailed'] : null) ?
        "\n                    [[admin/dashboard:latest-lookup-failed]]\n                    " :
        "\n                        " + 
          (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "\n                            " + 
              (guard((context != null) ? context['currentPrerelease'] : null) ?
                "\n                            [[admin/dashboard:prerelease-upgrade-available, " + 
                  __escape(guard((context != null) ? context['latestVersion'] : null)) + 
                  "]]\n                            " :
                "\n                            [[admin/dashboard:upgrade-available, " + 
                  __escape(guard((context != null) ? context['latestVersion'] : null)) + 
                  "]]\n                            ") + 
              "\n                        " :
            "\n                            " + 
              (guard((context != null) ? context['currentPrerelease'] : null) ?
                "\n                            [[admin/dashboard:prerelease-warning]]\n                            " :
                "\n                            [[admin/dashboard:up-to-date]]\n                            ") + 
              "\n                        ") + 
          "\n                    ") + 
      "\n                    </p>\n                </div>\n                <p>\n                    [[admin/dashboard:keep-updated]]\n                </p>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/dashboard:notices]]</div>\n            <div class=\"panel-body\">\n            " + 
      compiled.blocks['notices'](helpers, context, guard, iter, helper) + 
      "\n            </div>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    'stats': function stats(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['stats'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <tr>\n                <td>\n                    <strong>\n                        " + 
          (guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null) ?
            "\n                            <a href=\"" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "</a>\n                        " :
            "\n                            " + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "\n                        ") + 
          "\n                    </strong>\n                </td>\n                <td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['yesterday'] : null)) + 
          "</td>\n                <td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['today'] : null)) + 
          "</td>\n                <td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayIncrease'] : null)) + 
          "%</small></td>\n\n                <td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastweek'] : null)) + 
          "</td>\n                <td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thisweek'] : null)) + 
          "</td>\n                <td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekIncrease'] : null)) + 
          "%</small></td>\n\n                <td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastmonth'] : null)) + 
          "</td>\n                <td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thismonth'] : null)) + 
          "</td>\n                <td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthIncrease'] : null)) + 
          "%</small></td>\n\n                <td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['alltime'] : null)) + 
          "</td>\n            </tr>\n            ";
      }, function alt() {
        return "";
      });
    },
    'popularSearches': function popularSearches(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['popularSearches'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                                <li>(" + 
          __escape(guard((context != null && context['popularSearches'] != null && context['popularSearches'][key0] != null) ? context['popularSearches'][key0]['score'] : null)) + 
          ") " + 
          __escape(guard((context != null && context['popularSearches'] != null && context['popularSearches'][key0] != null) ? context['popularSearches'][key0]['value'] : null)) + 
          "</li>\n                                ";
      }, function alt() {
        return "";
      });
    },
    'notices': function notices(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notices'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <div>\n                    " + 
          (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['done'] : null) ?
            "\n                    <i class=\"fa fa-fw fa-check text-success\"></i> " + 
              __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['doneText'] : null)) + 
              "\n                    " :
            "\n                    " + 
              (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null) ?
                "<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null)) + 
                  "\" data-toggle=\"tooltip\" title=\"" + 
                  __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['tooltip'] : null)) + 
                  "\">" :
                "") + 
              "\n                    <i class=\"fa fa-fw fa-times text-danger\"></i> " + 
              __escape(guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['notDoneText'] : null)) + 
              "\n                    " + 
              (guard((context != null && context['notices'] != null && context['notices'][key0] != null) ? context['notices'][key0]['link'] : null) ?
                "</a>" :
                "") + 
              "\n                    ") + 
          "\n                </div>\n            ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
