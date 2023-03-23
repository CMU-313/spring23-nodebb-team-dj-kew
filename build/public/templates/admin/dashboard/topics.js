
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
    return "<div class=\"row dashboard\">\n    <div class=\"col-xs-12\">\n        <a class=\"btn btn-link\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/dashboard\">\n            <i class=\"fa fa-chevron-left\"></i>\n            [[admin/dashboard:back-to-dashboard]]\n        </a>\n\n        <div class=\"panel panel-default\" id=\"analytics-panel\">\n    <div class=\"panel-heading\">\n        [[admin/dashboard:forum-traffic]]\n        <div class=\"pull-right\">\n            <a href=\"#\"><i class=\"fa fa-fw fa-expand\"></i></a>\n        </div>\n        <div class=\"pull-right\">\n            <a target=\"_blank\" id=\"view-as-json\" href=\"" + 
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
      "\n        </tbody>\n    </table>\n</div>\n\n        <table class=\"table table-striped topics-list\">\n            <tbody>\n                " + 
      (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
        "" :
        "\n                <tr>\n                    <td colspan=4\" class=\"text-center\"><em>[[admin/dashboard:details.no-topics]]</em></td>\n                </tr>\n                ") + 
      "\n                " + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n            </tbody>\n        </table>\n    </div>\n</div>";
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
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <tr>\n                    <td><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topics/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</a></td>\n                    <td>[[topic:posted_by, " + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['username'] : null)) + 
          "]]</td>\n                    <td><span class=\"timeago\" data-title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
          "\"></span></td>\n                </tr>\n                ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
