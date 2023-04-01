
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
    return "<div class=\"panel panel-primary merge-topic-card\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">[[topic:thread_tools.merge_topics]]</h3>\n    </div>\n    <div class=\"panel-body\">\n        <p>\n            [[topic:merge_topics_instruction]]\n        </p>\n        <p>\n            <div class=\"input-group\">\n                <input class=\"form-control topic-search-input\" type=\"text\">\n                <span class=\"input-group-addon\">\n                    <i class=\"fa fa-search\"></i>\n                </span>\n            </div>\n        </p>\n        <div style=\"position: relative;\">\n            <div class=\"quick-search-container hidden\">\n                <div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n                <div class=\"quick-search-results-container\"></div>\n            </div>\n        </div>\n        <p><strong>[[topic:merge-topic-list-title]]</strong></p>\n        <ul class=\"topics-section\">\n            " + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n        </ul>\n        <p>\n            <strong>[[topic:merge-options]]</strong>\n        </p>\n        <form>\n            <p>\n                <input class=\"merge-main-topic-radio\" type=\"radio\" name=\"merge-topic-option\" checked=\"true\"> [[topic:merge-select-main-topic]]\n            </p>\n            <p>\n                <select class=\"form-control merge-main-topic-select\">\n                    " + 
      iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <option value=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</option>\n                    ";
      }, function alt() {
        return "";
      }) + 
      "\n                </select>\n            </p>\n            <p>\n                <input class=\"merge-new-title-radio\" type=\"radio\" name=\"merge-topic-option\"> [[topic:merge-new-title-for-topic]]\n            </p>\n            <p>\n                <input class=\"merge-new-title-input form-control\" type=\"text\">\n            </p>\n        </form>\n    </div>\n    <div class=\"panel-footer\">\n        &nbsp;\n        <div class=\"btn-group pull-right\">\n            <button class=\"btn btn-link btn-xs\" id=\"merge_topics_cancel\">[[global:buttons.close]]</button>\n            <button class=\"btn btn-primary btn-xs\" id=\"merge_topics_confirm\" disabled>[[topic:thread_tools.merge]]</button>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            <li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</strong></a></li>\n            ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
