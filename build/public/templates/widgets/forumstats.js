
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
    return "<div class=\"row forum-stats\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3 col-xs-3\">\n\t\t\t<div class=\"stats-card " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n\t\t\t\t<h2><span class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['online'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['online'] : null)) + 
      "</span><br /><small>[[global:online]]</small></h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3 col-xs-3\">\n\t\t\t<div class=\"stats-card " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n\t\t\t\t<h2><span class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['users'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['users'] : null)) + 
      "</span><br /><small>[[global:users]]</small></h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3 col-xs-3\">\n\t\t\t<div class=\"stats-card " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n\t\t\t\t<h2><span class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['topics'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['topics'] : null)) + 
      "</span><br /><small>[[global:topics]]</small></h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3 col-xs-3\">\n\t\t\t<div class=\"stats-card " + 
      __escape(guard((context != null) ? context['statsClass'] : null)) + 
      "\">\n\t\t\t\t<h2><span class=\"stats\" title=\"" + 
      __escape(guard((context != null) ? context['posts'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['posts'] : null)) + 
      "</span><br /><small>[[global:posts]]</small></h2>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
