
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
    return "\n<div id=\"rewards\">\n    <ul id=\"active\">\n        " + 
      compiled.blocks['active'](helpers, context, guard, iter, helper) + 
      "\n    </ul>\n</div>\n\n<div class=\"floating-button\">\n    <button id=\"new\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\" >\n        <i class=\"material-icons\">add</i>\n    </button>\n\n    <button id=\"save\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored primary\">\n        <i class=\"material-icons\">save</i>\n    </button>\n</div>";
  }

  compiled.blocks = {
    'active': function active(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['active'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <li data-rid=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['rid'] : null)) + 
          "\" data-id=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['id'] : null)) + 
          "\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-lg-8\">\n                    <form class=\"main inline-block\">\n                        <div class=\"well inline-block if-block\">\n                            <label for=\"condition-if-users\">[[admin/extend/rewards:condition-if-users]]</label><br />\n                            <select id=\"condition-if-users\" class=\"form-control\" name=\"condition\" data-selected=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['condition'] : null)) + 
          "\">\n                                " + 
          iter(guard((context != null) ? context['conditions'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                                <option value=\"" + 
              __escape(guard((context != null && context['conditions'] != null && context['conditions'][key1] != null) ? context['conditions'][key1]['condition'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['conditions'] != null && context['conditions'][key1] != null) ? context['conditions'][key1]['name'] : null)) + 
              "</option>\n                                ";
          }, function alt() {
            return "";
          }) + 
          "\n                            </select>\n                        </div>\n                        <div class=\"well inline-block this-block\">\n                            <label for=\"condition-is\">[[admin/extend/rewards:condition-is]]</label><br />\n                            <div class=\"row\">\n                                <div class=\"col-xs-4\">\n                                    <select id=\"condition-is\" class=\"form-control\" name=\"conditional\" data-selected=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['conditional'] : null)) + 
          "\">\n                                        " + 
          iter(guard((context != null) ? context['conditionals'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                                        <option value=\"" + 
              __escape(guard((context != null && context['conditionals'] != null && context['conditionals'][key1] != null) ? context['conditionals'][key1]['conditional'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['conditionals'] != null && context['conditionals'][key1] != null) ? context['conditionals'][key1]['name'] : null)) + 
              "</option>\n                                        ";
          }, function alt() {
            return "";
          }) + 
          "\n                                    </select>\n                                </div>\n                                <div class=\"col-xs-8\">\n                                    <input class=\"form-control\" type=\"text\" name=\"value\" value=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['value'] : null)) + 
          "\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"well inline-block then-block\">\n                            <label for=\"condition-then\">[[admin/extend/rewards:condition-then]]</label><br />\n                            <select id=\"condition-then\" class=\"form-control\" name=\"rid\" data-selected=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['rid'] : null)) + 
          "\">\n                                " + 
          iter(guard((context != null) ? context['rewards'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n                                <option value=\"" + 
              __escape(guard((context != null && context['rewards'] != null && context['rewards'][key1] != null) ? context['rewards'][key1]['rid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['rewards'] != null && context['rewards'][key1] != null) ? context['rewards'][key1]['name'] : null)) + 
              "</option>\n                                ";
          }, function alt() {
            return "";
          }) + 
          "\n                            </select>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"col-xs-12 col-sm-12 col-lg-4\">\n                    <form class=\"rewards inline-block\">\n                        <div class=\"inputs well inline-block reward-block\"></div>\n                    </form>\n                </div>\n            </div>\n\n            <div class=\"pull-left\">\n                <div class=\"panel-body inline-block\">\n                    <form class=\"main\">\n                        <label for=\"claimable\">[[admin/extend/rewards:max-claims]] <small>[[admin/extend/rewards:zero-infinite]]</small></label><br />\n                        <input id=\"claimable\" class=\"form-control\" type=\"text\" name=\"claimable\" value=\"" + 
          __escape(guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['claimable'] : null)) + 
          "\" placeholder=\"1\" />\n                    </form>\n                </div>\n            </div>\n\n            <div class=\"pull-right\">\n                <div class=\"panel-body inline-block\">\n                    <button class=\"btn btn-danger delete\">[[admin/extend/rewards:delete]]</button>\n                    " + 
          (guard((context != null && context['active'] != null && context['active'][key0] != null) ? context['active'][key0]['disabled'] : null) ?
            "\n                    <button class=\"btn btn-success toggle\">[[admin/extend/rewards:enable]]</button>\n                    " :
            "\n                    <button class=\"btn btn-warning toggle\">[[admin/extend/rewards:disable]]</button>\n                    ") + 
          "\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </li>\n        ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
