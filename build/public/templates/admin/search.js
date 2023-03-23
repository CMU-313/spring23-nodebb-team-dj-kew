
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
    return "<label for=\"enableQuickSearch\">Enable Quick Search</label>\n<input type=\"checkbox\" class=\"form-control\" id=\"enableQuickSearch\" name=\"enableQuickSearch\" />\n\n<label for=\"showInControl\">Show In Control</label>\n<input type=\"checkbox\" class=\"form-control\" id=\"showInControl\" name=\"showInControl\" />\n\n<label for=\"defaultIn\">Default In</label>\n<select class=\"form-control\" id=\"defaultIn\" name=\"defaultIn\">\n\t<option value=\"titles\">[[search:titles]]</option>\n\t<option value=\"titlesposts\">[[search:titles-posts]]</option>\n\t<option value=\"posts\">[[global:posts]]</option>\n\t<option value=\"categories\">[[global:header.categories]]</option>\n\t<option value=\"users\">[[global:users]]</option>\n\t<option value=\"tags\">[[tags:tags]]</option>\n</select>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
