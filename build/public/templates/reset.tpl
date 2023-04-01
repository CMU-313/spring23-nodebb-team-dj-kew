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



<div class="alert alert-info">
    [[reset_password:enter_email]]
</div>

<div class="well">
    <div class="alert alert-success hide" id="success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        [[reset_password:password_reset_sent]]
    </div>
    <div class="alert alert-danger hide" id="error">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        [[reset_password:invalid_email]]
    </div>
    <form onsubmit="return false;">
        <input type="text" class="form-control input-block input-lg" placeholder="[[reset_password:enter_email_address]]" id="email" />

        <br />
        <button class="btn btn-primary btn-block btn-lg" id="reset" type="submit">[[reset_password:reset_password]]</button>
    </form>
</div>
