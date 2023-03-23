
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
    return "<div class=\"panel panel-default\" id=\"analytics-panel\">\n    <div class=\"panel-heading\">\n        [[admin/dashboard:forum-traffic]]\n        <div class=\"pull-right\">\n            <a href=\"#\"><i class=\"fa fa-fw fa-expand\"></i></a>\n        </div>\n        <div class=\"pull-right\">\n            <a target=\"_blank\" id=\"view-as-json\" href=\"" + 
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
      "</strong></div>\n                <div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"hours\" data-amount=\"24\">[[admin/dashboard:page-views-last-day]]</a></div>\n            </div>\n            <div class=\"col-sm-3 text-center pageview-stats\">\n                <div><strong><i class=\"fa fa-clock-o\"></i></strong></div>\n                <div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"custom\">[[admin/dashboard:page-views-custom]]</a></div>\n            </div>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
