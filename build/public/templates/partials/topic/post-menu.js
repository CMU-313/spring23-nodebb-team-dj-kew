
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
    return "<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet " + 
      (guard((context != null && context['posts'] != null) ? context['posts']['display_post_menu'] : null) ?
        "" :
        "hidden") + 
      "\">\n    <a href=\"#\" data-toggle=\"dropdown\" data-ajaxify=\"false\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></a>\n    <ul class=\"dropdown-menu dropdown-menu-right hidden\" role=\"menu\"></ul>\n</span>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
