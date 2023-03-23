
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
    return "<div class=\"recent-replies\">\n\t<ul id=\"recent_posts\" data-numposts=\"" + 
      __escape(guard((context != null) ? context['numPosts'] : null)) + 
      "\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n\t</ul>\n</div>\n\n<script>\n'use strict';\n/* globals app, socket*/\n(function() {\n\tfunction onLoad() {\n\t\tvar replies = $('#recent_posts');\n\n\t\tvar recentPostsWidget = app.widgets.recentPosts;\n\t\tvar numPosts = parseInt(replies.attr('data-numposts'), 10) || 4;\n\n\t\tif (!recentPostsWidget) {\n\t\t\trecentPostsWidget = {};\n\t\t\trecentPostsWidget.onNewPost = function(data) {\n\t\t\t\tvar cid = replies.attr('data-cid');\n\t\t\t\tvar recentPosts = $('#recent_posts');\n\t\t\t\tif (!recentPosts.length) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (cid && parseInt(cid, 10) !== parseInt(data.posts[0].topic.cid, 10)) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tapp.parseAndTranslate('partials/posts', {\n\t\t\t\t\trelative_path: config.relative_path,\n\t\t\t\t\tposts: data.posts\n\t\t\t\t}, function(html) {\n\t\t\t\t\tprocessHtml(html);\n\n\t\t\t\t\thtml.hide()\n\t\t\t\t\t\t.prependTo(recentPosts)\n\t\t\t\t\t\t.fadeIn();\n\n\t\t\t\t\tapp.createUserTooltips();\n\t\t\t\t\tif (recentPosts.children().length > numPosts) {\n\t\t\t\t\t\trecentPosts.children().last().remove();\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t};\n\n\t\t\tapp.widgets.recentPosts = recentPostsWidget;\n\t\t\tsocket.on('event:new_post', app.widgets.recentPosts.onNewPost);\n\t\t}\n\n\t\tfunction processHtml(html) {\n\t\t\thtml.find('img:not(.not-responsive)').addClass('img-responsive');\n\t\t\tif ($.timeago) {\n\t\t\t\thtml.find('span.timeago').timeago();\n\t\t\t}\n\t\t}\n\t}\n\n\tif (window.jQuery) {\n\t\tonLoad();\n\t} else {\n\t\twindow.addEventListener('DOMContentLoaded', onLoad);\n\t}\n})();\n</script>\n";
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" class=\"clearfix widget-posts\">\n\t<a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n\n\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null) ?
            "\n\t\t<img title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\" class=\"avatar avatar-sm not-responsive\" src=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null)) + 
              "\" />\n\t\t" :
            "\n\t\t<div title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\" class=\"avatar avatar-sm not-responsive\" style=\"background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:text'] : null)) + 
              "</div>\n\t\t") + 
          "\n\t</a>\n\t<div>\n\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n\t\t<p class=\"fade-out\"></p>\n\t</div>\n\t<span class=\"pull-right post-preview-footer\">\n\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span> &bull;\n\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">[[global:read_more]]</a>\n\t</span>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
