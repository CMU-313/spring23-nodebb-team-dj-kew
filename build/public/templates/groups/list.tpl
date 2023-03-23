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
<div class="groups list">
    <div class="row">
        <div class="col-lg-4">
            <!-- IF allowGroupCreation -->
            <button class="btn btn-primary" data-action="new"><i class="fa fa-plus"></i> [[groups:new_group]]</button>
            <!-- ENDIF allowGroupCreation -->
        </div>
        <div class="col-lg-8">
            <div class="row">
                <div class="col-xs-5 col-md-3 text-left pull-right">
                    <select class="form-control" id="search-sort">
                        <option value="alpha">[[groups:details.group_name]]</option>
                        <option value="count">[[groups:details.member_count]]</option>
                        <option value="date">[[groups:details.creation_date]]</option>
                    </select>
                </div>
                <div class="col-xs-7 col-md-5 text-left pull-right">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="[[global:search]]" name="query" value="" id="search-text">
                        <span id="search-button" class="input-group-addon search-button"><i class="fa fa-search"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr />

    <div component="groups/container" class="row" id="groups-list" data-nextstart={nextStart}>
        <!-- IF groups.length -->
            {{{each groups}}}
    <div class="col-lg-4 col-md-6 col-sm-12" component="groups/summary" data-slug="{groups.slug}">
        <div class="panel panel-default">
            <a href="{config.relative_path}/groups/{groups.slug}" class="panel-heading list-cover" style="<!-- IF groups.cover:thumb:url -->background-image: url({groups.cover:thumb:url});<!-- ENDIF groups.cover:thumb:url -->">
                <h3 class="panel-title">{groups.displayName} <small>{groups.memberCount}</small></h3>
            </a>
            <div class="panel-body">
                <ul class="members">
                    {{{each groups.members}}}
                    <li>
                        <a href="{config.relative_path}/user/{groups.members.userslug}">{buildAvatar(groups.members, "sm", true)}</a>
                    </li>
                    {{{end}}}
                    <!-- IF groups.truncated -->
                    <li class="truncated"><i class="fa fa-ellipsis-h"></i></li>
                    <!-- ENDIF groups.truncated -->
                </ul>
            </div>
        </div>
    </div>
    {{{end}}}
        <!-- ELSE -->
        <div class="col-xs-12">
            <div class="alert alert-warning">
            [[groups:no_groups_found]]
            </div>
        </div>
        <!-- ENDIF groups.length -->
    </div>
</div>
