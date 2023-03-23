
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
    return "<div class=\"panel panel-primary fork-thread-card\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">[[topic:thread_tools.change_owner]]</h3>\n    </div>\n    <div class=\"panel-body\">\n        <div>\n            <label for=\"username\">[[user:username]]</label>\n            <input id=\"username\" type=\"text\" class=\"form-control\"><br/>\n        </div>\n        <p>\n            [[topic:change_owner_instruction]]<br />\n            <strong><span id=\"pids\"></span></strong>\n        </p>\n    </div>\n    <div class=\"panel-footer\">\n        &nbsp;\n        <div class=\"btn-group pull-right\">\n            <button class=\"btn btn-link btn-xs\" id=\"change_owner_cancel\">[[global:buttons.close]]</button>\n            <button class=\"btn btn-primary btn-xs\" id=\"change_owner_commit\" disabled>[[topic:change-owner]]</button>\n        </div>\n    </div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
