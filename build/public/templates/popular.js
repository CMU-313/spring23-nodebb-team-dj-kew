
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
      "\n</div>\n<div class=\"popular\">\n    <div class=\"topic-list-header btn-toolbar\">\n        <div class=\"pull-left\">\n            " + 
      (guard((context != null) ? context['canPost'] : null) ?
        "\n            <noscript><div class=\"dropdown\" component=\"category-selector\"></noscript>\n<label component=\"category/post\" for=\"category-dropdown-check\" class=\"btn btn-primary\" id=\"new_topic\" role=\"button\">\n    [[category:new_topic_button]]\n</label>\n<noscript>\n    <input type=\"checkbox\" class=\"hidden\" id=\"category-dropdown-check\" aria-hidden=\"true\">\n    <ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n        " + 
          compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
          "\n    </ul>\n</div>\n</noscript>\n\n            " :
        "\n            <a component=\"category/post/guest\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/login\" class=\"btn btn-primary\">[[category:guest-login-post]]</a>\n            ") + 
      "\n        </div>\n\n        <div class=\"btn-group pull-right\">\n        " + 
      (guard((context != null) ? context['showTopicTools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n    <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n        <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:thread_tools.title]]</span>\n        <span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-gear\"></i></span>\n        <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu pull-right\">\n        <li>\n            <a component=\"topic/mark-unread-for-all\" href=\"#\">\n                <i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread_tools.markAsUnreadForAll]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/pin\" href=\"#\">\n                <i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread_tools.pin]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/unpin\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread_tools.unpin]]\n            </a>\n        </li>\n\n        <li>\n            <a component=\"topic/lock\" href=\"#\">\n                <i class=\"fa fa-fw fa-lock\"></i> [[topic:thread_tools.lock]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/unlock\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread_tools.unlock]]\n            </a>\n        </li>\n\n        <li class=\"divider\"></li>\n\n        <li>\n            <a component=\"topic/move\" href=\"#\">\n                <i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move]]\n            </a>\n        </li>\n        " + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "\n        <li>\n            <a component=\"topic/move-all\" href=\"#\">\n                <i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move_all]]\n            </a>\n        </li>\n        " :
            "") + 
          "\n        <li>\n            <a component=\"topic/merge\" href=\"#\">\n                <i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread_tools.merge]]\n            </a>\n        </li>\n\n        <li class=\"divider\"></li>\n\n        <li>\n            <a component=\"topic/delete\" href=\"#\">\n                <i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread_tools.delete]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/restore\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-history\"></i> [[topic:thread_tools.restore]]\n            </a>\n        </li>\n        <li>\n            <a component=\"topic/purge\" href=\"#\" class=\"hidden\">\n                <i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread_tools.purge]]\n            </a>\n        </li>\n\n        " + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n    </ul>\n</div>\n" :
        "") + 
      "\n        </div>\n\n        <div component=\"category/dropdown\" class=\"btn-group pull-right category-dropdown-container bottom-sheet\">\n   <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    " + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
          ";\"></i></span> <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "</span>" :
        "\n    <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[unread:all_categories]]</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-list\"></i></span>") + 
      " <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden\">\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n    <li role=\"presentation\" class=\"category\" data-all=\"all\">\n        <a role=\"menu-item\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) + 
      "\"><i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "invisible" :
        "") + 
      "\"></i> [[unread:all_categories]]</a>\n    </li>\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n\n        <div class=\"btn-group pull-right bottom-sheet " + 
      (guard((context != null && context['filters'] != null) ? context['filters']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
      __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['name'] : null)) + 
      "</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw " + 
      __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['icon'] : null)) + 
      "\"></i></span> <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n                " + 
      compiled.blocks['filters'](helpers, context, guard, iter, helper) + 
      "\n            </ul>\n        </div>\n\n        <div class=\"btn-group pull-right bottom-sheet " + 
      (guard((context != null && context['terms'] != null) ? context['terms']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n            " + 
      __escape(guard((context != null && context['selectedTerm'] != null) ? context['selectedTerm']['name'] : null)) + 
      " <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n                " + 
      compiled.blocks['terms'](helpers, context, guard, iter, helper) + 
      "\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"category\">\n        " + 
      (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
        "" :
        "\n        <div class=\"alert alert-warning\" id=\"category-no-topics\">[[recent:no_popular_topics]]</div>\n        ") + 
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
      "\n    </div>\n</div>\n";
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
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\">\n            <a role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/compose?cid=" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['level'] : null)) + 
          "<span component=\"category-markup\">" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['color'] : null)) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "</span></a>\n        </li>\n        ";
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
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\n        <a role=\"menu-item\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i><span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i class=\"fa fa-fw fa-stack-1x " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\" style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'filters': function filters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['filters'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          "\">\n                    <a role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['url'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>" + 
          __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['name'] : null)) + 
          "</a>\n                </li>\n                ";
      }, function alt() {
        return "";
      });
    },
    'terms': function terms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['terms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                <li role=\"presentation\" class=\"category\">\n                    <a role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['url'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          (guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>" + 
          __escape(guard((context != null && context['terms'] != null && context['terms'][key0] != null) ? context['terms'][key0]['name'] : null)) + 
          "</a>\n                </li>\n                ";
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
    }
  };

  return compiled;
})
