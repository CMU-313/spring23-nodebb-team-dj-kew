<div class="account">
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

<div class="cover" component="account/cover" style="background-image: url({cover:url}); background-position: {cover:position};">
    <div class="avatar-wrapper" data-uid="{uid}">
        <!-- IF picture -->
        <img src="{picture}" class="avatar avatar-xl avatar-rounded" />
        <!-- ELSE -->
        <div class="avatar avatar-xl avatar-rounded" style="background-color: {icon:bgColor};" title="{username}">{icon:text}</div>
        <!-- ENDIF picture -->
        <i component="user/status" class="fa fa-circle status {status}" title="[[global:{status}]]"></i>

        <!-- IF loggedIn -->
        <!-- IF !isSelf -->
        <button class="btn-morph persona-fab <!-- IF isFollowing -->heart<!-- ELSE -->plus<!-- ENDIF isFollowing -->" title="<!-- IF isFollowing -->[[global:unfollow]]<!-- ELSE -->[[global:follow]]<!-- ENDIF isFollowing -->">
            <span>
                <span class="s1"></span>
                <span class="s2"></span>
                <span class="s3"></span>
            </span>
        </button>
        <!-- ENDIF !isSelf -->
        <!-- ENDIF loggedIn -->
    </div>

    <div class="container">
        <div class="btn-group account-fab bottom-sheet">
    <button type="button" class="persona-fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-ellipsis-v"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-right">
        <!-- IF loggedIn -->
        <!-- IF !isSelf -->
        <!-- IF !banned -->
        <!-- IF !config.disableChat -->
        <li class="<!-- IF !hasPrivateChat -->hidden<!-- ENDIF !hasPrivateChat -->">
            <a component="account/chat" href="#">[[user:chat_with, {username}]]</a>
        </li>
        <li>
            <a component="account/new-chat" href="#">[[user:new_chat_with, {username}]]</a>
        </li>
        <!-- ENDIF !config.disableChat -->
        <li>
            <a component="account/flag" href="#">[[user:flag-profile]]</a>
        </li>
        <li>
            <a component="account/block" href="#"><!-- IF !../isBlocked -->[[user:block_user]]<!-- ELSE -->[[user:unblock_user]]<!-- END --></a>
        </li>
        <li role="separator" class="divider"></li>
        <!-- ENDIF !banned -->
        <!-- ENDIF !isSelf -->
        <!-- ENDIF loggedIn -->
        <li>
            <a href="{config.relative_path}/user/{userslug}" class="inline-block" id="profile">[[user:profile]]</a>
        </li>
        <!-- IF canEdit -->
        <li><a href="{config.relative_path}/user/{userslug}/edit">[[user:edit]]</a></li>
        <li><a href="{config.relative_path}/user/{userslug}/settings">[[user:settings]]</a></li>
        <!-- ENDIF canEdit -->

        <!-- IF !isSelf -->
        {{{ if (canBan || canMute) }}}
        <li role="separator" class="divider"></li>
        <li class="dropdown-header">[[user:admin_actions_label]]</li>
        {{{ end }}}
        {{{ if canBan }}}
        <li class="<!-- IF banned -->hide<!-- ENDIF banned -->">
            <a component="account/ban" href="#">[[user:ban_account]]</a>
        </li>
        <li class="<!-- IF !banned -->hide<!-- ENDIF !banned -->">
            <a component="account/unban" href="#">[[user:unban_account]]</a>
        </li>
        {{{ end }}}
        {{{ if canMute }}}
        <li class="<!-- IF muted -->hide<!-- ENDIF muted -->">
            <a component="account/mute" href="#">[[user:mute_account]]</a>
        </li>
        <li class="<!-- IF !muted -->hide<!-- ENDIF !muted -->">
            <a component="account/unmute" href="#">[[user:unmute_account]]</a>
        </li>
        {{{ end }}}
        <!-- IF isAdmin -->
        <li>
            <a component="account/delete-account" href="#" class="">[[user:delete_account_as_admin]]</a>
            <a component="account/delete-content" href="#" class="">[[user:delete_content]]</a>
            <a component="account/delete-all" href="#" class="">[[user:delete_all]]</a>
        </li>
        <!-- ENDIF isAdmin -->
        <!-- ENDIF !isSelf -->

        <li role="separator" class="divider"></li>
        <li><a href="{config.relative_path}/user/{userslug}/following">[[user:following]] <span class="badge badge-default pull-right formatted-number" title="{counts.following}">{counts.following}</span></a></li>
        <li><a href="{config.relative_path}/user/{userslug}/followers">[[user:followers]] <span class="badge badge-default pull-right formatted-number" title="{counts.followers}">{counts.followers}</span></a></li>
        <!-- IF canEdit -->
        <li><a href="{config.relative_path}/user/{userslug}/blocks">[[user:blocks]] <span class="badge badge-default pull-right formatted-number" title="{counts.blocks}">{counts.blocks}</span></a></li>
        <!-- ENDIF canEdit -->
        <li role="separator" class="divider"></li>
        <li><a href="{config.relative_path}/user/{userslug}/topics">[[global:topics]] <span class="badge badge-default pull-right formatted-number" title="{counts.topics}">{counts.topics}</span></a></li>
        <li><a href="{config.relative_path}/user/{userslug}/posts">[[global:posts]] <span class="badge badge-default pull-right formatted-number" title="{counts.posts}">{counts.posts}</span></a></li>
        <!-- IF !reputation:disabled -->
        <li><a href="{config.relative_path}/user/{userslug}/best">[[global:best]] <span class="badge badge-default pull-right formatted-number" title="{counts.best}">{counts.best}</span></a></li>
        <li><a href="{config.relative_path}/user/{userslug}/controversial">[[global:controversial]] <span class="badge badge-default pull-right formatted-number" title="{counts.controversial}">{counts.controversial}</span></a></li>
        <!-- ENDIF !reputation:disabled -->
        <li><a href="{config.relative_path}/user/{userslug}/groups">[[global:header.groups]] <span class="badge badge-default pull-right formatted-number" title="{counts.groups}">{counts.groups}</span></a></li>

        <!-- IF canEdit -->
        <li><a href="{config.relative_path}/user/{userslug}/categories">[[user:watched_categories]] <span class="badge badge-default pull-right formatted-number" title="{counts.categoriesWatched}">{counts.categoriesWatched}</span></a></li>
        <li><a href="{config.relative_path}/user/{userslug}/bookmarks">[[user:bookmarks]] <span class="badge badge-default pull-right formatted-number" title="{counts.bookmarks}">{counts.bookmarks}</span></a></li>
        <li><a href="{config.relative_path}/user/{userslug}/watched">[[user:watched]] <span class="badge badge-default pull-right formatted-number" title="{counts.watched}">{counts.watched}</span></a></li>
        <li><a href="{config.relative_path}/user/{userslug}/ignored">[[user:ignored]] <span class="badge badge-default pull-right formatted-number" title="{counts.ignored}">{counts.ignored}</span></a></li>
        <!-- IF !reputation:disabled -->
        <li><a href="{config.relative_path}/user/{userslug}/upvoted">[[global:upvoted]] <span class="badge badge-default pull-right formatted-number" title="{counts.upvoted}">{counts.upvoted}</span></a></li>
        <!-- IF !downvote:disabled -->
        <li><a href="{config.relative_path}/user/{userslug}/downvoted">[[global:downvoted]] <span class="badge badge-default pull-right formatted-number" title="{counts.downvoted}">{counts.downvoted}</span></a></li>
        <!-- ENDIF !downvote:disabled -->
        <!-- ENDIF !reputation:disabled -->
        <li><a href="{config.relative_path}/user/{userslug}/uploads">[[global:uploads]] <span class="badge badge-default pull-right formatted-number" title="{counts.uploaded}">{counts.uploaded}</span></a></li>
        <!-- ENDIF canEdit -->

        {{{each profile_links}}}
        <!-- IF @first -->
        <li role="separator" class="divider"></li>
        <!-- ENDIF @first -->
        <li id="{profile_links.id}" class="plugin-link <!-- IF profile_links.public -->public<!-- ELSE -->private<!-- ENDIF profile_links.public -->"><a href="{config.relative_path}/user/{userslug}/{profile_links.route}"><!-- IF ../icon --><i class="fa fa-fw {profile_links.icon}"></i> <!-- END -->{profile_links.name}</a></li>
        {{{end}}}
    </ul>
</div>


        <!-- IF allowCoverPicture -->
        <!-- IF canEdit -->
        <div class="controls">
            <span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>
            <span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>
            <span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>
        </div>
        <div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>
        <div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>
        <!-- ENDIF canEdit -->
        <!-- ENDIF allowCoverPicture -->
    </div>
</div>


    <div class="row">
        <h1>{title}</h1>

        <!-- IF !posts.length -->
            <div class="alert alert-warning text-center">{noItemsFoundKey}</div>
        <!-- ENDIF !posts.length -->

        <div class="col-xs-12">
            <ul component="posts" class="posts-list" data-nextstart="{nextStart}">
    {{{each posts}}}
    <li component="post" class="posts-list-item row<!-- IF ../deleted --> deleted<!-- ELSE --><!-- IF ../topic.deleted --> deleted<!-- ENDIF --><!-- ENDIF -->{{{ if ../topic.scheduled }}} scheduled{{{ end }}}" data-pid="{../pid}" data-uid="{../uid}">
    <div class="col-lg-11 col-sm-10 col-xs-9 post-body">
        <a class="topic-title" href="{config.relative_path}/post/{../pid}">
            <!-- IF !../isMainPost -->RE: <!-- ENDIF -->{../topic.title}
        </a>

        <div component="post/content" class="content">
            {../content}
        </div>

        <small class="topic-category"><a href="{config.relative_path}/category/{../category.slug}">[[global:posted_in, {../category.name}]]</a></small>

        {{{ if ../isMainPost }}}
        {{{ if ../topic.tags.length }}}
        <span class="tag-list">
            {{{ each ../topic.tags }}}
            <a href="{config.relative_path}/tags/{topic.tags.valueEncoded}"><span class="tag tag-item tag-class-{topic.tags.class}">{topic.tags.valueEscaped}</span></a>
            {{{ end }}}
        </span>
        {{{ end }}}
        {{{ end }}}

        <div class="post-info">
            <a href="{config.relative_path}/user/{../user.userslug}">{buildAvatar(../user, "md", true, "user-img not-responsive")}</a>

            <div class="post-author">
                <a href="{config.relative_path}/user/{../user.userslug}">{../user.displayname}</a><br />
                <span class="timeago" title="{../timestampISO}"></span>
            </div>
        </div>
    </div>
</li>
    {{{end}}}
</ul>
<div component="posts/loading" class="loading-indicator text-center hidden">
    <i class="fa fa-refresh fa-spin"></i>
</div>

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
</div>