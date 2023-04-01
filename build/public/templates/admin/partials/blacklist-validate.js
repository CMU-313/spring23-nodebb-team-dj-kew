
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
    return "<p class=\"lead\">\n    [[ip-blacklist:validate.x-valid, " + 
      __escape(guard((context != null && context['valid'] != null) ? context['valid']['length'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['numRules'] : null)) + 
      "]]\n</p>\n\n" + 
      (guard((context != null && context['invalid'] != null) ? context['invalid']['length'] : null) ?
        "\n<p>\n    [[ip-blacklist:validate.x-invalid, " + 
          __escape(guard((context != null && context['invalid'] != null) ? context['invalid']['length'] : null)) + 
          "]]\n</p>\n<ul>\n    " + 
          compiled.blocks['invalid'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n" :
        "");
  }

  compiled.blocks = {
    'invalid': function invalid(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['invalid'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li><code>" + 
          __escape(guard(value)) + 
          "</code></li>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
