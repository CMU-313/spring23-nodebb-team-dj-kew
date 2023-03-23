<div class="topic-main-buttons pull-right inline-block">
    <span class="loading-indicator btn pull-left hidden" done="0">
        <span class="hidden-xs">[[topic:loading_more_posts]]</span> <i class="fa fa-refresh fa-spin"></i>
    </span>

    <!-- IF loggedIn -->
    <button component="topic/mark-unread" class="btn btn-sm btn-default" title="[[topic:mark_unread]]">
        <i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"></span>
    </button>
    <!-- ENDIF loggedIn -->

    <!-- IF config.loggedIn -->
<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">
    <button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button"
        {{{if isFollowing}}}title="[[topic:watching]]"{{{end}}}
        {{{if isNotFollowing}}}title="[[topic:not-watching]]"{{{end}}}
        {{{if isIgnoring}}}title="[[topic:ignoring]]"{{{end}}}
    >
        <span component="topic/following/menu" <!-- IF !isFollowing -->class="hidden"<!-- ENDIF !isFollowing -->><i class="fa fa-fw fa-bell-o"></i></span>

        <span component="topic/not-following/menu" <!-- IF !isNotFollowing -->class="hidden"<!-- ENDIF !isNotFollowing -->><i class="fa fa-fw fa-bell-slash-o"></i></span>

        <span component="topic/ignoring/menu" <!-- IF !isIgnoring -->class="hidden"<!-- ENDIF !isIgnoring -->><i class="fa fa-fw fa-eye-slash"></i></span>

    </button>
    <ul class="dropdown-menu dropdown-menu-right">
        <li><a href="#" component="topic/following"><i component="topic/following/check" class="fa fa-fw <!-- IF isFollowing -->fa-check<!-- ENDIF isFollowing -->"></i><i class="fa fa-fw fa-bell-o"></i> [[topic:watching]]<p class="help-text hidden-xs"><small>[[topic:watching.description]]</small></p></a></li>
        <li><a href="#" component="topic/not-following"><i component="topic/not-following/check" class="fa fa-fw <!-- IF isNotFollowing -->fa-check<!-- ENDIF isNotFollowing -->"></i><i class="fa fa-fw fa-bell-slash-o"></i> [[topic:not-watching]]<p class="help-text hidden-xs"><small>[[topic:not-watching.description]]</small></p></a></li>
        <li><a href="#" component="topic/ignoring"><i component="topic/ignoring/check" class="fa fa-fw <!-- IF isIgnoring -->fa-check<!-- ENDIF isIgnoring -->"></i><i class="fa fa-fw fa-eye-slash"></i> [[topic:ignoring]]<p class="help-text hidden-xs"><small>[[topic:ignoring.description]]</small></p></a></li>
    </ul>
</div>
<!-- ENDIF config.loggedIn -->

    <div title="[[topic:sort_by]]" class="btn-group bottom-sheet hidden-xs" component="thread/sort">
    <button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button">
    <span><i class="fa fa-fw fa-sort"></i></span></button>
    <ul class="dropdown-menu dropdown-menu-right">
        <li><a href="#" class="oldest_to_newest" data-sort="oldest_to_newest"><i class="fa fa-fw"></i> [[topic:oldest_to_newest]]</a></li>
        <li><a href="#" class="newest_to_oldest" data-sort="newest_to_oldest"><i class="fa fa-fw"></i> [[topic:newest_to_oldest]]</a></li>
        <li><a href="#" class="most_votes" data-sort="most_votes"><i class="fa fa-fw"></i> [[topic:most_votes]]</a></li>
    </ul>
</div>


    <div class="inline-block">
    <!-- IF privileges.view_thread_tools -->
<div title="[[topic:thread_tools.title]]" class="btn-group thread-tools bottom-sheet">
    <button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button">
        <i class="fa fa-fw fa-gear"></i>
    </button>
    <ul class="dropdown-menu dropdown-menu-right"></ul>
</div>
<!-- ENDIF privileges.view_thread_tools -->
    </div>
    <div component="topic/reply/container" class="btn-group action-bar bottom-sheet <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">
    <a href="{config.relative_path}/compose?tid={tid}&title={title}" class="btn btn-sm btn-primary" component="topic/reply" data-ajaxify="false" role="button"><i class="fa fa-reply visible-xs-inline"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"> [[topic:reply]]</span></a>
    <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown">
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu pull-right" role="menu">
        <li><a href="#" component="topic/reply-as-topic">[[topic:reply-as-topic]]</a></li>
    </ul>
</div>

<!-- IF loggedIn -->
<!-- IF !privileges.topics:reply -->
<!-- IF locked -->
<a component="topic/reply/locked" class="btn btn-sm btn-primary" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
<!-- ENDIF locked -->
<!-- ENDIF !privileges.topics:reply -->

<!-- IF !locked -->
<a component="topic/reply/locked" class="btn btn-sm btn-primary hidden" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
<!-- ENDIF !locked -->

<!-- ELSE -->

<!-- IF !privileges.topics:reply -->
<a component="topic/reply/guest" href="{config.relative_path}/login" class="btn btn-sm btn-primary">[[topic:guest-login-reply]]</a>
<!-- ENDIF !privileges.topics:reply -->
<!-- ENDIF loggedIn -->
</div>
