
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
    return "<a class=\"btn btn-primary\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/categories\">\n    <i class=\"fa fa-fw fa-chevron-left\"></i> [[admin/manage/categories:analytics.back]]\n</a>\n\n<h3>[[admin/manage/categories:analytics.title, " + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "]]</h3>\n<hr />\n\n<div class=\"row\">\n    <div class=\"col-sm-6 text-center\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div><canvas id=\"pageviews:hourly\" height=\"250\"></canvas></div>\n                <p>\n                    \n                </p>\n            </div>\n            <div class=\"panel-footer\"><small>[[admin/manage/categories:analytics.pageviews-hourly]]</div>\n        </div>\n    </div>\n    <div class=\"col-sm-6 text-center\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div><canvas id=\"pageviews:daily\" height=\"250\"></canvas></div>\n                <p>\n                    \n                </p>\n            </div>\n            <div class=\"panel-footer\"><small>[[admin/manage/categories:analytics.pageviews-daily]]</div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-6 text-center\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div><canvas id=\"topics:daily\" height=\"250\"></canvas></div>\n                <p>\n                    \n                </p>\n            </div>\n            <div class=\"panel-footer\"><small>[[admin/manage/categories:analytics.topics-daily]]</div>\n        </div>\n    </div>\n    <div class=\"col-sm-6 text-center\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div><canvas id=\"posts:daily\" height=\"250\"></canvas></div>\n                <p>\n                    \n                </p>\n            </div>\n            <div class=\"panel-footer\"><small>[[admin/manage/categories:analytics.posts-daily]]</div>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
