
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
    return (guard((context != null) ? context['showTopicTools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n    <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n        <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:thread_tools.title]]</span>\n        <span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-gear\"></i></span>\n        <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu pull-right\">\n        <li>\n            <a component=\"topic/mark-unread-for-all\" href=\"#\">\n                <i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread_tools.markAsUnreadForAll]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/pin\" href=\"#\">\n                <i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread_tools.pin]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/unpin\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread_tools.unpin]]\n            </a>\n        </li>\n\n        <li>\n            <a component=\"topic/lock\" href=\"#\">\n                <i class=\"fa fa-fw fa-lock\"></i> [[topic:thread_tools.lock]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/unlock\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread_tools.unlock]]\n            </a>\n        </li>\n\n        <li class=\"divider\"></li>\n\n        <li>\n            <a component=\"topic/move\" href=\"#\">\n                <i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move]]\n            </a>\n        </li>\n        " + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "\n        <li>\n            <a component=\"topic/move-all\" href=\"#\">\n                <i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move_all]]\n            </a>\n        </li>\n        " :
            "") + 
          "\n        <li>\n            <a component=\"topic/merge\" href=\"#\">\n                <i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread_tools.merge]]\n            </a>\n        </li>\n\n        <li class=\"divider\"></li>\n\n        <li>\n            <a component=\"topic/delete\" href=\"#\">\n                <i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread_tools.delete]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/restore\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-history\"></i> [[topic:thread_tools.restore]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/purge\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread_tools.purge]]\n            </a>\n        </li>\n\n        " + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n    </ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <li>\n            <a href=\"#\" class=\"" + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a>\n        </li>\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
