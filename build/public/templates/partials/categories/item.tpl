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
