
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
    return "        </div><!-- /.container#content -->\n    </main>\n    " + 
      (guard((context != null) ? context['isSpider'] : null) ?
        "" :
        "\n    <div component=\"toaster/tray\" class=\"alert-window\">\n        <div id=\"reconnect-alert\" class=\"alert alert-dismissable alert-warning clearfix hide\" component=\"toaster/toast\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n            <p>[[global:reconnecting-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "]]</p>\n        </div>\n    </div>\n    ") + 
      "\n\n    <script defer src=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/nodebb.min.js?" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
      "\"></script>\n\n" + 
      compiled.blocks['scripts'](helpers, context, guard, iter, helper) + 
      "\n\n<script>\n    if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', prepareFooter);\n    } else {\n        prepareFooter();\n    }\n\n    function prepareFooter() {\n        " + 
      (guard((context != null) ? context['useCustomJS'] : null) ?
        "\n        " + 
          guard((context != null) ? context['customJS'] : null) + 
          "\n        " :
        "") + 
      "\n\n        $(document).ready(function () {\n            app.coldLoad();\n        });\n    }\n</script>\n</body>\n</html>\n";
  }

  compiled.blocks = {
    'scripts': function scripts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['scripts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<script defer type=\"text/javascript\" src=\"" + 
          __escape(guard((context != null && context['scripts'] != null && context['scripts'][key0] != null) ? context['scripts'][key0]['src'] : null)) + 
          "\"></script>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
