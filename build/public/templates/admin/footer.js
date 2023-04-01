
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
    return "            </div>\n        </div>\n    </div>\n\n\n    <div class=\"alert-window\" component=\"toaster/tray\"></div>\n\n    <div id=\"footer\" class=\"container\" style=\"padding-top: 50px; display:none;\">\n        <footer class=\"footer\">Copyright &copy; 2015 <a target=\"_blank\" href=\"https://nodebb.org\">NodeBB</a> by <a target=\"_blank\" href=\"https://github.com/psychobunny\">psychobunny</a>, <a href=\"https://github.com/julianlam\" target=\"_blank\">julianlam</a>, <a href=\"https://github.com/barisusakli\" target=\"_blank\">barisusakli</a> from <a target=\"_blank\" href=\"http://www.designcreateplay.com\">designcreateplay</a></footer>\n    </div>\n    <script>\n        if (document.readyState === 'loading') {\n            document.addEventListener('DOMContentLoaded', prepareFooter);\n        } else {\n            prepareFooter();\n        }\n\n        function prepareFooter() {\n            $(document).ready(function () {\n                app.coldLoad();\n            });\n        }\n    </script>\n</body>\n</html>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
