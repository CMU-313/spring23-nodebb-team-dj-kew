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

<div class="users">

    <ul id="users-container" class="users-container">
        {{{each users}}}
<li class="users-box registered-user" data-uid="{users.uid}">
    <a href="{config.relative_path}/user/{users.userslug}">{buildAvatar(users, "lg", true)}</a>
    <br/>
    <div class="user-info">
        <span>
            <i component="user/status" class="fa fa-circle status {users.status}" title="[[global:{users.status}]]"></i>
            <a href="{config.relative_path}/user/{users.userslug}">{users.username}</a>
        </span>
        <br/>

        <!-- IF section_online -->
        <div class="lastonline">
            <span class="timeago" title="{users.lastonlineISO}"></span>
        </div>
        <!-- ENDIF section_online -->

        <!-- IF section_joindate -->
        <div class="joindate">
            <span class="timeago" title="{users.joindateISO}"></span>
        </div>
        <!-- ENDIF section_joindate -->

        <!-- IF section_sort-reputation -->
        <div class="reputation">
            <i class="fa fa-star"></i>
            <span class="formatted-number">{users.reputation}</span>
        </div>
        <!-- ENDIF section_sort-reputation -->

        <!-- IF section_sort-posts -->
        <div class="post-count">
            <i class="fa fa-pencil"></i>
            <span class="formatted-number">{users.postcount}</span>
        </div>
        <!-- ENDIF section_sort-posts -->

        <!-- IF section_flagged -->
        <div class="flag-count">
            <i class="fa fa-flag"></i>
            <span><a class="formatted-number" href="{config.relative_path}/flags?targetUid={users.uid}">{users.flags}</a></span>
        </div>
        <!-- ENDIF section_flagged -->
    </div>
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