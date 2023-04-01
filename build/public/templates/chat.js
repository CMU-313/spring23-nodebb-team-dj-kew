
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
    return "\n<div id=\"chat-modal\" class=\"chat-modal hide\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Chat\" aria-hidden=\"true\" data-backdrop=\"none\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button id=\"chat-close-btn\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <button type=\"button\" class=\"close hidden-xs hidden-sm\" data-action=\"maximize\"><span aria-hidden=\"true\"><i class=\"fa fa-expand\"></i></span><span class=\"sr-only\">[[modules:chat.maximize]]</span></button>\n                <button type=\"button\" class=\"close hidden-xs hidden-sm\" data-action=\"minimize\"><span aria-hidden=\"true\"><i class=\"fa fa-minus\"></i></span><span class=\"sr-only\">[[modules:chat.minimize]]</span></button>\n                <div class=\"dropdown pull-right\">\n  <button class=\"close\" data-toggle=\"dropdown\" component=\"chat/controlsToggle\"><i class=\"fa fa-gear\"></i></button>\n  <ul class=\"dropdown-menu dropdown-menu-right pull-right\" component=\"chat/controls\">\n    <li class=\"dropdown-header\">[[modules:chat.options]]</li>\n    <li>\n      <a href=\"#\" data-action=\"members\"><i class=\"fa fa-fw fa-cog\"></i> [[modules:chat.manage-room]]</a>\n    </li>\n    <li>\n      <a href=\"#\" data-action=\"rename\"><i class=\"fa fa-fw fa-edit\"></i> [[modules:chat.rename-room]]</a>\n    </li>\n    <li>\n      <a href=\"#\" data-action=\"leave\"><i class=\"fa fa-fw fa-sign-out\"></i> [[modules:chat.leave]]</a>\n    </li>\n    " + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n    <li role=\"separator\" class=\"divider\"></li>\n    <li class=\"dropdown-header\">[[modules:chat.in-room]]</li>\n    " + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n    " :
        "") + 
      "\n  </ul>\n</div>\n\n\n                <h4 component=\"chat/room/name\">" + 
      (guard((context != null) ? context['roomName'] : null) ?
        __escape(guard((context != null) ? context['roomName'] : null)) :
        __escape(guard((context != null) ? context['usernames'] : null))) + 
      "</h4>\n            </div>\n\n            <div class=\"modal-body\">\n                <div component=\"chat/messages/scroll-up-alert\" class=\"scroll-up-alert alert alert-info\" role=\"button\">[[modules:chat.scroll-up-alert]]</div>\n                <ul class=\"chat-content\" component=\"chat/messages\">\n                    " + 
      compiled.blocks['messages'](helpers, context, guard, iter, helper) + 
      "\n                </ul>\n\n                <div component=\"chat/composer\">\n                    <textarea component=\"chat/input\" placeholder=\"[[modules:chat.placeholder]]\" class=\"form-control chat-input mousetrap\" rows=\"1\"></textarea>\n                    <button class=\"btn btn-primary\" type=\"button\" data-action=\"send\"><i class=\"fa fa-fw fa-2x fa-paper-plane\"></i></button>\n                    <span component=\"chat/message/remaining\">" + 
      __escape(guard((context != null) ? context['maximumChatMessageLength'] : null)) + 
      "</span>\n                    <form component=\"chat/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n                    </form>\n                </div>\n            </div>\n            <div class=\"imagedrop\"><div>[[topic:composer.drag_and_drop_images]]</div></div>\n        </div>\n    </div>\n</div>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li>\n      <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'messages': function messages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['messages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    " + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['system'] : null) ?
            "\n    <li component=\"chat/system-message\" class=\"system-message clear\" data-index=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
              "\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"0\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\">\n    [[modules:chat.system." + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['username'] : null)) + 
              "]]\n</li>\n    " :
            "\n    <li component=\"chat/message\" class=\"chat-message clear" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['deleted'] : null) ?
                " deleted" :
                "") + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
              "\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null)) + 
              "\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\">\n    <div class=\"message-header\">\n        <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromUser'] : null), "md", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
              "</a>\n        <strong><span class=\"chat-user\"><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['displayname'] : null)) + 
              "</a></span></strong>\n        " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['banned'] : null) ?
                "\n        <span class=\"label label-danger\">[[user:banned]]</span>\n        " :
                "") + 
              "\n        " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['deleted'] : null) ?
                "\n        <span class=\"label label-danger\">[[user:deleted]]</span>\n        " :
                "") + 
              "\n        <span class=\"chat-timestamp timeago\" title=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
              "\"></span>\n        " + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['edited'] : null) ?
                "\n        <div class=\"text-muted pull-right\" title=\"[[global:edited]] " + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['editedISO'] : null)) + 
                  "\"><i class=\"fa fa-edit\"></i></span></div>\n        " :
                "") + 
              "\n    </div>\n    <div class=\"message-body-wrapper\">\n        <div component=\"chat/message/body\" class=\"message-body\">\n            " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              "\n        </div>\n\n        " + 
              (guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) ?
                "" :
                "\n        " + 
                  (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null) ?
                    "\n        <div class=\"btn-group controls\">\n            <button class=\"btn btn-xs btn-link\" data-action=\"edit\"><i class=\"fa fa-pencil\"></i></button>\n            <button class=\"btn btn-xs btn-link\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\n            <button class=\"btn btn-xs btn-link\" data-action=\"restore\"><i class=\"fa fa-repeat\"></i></button>\n            " + 
                      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
                        "\n            <button class=\"btn btn-xs btn-link chat-ip\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle chat-ip-button\"></i></button>\n            " :
                        "") + 
                      "\n        </div>\n        " :
                    "") + 
                  "\n        ") + 
              "\n    </div>\n</li>\n    ") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
