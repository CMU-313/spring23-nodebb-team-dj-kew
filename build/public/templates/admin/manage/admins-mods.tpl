<div class="admins-mods">
    <h4><!-- IF admins.icon --><i class="fa {admins.icon}"></i> <!-- ENDIF admins.icon -->[[admin/manage/admins-mods:administrators]]</h4>
    <div class="administrator-area">
    <!-- BEGIN admins.members -->
        <div class="user-card pull-left" data-uid="{admins.members.uid}">
            <!-- IF admins.members.picture -->
            <img class="avatar avatar-sm" src="{admins.members.picture}" alt="" />
            <!-- ELSE -->
            <div class="avatar avatar-sm" style="background-color: {admins.members.icon:bgColor};">{admins.members.icon:text}</div>
            <!-- ENDIF admins.members.picture -->
            <a href="{config.relative_path}/user/{admins.members.userslug}">{admins.members.username}</a>
            <i class="remove-user-icon fa fa-times" role="button"></i>
        </div>
    <!-- END admins.members -->
    </div>
    <input id="admin-search" class="form-control" placeholder="[[admin/manage/admins-mods:add-administrator]]" />

    <br/>

    <h4><!-- IF globalMods.icon --><i class="fa {globalMods.icon}"></i> <!-- ENDIF globalMods.icon -->[[admin/manage/admins-mods:global-moderators]]</h4>
    <div class="global-moderator-area">
    <!-- BEGIN globalMods.members -->
        <div class="user-card pull-left" data-uid="{globalMods.members.uid}">
            <!-- IF globalMods.members.picture -->
            <img class="avatar avatar-sm" src="{globalMods.members.picture}" alt="" />
            <!-- ELSE -->
            <div class="avatar avatar-sm" style="background-color: {globalMods.members.icon:bgColor};">{globalMods.members.icon:text}</div>
            <!-- ENDIF globalMods.members.picture -->
            <a href="{config.relative_path}/user/{globalMods.members.userslug}">{globalMods.members.username}</a>
            <i class="remove-user-icon fa fa-times" role="button"></i>
        </div>
    <!-- END globalMods.members -->
    </div>

    <div id="no-global-mods-warning" class="<!-- IF globalMods.members.length -->hidden<!-- ENDIF globalMods.members.length -->">[[admin/manage/admins-mods:no-global-moderators]]</div>

    <input id="global-mod-search" class="form-control" placeholder="[[admin/manage/admins-mods:add-global-moderator]]" />

    <br/>

    <h4 id="moderators-title">[[admin/manage/admins-mods:moderators]]</h4>

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


    <div component="category-selector" class="btn-group bottom-sheet">
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
</div>

    {{{ if !categoryMods.length }}}
    <div><p class="well">[[admin/manage/admins-mods:no-sub-categories]]</p></div>
    {{{ end }}}

    {{{ each categoryMods }}}
    <div class="categories category-wrapper category-depth-{categoryMods.depth}">
    <h4>{{{ if categoryMods.icon }}}<i class="fa {categoryMods.icon}"></i> {{{ end }}}{categoryMods.name} {{{ if categoryMods.subCategoryCount }}}<small><a href="{config.relative_path}/admin/manage/admins-mods?cid={categoryMods.cid}#moderators-title">[[admin/manage/admins-mods:subcategories, {categoryMods.subCategoryCount}]]</a></small>{{{ else }}}{{{ end }}}{{{if categoryMods.disabled}}}<span class="badge badge-primary">[[admin/manage/admins-mods:disabled]]</span>{{{end}}}</h4>
    <div class="moderator-area" data-cid="{categoryMods.cid}">
        {{{ each categoryMods.moderators }}}
            <div class="user-card pull-left" data-uid="{categoryMods.moderators.uid}">
                {{{ if  categoryMods.moderators.picture }}}
                <img class="avatar avatar-sm" src="{categoryMods.moderators.picture}" alt="" />
                {{{ else }}}
                <div class="avatar avatar-sm" style="background-color: {categoryMods.moderators.icon:bgColor};">{categoryMods.moderators.icon:text}</div>
                {{{ end }}}
                <a href="{config.relative_path}/user/{categoryMods.moderators.userslug}">{categoryMods.moderators.username}</a>
                <i class="remove-user-icon fa fa-times" role="button"></i>
            </div>
        {{{ end }}}
    </div>

    <div data-cid="{categoryMods.cid}" class="no-moderator-warning {{{ if categoryMods.moderators.length }}}hidden{{{ end }}}">[[admin/manage/admins-mods:no-moderators]]</div>

    <input data-cid="{categoryMods.cid}" class="form-control moderator-search" placeholder="[[admin/manage/admins-mods:add-moderator]]" />
    </div>
    <br/>
    {{{ end }}}
    <div>
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
