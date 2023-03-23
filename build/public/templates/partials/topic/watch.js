
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
        "\n<div class=\"btn-group topic-watch-dropdown bottom-sheet\" component=\"topic/watch\">\n    <button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"\n        " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "title=\"[[topic:watching]]\"" :
            "") + 
          "\n        " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "title=\"[[topic:not-watching]]\"" :
            "") + 
          "\n        " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "title=\"[[topic:ignoring]]\"" :
            "") + 
          "\n    >\n        <span component=\"topic/following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-o\"></i></span>\n\n        <span component=\"topic/not-following/menu\" " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-slash-o\"></i></span>\n\n        <span component=\"topic/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i></span>\n\n    </button>\n    <ul class=\"dropdown-menu dropdown-menu-right\">\n        <li><a href=\"#\" component=\"topic/following\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-o\"></i> [[topic:watching]]<p class=\"help-text hidden-xs\"><small>[[topic:watching.description]]</small></p></a></li>\n        <li><a href=\"#\" component=\"topic/not-following\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[topic:not-watching]]<p class=\"help-text hidden-xs\"><small>[[topic:not-watching.description]]</small></p></a></li>\n        <li><a href=\"#\" component=\"topic/ignoring\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[topic:ignoring]]<p class=\"help-text hidden-xs\"><small>[[topic:ignoring.description]]</small></p></a></li>\n    </ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
