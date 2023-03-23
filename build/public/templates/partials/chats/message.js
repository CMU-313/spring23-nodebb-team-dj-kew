
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
    return "<li component=\"chat/message\" class=\"chat-message clear" + 
      (guard((context != null) ? context['deleted'] : null) ?
        " deleted" :
        "") + 
      "\" data-index=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['index'] : null)) + 
      "\" data-mid=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['messageId'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['fromuid'] : null)) + 
      "\" data-self=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['self'] : null)) + 
      "\" data-break=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['newSet'] : null)) + 
      "\" data-timestamp=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['timestamp'] : null)) + 
      "\">\n    <div class=\"message-header\">\n        <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['userslug'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null) ? context['messages']['fromUser'] : null), "md", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
      "</a>\n        <strong><span class=\"chat-user\"><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['userslug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['displayname'] : null)) + 
      "</a></span></strong>\n        " + 
      (guard((context != null && context['fromUser'] != null) ? context['fromUser']['banned'] : null) ?
        "\n        <span class=\"label label-danger\">[[user:banned]]</span>\n        " :
        "") + 
      "\n        " + 
      (guard((context != null && context['fromUser'] != null) ? context['fromUser']['deleted'] : null) ?
        "\n        <span class=\"label label-danger\">[[user:deleted]]</span>\n        " :
        "") + 
      "\n        <span class=\"chat-timestamp timeago\" title=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['timestampISO'] : null)) + 
      "\"></span>\n        " + 
      (guard((context != null && context['messages'] != null) ? context['messages']['edited'] : null) ?
        "\n        <div class=\"text-muted pull-right\" title=\"[[global:edited]] " + 
          __escape(guard((context != null && context['messages'] != null) ? context['messages']['editedISO'] : null)) + 
          "\"><i class=\"fa fa-edit\"></i></span></div>\n        " :
        "") + 
      "\n    </div>\n    <div class=\"message-body-wrapper\">\n        <div component=\"chat/message/body\" class=\"message-body\">\n            " + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['content'] : null)) + 
      "\n        </div>\n\n        " + 
      (guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) ?
        "" :
        "\n        " + 
          (guard((context != null && context['messages'] != null) ? context['messages']['self'] : null) ?
            "\n        <div class=\"btn-group controls\">\n            <button class=\"btn btn-xs btn-link\" data-action=\"edit\"><i class=\"fa fa-pencil\"></i></button>\n            <button class=\"btn btn-xs btn-link\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\n            <button class=\"btn btn-xs btn-link\" data-action=\"restore\"><i class=\"fa fa-repeat\"></i></button>\n            " + 
              (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
                "\n            <button class=\"btn btn-xs btn-link chat-ip\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle chat-ip-button\"></i></button>\n            " :
                "") + 
              "\n        </div>\n        " :
            "") + 
          "\n        ") + 
      "\n    </div>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
