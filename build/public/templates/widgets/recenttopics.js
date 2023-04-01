
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
    return "<div class=\"recent-replies\">\n\t<ul id=\"recent_topics\" data-numtopics=\"" + 
      __escape(guard((context != null) ? context['numTopics'] : null)) + 
      "\">\n\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n\n\t</ul>\n</div>\n\n<script>\n'use strict';\n/* globals app, socket*/\n(function() {\n\tfunction onLoad() {\n\t\tvar\ttopics = $('#recent_topics');\n\n\t\tvar recentTopicsWidget = app.widgets.recentTopics;\n\n\t\tvar numTopics = parseInt(topics.attr('data-numtopics'), 10) || 8;\n\n\t\tif (!recentTopicsWidget) {\n\t\t\trecentTopicsWidget = {};\n\t\t\trecentTopicsWidget.onNewTopic = function(topic) {\n\t\t\t\tvar recentTopics = $('#recent_topics');\n\t\t\t\tif (!recentTopics.length) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tapp.parseAndTranslate('partials/topics', { topics: [topic] }, function(html) {\n\t\t\t\t\tprocessHtml(html);\n\n\t\t\t\t\thtml.hide()\n\t\t\t\t\t\t.prependTo(recentTopics)\n\t\t\t\t\t\t.fadeIn();\n\n\t\t\t\t\tapp.createUserTooltips();\n\t\t\t\t\tif (recentTopics.children().length > numTopics) {\n\t\t\t\t\t\trecentTopics.children().last().remove();\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t};\n\n\t\t\tapp.widgets.recentTopics = recentTopicsWidget;\n\t\t\tsocket.on('event:new_topic', app.widgets.recentTopics.onNewTopic);\n\t\t}\n\n\t\tfunction processHtml(html) {\n\t\t\tif ($.timeago) {\n\t\t\t\thtml.find('span.timeago').timeago();\n\t\t\t}\n\t\t}\n\t}\n\n\tif (window.jQuery) {\n\t\tonLoad();\n\t} else {\n\t\twindow.addEventListener('DOMContentLoaded', onLoad);\n\t}\n})();\n</script>\n";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"clearfix widget-topics\">\n\t<a href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null) ?
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) :
            "#") + 
          "\">\n\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['picture'] : null) ?
            "\n\t\t<img title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['username'] : null)) + 
              "\" class=\"avatar avatar-sm not-responsive\" src=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['picture'] : null)) + 
              "\" />\n\t\t" :
            "\n\t\t<div class=\"avatar avatar-sm not-responsive\" style=\"background-color: " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['icon:text'] : null)) + 
              "</div>\n\t\t") + 
          "\n\t</a>\n\n\t<p>\n\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</a>\n\t</p>\n\t<span class=\"pull-right post-preview-footer\">\n\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['lastposttimeISO'] : null)) + 
          "\"></span>\n\t</span>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
