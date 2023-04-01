
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
    return "<div class=\"panel panel-primary tool-modal\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">[[topic:thread_tools.move-posts]]</h3>\n    </div>\n    <div class=\"panel-body\">\n        <div>\n            <label for=\"topicId\">[[topic:topic-id]]</label>\n            <input id=\"topicId\" type=\"text\" class=\"form-control\"><br/>\n        </div>\n        <p>\n            <strong><span id=\"pids\"></span></strong>\n        </p>\n        <p class=\"help-block\">\n            [[topic:move_posts_instruction]]\n        </p>\n    </div>\n    <div class=\"panel-footer text-right\">\n        <div class=\"btn-group\">\n            <button class=\"btn btn-link btn-xs\" id=\"move_posts_cancel\">[[global:buttons.close]]</button>\n            <button class=\"btn btn-primary btn-xs\" id=\"move_posts_confirm\" disabled>[[topic:move]]</button>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
