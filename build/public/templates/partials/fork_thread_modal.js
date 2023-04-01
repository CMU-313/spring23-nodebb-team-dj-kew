
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
    return "<div class=\"panel panel-primary fork-thread-card\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">[[topic:fork_topic]]</h3>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"form-group\">\n            <label for=\"title\">[[topic:title]]</label>\n            <input id=\"fork-title\" type=\"text\" class=\"form-control\" placeholder=\"[[topic:enter-new-topic-title]]\">\n        </div>\n        <p>\n            [[topic:fork_topic_instruction]]<br />\n            <strong><span id=\"fork-pids\"></span></strong>\n        </p>\n    </div>\n    <div class=\"panel-footer\">\n        &nbsp;\n        <div class=\"btn-group pull-right\">\n            <button class=\"btn btn-link btn-xs\" id=\"fork_thread_cancel\">[[global:buttons.close]]</button>\n            <button class=\"btn btn-primary btn-xs\" id=\"fork_thread_commit\" disabled>[[topic:fork_topic]] <i class=\"fa fa-arrow-circle-right\"></i></button>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
