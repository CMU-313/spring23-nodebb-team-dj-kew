
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
    return "            <!-- Email Footer : BEGIN -->\n            <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 680px;\">\n                <tr>\n                    <td style=\"padding: 40px 10px;width: 100%;font-size: 12px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height:18px; text-align: center; color: #888888;\">\n                        <br><br>\n                        " + 
      (guard((context != null) ? context['showUnsubscribe'] : null) ?
        "\n                        [[email:notif.post.unsub.info]] <a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null) ? context['uid'] : null)) + 
          "/settings\">[[email:unsub.cta]]</a>.\n                        <br />[[email:notif.post.unsub.one-click]] <a href=\"" + 
          __escape(guard((context != null) ? context['unsubUrl'] : null)) + 
          "\">[[email:unsubscribe]]</a>.\n                        " :
        "") + 
      "\n                        <br><br>\n                    </td>\n                </tr>\n            </table>\n            <!-- Email Footer : END -->\n\n            <!--[if mso]>\n            </td>\n            </tr>\n            </table>\n            <![endif]-->\n        </div>\n\n    </center>\n</body>\n\n</html>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
