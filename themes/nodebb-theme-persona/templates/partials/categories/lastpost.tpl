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
