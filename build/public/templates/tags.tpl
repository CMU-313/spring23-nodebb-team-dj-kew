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
<div class="tags">
    <!-- IF displayTagSearch -->
    <!-- IF tags.length -->
    <div class="row">
        <div class="col-lg-12">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="[[global:search]]" id="tag-search">
                <span class="input-group-addon search-button"><i class="fa fa-search"></i></span>
            </div>
        </div>
    </div>
    <!-- ENDIF tags.length -->
    <!-- ENDIF displayTagSearch -->

    <!-- IF !tags.length -->
    <div class="alert alert-warning">[[tags:no_tags]]</div>
    <!-- ENDIF !tags.length -->

    <div class="category row">
        <div class="col-md-12 clearfix tag-list" data-nextstart="{nextStart}">
            {{{each tags}}}
<h3 class="pull-left tag-container">
    <a href="{config.relative_path}/tags/{tags.valueEncoded}" data-value="{tags.valueEscaped}"><span class="tag-item tag-class-{tags.class}" data-tag="{tags.valueEscaped}">{tags.valueEscaped}</span><span class="tag-topic-count human-readable-number" title="{tags.score}">{tags.score}</span></a>
</h3>
{{{end}}}
        </div>
    </div>
</div>
