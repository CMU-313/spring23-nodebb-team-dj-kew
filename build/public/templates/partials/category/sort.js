
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
    return "<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n    <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n        <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:sort_by]]</span>\n        <span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-sort\"></i></span>\n        <span class=\"caret\"></span>\n    </button>\n\n    <ul class=\"dropdown-menu pull-right\">\n        <li><a href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest_to_oldest]]</a></li>\n        <li><a href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest_to_newest]]</a></li>\n        <li><a href=\"#\" class=\"most_posts\" data-sort=\"most_posts\"><i class=\"fa fa-fw\"></i> [[topic:most_posts]]</a></li>\n        <li><a href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most_votes]]</a></li>\n        <li><a href=\"#\" class=\"most_views\" data-sort=\"most_views\"><i class=\"fa fa-fw\"></i> [[topic:most_views]]</a></li>\n    </ul>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
