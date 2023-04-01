
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
    return "<div class=\"row logs\">\n    <div class=\"col-lg-9\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\"><i class=\"fa fa-file-text-o\"></i> [[admin/advanced/logs:logs]]</div>\n            <div class=\"panel-body\">\n                <pre>" + 
      __escape(guard((context != null) ? context['data'] : null)) + 
      "</pre>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3 acp-sidebar\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">[[admin/advanced/logs:control-panel]]</div>\n            <div class=\"panel-body\">\n                <button class=\"btn btn-primary\" data-action=\"reload\">\n                    <i class=\"fa fa-refresh\"></i> [[admin/advanced/logs:reload]]\n                </button>\n                <button class=\"btn btn-warning\" data-action=\"clear\">\n                    <i class=\"fa fa-eraser\"></i> [[admin/advanced/logs:clear]]\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
