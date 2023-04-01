
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
    return "<form class=\"form\">\n    <div class=\"row\">\n        <div class=\"col-xs-4\">\n            <div class=\"form-group\">\n                <label for=\"length\">[[admin/manage/users:temp-ban.length]]</label>\n                <input class=\"form-control\" id=\"length\" name=\"length\" type=\"number\" min=\"0\" value=\"1\" />\n            </div>\n        </div>\n        <div class=\"col-xs-8\">\n            <div class=\"form-group\">\n                <label for=\"reason\">[[admin/manage/users:temp-ban.reason]]</label>\n                <input type=\"text\" class=\"form-control\" id=\"reason\" name=\"reason\" />\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4 text-center\">\n            <div class=\"form-group units\">\n                <label>[[admin/manage/users:temp-ban.hours]]</label>\n                <input type=\"radio\" name=\"unit\" value=\"0\" checked />\n                &nbsp;&nbsp;\n                <label>[[admin/manage/users:temp-ban.days]]</label>\n                <input type=\"radio\" name=\"unit\" value=\"1\" />\n            </div>\n        </div>\n        <div class=\"col-sm-8\">\n            <p class=\"help-block\">\n                [[admin/manage/users:temp-ban.explanation]]\n            </p>\n        </div>\n    </div>\n</form>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
