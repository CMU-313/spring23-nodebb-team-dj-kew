
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n    " + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n<div data-widget-area=\"header\">\n    " + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"row\">\n    <div class=\"category " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n        " + 
      (guard((context != null && context['children'] != null) ? context['children']['length'] : null) ?
        "\n<div class=\"subcategory\">\n    " + 
          (guard((context != null) ? context['hasMoreSubCategories'] : null) ?
            "\n    <div><div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
              ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
                "<span class=\"fa-stack\" style=\"" + 
                  __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
                  "\"><i class=\"fa fa-fw fa-stack-1x " + 
                  __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
                  "\" style=\"color: " + 
                  __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
                  ";\"></i></span> " + 
                  __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) :
                "\n    <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
                  (guard((context != null) ? context['selectCategoryLabel'] : null) ?
                    __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
                    "[[topic:thread_tools.select_category]]") + 
                  "</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw " + 
                  (guard((context != null) ? context['selectCategoryIcon'] : null) ?
                    __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
                    "fa-list") + 
                  "\"></i></span>\n    ") + 
              "</span> <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden\">\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n    <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n        <a role=\"menu-item\">[[search:no-matches]]</a>\n    </li>\n    " + 
              compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
              "\n</ul>\n</div></div>\n    " :
            "\n    <p>[[category:subcategories]]</p>\n    ") + 
          "\n\n    <ul component=\"category/subcategory/container\" class=\"categories\" itemscope itemtype=\"http://www.schema.org/ItemList\">\n        " + 
          compiled.blocks['children'](helpers, context, guard, iter, helper) + 
          "\n    </ul>\n    " + 
          (guard((context != null) ? context['hasMoreSubCategories'] : null) ?
            "\n    <button class=\"btn btn-default\" component=\"category/load-more-subcategories\">[[category:x-more-categories, " + 
              __escape(guard((context != null) ? context['subCategoriesLeft'] : null)) + 
              "]]</button>\n    " :
            "") + 
          "\n</div>\n" :
        "") + 
      "\n\n        <div class=\"topic-list-header clearfix\">\n            " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:create'] : null) ?
        "\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/compose?cid=" + 
          __escape(guard((context != null) ? context['cid'] : null)) + 
          "\" component=\"category/post\" id=\"new_topic\" class=\"btn btn-primary\" data-ajaxify=\"false\" role=\"button\">[[category:new_topic_button]]</a>\n            " :
        "\n                " + 
          (guard((context != null) ? context['loggedIn'] : null) ?
            "" :
            "\n                <a component=\"category/post/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"btn btn-primary\">[[category:guest-login-post]]</a>\n                ") + 
          "\n            ") + 
      "\n\n            <a href=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\" class=\"inline-block\">\n                <div class=\"alert alert-warning hide\" id=\"new-topics-alert\"></div>\n            </a>\n\n            <span class=\"pull-right\" component=\"category/controls\">\n                " + 
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
      "\n                <div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n    <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n        <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:sort_by]]</span>\n        <span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-sort\"></i></span>\n        <span class=\"caret\"></span>\n    </button>\n\n    <ul class=\"dropdown-menu pull-right\">\n        <li><a href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest_to_oldest]]</a></li>\n        <li><a href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest_to_newest]]</a></li>\n        <li><a href=\"#\" class=\"most_posts\" data-sort=\"most_posts\"><i class=\"fa fa-fw\"></i> [[topic:most_posts]]</a></li>\n        <li><a href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most_votes]]</a></li>\n        <li><a href=\"#\" class=\"most_views\" data-sort=\"most_views\"><i class=\"fa fa-fw\"></i> [[topic:most_views]]</a></li>\n    </ul>\n</div>\n                " + 
      (guard((context != null) ? context['showTopicTools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n    <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n        <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:thread_tools.title]]</span>\n        <span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-gear\"></i></span>\n        <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu pull-right\">\n        <li>\n            <a component=\"topic/mark-unread-for-all\" href=\"#\">\n                <i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread_tools.markAsUnreadForAll]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/pin\" href=\"#\">\n                <i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread_tools.pin]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/unpin\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread_tools.unpin]]\n            </a>\n        </li>\n\n        <li>\n            <a component=\"topic/lock\" href=\"#\">\n                <i class=\"fa fa-fw fa-lock\"></i> [[topic:thread_tools.lock]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/unlock\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread_tools.unlock]]\n            </a>\n        </li>\n\n        <li class=\"divider\"></li>\n\n        <li>\n            <a component=\"topic/move\" href=\"#\">\n                <i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move]]\n            </a>\n        </li>\n        " + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "\n        <li>\n            <a component=\"topic/move-all\" href=\"#\">\n                <i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move_all]]\n            </a>\n        </li>\n        " :
            "") + 
          "\n        <li>\n            <a component=\"topic/merge\" href=\"#\">\n                <i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread_tools.merge]]\n            </a>\n        </li>\n\n        <li class=\"divider\"></li>\n\n        <li>\n            <a component=\"topic/delete\" href=\"#\">\n                <i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread_tools.delete]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/restore\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-history\"></i> [[topic:thread_tools.restore]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/purge\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread_tools.purge]]\n            </a>\n        </li>\n\n        " + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n    </ul>\n</div>\n" :
        "") + 
      "\n            </span>\n        </div>\n\n        " + 
      (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
        "" :
        "\n        " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:create'] : null) ?
            "\n        <hr class=\"visible-xs\" />\n        <div class=\"alert alert-warning\" id=\"category-no-topics\">\n            [[category:no_topics]]\n        </div>\n        " :
            "") + 
          "\n        ") + 
      "\n\n        <ul component=\"category\" class=\"topic-list\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\" data-set=\"" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "\">\n    " + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n\n\n        " + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n            <div component=\"pagination\" class=\"text-center pagination-container" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
            "" :
            " hidden") + 
          "\">\n    <ul class=\"pagination hidden-xs\">\n        <li class=\"previous pull-left" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n        </li>\n\n        " + 
          compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
          "\n\n        <li class=\"next pull-right" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n        </li>\n    </ul>\n\n    <ul class=\"pagination hidden-sm hidden-md hidden-lg\">\n        <li class=\"first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n        </li>\n\n        <li class=\"previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n        </li>\n\n        <li component=\"pagination/select-page\" class=\"page select-page\">\n            <a href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\n        </li>\n\n        <li class=\"next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n        </li>\n\n        <li class=\"last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div>\n        " :
        "") + 
      "\n    </div>\n    <div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n        " + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n    </div>\n</div>\n<div data-widget-area=\"footer\">\n    " + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>\n\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "" :
        "\n<noscript>\n    <div component=\"pagination\" class=\"text-center pagination-container" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
            "" :
            " hidden") + 
          "\">\n    <ul class=\"pagination hidden-xs\">\n        <li class=\"previous pull-left" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n        </li>\n\n        " + 
          iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n            " + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
                "\n            <li component=\"pagination/select-page\" class=\"page select-page\">\n                <a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n            </li>\n            " :
                "\n            <li class=\"page" + 
                  (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                    " active" :
                    "") + 
                  "\" >\n                <a href=\"?" + 
                  __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
                  "\" data-page=\"" + 
                  __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
                  "</a>\n            </li>\n            ") + 
              "\n        ";
          }, function alt() {
            return "";
          }) + 
          "\n\n        <li class=\"next pull-right" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n        </li>\n    </ul>\n\n    <ul class=\"pagination hidden-sm hidden-md hidden-lg\">\n        <li class=\"first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n        </li>\n\n        <li class=\"previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\n        </li>\n\n        <li component=\"pagination/select-page\" class=\"page select-page\">\n            <a href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\n        </li>\n\n        <li class=\"next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n        </li>\n\n        <li class=\"last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n            <a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div>\n</noscript>\n") + 
      "\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\n        <meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n        " + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n            <span itemprop=\"name\">\n                " + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\n                " + 
          (index === length - 1 ?
            "\n                " + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\n                " + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\n                " :
            "") + 
          "\n            </span>\n        " + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    " + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n    ";
      }, function alt() {
        return "";
      });
    },
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n        <a role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'children': function children(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['children'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <li component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['cid'] : null)) + 
          "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['cid'] : null)) + 
          "\">\n    <meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
          "\">\n\n    <div class=\"content col-xs-12 " + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "col-md-10 col-sm-12" :
            "col-md-7 col-sm-9") + 
          "\">\n        <div class=\"icon pull-left\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
          "\">\n            <i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['icon'] : null)) + 
          "\"></i>\n        </div>\n\n        <h2 class=\"title\">\n            " + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['isSection'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\n" :
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\n") + 
              "\n" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
              "\n</a>\n") + 
          "\n        </h2>\n        <div>\n            " + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['descriptionParsed'] : null) ?
            "\n            <div class=\"description\">\n                " + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['descriptionParsed'] : null)) + 
              "\n            </div>\n            " :
            "") + 
          "\n            " + 
          (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
            "" :
            "\n            " + 
              __escape(helper(context, helpers, 'generateChildrenCategories', [guard(value)])) + 
              "\n            ") + 
          "\n        </div>\n        <span class=\"visible-xs pull-right\">\n            " + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['teaser'] != null) ? context['children'][key0]['teaser']['timestampISO'] : null) ?
            "\n            <a class=\"permalink\" href=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['teaser'] != null) ? context['children'][key0]['teaser']['url'] : null)) + 
              "\">\n                <small class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['teaser'] != null) ? context['children'][key0]['teaser']['timestampISO'] : null)) + 
              "\"></small>\n            </a>\n            " :
            "") + 
          "\n        </span>\n    </div>\n\n    " + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
            "" :
            "\n    <div class=\"col-md-1 hidden-sm hidden-xs stats\">\n        <span class=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['unread-class'] : null)) + 
              " human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalTopicCount'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalTopicCount'] : null)) + 
              "</span><br />\n        <small>[[global:topics]]</small>\n    </div>\n    <div class=\"col-md-1 hidden-sm hidden-xs stats\">\n        <span class=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['unread-class'] : null)) + 
              " human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalPostCount'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalPostCount'] : null)) + 
              "</span><br />\n        <small>[[global:posts]]</small>\n    </div>\n    " + 
              (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
                "" :
                "\n    <div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\n        <div class=\"card background-link-container\" style=\"border-color: " + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['bgColor'] : null)) + 
                  "\">\n    " + 
                  iter(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['posts'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n    " + 
                      (index === 0 ?
                        "\n    <div component=\"category/posts\">\n        <a class=\"background-link\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['topic'] != null) ? context['children'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\"></a>\n        <p>\n            " + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['isAnon'] : null) ?
                            "\n            <strong>\n                <div itemprop=\"author\">Anonymous</div>\n            </strong>\n            " :
                            "\n            <strong>\n                <a href=\"" + 
                              (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['userslug'] : null) ?
                                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                                  "/user/" + 
                                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['userslug'] : null)) :
                                "#") + 
                              "\" itemprop=\"author\" data-username=\"" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['username'] : null)) + 
                              "\" data-uid=\"" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['uid'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['displayname'] : null)) + 
                              "</a>\n            </strong>\n            ") + 
                          "\n            " + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['isAnon'] : null) ?
                            "\n            " :
                            "\n            <a href=\"" + 
                              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                              "/user/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['userslug'] : null)) + 
                              "\">" + 
                              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
                              "</a>\n            ") + 
                          "\n            <a class=\"permalink\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['topic'] != null) ? context['children'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\">\n                <small class=\"timeago\" title=\"" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['timestampISO'] : null)) + 
                          "\"></small>\n            </a>\n        </p>\n        <div class=\"post-content\">\n            " + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['content'] : null)) + 
                          "\n        </div>\n    </div>\n    " :
                        "") + 
                      "\n    ";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n\n    " + 
                  (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null) ? context['children'][key0]['posts']['length'] : null) ?
                    "" :
                    "\n    <div component=\"category/posts\">\n        <div class=\"post-content\">\n            [[category:no_new_posts]]\n        </div>\n    </div>\n    ") + 
                  "\n</div>\n\n    </div>\n    ") + 
              "\n    ") + 
          "\n</li>\n\n        ";
      }, function alt() {
        return "";
      });
    },
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <li>\n            <a href=\"#\" class=\"" + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a>\n        </li>\n        ";
      }, function alt() {
        return "";
      });
    },
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\n        " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['visible'] : null) ?
            "\n        <li component=\"category/topic\" class=\"row clearfix category-item " + 
              __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
              "\" data-tid=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" data-cid=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['cid'] : null)) + 
              "\" itemprop=\"itemListElement\" itemscope itemtype=\"https://schema.org/ListItem\">\n            <link itemprop=\"url\" content=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "\" />\n            <meta itemprop=\"name\" content=\"" + 
              __escape(helper(context, helpers, 'stripTags', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)])) + 
              "\" />\n            <meta itemprop=\"itemListOrder\" content=\"descending\" />\n            <meta itemprop=\"position\" content=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" />\n            <a id=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
              "\" component=\"topic/anchor\"></a>\n\n            <div class=\"col-md-6 col-sm-9 col-xs-10 content\">\n                \n                <div class=\"avatar pull-left\">\n\n                    " + 
              (guard((context != null) ? context['showSelect'] : null) ?
                "\n                    " + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['isAnon'] : null) ?
                    "\n                    " :
                    "\n                    <div class=\"select\" component=\"topic/select\">\n                        " + 
                      (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
                        "\n                        <img src=\"" + 
                          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
                          "\" class=\"user-img not-responsive\" />\n                        " :
                        "\n                        " + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "46", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                          "\n                        ") + 
                      "\n                        <i class=\"fa fa-check\"></i>\n                    </div>\n                    ") + 
                  "\n                    " :
                "") + 
              "\n\n                    " + 
              (guard((context != null) ? context['showSelect'] : null) ?
                "" :
                "\n                    " + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['isAnon'] : null) ?
                    "\n                    " :
                    "\n                    <a href=\"" + 
                      (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
                        __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/user/" + 
                          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
                        "#") + 
                      "\" class=\"pull-left\">\n                        " + 
                      (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
                        "\n                        <img src=\"" + 
                          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
                          "\" class=\"user-img not-responsive\" />\n                        " :
                        "\n                        " + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "46", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                          "\n                        ") + 
                      "\n                    </a>\n                    ") + 
                  "\n                    ") + 
              "\n                </div>\n                \n\n                <h2 component=\"topic/header\" class=\"title\">\n                    <i component=\"topic/scheduled\" class=\"fa fa-clock-o " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) ?
                "" :
                "hide") + 
              "\" title=\"[[topic:scheduled]]\"></i>\n                    <i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
              ((guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) || !guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinned'] : null)) ?
                "hide" :
                "") + 
              "\" title=\"" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiry'] : null) ?
                "[[topic:pinned-with-expiry, " + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiryISO'] : null)) + 
                  "]]" :
                "[[topic:pinned]]") + 
              "\"></i>\n                    <i component=\"topic/locked\" class=\"fa fa-lock " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['locked'] : null) ?
                "" :
                "hide") + 
              "\" title=\"[[topic:locked]]\"></i>\n                    <i component=\"topic/moved\" class=\"fa fa-arrow-circle-right " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['oldCid'] : null) ?
                "" :
                "hide") + 
              "\" title=\"[[topic:moved]]\"></i>\n                    " + 
              iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['icons'] : null), function each(key1, index, length, value) {
                var key = key1;
                return __escape(guard(value));
              }, function alt() {
                return "";
              }) + 
              "\n\n\n                    " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['noAnchor'] : null) ?
                "\n                    <span>" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
                  "</span><br />\n                    " :
                "\n                    <a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                    "/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                    "") + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
                  "</a><br />\n                    ") + 
              "\n\n                    " + 
              (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
                "" :
                "\n                    <small>\n                        <a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['slug'] : null)) + 
                  "\"><span class=\"fa-stack fa-lg\" style=\"" + 
                  __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['category'] : null)])) + 
                  "\"><i style=\"color:" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['color'] : null)) + 
                  ";\" class=\"fa " + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['icon'] : null)) + 
                  " fa-stack-1x\"></i></span> " + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['name'] : null)) + 
                  "</a> &bull;\n                    </small>\n                    ") + 
              "\n\n                    " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null) ? context['topics'][key0]['tags']['length'] : null) ?
                "\n                    <span class=\"tag-list hidden-xs\">\n                        " + 
                  iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tags'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n                        <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/tags/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEncoded'] : null)) + 
                      "\"><span class=\"tag tag-item tag-class-" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['class'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEscaped'] : null)) + 
                      "</span></a>\n                        ";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n                        <small>&bull;</small>\n                    </span>\n                    " :
                "") + 
              "\n                    \n                    \n                    <small class=\"hidden-xs\">\n                        <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
              "\"></span> &bull; \n\n                        " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['isAnon'] : null) ?
                "\n                        <strong>\n                            <span itemprop=\"author\">Anonymous</span>\n                        </strong>\n                        " :
                "\n                        <a href=\"" + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
                    __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/user/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
                    "#") + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['displayname'] : null)) + 
                  "</a>\n                        ") + 
              "\n                    </small>\n                    <small class=\"visible-xs-inline\">\n                        " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestamp'] : null) ?
                "\n                        <span class=\"timeago\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
                  "\"></span>\n                        " :
                "\n                        <span class=\"timeago\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
                  "\"></span>\n                        ") + 
              "\n                    </small>\n                </h2>\n            </div>\n\n            <div class=\"mobile-stat col-xs-2 visible-xs text-right\">\n                <span class=\"human-readable-number\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
              "</span> <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
              "\"><i class=\"fa fa-arrow-circle-right\"></i></a>\n            </div>\n\n            <div class=\"col-md-1 hidden-sm hidden-xs stats stats-votes\">\n                " + 
              (guard((context != null) ? context['reputation:disabled'] : null) ?
                "" :
                "\n                <span class=\"human-readable-number\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
                  "</span><br />\n                <small>[[global:votes]]</small>\n                ") + 
              "\n            </div>\n\n            <div class=\"col-md-1 hidden-sm hidden-xs stats stats-postcount\">\n                <span class=\"human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
              "</span><br />\n                <small>[[global:posts]]</small>\n            </div>\n\n            <div class=\"col-md-1 hidden-sm hidden-xs stats stats-viewcount\">\n                <span class=\"human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
              "</span><br />\n                <small>[[global:views]]</small>\n            </div>\n\n            <div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\n                <div class=\"card background-link-container\" style=\"border-color: " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['bgColor'] : null)) + 
              "\">\n                    <a class=\"background-link\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
              "\"></a>\n                    " + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['unreplied'] : null) ?
                "\n                    <p>\n                        [[category:no_replies]]\n                    </p>\n                    " :
                "\n                    " + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['pid'] : null) ?
                    "\n                    <p>\n                        " + 
                      (guard((context != null && context['posts'] != null) ? context['posts']['isAnon'] : null) ?
                        "\n                        " :
                        "\n                        <a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/user/" + 
                          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) + 
                          "\">" + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['user'] : null), "24", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                          "</a>\n                        ") + 
                      "\n                        <a class=\"permalink\" href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/topic/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                      "/" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                      "\">\n                            <span class=\"timeago\" title=\"" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
                      "\"></span>\n                        </a>\n                    </p>\n                    <div class=\"post-content\">\n                        " + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['content'] : null)) + 
                      "\n                    </div>\n                    " :
                    "") + 
                  "\n                    ") + 
              "\n                </div>\n            </div>\n        </li>\n        " :
            "") + 
          "\n    ";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            " + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n            <li component=\"pagination/select-page\" class=\"page select-page\">\n                <a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n            </li>\n            " :
            "\n            <li class=\"page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n                <a href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n            </li>\n            ") + 
          "\n        ";
      }, function alt() {
        return "";
      });
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        " + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n        ";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    " + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
