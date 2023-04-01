
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" data-parent-cid=\"" + 
      __escape(guard((context != null) ? context['parentCid'] : null)) + 
      "\" class=\"row clearfix\">\n    <meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\n\n    <div class=\"content col-xs-12 col-md-10 col-sm-12 depth-" + 
      __escape(guard((context != null) ? context['depth'] : null)) + 
      "\">\n        <div class=\"icon pull-left\" style=\"" + 
      __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
      "\">\n            <i class=\"fa fa-fw " + 
      __escape(guard((context != null) ? context['icon'] : null)) + 
      "\"></i>\n        </div>\n\n        <h2 class=\"title\">\n            " + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n" :
        "\n" + 
          (guard((context != null) ? context['link'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null) ? context['link'] : null)) + 
              "\" itemprop=\"url\">\n" :
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null)) + 
              "\" itemprop=\"url\">\n") + 
          "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n</a>\n") + 
      "\n        </h2>\n        <div>\n            " + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\n            <div class=\"description\">\n                " + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "\n            </div>\n            " :
        "") + 
      "\n        </div>\n    </div>\n\n    " + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group topic-watch-dropdown bottom-sheet\" component=\"topic/watch\">\n\n    <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\n        <span component=\"category/watching/menu\" " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:watching]]</span></span>\n\n        <span component=\"category/notwatching/menu\" " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-clock-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:not-watching]]</span></span>\n\n        <span component=\"category/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:ignoring]]</span></span>\n\n        <span class=\"caret\"></span>\n    </button>\n\n    <ul class=\"dropdown-menu dropdown-menu-right\">\n        <li><a href=\"#\" component=\"category/watching\" data-state=\"watching\"><i component=\"category/watching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-inbox\"></i> [[category:watching]]<p class=\"help-text\"><small>[[category:watching.description]]</small></p></a></li>\n\n        <li><a href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\"><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]<p class=\"help-text\"><small>[[category:not-watching.description]]</small></p></a></li>\n\n        <li><a href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\"><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]<p class=\"help-text\"><small>[[category:ignoring.description]]</small></p></a></li>\n    </ul>\n</div>\n" :
        "") + 
      "\n</li>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
