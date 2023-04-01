
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
    return "<div class=\"hooks-list panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n    " + 
      compiled.blocks['hooks'](helpers, context, guard, iter, helper) + 
      "\n</div>";
  }

  compiled.blocks = {
    'hooks': function hooks(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['hooks'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" role=\"tab\">\n        <div class=\"panel-title\">\n            <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" data-target=\"#" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\" aria-expanded=\"true\" aria-controls=\"" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\">\n            " + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['hookName'] : null)) + 
          "\n            </a>\n            <span class=\"pull-right\">" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['count'] : null)) + 
          " hooks</span>\n        </div>\n        </div>\n        <div id=\"" + 
          __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['index'] : null)) + 
          "\" class=\"panel-collapse collapse\" role=\"tabpanel\">\n        <div class=\"panel-body clearfix\">\n            " + 
          iter(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null) ? context['hooks'][key0]['methods'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n            <div class=\"clearfix\">\n                <strong>" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['id'] : null)) + 
              "</strong>\n                Priority: " + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['priority'] : null)) + 
              "\n\n                <button class=\"btn btn-primary btn-sm pull-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\" aria-expanded=\"false\" aria-controls=\"" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\">\n                    Show Code <i class=\"fa fa-eye\"></i>\n                </button>\n            </div>\n            <div class=\"collapse\" id=\"" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['index'] : null)) + 
              "\">\n                <pre>" + 
              __escape(guard((context != null && context['hooks'] != null && context['hooks'][key0] != null && context['hooks'][key0]['methods'] != null && context['hooks'][key0]['methods'][key1] != null) ? context['hooks'][key0]['methods'][key1]['method'] : null)) + 
              "</pre>\n            </div>\n            ";
          }, function alt() {
            return "";
          }) + 
          "\n        </div>\n        </div>\n    </div>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
