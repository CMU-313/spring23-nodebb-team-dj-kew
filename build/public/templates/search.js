
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
      "\n\n\n<div class=\"search\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <form id=\"advanced-search\">\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <label>[[global:search]]</label>\n                            <input type=\"text\" class=\"form-control\" id=\"search-input\" placeholder=\"[[global:search]]\">\n                        </div>\n                        <div class=\"col-md-2\">\n                            <label>[[search:in]]</label>\n                            <select id=\"search-in\" class=\"form-control\">\n                                <option value=\"titlesposts\">[[search:titles-posts]]</option>\n                                <option value=\"titles\">[[search:titles]]</option>\n                                <option value=\"posts\">[[global:posts]]</option>\n                                <option value=\"categories\">[[global:header.categories]]</option>\n                                " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['search:users'] : null) ?
        "\n                                <option value=\"users\">[[global:users]]</option>\n                                " :
        "") + 
      "\n                                " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['search:tags'] : null) ?
        "\n                                <option value=\"tags\">[[tags:tags]]</option>\n                                " :
        "") + 
      "\n                            </select>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <label>[[search:match-words]]</label>\n                            <select id=\"match-words-filter\" class=\"form-control\">\n                                <option value=\"all\">[[search:all]]</option>\n                                <option value=\"any\">[[search:any]]</option>\n                            </select>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <label>&nbsp;</label>\n                            <button type=\"submit\" class=\"btn btn-primary form-control\">[[global:search]]</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\".search-options\">\n                        <h3 class=\"panel-title\"><i class=\"fa fa-sort\"></i> [[search:advanced-search]]</h3>\n                    </div>\n                    <div class=\"panel-body search-options collapse " + 
      (guard((context != null) ? context['expandSearch'] : null) ?
        "in" :
        "") + 
      "\">\n                        <div class=\"form-group post-search-item\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <label>[[search:in-categories]]</label>\n                                    <select multiple class=\"form-control\" id=\"posted-in-categories\" size=\"" + 
      __escape(guard((context != null) ? context['allCategoriesCount'] : null)) + 
      "\">\n                                        " + 
      compiled.blocks['allCategories'](helpers, context, guard, iter, helper) + 
      "\n                                    </select>\n                                    <input type=\"checkbox\" id=\"search-children\"> [[search:search-child-categories]]\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group post-search-item\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <label>[[search:posted-by]]</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"posted-by-user\" placeholder=\"[[search:posted-by]]\">\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <label>[[search:has-tags]]</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"has-tags\">\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group post-search-item\">\n                                        <label>[[search:reply-count]]</label>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <select id=\"reply-count-filter\" class=\"form-control\">\n                                                    <option value=\"atleast\">[[search:at-least]]</option>\n                                                    <option value=\"atmost\">[[search:at-most]]</option>\n                                                </select>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <input type=\"text\" class=\"form-control\" id=\"reply-count\">\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group post-search-item\">\n                                        <label>[[search:post-time]]</label>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <select id=\"post-time-filter\" class=\"form-control\">\n                                                    <option value=\"newer\">[[search:newer-than]]</option>\n                                                    <option value=\"older\">[[search:older-than]]</option>\n                                                </select>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <select id=\"post-time-range\" class=\"form-control\">\n                                                    <option value=\"\">[[search:any-date]]</option>\n                                                    <option value=\"86400\">[[search:yesterday]]</option>\n                                                    <option value=\"604800\">[[search:one-week]]</option>\n                                                    <option value=\"1209600\">[[search:two-weeks]]</option>\n                                                    <option value=\"2592000\">[[search:one-month]]</option>\n                                                    <option value=\"7776000\">[[search:three-months]]</option>\n                                                    <option value=\"15552000\">[[search:six-months]]</option>\n                                                    <option value=\"31104000\">[[search:one-year]]</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group post-search-item\">\n                                        <label>[[search:sort-by]]</label>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <select id=\"post-sort-by\" class=\"form-control\">\n                                                    <option value=\"relevance\">[[search:relevance]]</option>\n                                                    <option value=\"timestamp\">[[search:post-time]]</option>\n                                                    <option value=\"votes\">[[search:votes]]</option>\n                                                    <option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\n                                                    <option value=\"topic.title\">[[search:topic-title]]</option>\n                                                    <option value=\"topic.postcount\">[[search:number-of-replies]]</option>\n                                                    <option value=\"topic.viewcount\">[[search:number-of-views]]</option>\n                                                    <option value=\"topic.votes\">[[search:topic-votes]]</option>\n                                                    <option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\n                                                    <option value=\"user.username\">[[search:username]]</option>\n                                                    <option value=\"category.name\">[[search:category]]</option>\n                                                </select>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <select id=\"post-sort-direction\" class=\"form-control\">\n                                                    <option value=\"desc\">[[search:descending]]</option>\n                                                    <option value=\"asc\">[[search:ascending]]</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group post-search-item\">\n                                        <label>[[search:show-results-as]]</label>\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" name=\"options\" id=\"show-as-posts\" checked>\n                                                [[global:posts]]\n                                            </label>\n                                        </div>\n                                        <div class=\"radio\">\n                                            <label>\n                                                <input type=\"radio\" name=\"options\" id=\"show-as-topics\">\n                                                [[global:topics]]\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n\n                        <div class=\"btn-group\">\n                            <button type=\"submit\" class=\"btn btn-primary\">[[global:search]]</button>\n                            <a class=\"btn btn-default\" id=\"save-preferences\" href=\"#\">[[search:save-preferences]]</a>\n                            <a class=\"btn btn-default\" id=\"clear-preferences\" href=\"#\">[[search:clear-preferences]]</a>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div id=\"results\" class=\"search-results col-md-12\" data-search-query=\"" + 
      __escape(guard((context != null) ? context['search_query'] : null)) + 
      "\">\n    " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "\n    <div class=\"alert alert-info\">[[search:results_matching, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['search_query'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['time'] : null)) + 
          "]] </div>\n    " :
        "\n    " + 
          (guard((context != null) ? context['search_query'] : null) ?
            "\n    <div class=\"alert alert-warning\">[[search:no-matches]]</div>\n    " :
            "") + 
          "\n    ") + 
      "\n\n    " + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n\n    " + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n    <ul id=\"users-container\" class=\"users-container\">\n    " + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n    </ul>\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "\n    " + 
          compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
          "\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null && context['categories'] != null) ? context['categories']['length'] : null) ?
        "\n    <ul class=\"categories\">\n        " + 
          compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
          "\n    </ul>\n    " :
        "") + 
      "\n\n    <div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n        </li>\n    </ul>\n</div>\n</div>\n    </div>\n</div>\n";
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
    'allCategories': function allCategories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['allCategories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                                        <option value=\"" + 
          __escape(guard((context != null && context['allCategories'] != null && context['allCategories'][key0] != null) ? context['allCategories'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['allCategories'] != null && context['allCategories'][key0] != null) ? context['allCategories'][key0]['text'] : null)) + 
          "</option>\n                                        ";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <div class=\"topic-row panel panel-default clearfix\">\n        <div class=\"panel-body\">\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n            <span class=\"search-result-text search-result-title\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "</a></span>\n            <br/>\n            " + 
          (guard((context != null) ? context['showAsPosts'] : null) ?
            "\n            <div class=\"search-result-text\">\n                " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\n                <p class=\"fade-out\"></p>\n            </div>\n            " :
            "") + 
          "\n\n            <small class=\"post-info pull-right\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\"><span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null)])) + 
          "\"><i style=\"color:" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['color'] : null)) + 
          ";\" class=\"fa " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['icon'] : null)) + 
          " fa-stack-1x\"></i></span> " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "</a> &bull;\n                <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n            </small>\n        </div>\n    </div>\n    ";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"users-box registered-user\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">\n    <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "lg", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n    <br/>\n    <div class=\"user-info\">\n        <span>\n            <i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['status'] : null)) + 
          "]]\"></i>\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n        </span>\n        <br/>\n\n        " + 
          (guard((context != null) ? context['section_online'] : null) ?
            "\n        <div class=\"lastonline\">\n            <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
              "\"></span>\n        </div>\n        " :
            "") + 
          "\n\n        " + 
          (guard((context != null) ? context['section_joindate'] : null) ?
            "\n        <div class=\"joindate\">\n            <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
              "\"></span>\n        </div>\n        " :
            "") + 
          "\n\n        " + 
          (guard((context != null) ? context['section_sort-reputation'] : null) ?
            "\n        <div class=\"reputation\">\n            <i class=\"fa fa-star\"></i>\n            <span class=\"formatted-number\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)) + 
              "</span>\n        </div>\n        " :
            "") + 
          "\n\n        " + 
          (guard((context != null) ? context['section_sort-posts'] : null) ?
            "\n        <div class=\"post-count\">\n            <i class=\"fa fa-pencil\"></i>\n            <span class=\"formatted-number\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)) + 
              "</span>\n        </div>\n        " :
            "") + 
          "\n\n        " + 
          (guard((context != null) ? context['section_flagged'] : null) ?
            "\n        <div class=\"flag-count\">\n            <i class=\"fa fa-flag\"></i>\n            <span><a class=\"formatted-number\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/flags?targetUid=" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)) + 
              "</a></span>\n        </div>\n        " :
            "") + 
          "\n    </div>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<h3 class=\"pull-left tag-container\">\n    <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
          "\" data-value=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\"><span class=\"tag-item tag-class-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['class'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span><span class=\"tag-topic-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</span></a>\n</h3>\n";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n        <li component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">\n    <meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\">\n\n    <div class=\"content col-xs-12 " + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "col-md-10 col-sm-12" :
            "col-md-7 col-sm-9") + 
          "\">\n        <div class=\"icon pull-left\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
          "\">\n            <i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
          "\"></i>\n        </div>\n\n        <h2 class=\"title\">\n            " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isSection'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\n" :
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\n") + 
              "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n</a>\n") + 
          "\n        </h2>\n        <div>\n            " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null) ?
            "\n            <div class=\"description\">\n                " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
              "\n            </div>\n            " :
            "") + 
          "\n            " + 
          (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
            "" :
            "\n            " + 
              __escape(helper(context, helpers, 'generateChildrenCategories', [guard(value)])) + 
              "\n            ") + 
          "\n        </div>\n        <span class=\"visible-xs pull-right\">\n            " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['timestampISO'] : null) ?
            "\n            <a class=\"permalink\" href=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['url'] : null)) + 
              "\">\n                <small class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['timestampISO'] : null)) + 
              "\"></small>\n            </a>\n            " :
            "") + 
          "\n        </span>\n    </div>\n\n    " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            "" :
            "\n    <div class=\"col-md-1 hidden-sm hidden-xs stats\">\n        <span class=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['unread-class'] : null)) + 
              " human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)) + 
              "</span><br />\n        <small>[[global:topics]]</small>\n    </div>\n    <div class=\"col-md-1 hidden-sm hidden-xs stats\">\n        <span class=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['unread-class'] : null)) + 
              " human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)) + 
              "</span><br />\n        <small>[[global:posts]]</small>\n    </div>\n    " + 
              (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
                "" :
                "\n    <div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\n        <div class=\"card background-link-container\" style=\"border-color: " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['bgColor'] : null)) + 
                  "\">\n    " + 
                  iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['posts'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n    " + 
                      (index === 0 ?
                        "\n    <div component=\"category/posts\">\n        <a class=\"background-link\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\"></a>\n        <p>\n            " + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['isAnon'] : null) ?
                            "\n            <strong>\n                <div itemprop=\"author\">Anonymous</div>\n            </strong>\n            " :
                            "\n            <strong>\n                <a href=\"" + 
                              (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['userslug'] : null) ?
                                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                                  "/user/" + 
                                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['userslug'] : null)) :
                                "#") + 
                              "\" itemprop=\"author\" data-username=\"" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['username'] : null)) + 
                              "\" data-uid=\"" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['uid'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['displayname'] : null)) + 
                              "</a>\n            </strong>\n            ") + 
                          "\n            " + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['isAnon'] : null) ?
                            "\n            " :
                            "\n            <a href=\"" + 
                              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                              "/user/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['userslug'] : null)) + 
                              "\">" + 
                              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
                              "</a>\n            ") + 
                          "\n            <a class=\"permalink\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\">\n                <small class=\"timeago\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['timestampISO'] : null)) + 
                          "\"></small>\n            </a>\n        </p>\n        <div class=\"post-content\">\n            " + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['content'] : null)) + 
                          "\n        </div>\n    </div>\n    " :
                        "") + 
                      "\n    ";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n\n    " + 
                  (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null) ? context['categories'][key0]['posts']['length'] : null) ?
                    "" :
                    "\n    <div component=\"category/posts\">\n        <div class=\"post-content\">\n            [[category:no_new_posts]]\n        </div>\n    </div>\n    ") + 
                  "\n</div>\n\n    </div>\n    ") + 
              "\n    ") + 
          "\n</li>\n\n        ";
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
