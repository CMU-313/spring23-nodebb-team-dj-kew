
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
    return "<div component=\"composer\" class=\"composer" + 
      (guard((context != null) ? context['resizable'] : null) ?
        " resizable" :
        "") + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "" :
        " reply") + 
      "\">\n\n\t<div class=\"composer-container\">\n\t\t<nav class=\"navbar navbar-fixed-top mobile-navbar hidden-md hidden-lg\">\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button class=\"btn btn-sm btn-primary composer-discard\" data-action=\"discard\" tabindex=\"-1\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t<button class=\"btn btn-sm btn-primary composer-minimize\" data-action=\"minimize\" tabindex=\"-1\"><i class=\"fa fa-minus\"></i></button>\n\t\t\t</div>\n\t\t\t" + 
      (guard((context != null) ? context['isTopic'] : null) ?
        "\n\t\t\t<div class=\"category-name-container\">\n\t\t\t\t<span class=\"category-name\"></span> <i class=\"fa fa-sort\"></i>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "" :
        "\n\t\t\t<h4 class=\"title\">[[topic:composer.replying_to, \"" + 
          __escape(guard((context != null) ? context['title'] : null)) + 
          "\"]]</h4>\n\t\t\t") + 
      "\n\t\t\t<div class=\"display-scheduler pull-right" + 
      (guard((context != null) ? context['canSchedule'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t\t\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button class=\"btn btn-sm btn-primary composer-submit\" data-action=\"post\" tabindex=\"-1\"><i class=\"fa fa-chevron-right\"></i></button>\n\t\t\t</div>\n\t\t</nav>\n\t\t<div class=\"row title-container\">\n\t\t\t" + 
      (guard((context != null) ? context['isTopic'] : null) ?
        "\n\t\t\t<div class=\"category-list-container hidden-sm hidden-xs\">\n\t\t\t\t<div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
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
          "\n</ul>\n</div>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard((context != null) ? context['showHandleInput'] : null) ?
        "\n\t\t\t<div data-component=\"composer/handle\">\n\t\t\t\t<input class=\"handle form-control\" type=\"text\" tabindex=\"1\" placeholder=\"[[topic:composer.handle_placeholder]]\" value=\"" + 
          __escape(guard((context != null) ? context['handle'] : null)) + 
          "\" />\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t\t<div data-component=\"composer/title\">\n\t\t\t\t" + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "\n\t\t\t\t<input class=\"title form-control\" type=\"text\" tabindex=\"1\" placeholder=\"[[topic:composer.title_placeholder]]\" value=\"" + 
          __escape(guard((context != null) ? context['title'] : null)) + 
          "\"/>\n\t\t\t\t" :
        "\n\t\t\t\t<span class=\"title form-control\">[[topic:composer.replying_to, \"" + 
          __escape(guard((context != null) ? context['title'] : null)) + 
          "\"]]</span>\n\t\t\t\t") + 
      "\n\t\t\t\t<div id=\"quick-search-container\" class=\"quick-search-container hidden\">\n\t\t\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"pull-right draft-icon hidden-xs hidden-sm\"></div>\n\n\t\t\t<div class=\"display-scheduler pull-right hidden-sm hidden-xs" + 
      (guard((context != null) ? context['canSchedule'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t\t\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t\t</div>\n\n\t\t\t<div class=\"btn-group pull-right action-bar hidden-sm hidden-xs\">\n\t\t\t\t<button class=\"btn btn-default composer-discard\" data-action=\"discard\" tabindex=\"-1\"><i class=\"fa fa-times\"></i> [[topic:composer.discard]]</button>\n\n\t\t\t\t<ul class=\"dropdown-menu\">" + 
      compiled.blocks['submitOptions'](helpers, context, guard, iter, helper) + 
      "</ul>\n\t\t\t\t<button class=\"btn btn-primary composer-submit\" data-action=\"post\" tabindex=\"6\" data-text-variant=\" [[topic:composer.schedule]]\"><i class=\"fa fa-check\"></i> [[topic:composer.submit]]</button>\n\t\t\t\t<button class=\"btn btn-info composer-submit-anon\" data-action=\"post\" tabindex=\"6\" data-text-variant=\" [[topic:composer.schedule]] as Anonymous\"><i class=\"fa fa-check\"></i> [[topic:composer.submit]] as Anonymous</button>\n\t\t\t\t<button class=\"btn btn-secondary composer-submit-private\" data-action=\"post\" tabindex=\"6\" data-text-variant=\" [[topic:composer.schedule]] as Private\"><i class=\"fa fa-check\"></i> [[topic:composer.submit]] as Private</button>\n\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t<span class=\"sr-only\">[[topic:composer.additional-options]]</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"category-tag-row\">\n\t\t\t<div class=\"btn-toolbar formatting-bar\">\n\t\t\t\t<ul class=\"formatting-group\">\n\t\t\t\t\t" + 
      compiled.blocks['formatting'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['upload:post:image'] : null) ?
        "\n\t\t\t\t\t<li class=\"img-upload-btn\" data-format=\"picture\" tabindex=\"-1\" title=\"[[modules:composer.upload-picture]]\">\n\t\t\t\t\t\t<i class=\"fa fa-file-image-o\"></i>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['upload:post:file'] : null) ?
        "\n\t\t\t\t\t<li class=\"file-upload-btn\" data-format=\"upload\" tabindex=\"-1\" title=\"[[modules:composer.upload-file]]\">\n\t\t\t\t\t\t<i class=\"fa fa-file-o\"></i>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t\t<form id=\"fileForm\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<input type=\"file\" id=\"files\" name=\"files[]\" multiple class=\"gte-ie9 hide\"/>\n\t\t\t\t\t</form>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row write-preview-container\">\n\t\t\t<div class=\"write-container\">\n\t\t\t\t<div class=\"help-text\">\n\t\t\t\t\t<span class=\"help hidden\">[[modules:composer.compose]] <i class=\"fa fa-question-circle\"></i></span>\n\t\t\t\t\t<span class=\"toggle-preview hide\">[[modules:composer.show_preview]]</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-right draft-icon hidden-md hidden-lg\"></div>\n\t\t\t\t<textarea class=\"write\" tabindex=\"4\" placeholder=\"[[modules:composer.textarea.placeholder]]\">" + 
      __escape(guard((context != null) ? context['body'] : null)) + 
      "</textarea>\n\t\t\t</div>\n\t\t\t<div class=\"hidden-sm hidden-xs preview-container\">\n\t\t\t\t<div class=\"help-text\">\n\t\t\t\t\t<span class=\"toggle-preview\">[[modules:composer.hide_preview]]</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"preview well\"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t" + 
      (guard((context != null) ? context['isTopicOrMain'] : null) ?
        "\n\t\t<div class=\"tag-row\">\n\t\t\t<div class=\"tags-container\">\n\t\t\t\t<div class=\"btn-group dropup " + 
          (guard((context != null && context['tagWhitelist'] != null) ? context['tagWhitelist']['length'] : null) ?
            "" :
            "hidden") + 
          "\" component=\"composer/tag/dropdown\">\n\t\t\t\t\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t\t\t\t\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"><i class=\"fa fa-tags\"></i></span>\n\t\t\t\t\t\t[[tags:select_tags]]\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t" + 
          compiled.blocks['tagWhitelist'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<input class=\"tags\" type=\"text\" class=\"form-control\" placeholder=\"[[tags:enter_tags_here, " + 
          __escape(guard((context != null) ? context['minimumTagLength'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['maximumTagLength'] : null)) + 
          "]]\" tabindex=\"5\"/>\n\t\t\t</div>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t<div class=\"imagedrop\"><div>[[topic:composer.drag_and_drop_images]]</div></div>\n\n\t\t<div class=\"resizer\"><div class=\"trigger text-center\"><i class=\"fa\"></i></div></div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
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
    'submitOptions': function submitOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['submitOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "<li><a href=\"#\" data-action=\"" + 
          __escape(guard((context != null && context['submitOptions'] != null && context['submitOptions'][key0] != null) ? context['submitOptions'][key0]['action'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['submitOptions'] != null && context['submitOptions'][key0] != null) ? context['submitOptions'][key0]['text'] : null)) + 
          "</a></li>";
      }, function alt() {
        return "";
      });
    },
    'formatting': function formatting(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['formatting'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t" + 
          (guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['spacer'] : null) ?
            "\n\t\t\t\t\t\t<li class=\"spacer\"></li>\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t" + 
              ((guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['desktop'] : null) && ((guard((context != null) ? context['isTopicOrMain'] : null) && guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['main'] : null)) || (!guard((context != null) ? context['isTopicOrMain'] : null) && guard((context != null && context['formatting'] != null && context['formatting'][key0] != null && context['formatting'][key0]['visibility'] != null) ? context['formatting'][key0]['visibility']['reply'] : null)))) ?
                "\n\t\t\t\t\t\t<li tabindex=\"-1\" data-format=\"" + 
                  __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['name'] : null)) + 
                  "\" title=\"" + 
                  __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['title'] : null)) + 
                  "\"><i class=\"" + 
                  __escape(guard((context != null && context['formatting'] != null && context['formatting'][key0] != null) ? context['formatting'][key0]['className'] : null)) + 
                  "\"></i></li>\n\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'tagWhitelist': function tagWhitelist(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagWhitelist'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<li data-tag=\"" + 
          __escape(guard(value)) + 
          "\"><a href=\"#\">" + 
          __escape(guard(value)) + 
          "</a></li>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
