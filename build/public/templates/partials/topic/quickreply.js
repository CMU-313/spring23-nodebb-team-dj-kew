
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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "\n<div component=\"topic/quickreply/container\" class=\"clearfix quick-reply\">\n    <div class=\"icon pull-left hidden-xs\">\n        <a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null)) :
            "#") + 
          "\">\n            " + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['loggedInUser'] : null), "46", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n            " + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null) ?
            "\n            <i component=\"user/status\" class=\"fa fa-circle status " + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
              "\" title=\"[[global:" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
              "]]\"></i>\n            " :
            "") + 
          "\n        </a>\n    </div>\n    <form method=\"post\" action=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/compose\">\n        <input type=\"hidden\" name=\"tid\" value=\"" + 
          __escape(guard((context != null) ? context['tid'] : null)) + 
          "\" />\n        <input type=\"hidden\" name=\"_csrf\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
          "\" />\n        <div class=\"quickreply-message\">\n            <textarea name=\"content\" component=\"topic/quickreply/text\" class=\"form-control mousetrap\" rows=\"5\" placeholder=\"[[modules:composer.textarea.placeholder]]\"></textarea>\n            <div class=\"imagedrop\"><div>[[topic:composer.drag_and_drop_images]]</div></div>\n        </div>\n        <div class=\"btn-group pull-right\">\n            <button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-primary\">[[topic:post-quick-reply]]</button>\n            <button type=\"submit\" component=\"topic/quickreply/expand\" class=\"btn btn-default\" formmethod=\"get\"><i class=\"fa fa-expand\"></i></button>\n        </div>\n    </form>\n    <form component=\"topic/quickreply/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n    </form>\n\n</div>\n" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
