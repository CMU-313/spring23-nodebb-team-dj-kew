
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
    return "<li component=\"logout\">\n    <a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\n        <i class=\"fa fw-fw fa-sign-out\"></i>\n    </a>\n</li>\n\n" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n<li>\n    <a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\n        <i class=\"fa fa-fw fa-repeat\"></i>\n    </a>\n</li>\n<li>\n    <a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\n        <i class=\"fa fa-fw fa-refresh\"></i>\n    </a>\n</li>\n" :
        "") + 
      "\n\n<li>\n    <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\n        <i class=\"fa fa-fw fa-home\"></i>\n    </a>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
