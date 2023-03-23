
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
    return "<div class=\"settings\">\n    <div class=\"row\">\n        <div class=\"col-sm-2 col-xs-12 content-header\">\n            [[admin/admin:settings-header-contents]]\n        </div>\n        <div class=\"col-sm-10 col-xs-12\">\n            <nav class=\"section-content\">\n                <ul></ul>\n            </nav>\n        </div>\n    </div>\n\n\n<div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/chat:chat-settings]]</div>\n    <div class=\"col-sm-10 col-xs-12\">\n        <div class=\"form-group\">\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input type=\"checkbox\" class=\"mdl-switch__input\" id=\"disableChat\" data-field=\"disableChat\">\n                    <span class=\"mdl-switch__label\"><strong>[[admin/settings/chat:disable]]</strong></span>\n                </label>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <div class=\"checkbox\">\n                <label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n                    <input type=\"checkbox\" class=\"mdl-switch__input\" id=\"disableChatMessageEditing\" data-field=\"disableChatMessageEditing\">\n                    <span class=\"mdl-switch__label\"><strong>[[admin/settings/chat:disable-editing]]</strong></span>\n                </label>\n            </div>\n            <p class=\"help-block\">[[admin/settings/chat:disable-editing-help]]</p>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"chatEditDuration\">[[admin/settings/chat:restrictions.seconds-edit-after]]</label>\n            <input id=\"chatEditDuration\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"chatEditDuration\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"chatDeleteDuration\">[[admin/settings/chat:restrictions.seconds-delete-after]]</label>\n            <input id=\"chatDeleteDuration\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"chatDeleteDuration\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"maximumChatMessageLength\">[[admin/settings/chat:max-length]]</label>\n            <input id=\"maximumChatMessageLength\" type=\"text\" class=\"form-control\" value=\"1000\" data-field=\"maximumChatMessageLength\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"maximumUsersInChatRoom\">[[admin/settings/chat:max-room-size]]</label>\n            <input id=\"maximumUsersInChatRoom\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"maximumUsersInChatRoom\">\n        </div>\n\n\n        <div class=\"form-group\">\n            <label for=\"chatMessageDelay\">[[admin/settings/chat:delay]]</label>\n            <input id=\"chatMessageDelay\" type=\"text\" class=\"form-control\" value=\"200\" data-field=\"chatMessageDelay\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"notificationSendDelay\">[[admin/settings/chat:notification-delay]]</label>\n            <input id=\"notificationSendDelay\" type=\"text\" class=\"form-control\" value=\"60\" data-field=\"notificationSendDelay\">\n        </div>\n    </div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
