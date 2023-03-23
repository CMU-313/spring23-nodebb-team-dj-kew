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


<div class="search">
    <div class="row">
        <div class="col-xs-12">
            <form id="advanced-search">
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6">
                            <label>[[global:search]]</label>
                            <input type="text" class="form-control" id="search-input" placeholder="[[global:search]]">
                        </div>
                        <div class="col-md-2">
                            <label>[[search:in]]</label>
                            <select id="search-in" class="form-control">
                                <option value="titlesposts">[[search:titles-posts]]</option>
                                <option value="titles">[[search:titles]]</option>
                                <option value="posts">[[global:posts]]</option>
                                <option value="categories">[[global:header.categories]]</option>
                                {{{if privileges.search:users}}}
                                <option value="users">[[global:users]]</option>
                                {{{end}}}
                                {{{if privileges.search:tags}}}
                                <option value="tags">[[tags:tags]]</option>
                                {{{end}}}
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label>[[search:match-words]]</label>
                            <select id="match-words-filter" class="form-control">
                                <option value="all">[[search:all]]</option>
                                <option value="any">[[search:any]]</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label>&nbsp;</label>
                            <button type="submit" class="btn btn-primary form-control">[[global:search]]</button>
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading" data-toggle="collapse" data-target=".search-options">
                        <h3 class="panel-title"><i class="fa fa-sort"></i> [[search:advanced-search]]</h3>
                    </div>
                    <div class="panel-body search-options collapse <!-- IF expandSearch -->in<!-- ENDIF expandSearch -->">
                        <div class="form-group post-search-item">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>[[search:in-categories]]</label>
                                    <select multiple class="form-control" id="posted-in-categories" size="{allCategoriesCount}">
                                        {{{each allCategories}}}
                                        <option value="{allCategories.value}">{allCategories.text}</option>
                                        {{{end}}}
                                    </select>
                                    <input type="checkbox" id="search-children"> [[search:search-child-categories]]
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group post-search-item">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>[[search:posted-by]]</label>
                                                <input type="text" class="form-control" id="posted-by-user" placeholder="[[search:posted-by]]">
                                            </div>
                                            <div class="col-md-6">
                                                <label>[[search:has-tags]]</label>
                                                <input type="text" class="form-control" id="has-tags">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group post-search-item">
                                        <label>[[search:reply-count]]</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <select id="reply-count-filter" class="form-control">
                                                    <option value="atleast">[[search:at-least]]</option>
                                                    <option value="atmost">[[search:at-most]]</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" id="reply-count">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group post-search-item">
                                        <label>[[search:post-time]]</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <select id="post-time-filter" class="form-control">
                                                    <option value="newer">[[search:newer-than]]</option>
                                                    <option value="older">[[search:older-than]]</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <select id="post-time-range" class="form-control">
                                                    <option value="">[[search:any-date]]</option>
                                                    <option value="86400">[[search:yesterday]]</option>
                                                    <option value="604800">[[search:one-week]]</option>
                                                    <option value="1209600">[[search:two-weeks]]</option>
                                                    <option value="2592000">[[search:one-month]]</option>
                                                    <option value="7776000">[[search:three-months]]</option>
                                                    <option value="15552000">[[search:six-months]]</option>
                                                    <option value="31104000">[[search:one-year]]</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group post-search-item">
                                        <label>[[search:sort-by]]</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <select id="post-sort-by" class="form-control">
                                                    <option value="relevance">[[search:relevance]]</option>
                                                    <option value="timestamp">[[search:post-time]]</option>
                                                    <option value="votes">[[search:votes]]</option>
                                                    <option value="topic.lastposttime">[[search:last-reply-time]]</option>
                                                    <option value="topic.title">[[search:topic-title]]</option>
                                                    <option value="topic.postcount">[[search:number-of-replies]]</option>
                                                    <option value="topic.viewcount">[[search:number-of-views]]</option>
                                                    <option value="topic.votes">[[search:topic-votes]]</option>
                                                    <option value="topic.timestamp">[[search:topic-start-date]]</option>
                                                    <option value="user.username">[[search:username]]</option>
                                                    <option value="category.name">[[search:category]]</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <select id="post-sort-direction" class="form-control">
                                                    <option value="desc">[[search:descending]]</option>
                                                    <option value="asc">[[search:ascending]]</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group post-search-item">
                                        <label>[[search:show-results-as]]</label>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="options" id="show-as-posts" checked>
                                                [[global:posts]]
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="options" id="show-as-topics">
                                                [[global:topics]]
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="btn-group">
                            <button type="submit" class="btn btn-primary">[[global:search]]</button>
                            <a class="btn btn-default" id="save-preferences" href="#">[[search:save-preferences]]</a>
                            <a class="btn btn-default" id="clear-preferences" href="#">[[search:clear-preferences]]</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="row">
        <div id="results" class="search-results col-md-12" data-search-query="{search_query}">
    <!-- IF matchCount -->
    <div class="alert alert-info">[[search:results_matching, {matchCount}, {search_query}, {time}]] </div>
    <!-- ELSE -->
    <!-- IF search_query -->
    <div class="alert alert-warning">[[search:no-matches]]</div>
    <!-- ENDIF search_query -->
    <!-- ENDIF matchCount -->

    {{{each posts}}}
    <div class="topic-row panel panel-default clearfix">
        <div class="panel-body">
            <a href="{config.relative_path}/user/{posts.user.userslug}">{buildAvatar(posts.user, "sm", true)}</a>
            <span class="search-result-text search-result-title"><a href="{config.relative_path}/post/{posts.pid}">{posts.topic.title}</a></span>
            <br/>
            <!-- IF showAsPosts -->
            <div class="search-result-text">
                {posts.content}
                <p class="fade-out"></p>
            </div>
            <!-- ENDIF showAsPosts -->

            <small class="post-info pull-right">
                <a href="{config.relative_path}/category/{posts.category.slug}"><span class="fa-stack" style="{function.generateCategoryBackground, posts.category}"><i style="color:{posts.category.color};" class="fa {posts.category.icon} fa-stack-1x"></i></span> {posts.category.name}</a> &bull;
                <span class="timeago" title="{posts.timestampISO}"></span>
            </small>
        </div>
    </div>
    {{{end}}}

    <!-- IF users.length -->
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
    <!-- ENDIF users.length -->

    <!-- IF tags.length -->
    {{{each tags}}}
<h3 class="pull-left tag-container">
    <a href="{config.relative_path}/tags/{tags.valueEncoded}" data-value="{tags.valueEscaped}"><span class="tag-item tag-class-{tags.class}" data-tag="{tags.valueEscaped}">{tags.valueEscaped}</span><span class="tag-topic-count human-readable-number" title="{tags.score}">{tags.score}</span></a>
</h3>
{{{end}}}
    <!-- ENDIF tags.length -->

    {{{ if categories.length }}}
    <ul class="categories">
        {{{each categories}}}
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
    {{{ end }}}

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
</div>
