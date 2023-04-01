
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
    return "<li component=\"chat/recent/room\" data-roomid=\"" + 
      __escape(guard((context != null && context['rooms'] != null) ? context['rooms']['roomId'] : null)) + 
      "\" class=\"" + 
      (guard((context != null && context['rooms'] != null) ? context['rooms']['unread'] : null) ?
        "unread" :
        "") + 
      "\">\n    " + 
      compiled.blocks['rooms.users'](helpers, context, guard, iter, helper) + 
      "\n\n    <ul class=\"members\">\n        " + 
      iter(guard((context != null && context['rooms'] != null) ? context['rooms']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <li>\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms']['users'] != null && context['rooms']['users'][key0] != null) ? context['rooms']['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms']['users'] != null) ? context['rooms']['users'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n        </li>\n        ";
      }, function alt() {
        return "";
      }) + 
      "\n    </ul>\n\n    <div class=\"notification-chat-content\">\n        <strong class=\"room-name\">\n            " + 
      (guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['uid'] : null) ?
        "\n            <span component=\"chat/title\">" + 
          (guard((context != null && context['rooms'] != null) ? context['rooms']['roomName'] : null) ?
            __escape(guard((context != null && context['rooms'] != null) ? context['rooms']['roomName'] : null)) :
            __escape(guard((context != null && context['rooms'] != null) ? context['rooms']['usernames'] : null))) + 
          "</span>\n            " :
        "\n            <span>[[modules:chat.no-users-in-room]]</span>\n            ") + 
      "\n        </strong>\n    </div>\n</li>";
  }

  compiled.blocks = {
    'rooms.users': function roomsusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['rooms'] != null) ? context['rooms']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    " + 
          (index === 0 ?
            "\n    <div class=\"main-avatar\">\n        <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms']['users'] != null && context['rooms']['users'][key0] != null) ? context['rooms']['users'][key0]['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms']['users'] != null) ? context['rooms']['users'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n    </div>\n    " :
            "") + 
          "\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
