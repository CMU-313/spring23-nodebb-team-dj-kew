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

<div class="btn-toolbar">
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

    {{{ if !singlePost }}}
    <div class="btn-group pull-right bottom-sheet" component="post-queue/bulk-actions">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" autocomplete="off" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-clone"></i> [[post-queue:bulk-actions]] <span class="caret"></span>
        </button>
        <ul class="dropdown-menu dropdown-menu-right">
            <li><a href="#" data-action="accept-all">[[post-queue:accept-all]]</a></li>
            <li><a href="#" data-action="accept-selected">[[post-queue:accept-selected]]</a></li>
            <li class="divider"></li>
            <li><a href="#" data-action="reject-all">[[post-queue:reject-all]]</a></li>
            <li><a href="#" data-action="reject-selected">[[post-queue:reject-selected]]</a></li>
        </ul>
    </div>
    {{{ end }}}
</div>
<hr/>
<div class="row">
    <div class="col-xs-12">
        <div class="post-queue preventSlideout posts-list">
            {{{ if !posts.length }}}
            {{{ if isAdmin }}}
            <p class="panel-body">
                [[post-queue:description, {config.relative_path}/admin/settings/post#post-queue]]
            </p>
            {{{ end }}}
            {{{ end }}}

            {{{ each posts }}}
            <div class="panel panel-default" data-id="{posts.id}">
                <div class="panel-heading">
                    {{{ if !singlePost }}}
                    <input type="checkbox" autocomplete="off" />
                    {{{ end }}}
                    <strong>{{{ if posts.data.tid }}}[[post-queue:reply]]{{{ else }}}[[post-queue:topic]]{{{ end }}}</strong>
                    <span class="timeago pull-right" title={posts.data.timestampISO}></span>
                </div>
                <div class="panel-body">

                    <div class="row">
                        <div class="col-lg-2 col-xs-12">
                            <strong>[[post-queue:user]]</strong>
                            <div>
                                {{{ if posts.user.userslug}}}
                                <a href="{config.relative_path}/uid/{posts.user.uid}">{buildAvatar(posts.user, "24", true, "not-responsive")} {posts.user.username}</a>
                                {{{ else }}}
                                {posts.user.username}
                                {{{ end }}}
                            </div>
                        </div>
                        <div class="col-lg-3 col-xs-12">
                            <strong>[[post-queue:category]]{{{ if posts.data.cid}}} <i class="fa fa-fw fa-edit" data-toggle="tooltip" title="[[post-queue:category-editable]]"></i>{{{ end }}}</strong>
                            <div class="topic-category" {{{if posts.data.cid}}}data-editable="editable"{{{end}}}">
                                <a href="{config.relative_path}/category/{posts.category.slug}"><!-- IF posts.category.icon --><span class="fa-stack"><i style="color: {posts.category.bgColor};" class="fa fa-circle fa-stack-2x"></i><i style="color: {posts.category.color};" class="fa fa-stack-1x fa-fw {posts.category.icon}"></i></span><!-- ENDIF posts.category.icon --> {posts.category.name}</a>
                            </div>
                        </div>
                        <div class="col-lg-7 col-xs-12">
                            <strong>{{{ if posts.data.tid }}}[[post-queue:topic]]{{{ else }}}[[post-queue:title]] <i class="fa fa-fw fa-edit" data-toggle="tooltip" title="[[post-queue:title-editable]]"></i>{{{ end }}}</strong>
                            <div class="topic-title">
                                {{{ if posts.data.tid }}}
                                <a href="{config.relative_path}/topic/{posts.data.tid}">{posts.topic.title}</a>
                                {{{ end }}}
                                <span class="title-text">{posts.data.title}</span>
                            </div>
                            {{{if !posts.data.tid}}}
                            <div class="topic-title-editable hidden">
                                <input class="form-control" type="text" value="{posts.data.title}"/>
                            </div>
                            {{{end}}}
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <strong>[[post-queue:content]] <i class="fa fa-fw fa-edit" data-toggle="tooltip" title="[[post-queue:content-editable]]"></i></strong>
                        <div class="post-content">{posts.data.content}</div>
                        <div class="post-content-editable hidden">
                            <textarea class="form-control">{posts.data.rawContent}</textarea>
                        </div>
                    </div>
                </div>
                <div class="panel-footer text-right">
                    <div>
                        {{{ if canAccept }}}
                        <button class="btn btn-danger btn-xs" data-action="reject"><i class="fa fa-fw fa-times"></i> [[post-queue:reject]]</button>
                        <button class="btn btn-info btn-xs" data-action="notify"><i class="fa fa-fw fa-bell-o"></i> [[post-queue:notify]]</button>
                        <button class="btn btn-success btn-xs" data-action="accept"><i class="fa fa-fw fa-check"></i> [[post-queue:accept]] </button>
                        {{{ else }}}
                        <button class="btn btn-danger btn-xs" data-action="reject"><i class="fa fa-fw fa-times"></i> [[post-queue:remove]]</button>
                        {{{ end }}}
                    </div>
                </div>
            </div>
            {{{ end }}}
        </div>

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
    </div>
</div>