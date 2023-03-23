
<div class="notifications">

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
        <div class="dropdown pull-right">
            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
                <i class="fa fa-eye"></i>
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu1">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-ajaxify="false" component="notifications/mark_all">[[notifications:mark_all_read]]</a></li>
            </ul>
        </div>

        <div class="dropdown pull-right">
            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                <!-- IF selectedFilter -->{selectedFilter.name}<!-- ENDIF selectedFilter --> <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
                {{{each filters}}}
                <!-- IF filters.separator -->
                <li role="separator" class="divider"></li>
                <!-- ELSE -->
                <li role="presentation" class="category">
                    <a role="menu-item" href="{config.relative_path}/notifications?filter={filters.filter}"><i class="fa fa-fw <!-- IF filters.selected -->fa-check<!-- ENDIF filters.selected -->"></i> {filters.name}</a>
                </li>
                <!-- ENDIF filters.separator -->
                {{{end}}}
            </ul>
        </div>
    </div>

    <hr />

    <div class="alert alert-info <!-- IF notifications.length -->hidden<!-- ENDIF notifications.length -->">
        [[notifications:no_notifs]]
    </div>

    <ul class="notifications-list" data-nextstart="{nextStart}">
    {{{each notifications}}}
        <li data-nid="{notifications.nid}" class="{notifications.readClass}" component="notifications/item">
            <!-- IF notifications.image -->
            <!-- IF notifications.from -->
            <a class="pull-left" href="{config.relative_path}/user/{notifications.user.userslug}"><img class="user-img" src="{notifications.image}" /></a>
            <!-- ENDIF notifications.from -->
            <!-- ELSE -->
            <a class="pull-left" href="{config.relative_path}/user/{notifications.user.userslug}"><div class="pull-left user-icon user-img" style="background-color: {notifications.user.icon:bgColor};">{notifications.user.icon:text}</div></a>
            <!-- ENDIF notifications.image -->

            <p>
                <a component="notifications/item/link" href="{notifications.path}">{notifications.bodyShort}</a>
            </p>
            <p class="timestamp">
                <span class="timeago" title="{notifications.datetimeISO}"></span>
            </p>
        </li>
    {{{end}}}
    </ul>
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


