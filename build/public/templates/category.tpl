<!-- IF breadcrumbs.length -->
<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
    {{{each breadcrumbs}}}
    <li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" <!-- IF @last -->class="active"<!-- ENDIF @last -->>
        <meta itemprop="position" content="{@index}" />
        {{{ if ./url }}}<a href="{breadcrumbs.url}" itemprop="item">{{{ end }}}
            <span itemprop="name">
                {breadcrumbs.text}
                <!-- IF @last -->
                <!-- IF !feeds:disableRSS -->
                <!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}" itemprop="item"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
                <!-- ENDIF @last -->
            </span>
        {{{ if ./url }}}</a>{{{ end }}}
    </li>
    {{{end}}}
</ol>
<!-- ENDIF breadcrumbs.length -->

<div data-widget-area="header">
    {{{each widgets.header}}}
    {{widgets.header.html}}
    {{{end}}}
</div>
<div class="row">
    <div class="category <!-- IF widgets.sidebar.length -->col-lg-9 col-sm-12<!-- ELSE -->col-lg-12<!-- ENDIF widgets.sidebar.length -->">
        {{{ if children.length }}}
<div class="subcategory">
    {{{ if hasMoreSubCategories }}}
    <div><div component="category-selector" class="btn-group bottom-sheet">
<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    <span component="category-selector-selected">{{{ if (selectedCategory && !showCategorySelectLabel) }}}<span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> {selectedCategory.name}{{{ else }}}
    <span class="visible-sm-inline visible-md-inline visible-lg-inline">{{{ if selectCategoryLabel }}}{selectCategoryLabel}{{{ else }}}[[topic:thread_tools.select_category]]{{{ end }}}</span><span class="visible-xs-inline"><i class="fa fa-fw {{{ if selectCategoryIcon }}}{selectCategoryIcon}{{{ else }}}fa-list{{{ end }}}"></i></span>
    {{{ end }}}</span> <span class="caret"></span>
</button>
<div component="category-selector-search" class="hidden">
    <input type="text" class="form-control" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
    <li component="category/no-matches" role="presentation" class="category hidden">
        <a role="menu-item">[[search:no-matches]]</a>
    </li>
    {{{each categoryItems}}}
    <li role="presentation" class="category {{{ if ../disabledClass }}}disabled {{{ end }}}" data-cid="{../cid}" data-name="{../name}" data-parent-cid="{../parentCid}">
        <a role="menu-item">{../level}<span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">{{{ if ./icon }}}<span class="fa-stack" style="{function.generateCategoryBackground}"><i style="color: {../color};" class="fa fa-stack-1x fa-fw {../icon}"></i></span>{{{ end }}} {../name}</span></a>
    </li>
    {{{ end }}}
</ul>
</div></div>
    {{{ else }}}
    <p>[[category:subcategories]]</p>
    {{{ end }}}

    <ul component="category/subcategory/container" class="categories" itemscope itemtype="http://www.schema.org/ItemList">
        {{{each children}}}
        <li component="categories/category" data-cid="{../cid}" data-numRecentReplies="1" class="row clearfix category-{../cid}">
    <meta itemprop="name" content="{../name}">

    <div class="content col-xs-12 <!-- IF config.hideCategoryLastPost -->col-md-10 col-sm-12<!-- ELSE -->col-md-7 col-sm-9<!-- ENDIF config.hideCategoryLastPost -->">
        <div class="icon pull-left" style="{function.generateCategoryBackground}">
            <i class="fa fa-fw {../icon}"></i>
        </div>

        <h2 class="title">
            <!-- IF ../isSection -->
{../name}
<!-- ELSE -->
<!-- IF ../link -->
<a href="{../link}" itemprop="url">
<!-- ELSE -->
<a href="{config.relative_path}/category/{../slug}" itemprop="url">
<!-- ENDIF ../link -->
{../name}
</a>
<!-- ENDIF ../isSection -->
        </h2>
        <div>
            <!-- IF ../descriptionParsed -->
            <div class="description">
                {../descriptionParsed}
            </div>
            <!-- ENDIF ../descriptionParsed -->
            <!-- IF !config.hideSubCategories -->
            {function.generateChildrenCategories}
            <!-- ENDIF !config.hideSubCategories -->
        </div>
        <span class="visible-xs pull-right">
            <!-- IF ../teaser.timestampISO -->
            <a class="permalink" href="{../teaser.url}">
                <small class="timeago" title="{../teaser.timestampISO}"></small>
            </a>
            <!-- ENDIF ../teaser.timestampISO -->
        </span>
    </div>

    <!-- IF !../link -->
    <div class="col-md-1 hidden-sm hidden-xs stats">
        <span class="{../unread-class} human-readable-number" title="{../totalTopicCount}">{../totalTopicCount}</span><br />
        <small>[[global:topics]]</small>
    </div>
    <div class="col-md-1 hidden-sm hidden-xs stats">
        <span class="{../unread-class} human-readable-number" title="{../totalPostCount}">{../totalPostCount}</span><br />
        <small>[[global:posts]]</small>
    </div>
    <!-- IF !config.hideCategoryLastPost -->
    <div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">
        <div class="card background-link-container" style="border-color: {../bgColor}">
    {{{each ./posts}}}
    <!-- IF @first -->
    <div component="category/posts">
        <a class="background-link" href="{config.relative_path}/topic/{../topic.slug}<!-- IF ../index -->/{../index}<!-- ENDIF ../index -->"></a>
        <p>
            <!-- IF posts.isAnon -->
            <strong>
                <div itemprop="author">Anonymous</div>
            </strong>
            <!-- ELSE -->
            <strong>
                <a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->" itemprop="author" data-username="{posts.user.username}" data-uid="{posts.user.uid}">{posts.user.displayname}</a>
            </strong>
            <!-- ENDIF -->
            <!-- IF posts.isAnon -->
            <!-- ELSE -->
            <a href="{config.relative_path}/user/{../user.userslug}">{buildAvatar(posts.user, "sm", true)}</a>
            <!-- END -->
            <a class="permalink" href="{config.relative_path}/topic/{../topic.slug}<!-- IF ../index -->/{../index}<!-- ENDIF ../index -->">
                <small class="timeago" title="{../timestampISO}"></small>
            </a>
        </p>
        <div class="post-content">
            {../content}
        </div>
    </div>
    <!-- ENDIF @first -->
    {{{end}}}

    <!-- IF !../posts.length -->
    <div component="category/posts">
        <div class="post-content">
            [[category:no_new_posts]]
        </div>
    </div>
    <!-- ENDIF !../posts.length -->
</div>

    </div>
    <!-- ENDIF !config.hideCategoryLastPost -->
    <!-- ENDIF !../link -->
</li>

        {{{end}}}
    </ul>
    {{{ if hasMoreSubCategories}}}
    <button class="btn btn-default" component="category/load-more-subcategories">[[category:x-more-categories, {subCategoriesLeft}]]</button>
    {{{ end }}}
</div>
{{{ end }}}

        <div class="topic-list-header clearfix">
            <!-- IF privileges.topics:create -->
            <a href="{config.relative_path}/compose?cid={cid}" component="category/post" id="new_topic" class="btn btn-primary" data-ajaxify="false" role="button">[[category:new_topic_button]]</a>
            <!-- ELSE -->
                <!-- IF !loggedIn -->
                <a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-primary">[[category:guest-login-post]]</a>
                <!-- ENDIF !loggedIn -->
            <!-- ENDIF privileges.topics:create -->

            <a href="{url}" class="inline-block">
                <div class="alert alert-warning hide" id="new-topics-alert"></div>
            </a>

            <span class="pull-right" component="category/controls">
                <!-- IF config.loggedIn -->
<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">

    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">

        <span component="category/watching/menu" <!-- IF !../isWatched -->class="hidden"<!-- ENDIF !../isWatched -->><i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:watching]]</span></span>

        <span component="category/notwatching/menu" <!-- IF !../isNotWatched -->class="hidden"<!-- ENDIF !../isNotWatched -->><i class="fa fa-fw fa-clock-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:not-watching]]</span></span>

        <span component="category/ignoring/menu" <!-- IF !../isIgnored -->class="hidden"<!-- ENDIF !../isIgnored -->><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:ignoring]]</span></span>

        <span class="caret"></span>
    </button>

    <ul class="dropdown-menu dropdown-menu-right">
        <li><a href="#" component="category/watching" data-state="watching"><i component="category/watching/check" class="fa fa-fw <!-- IF ../isWatched -->fa-check<!-- ENDIF ../isWatched -->"></i><i class="fa fa-fw fa-inbox"></i> [[category:watching]]<p class="help-text"><small>[[category:watching.description]]</small></p></a></li>

        <li><a href="#" component="category/notwatching" data-state="notwatching"><i component="category/notwatching/check" class="fa fa-fw <!-- IF ../isNotWatched -->fa-check<!-- ENDIF ../isNotWatched -->"></i><i class="fa fa-fw fa-clock-o"></i> [[category:not-watching]]<p class="help-text"><small>[[category:not-watching.description]]</small></p></a></li>

        <li><a href="#" component="category/ignoring" data-state="ignoring"><i component="category/ignoring/check" class="fa fa-fw <!-- IF ../isIgnored -->fa-check<!-- ENDIF ../isIgnored -->"></i><i class="fa fa-fw fa-eye-slash"></i> [[category:ignoring]]<p class="help-text"><small>[[category:ignoring.description]]</small></p></a></li>
    </ul>
</div>
<!-- ENDIF config.loggedIn -->
                <div class="btn-group bottom-sheet" component="thread/sort">
    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">
        <span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:sort_by]]</span>
        <span class="visible-xs-inline"><i class="fa fa-fw fa-sort"></i></span>
        <span class="caret"></span>
    </button>

    <ul class="dropdown-menu pull-right">
        <li><a href="#" class="newest_to_oldest" data-sort="newest_to_oldest"><i class="fa fa-fw"></i> [[topic:newest_to_oldest]]</a></li>
        <li><a href="#" class="oldest_to_newest" data-sort="oldest_to_newest"><i class="fa fa-fw"></i> [[topic:oldest_to_newest]]</a></li>
        <li><a href="#" class="most_posts" data-sort="most_posts"><i class="fa fa-fw"></i> [[topic:most_posts]]</a></li>
        <li><a href="#" class="most_votes" data-sort="most_votes"><i class="fa fa-fw"></i> [[topic:most_votes]]</a></li>
        <li><a href="#" class="most_views" data-sort="most_views"><i class="fa fa-fw"></i> [[topic:most_views]]</a></li>
    </ul>
</div>
                <!-- IF showTopicTools -->
<div class="btn-group thread-tools bottom-sheet">
    <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">
        <span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:thread_tools.title]]</span>
        <span class="visible-xs-inline"><i class="fa fa-fw fa-gear"></i></span>
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu pull-right">
        <li>
            <a component="topic/mark-unread-for-all" href="#">
                <i class="fa fa-fw fa-inbox"></i> [[topic:thread_tools.markAsUnreadForAll]]
            </a>
        </li>
        <li>
            <a component="topic/pin" href="#">
                <i class="fa fa-fw fa-thumb-tack"></i> [[topic:thread_tools.pin]]
            </a>
        </li>
        <li>
            <a component="topic/unpin" href="#" class="hidden">
                <i class="fa fa-fw fa-thumb-tack fa-rotate-90"></i> [[topic:thread_tools.unpin]]
            </a>
        </li>

        <li>
            <a component="topic/lock" href="#">
                <i class="fa fa-fw fa-lock"></i> [[topic:thread_tools.lock]]
            </a>
        </li>
        <li>
            <a component="topic/unlock" href="#" class="hidden">
                <i class="fa fa-fw fa-unlock"></i> [[topic:thread_tools.unlock]]
            </a>
        </li>

        <li class="divider"></li>

        <li>
            <a component="topic/move" href="#">
                <i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move]]
            </a>
        </li>
        {{{if template.category}}}
        <li>
            <a component="topic/move-all" href="#">
                <i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move_all]]
            </a>
        </li>
        {{{end}}}
        <li>
            <a component="topic/merge" href="#">
                <i class="fa fa-fw fa-code-fork"></i> [[topic:thread_tools.merge]]
            </a>
        </li>

        <li class="divider"></li>

        <li>
            <a component="topic/delete" href="#">
                <i class="fa fa-fw fa-trash-o"></i> [[topic:thread_tools.delete]]
            </a>
        </li>
        <li>
            <a component="topic/restore" href="#" class="hidden">
                <i class="fa fa-fw fa-history"></i> [[topic:thread_tools.restore]]
            </a>
        </li>
        <li>
            <a component="topic/purge" href="#" class="hidden">
                <i class="fa fa-fw fa-eraser"></i> [[topic:thread_tools.purge]]
            </a>
        </li>

        {{{each thread_tools}}}
        <li>
            <a href="#" class="{thread_tools.class}"><i class="fa fa-fw {thread_tools.icon}"></i> {thread_tools.title}</a>
        </li>
        {{{end}}}
    </ul>
</div>
<!-- ENDIF showTopicTools -->
            </span>
        </div>

        <!-- IF !topics.length -->
        <!-- IF privileges.topics:create -->
        <hr class="visible-xs" />
        <div class="alert alert-warning" id="category-no-topics">
            [[category:no_topics]]
        </div>
        <!-- ENDIF privileges.topics:create -->
        <!-- ENDIF !topics.length -->

        <ul component="category" class="topic-list" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="{nextStart}" data-set="{set}">
    {{{each topics}}}

        {{{ if ../visible }}}
        <li component="category/topic" class="row clearfix category-item {function.generateTopicClass}" data-tid="{topics.tid}" data-index="{topics.index}" data-cid="{topics.cid}" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <link itemprop="url" content="{config.relative_path}/topic/{../slug}" />
            <meta itemprop="name" content="{function.stripTags, ../title}" />
            <meta itemprop="itemListOrder" content="descending" />
            <meta itemprop="position" content="{../index}" />
            <a id="{../index}" data-index="{../index}" component="topic/anchor"></a>

            <div class="col-md-6 col-sm-9 col-xs-10 content">
                
                <div class="avatar pull-left">

                    <!-- IF showSelect -->
                    {{{ if topics.isAnon }}}
                    {{{ else }}}
                    <div class="select" component="topic/select">
                        {{{ if ./thumbs.length }}}
                        <img src="{./thumbs.0.url}" class="user-img not-responsive" />
                        {{{ else }}}
                        {buildAvatar(../user, "46", true, "not-responsive")}
                        {{{ end }}}
                        <i class="fa fa-check"></i>
                    </div>
                    {{{end}}}
                    <!-- ENDIF showSelect -->

                    <!-- IF !showSelect -->
                    {{{ if topics.isAnon }}}
                    {{{ else }}}
                    <a href="<!-- IF topics.user.userslug -->{config.relative_path}/user/{topics.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.user.userslug -->" class="pull-left">
                        {{{ if ./thumbs.length }}}
                        <img src="{./thumbs.0.url}" class="user-img not-responsive" />
                        {{{ else }}}
                        {buildAvatar(../user, "46", true, "not-responsive")}
                        {{{ end }}}
                    </a>
                    {{{ end }}}
                    <!-- ENDIF !showSelect -->
                </div>
                

                <h2 component="topic/header" class="title">
                    <i component="topic/scheduled" class="fa fa-clock-o <!-- IF !topics.scheduled -->hide<!-- ENDIF !topics.scheduled -->" title="[[topic:scheduled]]"></i>
                    <i component="topic/pinned" class="fa fa-thumb-tack <!-- IF (topics.scheduled || !topics.pinned) -->hide<!-- ENDIF (topics.scheduled || !topics.pinned) -->" title="{{{ if !../pinExpiry }}}[[topic:pinned]]{{{ else }}}[[topic:pinned-with-expiry, {../pinExpiryISO}]]{{{ end }}}"></i>
                    <i component="topic/locked" class="fa fa-lock <!-- IF !topics.locked -->hide<!-- ENDIF !topics.locked -->" title="[[topic:locked]]"></i>
                    <i component="topic/moved" class="fa fa-arrow-circle-right <!-- IF !topics.oldCid -->hide<!-- ENDIF !topics.oldCid -->" title="[[topic:moved]]"></i>
                    {{{each topics.icons}}}{@value}{{{end}}}


                    <!-- IF !topics.noAnchor -->
                    <a href="{config.relative_path}/topic/{topics.slug}<!-- IF topics.bookmark -->/{topics.bookmark}<!-- ENDIF topics.bookmark -->">{topics.title}</a><br />
                    <!-- ELSE -->
                    <span>{topics.title}</span><br />
                    <!-- ENDIF !topics.noAnchor -->

                    <!-- IF !template.category -->
                    <small>
                        <a href="{config.relative_path}/category/{topics.category.slug}"><span class="fa-stack fa-lg" style="{function.generateCategoryBackground, topics.category}"><i style="color:{topics.category.color};" class="fa {topics.category.icon} fa-stack-1x"></i></span> {topics.category.name}</a> &bull;
                    </small>
                    <!-- ENDIF !template.category -->

                    {{{ if topics.tags.length }}}
                    <span class="tag-list hidden-xs">
                        {{{each topics.tags}}}
                        <a href="{config.relative_path}/tags/{topics.tags.valueEncoded}"><span class="tag tag-item tag-class-{topics.tags.class}">{topics.tags.valueEscaped}</span></a>
                        {{{end}}}
                        <small>&bull;</small>
                    </span>
                    {{{ end }}}
                    
                    
                    <small class="hidden-xs">
                        <span class="timeago" title="{topics.timestampISO}"></span> &bull; 

                        {{{ if topics.isAnon }}}
                        <strong>
                            <span itemprop="author">Anonymous</span>
                        </strong>
                        {{{ else }}}
                        <a href="<!-- IF topics.user.userslug -->{config.relative_path}/user/{topics.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.user.userslug -->">{topics.user.displayname}</a>
                        {{{ end }}}
                    </small>
                    <small class="visible-xs-inline">
                        <!-- IF topics.teaser.timestamp -->
                        <span class="timeago" title="{topics.teaser.timestampISO}"></span>
                        <!-- ELSE -->
                        <span class="timeago" title="{topics.timestampISO}"></span>
                        <!-- ENDIF topics.teaser.timestamp -->
                    </small>
                </h2>
            </div>

            <div class="mobile-stat col-xs-2 visible-xs text-right">
                <span class="human-readable-number">{topics.postcount}</span> <a href="{config.relative_path}/topic/{topics.slug}/{topics.teaser.index}"><i class="fa fa-arrow-circle-right"></i></a>
            </div>

            <div class="col-md-1 hidden-sm hidden-xs stats stats-votes">
                <!-- IF !reputation:disabled -->
                <span class="human-readable-number" title="{topics.votes}">{topics.votes}</span><br />
                <small>[[global:votes]]</small>
                <!-- END -->
            </div>

            <div class="col-md-1 hidden-sm hidden-xs stats stats-postcount">
                <span class="human-readable-number" title="{topics.postcount}">{topics.postcount}</span><br />
                <small>[[global:posts]]</small>
            </div>

            <div class="col-md-1 hidden-sm hidden-xs stats stats-viewcount">
                <span class="human-readable-number" title="{topics.viewcount}">{topics.viewcount}</span><br />
                <small>[[global:views]]</small>
            </div>

            <div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">
                <div class="card background-link-container" style="border-color: {topics.category.bgColor}">
                    <a class="background-link" href="{config.relative_path}/topic/{topics.slug}/{topics.teaser.index}"></a>
                    <!-- IF topics.unreplied -->
                    <p>
                        [[category:no_replies]]
                    </p>
                    <!-- ELSE -->
                    <!-- IF topics.teaser.pid -->
                    <p>
                        <!-- IF posts.isAnon -->
                        <!-- ELSE -->
                        <a href="{config.relative_path}/user/{topics.teaser.user.userslug}">{buildAvatar(topics.teaser.user, "24", true, "not-responsive")}</a>
                        <!-- ENDIF -->
                        <a class="permalink" href="{config.relative_path}/topic/{topics.slug}/{topics.teaser.index}">
                            <span class="timeago" title="{topics.teaser.timestampISO}"></span>
                        </a>
                    </p>
                    <div class="post-content">
                        {topics.teaser.content}
                    </div>
                    <!-- ENDIF topics.teaser.pid -->
                    <!-- ENDIF topics.unreplied -->
                </div>
            </div>
        </li>
        {{{end}}}
    {{{end}}}
</ul>


        <!-- IF config.usePagination -->
            <div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
    <ul class="pagination hidden-xs">
        <li class="previous pull-left<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
            <a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
        </li>

        {{{each pagination.pages}}}
            <!-- IF pagination.pages.separator -->
            <li component="pagination/select-page" class="page select-page">
                <a href="#"><i class="fa fa-ellipsis-h"></i></a>
            </li>
            <!-- ELSE -->
            <li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
                <a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
            </li>
            <!-- ENDIF pagination.pages.separator -->
        {{{end}}}

        <li class="next pull-right<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
            <a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
        </li>
    </ul>

    <ul class="pagination hidden-sm hidden-md hidden-lg">
        <li class="first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
            <a href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
        </li>

        <li class="previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
            <a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
        </li>

        <li component="pagination/select-page" class="page select-page">
            <a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
        </li>

        <li class="next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
            <a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
        </li>

        <li class="last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
            <a href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
        </li>
    </ul>
</div>
        <!-- ENDIF config.usePagination -->
    </div>
    <div data-widget-area="sidebar" class="col-lg-3 col-sm-12 <!-- IF !widgets.sidebar.length -->hidden<!-- ENDIF !widgets.sidebar.length -->">
        {{{each widgets.sidebar}}}
        {{widgets.sidebar.html}}
        {{{end}}}
    </div>
</div>
<div data-widget-area="footer">
    {{{each widgets.footer}}}
    {{widgets.footer.html}}
    {{{end}}}
</div>

<!-- IF !config.usePagination -->
<noscript>
    <div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
    <ul class="pagination hidden-xs">
        <li class="previous pull-left<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
            <a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
        </li>

        {{{each pagination.pages}}}
            <!-- IF pagination.pages.separator -->
            <li component="pagination/select-page" class="page select-page">
                <a href="#"><i class="fa fa-ellipsis-h"></i></a>
            </li>
            <!-- ELSE -->
            <li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
                <a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
            </li>
            <!-- ENDIF pagination.pages.separator -->
        {{{end}}}

        <li class="next pull-right<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
            <a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
        </li>
    </ul>

    <ul class="pagination hidden-sm hidden-md hidden-lg">
        <li class="first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
            <a href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
        </li>

        <li class="previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
            <a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
        </li>

        <li component="pagination/select-page" class="page select-page">
            <a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
        </li>

        <li class="next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
            <a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
        </li>

        <li class="last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
            <a href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
        </li>
    </ul>
</div>
</noscript>
<!-- ENDIF !config.usePagination -->
