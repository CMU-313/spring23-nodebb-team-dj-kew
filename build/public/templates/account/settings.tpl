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
        <div class="col-xs-12 col-md-6">
            <!-- IF !disableCustomUserSkins -->
            <h4>[[user:select-skin]]</h4>
            <div class="well">
                <select class="form-control" id="bootswatchSkin" data-property="bootswatchSkin">
                    {{{each bootswatchSkinOptions}}}
                    <option value="{bootswatchSkinOptions.value}" <!-- IF bootswatchSkinOptions.selected -->selected<!-- ENDIF bootswatchSkinOptions.selected -->>{bootswatchSkinOptions.name}</option>
                    {{{end}}}
                </select>
            </div>
            <!-- ENDIF !disableCustomUserSkins -->

            <!-- IF allowUserHomePage -->
            <h4>[[user:select-homepage]]</h4>
            <div class="well">
                <div class="form-group">
                    <label for="homePageRoute">[[user:homepage]]</label>
                    <select class="form-control" id="homePageRoute" data-property="homePageRoute">
                        <option value="none">None</option>
                        {{{each homePageRoutes}}}
                        <option value="{homePageRoutes.route}" <!-- IF homePageRoutes.selected -->selected="1"<!-- ENDIF homePageRoutes.selected -->>{homePageRoutes.name}</option>
                        {{{end}}}
                    </select>
                    <p class="help-block">[[user:homepage_description]]</p>
                </div>
                <div id="homePageCustom" class="form-group" style="display: none;">
                    <label for="homePageCustom">[[user:custom_route]]</label>
                    <input type="text" class="form-control" data-property="homePageCustom" id="homePageCustom" value="{settings.homePageRoute}"/>
                    <p class="help-block">[[user:custom_route_help]]</p>
                </div>
            </div>
            <!-- ENDIF allowUserHomePage -->

            <h4>[[global:privacy]]</h4>
            <div class="well">
                <!-- IF !hideEmail -->
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-property="showemail" <!-- IF settings.showemail -->checked <!-- ENDIF settings.showemail -->/> <strong>[[user:show_email]]</strong>
                    </label>
                </div>
                <!-- ENDIF !hideEmail -->

                <!-- IF !hideFullname -->
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-property="showfullname" <!-- IF settings.showfullname -->checked<!-- ENDIF settings.showfullname -->/> <strong>[[user:show_fullname]]</strong>
                    </label>
                </div>
                <!-- ENDIF !hideFullname -->
                <!-- IF !config.disableChat -->
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-property="restrictChat" <!-- IF settings.restrictChat -->checked<!-- ENDIF settings.restrictChat -->/> <strong>[[user:restrict_chats]]</strong>
                    </label>
                </div>
                <!-- ENDIF !config.disableChat -->
            </div>

            <h4>[[user:browsing]]</h4>
            <div class="well">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-property="openOutgoingLinksInNewTab" <!-- IF settings.openOutgoingLinksInNewTab -->checked<!-- ENDIF settings.openOutgoingLinksInNewTab -->/> <strong>[[user:open_links_in_new_tab]]</strong>
                    </label>
                </div>
                <!-- IF inTopicSearchAvailable -->
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-property="topicSearchEnabled" <!-- IF settings.topicSearchEnabled -->checked<!-- ENDIF settings.topicSearchEnabled -->/> <strong>[[user:enable_topic_searching]]</strong>
                    </label>
                </div>
                <p class="help-block">[[user:topic_search_help]]</p>
                <!-- ENDIF inTopicSearchAvailable -->
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-property="updateUrlWithPostIndex" {{{ if settings.updateUrlWithPostIndex }}}checked{{{ end }}}/> <strong>[[user:update_url_with_post_index]]</strong>
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-property="scrollToMyPost" <!-- IF settings.scrollToMyPost -->checked<!-- ENDIF settings.scrollToMyPost -->/> <strong>[[user:scroll_to_my_post]]</strong>
                    </label>
                </div>
            </div>

            <h4>[[global:pagination]]</h4>
            <div class="well">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-property="usePagination" <!-- IF settings.usePagination -->checked<!-- ENDIF settings.usePagination -->> <strong>[[user:paginate_description]]</strong>
                    </label>
                </div>

                <strong>[[user:topics_per_page]] ([[user:max_items_per_page, {maxTopicsPerPage}]])</strong><br /> <input type="text" class="form-control" data-property="topicsPerPage" value="{settings.topicsPerPage}"><br />
                <strong>[[user:posts_per_page]] ([[user:max_items_per_page, {maxPostsPerPage}]])</strong><br /> <input type="text" class="form-control" data-property="postsPerPage" value="{settings.postsPerPage}"><br />
            </div>

            <!-- IF !disableEmailSubscriptions -->
            <h4>[[global:email]]</h4>
            <div class="well">
                <div class="form-group">
                    <label for="dailyDigestFreq">[[user:digest_label]]</label>
                    <select class="form-control" id="dailyDigestFreq" data-property="dailyDigestFreq" autocomplete="off">
                        {{{each dailyDigestFreqOptions}}}
                        <option value="{dailyDigestFreqOptions.value}" <!-- IF dailyDigestFreqOptions.selected -->selected="1"<!-- ENDIF dailyDigestFreqOptions.selected -->>{dailyDigestFreqOptions.name}</option>
                        {{{end}}}
                    </select>
                    <p class="help-block">[[user:digest_description]]</p>
                </div>
            </div>
            <!-- ENDIF !disableEmailSubscriptions -->

            {{{each customSettings}}}
            <h4>{customSettings.title}</h4>
            <div class="well">
                {customSettings.content}
            </div>
            {{{end}}}

        </div>

        <div class="col-xs-12 col-md-6">
            <h4>[[global:language]]</h4>
            <div class="well">
                <div class="row">
                    <div class="form-group col-lg-12">
                        <select data-property="userLang" class="form-control">
                            {{{each languages}}}
                            <option value="{languages.code}" <!-- IF languages.selected -->selected<!-- ENDIF languages.selected -->>{languages.name} ({languages.code})</option>
                            {{{end}}}
                        </select>
                    </div>
                </div>
                <!-- IF isAdmin -->
                <!-- IF isSelf -->
                <label>[[user:acp_language]]</label>
                <div class="row">
                    <div class="form-group col-lg-12">
                        <select data-property="acpLang" class="form-control">
                            {{{each acpLanguages}}}
                            <option value="{acpLanguages.code}" <!-- IF acpLanguages.selected -->selected<!-- ENDIF acpLanguages.selected -->>{acpLanguages.name} ({acpLanguages.code})</option>
                            {{{end}}}
                        </select>
                    </div>
                </div>
                <!-- ENDIF isSelf -->
                <!-- ENDIF isAdmin -->
            </div>

            <h4>[[topic:watch]]</h4>
            <div class="well">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-property="followTopicsOnCreate" <!-- IF settings.followTopicsOnCreate -->checked <!-- ENDIF settings.followTopicsOnCreate -->/> <strong>[[user:follow_topics_you_create]]</strong>
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" data-property="followTopicsOnReply" <!-- IF settings.followTopicsOnReply -->checked<!-- ENDIF settings.followTopicsOnReply -->/> <strong>[[user:follow_topics_you_reply_to]]</strong>
                    </label>
                </div>
                <div class="form-group">
                    <label>[[user:default-category-watch-state]]</label>
                    <select class="form-control" data-property="categoryWatchState">
                        <option value="watching" <!-- IF categoryWatchState.watching -->selected<!-- ENDIF categoryWatchState.watching -->>[[category:watching]]</option>
                        <option value="notwatching" <!-- IF categoryWatchState.notwatching -->selected<!-- ENDIF categoryWatchState.notwatching -->>[[category:not-watching]]</option>
                        <option value="ignoring" <!-- IF categoryWatchState.ignoring -->selected<!-- ENDIF categoryWatchState.ignoring -->>[[category:ignoring]]</option>
                    </select>
                </div>
            </div>


            <h4>[[user:notifications]]</h4>
            <div class="well">
                {{{each notificationSettings}}}
                <div class="row">
                    <div class="col-xs-7">
                        <label>{notificationSettings.label}</label>
                    </div>
                    <div class="form-group col-xs-5">
                        <select class="form-control" data-property="{notificationSettings.name}">
                            <option value="none" <!-- IF notificationSettings.none -->selected<!-- ENDIF notificationSettings.none -->>[[notifications:none]]</option>
                            <option value="notification" <!-- IF notificationSettings.notification -->selected<!-- ENDIF notificationSettings.notification -->>[[notifications:notification_only]]</option>
                            <option value="email" <!-- IF notificationSettings.email -->selected<!-- ENDIF notificationSettings.email -->>[[notifications:email_only]]</option>
                            <option value="notificationemail" <!-- IF notificationSettings.notificationemail -->selected<!-- ENDIF notificationSettings.notificationemail -->>[[notifications:notification_and_email]]</option>
                        </select>
                    </div>
                </div>
                {{{end}}}

                <div class="row">
                    <div class="col-xs-7">
                        <label for="upvote-notif-freq">[[user:upvote-notif-freq]]</label>
                    </div>
                    <div class="form-group col-xs-5">
                        <select class="form-control" id="upvote-notif-freq" name="upvote-notif-freq" data-property="upvoteNotifFreq">
                            {{{each upvoteNotifFreq}}}
                            <option value="{upvoteNotifFreq.name}" <!-- IF upvoteNotifFreq.selected -->selected<!-- ENDIF upvoteNotifFreq.selected -->>
                                [[user:upvote-notif-freq.{upvoteNotifFreq.name}]]
                            </option>
                            {{{end}}}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="form-actions">
        <a id="submitBtn" href="#" class="btn btn-primary">[[global:save_changes]]</a>
    </div>
</div>

