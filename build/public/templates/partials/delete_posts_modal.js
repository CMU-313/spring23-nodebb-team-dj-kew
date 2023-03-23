
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
    return "<div class=\"panel panel-primary fork-thread-card\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">[[topic:thread_tools.delete-posts]]</h3>\n    </div>\n    <div class=\"panel-body\">\n        <p>\n            [[topic:delete_posts_instruction]]<br />\n            <strong><span id=\"pids\"></span></strong>\n        </p>\n    </div>\n    <div class=\"panel-footer\">\n        &nbsp;\n        <div class=\"btn-group pull-right\">\n            <button class=\"btn btn-link btn-xs\" id=\"delete_posts_cancel\">[[global:buttons.close]]</button>\n            <button class=\"btn btn-primary btn-xs\" id=\"delete_posts_confirm\" disabled>[[topic:delete]]</button>\n            <button class=\"btn btn-danger btn-xs\" id=\"purge_posts_confirm\" disabled>[[topic:purge]]</button>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
