
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
    return "<div class=\"alert alert-danger hidden\" id=\"create-modal-error\"></div>\n<form>\n    <div class=\"form-group\">\n        <label for=\"create-user-name\">[[admin/manage/users:create.username]]</label>\n        <input type=\"text\" class=\"form-control\" id=\"create-user-name\" placeholder=\"[[admin/manage/users:create.username]]\" />\n    </div>\n    <div class=\"form-group\">\n        <label for=\"create-user-email\">[[admin/manage/users:create.email]]</label>\n        <input type=\"text\" class=\"form-control\" id=\"create-user-email\" placeholder=\"[[admin/manage/users:create.email-placeholder]]\" />\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"create-user-password\">[[admin/manage/users:create.password]]</label>\n        <input type=\"password\" class=\"form-control\" id=\"create-user-password\" placeholder=\"[[admin/manage/users:create.password]]\" />\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"create-user-password-again\">[[admin/manage/users:create.password-confirm]]</label>\n        <input type=\"password\" class=\"form-control\" id=\"create-user-password-again\" placeholder=\"[[admin/manage/users:create.password]]\" />\n    </div>\n</form>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
