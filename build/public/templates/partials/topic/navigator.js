
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
    return "<div class=\"pagination-block text-center\">\n    <div class=\"progress-bar\"></div>\n    <div class=\"wrapper dropup\">\n        <i class=\"fa fa-2x fa-angle-double-up pointer fa-fw pagetop\"></i>\n\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"pagination-text\"></span>\n        </a>\n\n        <i class=\"fa fa-2x fa-angle-double-down pointer fa-fw pagebottom\"></i>\n        <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n            <li>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 post-content\"></div>\n                    <div class=\"col-xs-4 text-right\">\n                        <div class=\"scroller-content\">\n                            <span class=\"pointer pagetop\">[[topic:first-post]] <i class=\"fa fa-angle-double-up\"></i></span>\n                            <div class=\"scroller-container\">\n                                <div class=\"scroller-thumb\">\n                                    <span class=\"thumb-text\"></span>\n                                    <div class=\"scroller-thumb-icon\"></div>\n                                </div>\n                            </div>\n                            <span class=\"pointer pagebottom\">[[topic:last-post]] <i class=\"fa fa-angle-double-down\"></i></span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <button id=\"myNextPostBtn\" class=\"btn btn-default form-control\" disabled>[[topic:go-to-my-next-post]]</button>\n                    </div>\n                    <div class=\"col-xs-6\">\n                        <input type=\"number\" class=\"form-control\" id=\"indexInput\" placeholder=\"[[global:pagination.enter_index]]\">\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
