
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
    return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n    " + 
      (guard((context != null) ? context['pages'] : null) ?
        "\n    <sitemap>\n        <loc>" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/sitemap/pages.xml</loc>\n    </sitemap>\n    " :
        "") + 
      "\n    " + 
      (guard((context != null) ? context['categories'] : null) ?
        "\n    <sitemap>\n        <loc>" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/sitemap/categories.xml</loc>\n    </sitemap>\n    " :
        "") + 
      "\n    " + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</sitemapindex>";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <sitemap>\n        <loc>" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/sitemap/topics." + 
          __escape(guard(value)) + 
          ".xml</loc>\n    </sitemap>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
