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


<div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <p class="lead text-center">
            {{{ if register }}}[[register:interstitial.intro-new]]{{{ else }}}[[register:interstitial.intro]]{{{ end }}}
        </p>

        <!-- IF errors.length -->
        <div class="alert alert-warning">
            <p>
                [[register:interstitial.errors-found]]
            </p>
            <ul>
                {{{each errors}}}
                <li>{@value}</li>
                {{{end}}}
            </ul>
        </div>
        <!-- ENDIF errors.length -->
    </div>
</div>

<form role="form" method="post" action="{config.relative_path}/register/complete/?_csrf={config.csrf_token}" enctype="multipart/form-data">
    {{{each sections}}}
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
            <div class="panel panel-default">
                <div class="panel-body">
                    {@value}
                </div>
            </div>
        </div>
    </div>
    {{{end}}}

    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
            <div class="btn-group btn-block">
                <button class="btn btn-block btn-primary">[[topic:composer.submit]]</button>
                <button class="btn btn-block btn-link" formaction="{config.relative_path}/register/abort?_csrf={config.csrf_token}">{{{ if register }}}[[register:cancel_registration]]{{{ else }}}[[modules:bootbox.cancel]]{{{ end }}}</button>
            </div>
        </div>
    </div>
</form>