
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
    return "                    <li id=\"" + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "\" data-plugin-id=\"" + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "\" class=\"clearfix\">\n                        <div class=\"pull-right\">\n                            <button data-action=\"toggleActive\" class=\"btn btn-success hidden\"><i class=\"fa fa-power-off\"></i> [[admin/extend/plugins:plugin-item.activate]]</button>\n                            <button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n                        </div>\n\n                        <h2><strong>" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "</strong></h2>\n\n                        " + 
      (guard((context != null) ? context['description'] : null) ?
        "\n                        <p>" + 
          __escape(guard((context != null) ? context['description'] : null)) + 
          "</p>\n                        " :
        "") + 
      "\n\n                        <small>[[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
      __escape(guard((context != null) ? context['latest'] : null)) + 
      "</strong></small>\n                        <p>\n                            " + 
      (guard((context != null) ? context['isCompatible'] : null) ?
        "\n                            <i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "]]\n                            " :
        "\n                            <i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n                            ") + 
      "\n                        </p>\n\n                        " + 
      (guard((context != null) ? context['url'] : null) ?
        "\n                        <p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "</a></p>\n                        " :
        "") + 
      "\n                    </li>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
