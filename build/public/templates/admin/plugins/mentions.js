
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
    return "<form role=\"form\" class=\"mentions-settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">General</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<label for=\"autofillGroups\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"autofillGroups\" name=\"autofillGroups\" />\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">Allow mentioning User Groups</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<label for=\"overrideIgnores\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"overrideIgnores\" name=\"overrideIgnores\" />\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">Notify recipients of mentions even if topic is explictly ignored</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"disableGroupMentions\">Select groups you wish to disable mentions</label>\n\t\t\t\t<select class=\"form-control\" id=\"disableGroupMentions\" name=\"disableGroupMentions\" multiple>\n\t\t\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"display\">Mentions will display ...</label>\n\t\t\t\t<select class=\"form-control\" id=\"display\" name=\"display\">\n\t\t\t\t\t<option value=\"\">... as written</option>\n\t\t\t\t\t<option value=\"fullname\">... as user&apos;s full name (if set)</option>\n\t\t\t\t\t<option value=\"username\">... as user&apos;s username</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">Restrictions</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<label for=\"disableFollowedTopics\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"disableFollowedTopics\" name=\"disableFollowedTopics\" />\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">Disable mentions for followed topics</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t<label for=\"privilegedDirectReplies\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"privilegedDirectReplies\" name=\"privilegedDirectReplies\" />\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">Restrict mentions to privileged users (mods, global mods, administrators), unless it is a direct reply to a post</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
