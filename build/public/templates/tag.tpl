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
<div class="tag">
    <div class="topic-list-header btn-toolbar">
        <div class="pull-left">
            <!-- IF loggedIn -->
            <noscript><div class="dropdown" component="category-selector"></noscript>
<label component="category/post" for="category-dropdown-check" class="btn btn-primary" id="new_topic" role="button">
    [[category:new_topic_button]]
</label>
<noscript>
    <input type="checkbox" class="hidden" id="category-dropdown-check" aria-hidden="true">
    <ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
        {{{each categories}}}
        <li role="presentation" class="category {{{if categories.disabledClass}}}disabled{{{end}}}">
            <a role="menu-item" href="{config.relative_path}/compose?cid={categories.cid}">{categories.level}<span component="category-markup">{{{if categories.icon}}}<span class="fa-stack" style="{function.generateCategoryBackground}"><i style="color: {categories.color};" class="fa fa-stack-1x fa-fw {categories.icon}"></i></span>{{{end}}} {categories.name}</span></a>
        </li>
        {{{end}}}
    </ul>
</div>
</noscript>

            <!-- ELSE -->
            <a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-primary">[[category:guest-login-post]]</a>
            <!-- ENDIF loggedIn -->
        </div>

        <div class="btn-group pull-right">
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
        </div>

        <div component="category/dropdown" class="btn-group pull-right category-dropdown-container bottom-sheet">
   <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    {{{ if selectedCategory }}}<span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> <span class="visible-sm-inline visible-md-inline visible-lg-inline">{selectedCategory.name}</span>{{{ else }}}
    <span class="visible-sm-inline visible-md-inline visible-lg-inline">[[unread:all_categories]]</span><span class="visible-xs-inline"><i class="fa fa-fw fa-list"></i></span>{{{ end }}} <span class="caret"></span>
</button>
<div component="category-selector-search" class="hidden">
    <input type="text" class="form-control" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
    <li role="presentation" class="category" data-all="all">
        <a role="menu-item" href="{config.relative_path}/{allCategoriesUrl}"><i component="category/select/icon" class="fa fa-fw fa-check {{{if selectedCategory}}}invisible{{{end}}}"></i> [[unread:all_categories]]</a>
    </li>
    {{{each categoryItems}}}
    <li role="presentation" class="category {{{ if ../disabledClass }}}disabled{{{ end }}}" data-cid="{../cid}" data-parent-cid="{../parentCid}" data-name="{../name}">
        <a role="menu-item" href="#">{../level}<i component="category/select/icon" class="fa fa-fw fa-check {{{ if !../selected }}}invisible{{{ end }}}"></i><span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">{{{ if ../icon }}}<span class="fa-stack" style="{function.generateCategoryBackground}"><i class="fa fa-fw fa-stack-1x {../icon}" style="color: {../color};"></i></span>{{{ end }}} {../name}</span></a>
    </li>
    {{{end}}}
</ul>
</div>
    </div>

    <!-- IF !topics.length -->
    <div class="alert alert-warning">[[tags:no_tag_topics]]</div>
    <!-- ENDIF !topics.length -->

    <div class="category">
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

        <button id="load-more-btn" class="btn btn-primary hide">[[unread:load_more]]</button>
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
</div>
