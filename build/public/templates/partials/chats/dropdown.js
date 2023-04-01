
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
    return (guard((context != null && context['rooms'] != null) ? context['rooms']['length'] : null) ?
        "\n" + 
          compiled.blocks['rooms'](helpers, context, guard, iter, helper) + 
          "\n" :
        "\n<li class=\"no_active\"><a href=\"#\">[[modules:chat.no_active]]</a></li>\n");
  }

  compiled.blocks = {
    'rooms': function rooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['rooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "unread" :
            "") + 
          "\" data-roomid=\"" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomId'] : null)) + 
          "\">\n    " + 
          iter(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['users'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n    " + 
              (index === 0 ?
                "\n    <div class=\"main-avatar\">\n        <a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users'][key1] != null) ? context['rooms'][key0]['users'][key1]['userslug'] : null)) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users'][key1] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
                  "</a>\n    </div>\n    " :
                "") + 
              "\n    ";
          }, function alt() {
            return "";
          }) + 
          "\n\n    <ul class=\"members\">\n        " + 
          iter(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['users'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n        <li>\n            <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users'][key1] != null) ? context['rooms'][key0]['users'][key1]['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users'][key1] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n        </li>\n        ";
          }, function alt() {
            return "";
          }) + 
          "\n    </ul>\n\n    <div class=\"notification-chat-content\">\n        <strong class=\"room-name\">\n            " + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['uid'] : null) ?
            "\n            " + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null) ?
                __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null)) :
                __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['usernames'] : null))) + 
              "\n            " :
            "\n            <span>[[modules:chat.no-users-in-room]]</span>\n            ") + 
          "\n        </strong>\n        <span class=\"teaser-content\">\n            <strong class=\"teaser-username\">" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null && context['rooms'][key0]['teaser']['user'] != null) ? context['rooms'][key0]['teaser']['user']['username'] : null)) + 
          ":</strong>\n            " + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['content'] : null)) + 
          "\n        </span>\n    </div>\n    <div class=\"teaser-timestamp notification-chat-controls\">" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['teaser'] != null) ? context['rooms'][key0]['teaser']['timeago'] : null)) + 
          "</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
