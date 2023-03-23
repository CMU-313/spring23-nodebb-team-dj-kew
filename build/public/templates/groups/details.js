
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
    return "<div component=\"groups/container\" class=\"groups details row\">\n    <div component=\"groups/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:position'] : null)) + 
      ";\">\n        " + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n        <div class=\"controls\">\n            <span class=\"upload\"><i class=\"fa fa-fw fa-4x fa-upload\"></i></span>\n            <span class=\"resize\"><i class=\"fa fa-fw fa-4x fa-arrows\"></i></span>\n            <span class=\"remove\"><i class=\"fa fa-fw fa-4x fa-times\"></i></span>\n        </div>\n        <div class=\"save\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n        <div class=\"indicator\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n        " :
        "") + 
      "\n    </div>\n\n    <div class=\"col-xs-12\">\n        " + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n    " + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n    </div>\n\n    <div class=\"col-lg-4 col-xs-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">\n                    <i class=\"fa fa-list-ul\"></i> [[groups:details.title]]\n                    " + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        "<span class=\"label label-info\">[[groups:details.private]]</span>" :
        "") + 
      "\n                    " + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        "<span class=\"label label-info\">[[groups:details.hidden]]</span>&nbsp;" :
        "") + 
      "\n                </h3>\n            </div>\n            <div class=\"panel-body\">\n                <h1>" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "</h1>\n                <p>" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['descriptionParsed'] : null)) + 
      "</p>\n                " + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n                <div class=\"pull-right\">\n                    <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/groups/" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['nameEncoded'] : null)) + 
          "\" target=\"_blank\" class=\"btn btn-info\"><i class=\"fa fa-gear\"></i> [[user:edit]]</a>\n                </div>\n                " :
        "") + 
      "\n                " + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n                <div class=\"pull-right\">\n                    " + 
          __escape(helper(context, helpers, 'membershipBtn', [guard((context != null) ? context['group'] : null)])) + 
          "&nbsp;\n                </div>\n                " :
        "") + 
      "\n            </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\"><i class=\"fa fa-users\"></i> [[groups:details.members]]</h3>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n    " + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n    <div class=\"col-lg-2\">\n        <button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i></button>\n    </div>\n    " :
        "") + 
      "\n    <div class=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "col-lg-10" :
        "col-lg-12") + 
      "\">\n        <div class=\"input-group\">\n            <input class=\"form-control\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\n            <span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\n        </div>\n    </div>\n</div>\n\n<table component=\"groups/members\" class=\"table table-striped table-hover\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\">\n    <tbody>\n    " + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\n    </tbody>\n</table>\n            </div>\n        </div>\n        " + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title clearfix\">\n                    <i class=\"fa fa-clock-o\"></i> [[groups:details.pending]]\n                    " + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "\n                    <div class=\"btn-group pull-right\">\n                        <button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                            [[global:more]] <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\" data-ajaxify=\"false\" data-action=\"acceptAll\">[[groups:pending.accept_all]]</a></li>\n                            <li><a href=\"#\" data-ajaxify=\"false\" data-action=\"rejectAll\">[[groups:pending.reject_all]]</a></li>\n                        </ul>\n                    </div>\n                    " :
            "") + 
          "\n                </h3>\n            </div>\n            <div class=\"panel-body\">\n                <table component=\"groups/pending\" class=\"table table-striped table-hover\">\n                    " + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "" :
            "\n                    <div class=\"alert alert-info\">[[groups:pending.none]]</div>\n                    ") + 
          "\n                    " + 
          compiled.blocks['group.pending'](helpers, context, guard, iter, helper) + 
          "\n                </table>\n            </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title clearfix\">\n                    <i class=\"fa fa-gift\"></i> [[groups:details.invited]]\n                </h3>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"input-group\">\n                    <input class=\"form-control\" type=\"text\" component=\"groups/members/invite\" placeholder=\"[[groups:invited.search]]\"/>\n                    <span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\n                </div>\n\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" component=\"groups/members/bulk-invite\" placeholder=\"[[groups:bulk-invite-instructions]]\"></textarea>\n                </div>\n\n                <div class=\"form-group clearfix\">\n                    <button class=\"btn btn-default btn-sm pull-right\" component=\"groups/members/bulk-invite-button\">[[groups:bulk-invite]]</button>\n                </div>\n\n                <table component=\"groups/invited\" class=\"table table-striped table-hover\">\n                    " + 
          (guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null) ?
            "" :
            "\n                    <div class=\"alert alert-info\">[[groups:invited.none]]</div>\n                    ") + 
          "\n                    " + 
          compiled.blocks['group.invited'](helpers, context, guard, iter, helper) + 
          "\n                </table>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading pointer\" data-toggle=\"collapse\" data-target=\".options\">\n                <h3 class=\"panel-title\">\n                    <i class=\"fa fa-caret-down pull-right\"></i>\n                    <i class=\"fa fa-cogs\"></i> [[groups:details.owner_options]]\n                </h3>\n            </div>\n\n            <div class=\"panel-body options collapse\">\n                <form component=\"groups/settings\" role=\"form\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">[[groups:details.group_name]]</label>\n                        <input " + 
          (guard((context != null && context['group'] != null) ? context['group']['system'] : null) ?
            "readonly" :
            "") + 
          " class=\"form-control\" name=\"name\" id=\"name\" type=\"text\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
          "\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"name\">[[groups:details.description]]</label>\n                        <textarea class=\"form-control\" name=\"description\" id=\"description\" type=\"text\" maxlength=\"255\">" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['description'] : null)) + 
          "</textarea>\n                    </div>\n\n                    <hr />\n                    <div class=\"form-group\">\n                        <label for=\"memberPostCids\">[[groups:details.member-post-cids]]</label>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <input id=\"memberPostCids\" type=\"text\" class=\"form-control\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['memberPostCids'] : null)) + 
          "\">\n                            </div>\n                            <div class=\"col-md-6 member-post-cids-selector\">\n                                <div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
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
          "\n</ul>\n</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <hr />\n\n                    <div class=\"form-group user-title-option\">\n                        <label for=\"userTitle\">[[groups:details.badge_text]]</label>\n                        <input component=\"groups/userTitleOption\" class=\"form-control\" name=\"userTitle\" id=\"userTitle\" type=\"text\" maxlength=\"40\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['userTitleEscaped'] : null)) + 
          "\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          " />\n                    </div>\n\n                    <div class=\"form-group user-title-option\">\n                        <label>[[groups:details.badge_preview]]</label><br />\n                        <span class=\"label" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " hide") + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) + 
          "; background-color: " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) + 
          "\"><i class=\"fa" + 
          (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
            " " + 
              __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
            "") + 
          "\"></i> <span class=\"label-text\">" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null)) :
            __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null))) + 
          "</span></span>\n\n                        <hr/>\n                        <button component=\"groups/userTitleOption\" type=\"button\" class=\"btn btn-default btn-sm\" data-action=\"icon-select\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          ">[[groups:details.change_icon]]</button>\n                        <div>\n                            <label for=\"labelColor\" class=\"badge-color-label\">[[groups:details.change_label_colour]]</label>\n                            <input component=\"groups/userTitleOption\" type=\"color\" name=\"labelColor\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) :
            "") + 
          "\" />\n                        </div>\n                        <div>\n                            <label for=\"color\" class=\"badge-color-label\">[[groups:details.change_text_colour]]</label>\n                            <input component=\"groups/userTitleOption\" type=\"color\" name=\"textColor\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['textColor'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) :
            "") + 
          "\" />\n                        </div>\n                        <input type=\"hidden\" name=\"icon\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
            "") + 
          "\" />\n\n                        <div id=\"icons\" class=\"hidden\">\n                            <div class=\"icon-container\">\n                                <div class=\"row fa-icons\">\n                                    <i class=\"fa fa-doesnt-exist\"></i>\n                                    <div class=\"icon-container\">\n    <div class=\"form-group\">\n        <label for=\"fa-filter\">Type to filter icons</label>\n        <input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\n    </div>\n    <div class=\"row fa-icons\">\n        <i class=\"fa fa-500px\"></i>\n        <i class=\"fa fa-address-book\"></i>\n        <i class=\"fa fa-address-book-o\"></i>\n        <i class=\"fa fa-address-card\"></i>\n        <i class=\"fa fa-address-card-o\"></i>\n        <i class=\"fa fa-adjust\"></i>\n        <i class=\"fa fa-adn\"></i>\n        <i class=\"fa fa-align-center\"></i>\n        <i class=\"fa fa-align-justify\"></i>\n        <i class=\"fa fa-align-left\"></i>\n        <i class=\"fa fa-align-right\"></i>\n        <i class=\"fa fa-amazon\"></i>\n        <i class=\"fa fa-ambulance\"></i>\n        <i class=\"fa fa-american-sign-language-interpreting\"></i>\n        <i class=\"fa fa-anchor\"></i>\n        <i class=\"fa fa-android\"></i>\n        <i class=\"fa fa-angellist\"></i>\n        <i class=\"fa fa-angle-double-down\"></i>\n        <i class=\"fa fa-angle-double-left\"></i>\n        <i class=\"fa fa-angle-double-right\"></i>\n        <i class=\"fa fa-angle-double-up\"></i>\n        <i class=\"fa fa-angle-down\"></i>\n        <i class=\"fa fa-angle-left\"></i>\n        <i class=\"fa fa-angle-right\"></i>\n        <i class=\"fa fa-angle-up\"></i>\n        <i class=\"fa fa-apple\"></i>\n        <i class=\"fa fa-archive\"></i>\n        <i class=\"fa fa-area-chart\"></i>\n        <i class=\"fa fa-arrow-circle-down\"></i>\n        <i class=\"fa fa-arrow-circle-left\"></i>\n        <i class=\"fa fa-arrow-circle-o-down\"></i>\n        <i class=\"fa fa-arrow-circle-o-left\"></i>\n        <i class=\"fa fa-arrow-circle-o-right\"></i>\n        <i class=\"fa fa-arrow-circle-o-up\"></i>\n        <i class=\"fa fa-arrow-circle-right\"></i>\n        <i class=\"fa fa-arrow-circle-up\"></i>\n        <i class=\"fa fa-arrow-down\"></i>\n        <i class=\"fa fa-arrow-left\"></i>\n        <i class=\"fa fa-arrow-right\"></i>\n        <i class=\"fa fa-arrow-up\"></i>\n        <i class=\"fa fa-arrows\"></i>\n        <i class=\"fa fa-arrows-alt\"></i>\n        <i class=\"fa fa-arrows-h\"></i>\n        <i class=\"fa fa-arrows-v\"></i>\n        <i class=\"fa fa-asl-interpreting\"></i>\n        <i class=\"fa fa-assistive-listening-systems\"></i>\n        <i class=\"fa fa-asterisk\"></i>\n        <i class=\"fa fa-at\"></i>\n        <i class=\"fa fa-audio-description\"></i>\n        <i class=\"fa fa-automobile\"></i>\n        <i class=\"fa fa-backward\"></i>\n        <i class=\"fa fa-balance-scale\"></i>\n        <i class=\"fa fa-ban\"></i>\n        <i class=\"fa fa-bandcamp\"></i>\n        <i class=\"fa fa-bank\"></i>\n        <i class=\"fa fa-bar-chart\"></i>\n        <i class=\"fa fa-bar-chart-o\"></i>\n        <i class=\"fa fa-barcode\"></i>\n        <i class=\"fa fa-bars\"></i>\n        <i class=\"fa fa-bath\"></i>\n        <i class=\"fa fa-bathtub\"></i>\n        <i class=\"fa fa-battery\"></i>\n        <i class=\"fa fa-battery-0\"></i>\n        <i class=\"fa fa-battery-1\"></i>\n        <i class=\"fa fa-battery-2\"></i>\n        <i class=\"fa fa-battery-3\"></i>\n        <i class=\"fa fa-battery-4\"></i>\n        <i class=\"fa fa-battery-empty\"></i>\n        <i class=\"fa fa-battery-full\"></i>\n        <i class=\"fa fa-battery-half\"></i>\n        <i class=\"fa fa-battery-quarter\"></i>\n        <i class=\"fa fa-battery-three-quarters\"></i>\n        <i class=\"fa fa-bed\"></i>\n        <i class=\"fa fa-beer\"></i>\n        <i class=\"fa fa-behance\"></i>\n        <i class=\"fa fa-behance-square\"></i>\n        <i class=\"fa fa-bell\"></i>\n        <i class=\"fa fa-bell-o\"></i>\n        <i class=\"fa fa-bell-slash\"></i>\n        <i class=\"fa fa-bell-slash-o\"></i>\n        <i class=\"fa fa-bicycle\"></i>\n        <i class=\"fa fa-binoculars\"></i>\n        <i class=\"fa fa-birthday-cake\"></i>\n        <i class=\"fa fa-bitbucket\"></i>\n        <i class=\"fa fa-bitbucket-square\"></i>\n        <i class=\"fa fa-bitcoin\"></i>\n        <i class=\"fa fa-black-tie\"></i>\n        <i class=\"fa fa-blind\"></i>\n        <i class=\"fa fa-bluetooth\"></i>\n        <i class=\"fa fa-bluetooth-b\"></i>\n        <i class=\"fa fa-bold\"></i>\n        <i class=\"fa fa-bolt\"></i>\n        <i class=\"fa fa-bomb\"></i>\n        <i class=\"fa fa-book\"></i>\n        <i class=\"fa fa-bookmark\"></i>\n        <i class=\"fa fa-bookmark-o\"></i>\n        <i class=\"fa fa-braille\"></i>\n        <i class=\"fa fa-briefcase\"></i>\n        <i class=\"fa fa-btc\"></i>\n        <i class=\"fa fa-bug\"></i>\n        <i class=\"fa fa-building\"></i>\n        <i class=\"fa fa-building-o\"></i>\n        <i class=\"fa fa-bullhorn\"></i>\n        <i class=\"fa fa-bullseye\"></i>\n        <i class=\"fa fa-bus\"></i>\n        <i class=\"fa fa-buysellads\"></i>\n        <i class=\"fa fa-cab\"></i>\n        <i class=\"fa fa-calculator\"></i>\n        <i class=\"fa fa-calendar\"></i>\n        <i class=\"fa fa-calendar-check-o\"></i>\n        <i class=\"fa fa-calendar-minus-o\"></i>\n        <i class=\"fa fa-calendar-o\"></i>\n        <i class=\"fa fa-calendar-plus-o\"></i>\n        <i class=\"fa fa-calendar-times-o\"></i>\n        <i class=\"fa fa-camera\"></i>\n        <i class=\"fa fa-camera-retro\"></i>\n        <i class=\"fa fa-car\"></i>\n        <i class=\"fa fa-caret-down\"></i>\n        <i class=\"fa fa-caret-left\"></i>\n        <i class=\"fa fa-caret-right\"></i>\n        <i class=\"fa fa-caret-square-o-down\"></i>\n        <i class=\"fa fa-caret-square-o-left\"></i>\n        <i class=\"fa fa-caret-square-o-right\"></i>\n        <i class=\"fa fa-caret-square-o-up\"></i>\n        <i class=\"fa fa-caret-up\"></i>\n        <i class=\"fa fa-cart-arrow-down\"></i>\n        <i class=\"fa fa-cart-plus\"></i>\n        <i class=\"fa fa-cc\"></i>\n        <i class=\"fa fa-cc-amex\"></i>\n        <i class=\"fa fa-cc-diners-club\"></i>\n        <i class=\"fa fa-cc-discover\"></i>\n        <i class=\"fa fa-cc-jcb\"></i>\n        <i class=\"fa fa-cc-mastercard\"></i>\n        <i class=\"fa fa-cc-paypal\"></i>\n        <i class=\"fa fa-cc-stripe\"></i>\n        <i class=\"fa fa-cc-visa\"></i>\n        <i class=\"fa fa-certificate\"></i>\n        <i class=\"fa fa-chain\"></i>\n        <i class=\"fa fa-chain-broken\"></i>\n        <i class=\"fa fa-check\"></i>\n        <i class=\"fa fa-check-circle\"></i>\n        <i class=\"fa fa-check-circle-o\"></i>\n        <i class=\"fa fa-check-square\"></i>\n        <i class=\"fa fa-check-square-o\"></i>\n        <i class=\"fa fa-chevron-circle-down\"></i>\n        <i class=\"fa fa-chevron-circle-left\"></i>\n        <i class=\"fa fa-chevron-circle-right\"></i>\n        <i class=\"fa fa-chevron-circle-up\"></i>\n        <i class=\"fa fa-chevron-down\"></i>\n        <i class=\"fa fa-chevron-left\"></i>\n        <i class=\"fa fa-chevron-right\"></i>\n        <i class=\"fa fa-chevron-up\"></i>\n        <i class=\"fa fa-child\"></i>\n        <i class=\"fa fa-chrome\"></i>\n        <i class=\"fa fa-circle\"></i>\n        <i class=\"fa fa-circle-o\"></i>\n        <i class=\"fa fa-circle-o-notch\"></i>\n        <i class=\"fa fa-circle-thin\"></i>\n        <i class=\"fa fa-clipboard\"></i>\n        <i class=\"fa fa-clock-o\"></i>\n        <i class=\"fa fa-clone\"></i>\n        <i class=\"fa fa-close\"></i>\n        <i class=\"fa fa-cloud\"></i>\n        <i class=\"fa fa-cloud-download\"></i>\n        <i class=\"fa fa-cloud-upload\"></i>\n        <i class=\"fa fa-cny\"></i>\n        <i class=\"fa fa-code\"></i>\n        <i class=\"fa fa-code-fork\"></i>\n        <i class=\"fa fa-codepen\"></i>\n        <i class=\"fa fa-codiepie\"></i>\n        <i class=\"fa fa-coffee\"></i>\n        <i class=\"fa fa-cog\"></i>\n        <i class=\"fa fa-cogs\"></i>\n        <i class=\"fa fa-columns\"></i>\n        <i class=\"fa fa-comment\"></i>\n        <i class=\"fa fa-comment-o\"></i>\n        <i class=\"fa fa-commenting\"></i>\n        <i class=\"fa fa-commenting-o\"></i>\n        <i class=\"fa fa-comments\"></i>\n        <i class=\"fa fa-comments-o\"></i>\n        <i class=\"fa fa-compass\"></i>\n        <i class=\"fa fa-compress\"></i>\n        <i class=\"fa fa-connectdevelop\"></i>\n        <i class=\"fa fa-contao\"></i>\n        <i class=\"fa fa-copy\"></i>\n        <i class=\"fa fa-copyright\"></i>\n        <i class=\"fa fa-creative-commons\"></i>\n        <i class=\"fa fa-credit-card\"></i>\n        <i class=\"fa fa-credit-card-alt\"></i>\n        <i class=\"fa fa-crop\"></i>\n        <i class=\"fa fa-crosshairs\"></i>\n        <i class=\"fa fa-css3\"></i>\n        <i class=\"fa fa-cube\"></i>\n        <i class=\"fa fa-cubes\"></i>\n        <i class=\"fa fa-cut\"></i>\n        <i class=\"fa fa-cutlery\"></i>\n        <i class=\"fa fa-dashboard\"></i>\n        <i class=\"fa fa-dashcube\"></i>\n        <i class=\"fa fa-database\"></i>\n        <i class=\"fa fa-deaf\"></i>\n        <i class=\"fa fa-deafness\"></i>\n        <i class=\"fa fa-dedent\"></i>\n        <i class=\"fa fa-delicious\"></i>\n        <i class=\"fa fa-desktop\"></i>\n        <i class=\"fa fa-deviantart\"></i>\n        <i class=\"fa fa-diamond\"></i>\n        <i class=\"fa fa-digg\"></i>\n        <i class=\"fa fa-dollar\"></i>\n        <i class=\"fa fa-dot-circle-o\"></i>\n        <i class=\"fa fa-download\"></i>\n        <i class=\"fa fa-dribbble\"></i>\n        <i class=\"fa fa-drivers-license\"></i>\n        <i class=\"fa fa-drivers-license-o\"></i>\n        <i class=\"fa fa-dropbox\"></i>\n        <i class=\"fa fa-drupal\"></i>\n        <i class=\"fa fa-edge\"></i>\n        <i class=\"fa fa-edit\"></i>\n        <i class=\"fa fa-eercast\"></i>\n        <i class=\"fa fa-eject\"></i>\n        <i class=\"fa fa-ellipsis-h\"></i>\n        <i class=\"fa fa-ellipsis-v\"></i>\n        <i class=\"fa fa-empire\"></i>\n        <i class=\"fa fa-envelope\"></i>\n        <i class=\"fa fa-envelope-o\"></i>\n        <i class=\"fa fa-envelope-open\"></i>\n        <i class=\"fa fa-envelope-open-o\"></i>\n        <i class=\"fa fa-envelope-square\"></i>\n        <i class=\"fa fa-envira\"></i>\n        <i class=\"fa fa-eraser\"></i>\n        <i class=\"fa fa-etsy\"></i>\n        <i class=\"fa fa-eur\"></i>\n        <i class=\"fa fa-euro\"></i>\n        <i class=\"fa fa-exchange\"></i>\n        <i class=\"fa fa-exclamation\"></i>\n        <i class=\"fa fa-exclamation-circle\"></i>\n        <i class=\"fa fa-exclamation-triangle\"></i>\n        <i class=\"fa fa-expand\"></i>\n        <i class=\"fa fa-expeditedssl\"></i>\n        <i class=\"fa fa-external-link\"></i>\n        <i class=\"fa fa-external-link-square\"></i>\n        <i class=\"fa fa-eye\"></i>\n        <i class=\"fa fa-eye-slash\"></i>\n        <i class=\"fa fa-eyedropper\"></i>\n        <i class=\"fa fa-fa\"></i>\n        <i class=\"fa fa-facebook\"></i>\n        <i class=\"fa fa-facebook-f\"></i>\n        <i class=\"fa fa-facebook-official\"></i>\n        <i class=\"fa fa-facebook-square\"></i>\n        <i class=\"fa fa-fast-backward\"></i>\n        <i class=\"fa fa-fast-forward\"></i>\n        <i class=\"fa fa-fax\"></i>\n        <i class=\"fa fa-feed\"></i>\n        <i class=\"fa fa-female\"></i>\n        <i class=\"fa fa-fighter-jet\"></i>\n        <i class=\"fa fa-file\"></i>\n        <i class=\"fa fa-file-archive-o\"></i>\n        <i class=\"fa fa-file-audio-o\"></i>\n        <i class=\"fa fa-file-code-o\"></i>\n        <i class=\"fa fa-file-excel-o\"></i>\n        <i class=\"fa fa-file-image-o\"></i>\n        <i class=\"fa fa-file-movie-o\"></i>\n        <i class=\"fa fa-file-o\"></i>\n        <i class=\"fa fa-file-pdf-o\"></i>\n        <i class=\"fa fa-file-photo-o\"></i>\n        <i class=\"fa fa-file-picture-o\"></i>\n        <i class=\"fa fa-file-powerpoint-o\"></i>\n        <i class=\"fa fa-file-sound-o\"></i>\n        <i class=\"fa fa-file-text\"></i>\n        <i class=\"fa fa-file-text-o\"></i>\n        <i class=\"fa fa-file-video-o\"></i>\n        <i class=\"fa fa-file-word-o\"></i>\n        <i class=\"fa fa-file-zip-o\"></i>\n        <i class=\"fa fa-files-o\"></i>\n        <i class=\"fa fa-film\"></i>\n        <i class=\"fa fa-filter\"></i>\n        <i class=\"fa fa-fire\"></i>\n        <i class=\"fa fa-fire-extinguisher\"></i>\n        <i class=\"fa fa-firefox\"></i>\n        <i class=\"fa fa-first-order\"></i>\n        <i class=\"fa fa-flag\"></i>\n        <i class=\"fa fa-flag-checkered\"></i>\n        <i class=\"fa fa-flag-o\"></i>\n        <i class=\"fa fa-flash\"></i>\n        <i class=\"fa fa-flask\"></i>\n        <i class=\"fa fa-flickr\"></i>\n        <i class=\"fa fa-floppy-o\"></i>\n        <i class=\"fa fa-folder\"></i>\n        <i class=\"fa fa-folder-o\"></i>\n        <i class=\"fa fa-folder-open\"></i>\n        <i class=\"fa fa-folder-open-o\"></i>\n        <i class=\"fa fa-font\"></i>\n        <i class=\"fa fa-font-awesome\"></i>\n        <i class=\"fa fa-fonticons\"></i>\n        <i class=\"fa fa-fort-awesome\"></i>\n        <i class=\"fa fa-forumbee\"></i>\n        <i class=\"fa fa-forward\"></i>\n        <i class=\"fa fa-foursquare\"></i>\n        <i class=\"fa fa-free-code-camp\"></i>\n        <i class=\"fa fa-frown-o\"></i>\n        <i class=\"fa fa-futbol-o\"></i>\n        <i class=\"fa fa-gamepad\"></i>\n        <i class=\"fa fa-gavel\"></i>\n        <i class=\"fa fa-gbp\"></i>\n        <i class=\"fa fa-ge\"></i>\n        <i class=\"fa fa-gear\"></i>\n        <i class=\"fa fa-gears\"></i>\n        <i class=\"fa fa-genderless\"></i>\n        <i class=\"fa fa-get-pocket\"></i>\n        <i class=\"fa fa-gg\"></i>\n        <i class=\"fa fa-gg-circle\"></i>\n        <i class=\"fa fa-gift\"></i>\n        <i class=\"fa fa-git\"></i>\n        <i class=\"fa fa-git-square\"></i>\n        <i class=\"fa fa-github\"></i>\n        <i class=\"fa fa-github-alt\"></i>\n        <i class=\"fa fa-github-square\"></i>\n        <i class=\"fa fa-gitlab\"></i>\n        <i class=\"fa fa-gittip\"></i>\n        <i class=\"fa fa-glass\"></i>\n        <i class=\"fa fa-glide\"></i>\n        <i class=\"fa fa-glide-g\"></i>\n        <i class=\"fa fa-globe\"></i>\n        <i class=\"fa fa-google\"></i>\n        <i class=\"fa fa-google-plus\"></i>\n        <i class=\"fa fa-google-plus-circle\"></i>\n        <i class=\"fa fa-google-plus-official\"></i>\n        <i class=\"fa fa-google-plus-square\"></i>\n        <i class=\"fa fa-google-wallet\"></i>\n        <i class=\"fa fa-graduation-cap\"></i>\n        <i class=\"fa fa-gratipay\"></i>\n        <i class=\"fa fa-grav\"></i>\n        <i class=\"fa fa-group\"></i>\n        <i class=\"fa fa-h-square\"></i>\n        <i class=\"fa fa-hacker-news\"></i>\n        <i class=\"fa fa-hand-grab-o\"></i>\n        <i class=\"fa fa-hand-lizard-o\"></i>\n        <i class=\"fa fa-hand-o-down\"></i>\n        <i class=\"fa fa-hand-o-left\"></i>\n        <i class=\"fa fa-hand-o-right\"></i>\n        <i class=\"fa fa-hand-o-up\"></i>\n        <i class=\"fa fa-hand-paper-o\"></i>\n        <i class=\"fa fa-hand-peace-o\"></i>\n        <i class=\"fa fa-hand-pointer-o\"></i>\n        <i class=\"fa fa-hand-rock-o\"></i>\n        <i class=\"fa fa-hand-scissors-o\"></i>\n        <i class=\"fa fa-hand-spock-o\"></i>\n        <i class=\"fa fa-hand-stop-o\"></i>\n        <i class=\"fa fa-handshake-o\"></i>\n        <i class=\"fa fa-hard-of-hearing\"></i>\n        <i class=\"fa fa-hashtag\"></i>\n        <i class=\"fa fa-hdd-o\"></i>\n        <i class=\"fa fa-header\"></i>\n        <i class=\"fa fa-headphones\"></i>\n        <i class=\"fa fa-heart\"></i>\n        <i class=\"fa fa-heart-o\"></i>\n        <i class=\"fa fa-heartbeat\"></i>\n        <i class=\"fa fa-history\"></i>\n        <i class=\"fa fa-home\"></i>\n        <i class=\"fa fa-hospital-o\"></i>\n        <i class=\"fa fa-hotel\"></i>\n        <i class=\"fa fa-hourglass\"></i>\n        <i class=\"fa fa-hourglass-1\"></i>\n        <i class=\"fa fa-hourglass-2\"></i>\n        <i class=\"fa fa-hourglass-3\"></i>\n        <i class=\"fa fa-hourglass-end\"></i>\n        <i class=\"fa fa-hourglass-half\"></i>\n        <i class=\"fa fa-hourglass-o\"></i>\n        <i class=\"fa fa-hourglass-start\"></i>\n        <i class=\"fa fa-houzz\"></i>\n        <i class=\"fa fa-html5\"></i>\n        <i class=\"fa fa-i-cursor\"></i>\n        <i class=\"fa fa-id-badge\"></i>\n        <i class=\"fa fa-id-card\"></i>\n        <i class=\"fa fa-id-card-o\"></i>\n        <i class=\"fa fa-ils\"></i>\n        <i class=\"fa fa-image\"></i>\n        <i class=\"fa fa-imdb\"></i>\n        <i class=\"fa fa-inbox\"></i>\n        <i class=\"fa fa-indent\"></i>\n        <i class=\"fa fa-industry\"></i>\n        <i class=\"fa fa-info\"></i>\n        <i class=\"fa fa-info-circle\"></i>\n        <i class=\"fa fa-inr\"></i>\n        <i class=\"fa fa-instagram\"></i>\n        <i class=\"fa fa-institution\"></i>\n        <i class=\"fa fa-internet-explorer\"></i>\n        <i class=\"fa fa-intersex\"></i>\n        <i class=\"fa fa-ioxhost\"></i>\n        <i class=\"fa fa-italic\"></i>\n        <i class=\"fa fa-joomla\"></i>\n        <i class=\"fa fa-jpy\"></i>\n        <i class=\"fa fa-jsfiddle\"></i>\n        <i class=\"fa fa-key\"></i>\n        <i class=\"fa fa-keyboard-o\"></i>\n        <i class=\"fa fa-krw\"></i>\n        <i class=\"fa fa-language\"></i>\n        <i class=\"fa fa-laptop\"></i>\n        <i class=\"fa fa-lastfm\"></i>\n        <i class=\"fa fa-lastfm-square\"></i>\n        <i class=\"fa fa-leaf\"></i>\n        <i class=\"fa fa-leanpub\"></i>\n        <i class=\"fa fa-legal\"></i>\n        <i class=\"fa fa-lemon-o\"></i>\n        <i class=\"fa fa-level-down\"></i>\n        <i class=\"fa fa-level-up\"></i>\n        <i class=\"fa fa-life-bouy\"></i>\n        <i class=\"fa fa-life-buoy\"></i>\n        <i class=\"fa fa-life-ring\"></i>\n        <i class=\"fa fa-life-saver\"></i>\n        <i class=\"fa fa-lightbulb-o\"></i>\n        <i class=\"fa fa-line-chart\"></i>\n        <i class=\"fa fa-link\"></i>\n        <i class=\"fa fa-linkedin\"></i>\n        <i class=\"fa fa-linkedin-square\"></i>\n        <i class=\"fa fa-linode\"></i>\n        <i class=\"fa fa-linux\"></i>\n        <i class=\"fa fa-list\"></i>\n        <i class=\"fa fa-list-alt\"></i>\n        <i class=\"fa fa-list-ol\"></i>\n        <i class=\"fa fa-list-ul\"></i>\n        <i class=\"fa fa-location-arrow\"></i>\n        <i class=\"fa fa-lock\"></i>\n        <i class=\"fa fa-long-arrow-down\"></i>\n        <i class=\"fa fa-long-arrow-left\"></i>\n        <i class=\"fa fa-long-arrow-right\"></i>\n        <i class=\"fa fa-long-arrow-up\"></i>\n        <i class=\"fa fa-low-vision\"></i>\n        <i class=\"fa fa-magic\"></i>\n        <i class=\"fa fa-magnet\"></i>\n        <i class=\"fa fa-mail-forward\"></i>\n        <i class=\"fa fa-mail-reply\"></i>\n        <i class=\"fa fa-mail-reply-all\"></i>\n        <i class=\"fa fa-male\"></i>\n        <i class=\"fa fa-map\"></i>\n        <i class=\"fa fa-map-marker\"></i>\n        <i class=\"fa fa-map-o\"></i>\n        <i class=\"fa fa-map-pin\"></i>\n        <i class=\"fa fa-map-signs\"></i>\n        <i class=\"fa fa-mars\"></i>\n        <i class=\"fa fa-mars-double\"></i>\n        <i class=\"fa fa-mars-stroke\"></i>\n        <i class=\"fa fa-mars-stroke-h\"></i>\n        <i class=\"fa fa-mars-stroke-v\"></i>\n        <i class=\"fa fa-maxcdn\"></i>\n        <i class=\"fa fa-meanpath\"></i>\n        <i class=\"fa fa-medium\"></i>\n        <i class=\"fa fa-medkit\"></i>\n        <i class=\"fa fa-meetup\"></i>\n        <i class=\"fa fa-meh-o\"></i>\n        <i class=\"fa fa-mercury\"></i>\n        <i class=\"fa fa-microchip\"></i>\n        <i class=\"fa fa-microphone\"></i>\n        <i class=\"fa fa-microphone-slash\"></i>\n        <i class=\"fa fa-minus\"></i>\n        <i class=\"fa fa-minus-circle\"></i>\n        <i class=\"fa fa-minus-square\"></i>\n        <i class=\"fa fa-minus-square-o\"></i>\n        <i class=\"fa fa-mixcloud\"></i>\n        <i class=\"fa fa-mobile\"></i>\n        <i class=\"fa fa-mobile-phone\"></i>\n        <i class=\"fa fa-modx\"></i>\n        <i class=\"fa fa-money\"></i>\n        <i class=\"fa fa-moon-o\"></i>\n        <i class=\"fa fa-mortar-board\"></i>\n        <i class=\"fa fa-motorcycle\"></i>\n        <i class=\"fa fa-mouse-pointer\"></i>\n        <i class=\"fa fa-music\"></i>\n        <i class=\"fa fa-navicon\"></i>\n        <i class=\"fa fa-neuter\"></i>\n        <i class=\"fa fa-newspaper-o\"></i>\n        <i class=\"fa fa-object-group\"></i>\n        <i class=\"fa fa-object-ungroup\"></i>\n        <i class=\"fa fa-odnoklassniki\"></i>\n        <i class=\"fa fa-odnoklassniki-square\"></i>\n        <i class=\"fa fa-opencart\"></i>\n        <i class=\"fa fa-openid\"></i>\n        <i class=\"fa fa-opera\"></i>\n        <i class=\"fa fa-optin-monster\"></i>\n        <i class=\"fa fa-outdent\"></i>\n        <i class=\"fa fa-pagelines\"></i>\n        <i class=\"fa fa-paint-brush\"></i>\n        <i class=\"fa fa-paper-plane\"></i>\n        <i class=\"fa fa-paper-plane-o\"></i>\n        <i class=\"fa fa-paperclip\"></i>\n        <i class=\"fa fa-paragraph\"></i>\n        <i class=\"fa fa-paste\"></i>\n        <i class=\"fa fa-pause\"></i>\n        <i class=\"fa fa-pause-circle\"></i>\n        <i class=\"fa fa-pause-circle-o\"></i>\n        <i class=\"fa fa-paw\"></i>\n        <i class=\"fa fa-paypal\"></i>\n        <i class=\"fa fa-pencil\"></i>\n        <i class=\"fa fa-pencil-square\"></i>\n        <i class=\"fa fa-pencil-square-o\"></i>\n        <i class=\"fa fa-percent\"></i>\n        <i class=\"fa fa-phone\"></i>\n        <i class=\"fa fa-phone-square\"></i>\n        <i class=\"fa fa-photo\"></i>\n        <i class=\"fa fa-picture-o\"></i>\n        <i class=\"fa fa-pie-chart\"></i>\n        <i class=\"fa fa-pied-piper\"></i>\n        <i class=\"fa fa-pied-piper-alt\"></i>\n        <i class=\"fa fa-pied-piper-pp\"></i>\n        <i class=\"fa fa-pinterest\"></i>\n        <i class=\"fa fa-pinterest-p\"></i>\n        <i class=\"fa fa-pinterest-square\"></i>\n        <i class=\"fa fa-plane\"></i>\n        <i class=\"fa fa-play\"></i>\n        <i class=\"fa fa-play-circle\"></i>\n        <i class=\"fa fa-play-circle-o\"></i>\n        <i class=\"fa fa-plug\"></i>\n        <i class=\"fa fa-plus\"></i>\n        <i class=\"fa fa-plus-circle\"></i>\n        <i class=\"fa fa-plus-square\"></i>\n        <i class=\"fa fa-plus-square-o\"></i>\n        <i class=\"fa fa-podcast\"></i>\n        <i class=\"fa fa-power-off\"></i>\n        <i class=\"fa fa-print\"></i>\n        <i class=\"fa fa-product-hunt\"></i>\n        <i class=\"fa fa-puzzle-piece\"></i>\n        <i class=\"fa fa-qq\"></i>\n        <i class=\"fa fa-qrcode\"></i>\n        <i class=\"fa fa-question\"></i>\n        <i class=\"fa fa-question-circle\"></i>\n        <i class=\"fa fa-question-circle-o\"></i>\n        <i class=\"fa fa-quora\"></i>\n        <i class=\"fa fa-quote-left\"></i>\n        <i class=\"fa fa-quote-right\"></i>\n        <i class=\"fa fa-ra\"></i>\n        <i class=\"fa fa-random\"></i>\n        <i class=\"fa fa-ravelry\"></i>\n        <i class=\"fa fa-rebel\"></i>\n        <i class=\"fa fa-recycle\"></i>\n        <i class=\"fa fa-reddit\"></i>\n        <i class=\"fa fa-reddit-alien\"></i>\n        <i class=\"fa fa-reddit-square\"></i>\n        <i class=\"fa fa-refresh\"></i>\n        <i class=\"fa fa-registered\"></i>\n        <i class=\"fa fa-remove\"></i>\n        <i class=\"fa fa-renren\"></i>\n        <i class=\"fa fa-reorder\"></i>\n        <i class=\"fa fa-repeat\"></i>\n        <i class=\"fa fa-reply\"></i>\n        <i class=\"fa fa-reply-all\"></i>\n        <i class=\"fa fa-resistance\"></i>\n        <i class=\"fa fa-retweet\"></i>\n        <i class=\"fa fa-rmb\"></i>\n        <i class=\"fa fa-road\"></i>\n        <i class=\"fa fa-rocket\"></i>\n        <i class=\"fa fa-rotate-left\"></i>\n        <i class=\"fa fa-rotate-right\"></i>\n        <i class=\"fa fa-rouble\"></i>\n        <i class=\"fa fa-rss\"></i>\n        <i class=\"fa fa-rss-square\"></i>\n        <i class=\"fa fa-rub\"></i>\n        <i class=\"fa fa-ruble\"></i>\n        <i class=\"fa fa-rupee\"></i>\n        <i class=\"fa fa-s15\"></i>\n        <i class=\"fa fa-safari\"></i>\n        <i class=\"fa fa-save\"></i>\n        <i class=\"fa fa-scissors\"></i>\n        <i class=\"fa fa-scribd\"></i>\n        <i class=\"fa fa-search\"></i>\n        <i class=\"fa fa-search-minus\"></i>\n        <i class=\"fa fa-search-plus\"></i>\n        <i class=\"fa fa-sellsy\"></i>\n        <i class=\"fa fa-send\"></i>\n        <i class=\"fa fa-send-o\"></i>\n        <i class=\"fa fa-server\"></i>\n        <i class=\"fa fa-share\"></i>\n        <i class=\"fa fa-share-alt\"></i>\n        <i class=\"fa fa-share-alt-square\"></i>\n        <i class=\"fa fa-share-square\"></i>\n        <i class=\"fa fa-share-square-o\"></i>\n        <i class=\"fa fa-shekel\"></i>\n        <i class=\"fa fa-sheqel\"></i>\n        <i class=\"fa fa-shield\"></i>\n        <i class=\"fa fa-ship\"></i>\n        <i class=\"fa fa-shirtsinbulk\"></i>\n        <i class=\"fa fa-shopping-bag\"></i>\n        <i class=\"fa fa-shopping-basket\"></i>\n        <i class=\"fa fa-shopping-cart\"></i>\n        <i class=\"fa fa-shower\"></i>\n        <i class=\"fa fa-sign-in\"></i>\n        <i class=\"fa fa-sign-language\"></i>\n        <i class=\"fa fa-sign-out\"></i>\n        <i class=\"fa fa-signal\"></i>\n        <i class=\"fa fa-signing\"></i>\n        <i class=\"fa fa-simplybuilt\"></i>\n        <i class=\"fa fa-sitemap\"></i>\n        <i class=\"fa fa-skyatlas\"></i>\n        <i class=\"fa fa-skype\"></i>\n        <i class=\"fa fa-slack\"></i>\n        <i class=\"fa fa-sliders\"></i>\n        <i class=\"fa fa-slideshare\"></i>\n        <i class=\"fa fa-smile-o\"></i>\n        <i class=\"fa fa-snapchat\"></i>\n        <i class=\"fa fa-snapchat-ghost\"></i>\n        <i class=\"fa fa-snapchat-square\"></i>\n        <i class=\"fa fa-snowflake-o\"></i>\n        <i class=\"fa fa-soccer-ball-o\"></i>\n        <i class=\"fa fa-sort\"></i>\n        <i class=\"fa fa-sort-alpha-asc\"></i>\n        <i class=\"fa fa-sort-alpha-desc\"></i>\n        <i class=\"fa fa-sort-amount-asc\"></i>\n        <i class=\"fa fa-sort-amount-desc\"></i>\n        <i class=\"fa fa-sort-asc\"></i>\n        <i class=\"fa fa-sort-desc\"></i>\n        <i class=\"fa fa-sort-down\"></i>\n        <i class=\"fa fa-sort-numeric-asc\"></i>\n        <i class=\"fa fa-sort-numeric-desc\"></i>\n        <i class=\"fa fa-sort-up\"></i>\n        <i class=\"fa fa-soundcloud\"></i>\n        <i class=\"fa fa-space-shuttle\"></i>\n        <i class=\"fa fa-spinner\"></i>\n        <i class=\"fa fa-spoon\"></i>\n        <i class=\"fa fa-spotify\"></i>\n        <i class=\"fa fa-square\"></i>\n        <i class=\"fa fa-square-o\"></i>\n        <i class=\"fa fa-stack-exchange\"></i>\n        <i class=\"fa fa-stack-overflow\"></i>\n        <i class=\"fa fa-star\"></i>\n        <i class=\"fa fa-star-half\"></i>\n        <i class=\"fa fa-star-half-empty\"></i>\n        <i class=\"fa fa-star-half-full\"></i>\n        <i class=\"fa fa-star-half-o\"></i>\n        <i class=\"fa fa-star-o\"></i>\n        <i class=\"fa fa-steam\"></i>\n        <i class=\"fa fa-steam-square\"></i>\n        <i class=\"fa fa-step-backward\"></i>\n        <i class=\"fa fa-step-forward\"></i>\n        <i class=\"fa fa-stethoscope\"></i>\n        <i class=\"fa fa-sticky-note\"></i>\n        <i class=\"fa fa-sticky-note-o\"></i>\n        <i class=\"fa fa-stop\"></i>\n        <i class=\"fa fa-stop-circle\"></i>\n        <i class=\"fa fa-stop-circle-o\"></i>\n        <i class=\"fa fa-street-view\"></i>\n        <i class=\"fa fa-strikethrough\"></i>\n        <i class=\"fa fa-stumbleupon\"></i>\n        <i class=\"fa fa-stumbleupon-circle\"></i>\n        <i class=\"fa fa-subscript\"></i>\n        <i class=\"fa fa-subway\"></i>\n        <i class=\"fa fa-suitcase\"></i>\n        <i class=\"fa fa-sun-o\"></i>\n        <i class=\"fa fa-superpowers\"></i>\n        <i class=\"fa fa-superscript\"></i>\n        <i class=\"fa fa-support\"></i>\n        <i class=\"fa fa-table\"></i>\n        <i class=\"fa fa-tablet\"></i>\n        <i class=\"fa fa-tachometer\"></i>\n        <i class=\"fa fa-tag\"></i>\n        <i class=\"fa fa-tags\"></i>\n        <i class=\"fa fa-tasks\"></i>\n        <i class=\"fa fa-taxi\"></i>\n        <i class=\"fa fa-telegram\"></i>\n        <i class=\"fa fa-television\"></i>\n        <i class=\"fa fa-tencent-weibo\"></i>\n        <i class=\"fa fa-terminal\"></i>\n        <i class=\"fa fa-text-height\"></i>\n        <i class=\"fa fa-text-width\"></i>\n        <i class=\"fa fa-th\"></i>\n        <i class=\"fa fa-th-large\"></i>\n        <i class=\"fa fa-th-list\"></i>\n        <i class=\"fa fa-themeisle\"></i>\n        <i class=\"fa fa-thermometer\"></i>\n        <i class=\"fa fa-thermometer-0\"></i>\n        <i class=\"fa fa-thermometer-1\"></i>\n        <i class=\"fa fa-thermometer-2\"></i>\n        <i class=\"fa fa-thermometer-3\"></i>\n        <i class=\"fa fa-thermometer-4\"></i>\n        <i class=\"fa fa-thermometer-empty\"></i>\n        <i class=\"fa fa-thermometer-full\"></i>\n        <i class=\"fa fa-thermometer-half\"></i>\n        <i class=\"fa fa-thermometer-quarter\"></i>\n        <i class=\"fa fa-thermometer-three-quarters\"></i>\n        <i class=\"fa fa-thumb-tack\"></i>\n        <i class=\"fa fa-thumbs-down\"></i>\n        <i class=\"fa fa-thumbs-o-down\"></i>\n        <i class=\"fa fa-thumbs-o-up\"></i>\n        <i class=\"fa fa-thumbs-up\"></i>\n        <i class=\"fa fa-ticket\"></i>\n        <i class=\"fa fa-times\"></i>\n        <i class=\"fa fa-times-circle\"></i>\n        <i class=\"fa fa-times-circle-o\"></i>\n        <i class=\"fa fa-times-rectangle\"></i>\n        <i class=\"fa fa-times-rectangle-o\"></i>\n        <i class=\"fa fa-tint\"></i>\n        <i class=\"fa fa-toggle-down\"></i>\n        <i class=\"fa fa-toggle-left\"></i>\n        <i class=\"fa fa-toggle-off\"></i>\n        <i class=\"fa fa-toggle-on\"></i>\n        <i class=\"fa fa-toggle-right\"></i>\n        <i class=\"fa fa-toggle-up\"></i>\n        <i class=\"fa fa-trademark\"></i>\n        <i class=\"fa fa-train\"></i>\n        <i class=\"fa fa-transgender\"></i>\n        <i class=\"fa fa-transgender-alt\"></i>\n        <i class=\"fa fa-trash\"></i>\n        <i class=\"fa fa-trash-o\"></i>\n        <i class=\"fa fa-tree\"></i>\n        <i class=\"fa fa-trello\"></i>\n        <i class=\"fa fa-tripadvisor\"></i>\n        <i class=\"fa fa-trophy\"></i>\n        <i class=\"fa fa-truck\"></i>\n        <i class=\"fa fa-try\"></i>\n        <i class=\"fa fa-tty\"></i>\n        <i class=\"fa fa-tumblr\"></i>\n        <i class=\"fa fa-tumblr-square\"></i>\n        <i class=\"fa fa-turkish-lira\"></i>\n        <i class=\"fa fa-tv\"></i>\n        <i class=\"fa fa-twitch\"></i>\n        <i class=\"fa fa-twitter\"></i>\n        <i class=\"fa fa-twitter-square\"></i>\n        <i class=\"fa fa-umbrella\"></i>\n        <i class=\"fa fa-underline\"></i>\n        <i class=\"fa fa-undo\"></i>\n        <i class=\"fa fa-universal-access\"></i>\n        <i class=\"fa fa-university\"></i>\n        <i class=\"fa fa-unlink\"></i>\n        <i class=\"fa fa-unlock\"></i>\n        <i class=\"fa fa-unlock-alt\"></i>\n        <i class=\"fa fa-unsorted\"></i>\n        <i class=\"fa fa-upload\"></i>\n        <i class=\"fa fa-usb\"></i>\n        <i class=\"fa fa-usd\"></i>\n        <i class=\"fa fa-user\"></i>\n        <i class=\"fa fa-user-circle\"></i>\n        <i class=\"fa fa-user-circle-o\"></i>\n        <i class=\"fa fa-user-md\"></i>\n        <i class=\"fa fa-user-o\"></i>\n        <i class=\"fa fa-user-plus\"></i>\n        <i class=\"fa fa-user-secret\"></i>\n        <i class=\"fa fa-user-times\"></i>\n        <i class=\"fa fa-users\"></i>\n        <i class=\"fa fa-vcard\"></i>\n        <i class=\"fa fa-vcard-o\"></i>\n        <i class=\"fa fa-venus\"></i>\n        <i class=\"fa fa-venus-double\"></i>\n        <i class=\"fa fa-venus-mars\"></i>\n        <i class=\"fa fa-viacoin\"></i>\n        <i class=\"fa fa-viadeo\"></i>\n        <i class=\"fa fa-viadeo-square\"></i>\n        <i class=\"fa fa-video-camera\"></i>\n        <i class=\"fa fa-vimeo\"></i>\n        <i class=\"fa fa-vimeo-square\"></i>\n        <i class=\"fa fa-vine\"></i>\n        <i class=\"fa fa-vk\"></i>\n        <i class=\"fa fa-volume-control-phone\"></i>\n        <i class=\"fa fa-volume-down\"></i>\n        <i class=\"fa fa-volume-off\"></i>\n        <i class=\"fa fa-volume-up\"></i>\n        <i class=\"fa fa-warning\"></i>\n        <i class=\"fa fa-wechat\"></i>\n        <i class=\"fa fa-weibo\"></i>\n        <i class=\"fa fa-weixin\"></i>\n        <i class=\"fa fa-whatsapp\"></i>\n        <i class=\"fa fa-wheelchair\"></i>\n        <i class=\"fa fa-wheelchair-alt\"></i>\n        <i class=\"fa fa-wifi\"></i>\n        <i class=\"fa fa-wikipedia-w\"></i>\n        <i class=\"fa fa-window-close\"></i>\n        <i class=\"fa fa-window-close-o\"></i>\n        <i class=\"fa fa-window-maximize\"></i>\n        <i class=\"fa fa-window-minimize\"></i>\n        <i class=\"fa fa-window-restore\"></i>\n        <i class=\"fa fa-windows\"></i>\n        <i class=\"fa fa-won\"></i>\n        <i class=\"fa fa-wordpress\"></i>\n        <i class=\"fa fa-wpbeginner\"></i>\n        <i class=\"fa fa-wpexplorer\"></i>\n        <i class=\"fa fa-wpforms\"></i>\n        <i class=\"fa fa-wrench\"></i>\n        <i class=\"fa fa-xing\"></i>\n        <i class=\"fa fa-xing-square\"></i>\n        <i class=\"fa fa-y-combinator\"></i>\n        <i class=\"fa fa-y-combinator-square\"></i>\n        <i class=\"fa fa-yahoo\"></i>\n        <i class=\"fa fa-yc\"></i>\n        <i class=\"fa fa-yc-square\"></i>\n        <i class=\"fa fa-yelp\"></i>\n        <i class=\"fa fa-yen\"></i>\n        <i class=\"fa fa-yoast\"></i>\n        <i class=\"fa fa-youtube\"></i>\n        <i class=\"fa fa-youtube-play\"></i>\n        <i class=\"fa fa-youtube-square\"></i>\n\n    </div>\n    <p class=\"help-block text-center\">\n        For a full list of icons, please consult:\n        <a href=\"https://fontawesome.com/v5.15/icons/\">FontAwesome</a>\n    </p>\n</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr />\n                    <div class=\"checkbox\">\n                        <label>\n                            <input name=\"userTitleEnabled\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            " checked" :
            "") + 
          "> <strong>[[groups:details.userTitleEnabled]]</strong>\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input name=\"private\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
            " checked" :
            "") + 
          "> <strong>[[groups:details.private]]</strong>\n                            " + 
          (guard((context != null) ? context['allowPrivateGroups'] : null) ?
            "" :
            "\n                            <p class=\"help-block\">\n                                [[groups:details.private_system_help]]\n                            </p>\n                            ") + 
          "\n                            <p class=\"help-block\">\n                                [[groups:details.private_help]]\n                            </p>\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input name=\"disableJoinRequests\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['disableJoinRequests'] : null) ?
            " checked" :
            "") + 
          "> <strong>[[groups:details.disableJoinRequests]]</strong>\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input name=\"disableLeave\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['disableLeave'] : null) ?
            " checked" :
            "") + 
          "> <strong>[[groups:details.disableLeave]]</strong>\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input name=\"hidden\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
            " checked" :
            "") + 
          "> <strong>[[groups:details.hidden]]</strong>\n                            <p class=\"help-block\">\n                                [[groups:details.hidden_help]]\n                            </p>\n                        </label>\n                    </div>\n\n                    <button class=\"btn btn-link btn-xs pull-right\" type=\"button\" data-action=\"delete\">[[groups:details.delete_group]]</button>\n                    <button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save_changes]]</button>\n                </form>\n            </div>\n        </div>\n        " :
        "") + 
      "\n        <div data-widget-area=\"left\">\n            " + 
      compiled.blocks['widgets.left'](helpers, context, guard, iter, helper) + 
      "\n        </div>\n    </div>\n    <div class=\"col-lg-8 col-xs-12\">\n        <div class=\"col-lg-11\">\n            " + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n            <div class=\"alert alert-info\">[[groups:details.has_no_posts]]</div>\n            ") + 
      "\n            <ul component=\"posts\" class=\"posts-list\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\n    " + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n<div component=\"posts/loading\" class=\"loading-indicator text-center hidden\">\n    <i class=\"fa fa-refresh fa-spin\"></i>\n</div>\n        </div>\n        <div data-widget-area=\"right\">\n            " + 
      compiled.blocks['widgets.right'](helpers, context, guard, iter, helper) + 
      "\n        </div>\n    </div>\n</div>\n";
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
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\">\n        <td>\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['members'] != null) ? context['group']['members'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n        </td>\n        <td class=\"member-name\">\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a> <i title=\"[[groups:owner]]\" class=\"fa fa-star text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n\n            " + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\n            <div class=\"owner-controls btn-group pull-right\">\n                <a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\n                    <i class=\"fa fa-star\"></i>\n                </a>\n\n                <a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\n                    <i class=\"fa fa-ban\"></i>\n                </a>\n            </div>\n            " :
            "") + 
          "\n        </td>\n    </tr>\n    ";
      }, function alt() {
        return "";
      });
    },
    'group.pending': function grouppending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['pending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['uid'] : null)) + 
          "\">\n                        <td>\n                            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n                        </td>\n                        <td class=\"member-name\">\n                            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['username'] : null)) + 
          "</a>\n                        </td>\n                        <td>\n                            <div class=\"btn-group pull-right\">\n                                <button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                                    [[global:more]] <span class=\"caret\"></span>\n                                </button>\n                                <ul class=\"dropdown-menu\" role=\"menu\">\n                                    <li><a href=\"#\" data-ajaxify=\"false\" data-action=\"accept\">[[groups:pending.accept]]</a></li>\n                                    <li><a href=\"#\" data-ajaxify=\"false\" data-action=\"reject\">[[groups:pending.reject]]</a></li>\n                                </ul>\n                            </div>\n                        </td>\n                    </tr>\n                    ";
      }, function alt() {
        return "";
      });
    },
    'group.invited': function groupinvited(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['invited'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n                    <tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['uid'] : null)) + 
          "\">\n                        <td>\n                            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n                        </td>\n                        <td class=\"member-name\">\n                            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['username'] : null)) + 
          "</a>\n                        </td>\n                        <td>\n                            <div class=\"btn-group pull-right\">\n                                <button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                                    [[global:more]] <span class=\"caret\"></span>\n                                </button>\n                                <ul class=\"dropdown-menu\" role=\"menu\">\n                                    <li><a href=\"#\" data-ajaxify=\"false\" data-action=\"rescindInvite\">[[groups:invited.uninvite]]</a></li>\n                                </ul>\n                            </div>\n                        </td>\n                    </tr>\n                    ";
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
    'widgets.left': function widgetsleft(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['left'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            " + 
          guard((context != null && context['widgets'] != null && context['widgets']['left'] != null && context['widgets']['left'][key0] != null) ? context['widgets']['left'][key0]['html'] : null) + 
          "\n            ";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li component=\"post\" class=\"posts-list-item row" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"col-lg-11 col-sm-10 col-xs-9 post-body\">\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">\n            " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "\n        </a>\n\n        <div component=\"post/content\" class=\"content\">\n            " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n        </div>\n\n        <small class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted_in, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "]]</a></small>\n\n        " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "\n        " + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null) ? context['posts'][key0]['topic']['tags']['length'] : null) ?
                "\n        <span class=\"tag-list\">\n            " + 
                  iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['tags'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n            <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/tags/" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['valueEncoded'] : null)) + 
                      "\"><span class=\"tag tag-item tag-class-" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['class'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['valueEscaped'] : null)) + 
                      "</span></a>\n            ";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n        </span>\n        " :
                "") + 
              "\n        " :
            "") + 
          "\n\n        <div class=\"post-info\">\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "md", guard((context != null) ? context['true'] : null), "user-img not-responsive"])) + 
          "</a>\n\n            <div class=\"post-author\">\n                <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a><br />\n                <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n            </div>\n        </div>\n    </div>\n</li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'widgets.right': function widgetsright(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['right'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n            " + 
          guard((context != null && context['widgets'] != null && context['widgets']['right'] != null && context['widgets']['right'][key0] != null) ? context['widgets']['right'][key0]['html'] : null) + 
          "\n            ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
