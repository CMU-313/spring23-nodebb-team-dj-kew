
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
    return (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<ul class=\"nav nav-pills\">\n    <li>\n        <a href=\"#notifications\" data-toggle=\"tab\"><span class=\"counter unread-count\" component=\"notifications/icon\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
          "\"></span> <i class=\"fa fa-fw fa-bell\"></i></a>\n    </li>\n    " + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n    <li>\n        <a href=\"#chats\" data-toggle=\"tab\"><i class=\"counter unread-count\" component=\"chat/icon\" data-content=\"" + 
              __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
              "\"></i> <i class=\"fa fa-fw fa-comment\"></i></a>\n    </li>\n    ") + 
          "\n    <li class=\"active\">\n        <a href=\"#profile\" data-toggle=\"tab\">\n            " + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "sm", guard((context != null) ? context['true'] : null), "user-icon"])) + 
          "\n            <i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
          "\"></i>\n        </a>\n    </li>\n</ul>\n\n<div class=\"tab-content\">\n    <div class=\"tab-pane fade active in\" id=\"profile\">\n        <section class=\"menu-section\" data-section=\"profile\">\n            <ul class=\"menu-section-list\" component=\"header/usercontrol\"></ul>\n        </section>\n    </div>\n    <div class=\"tab-pane fade\" id=\"notifications\">\n        <section class=\"menu-section\" data-section=\"notifications\">\n            <ul class=\"menu-section-list notification-list-mobile\" component=\"notifications/list\"></ul>\n            <p class=\"menu-section-list\"><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/notifications\">[[notifications:see_all]]</a></p>\n        </section>\n    </div>\n    " + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n    <div class=\"tab-pane fade\" id=\"chats\">\n        <section class=\"menu-section\" data-section=\"chats\">\n            <ul class=\"menu-section-list chat-list\" component=\"chat/list\">\n                <a class=\"navigation-link\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/chats\">[[modules:chat.see_all]]</a>\n            </ul>\n        </section>\n    </div>\n    ") + 
          "\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
