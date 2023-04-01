
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
    return "    <div id=\"upload-picture-from-url-modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"upload-picture-url\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                    <h3 id=\"upload-picture-url\">[[user:upload_picture]]</h3>\n                </div>\n                <div class=\"modal-body\">\n                    <input id=\"uploadFromUrl\" class=\"form-control\" type=\"text\"/>\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">[[global:close]]</button>\n                    <button class=\"btn btn-primary upload-btn\">[[user:upload_picture]]</button>\n                </div>\n            </div>\n        </div>\n    </div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
