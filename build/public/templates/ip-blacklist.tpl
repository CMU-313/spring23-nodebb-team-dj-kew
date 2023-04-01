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


<div class="row ip-blacklist">
    <div class="col-lg-12">
        <p class="lead">
            [[ip-blacklist:lead]]
        </p>
        <p>
            [[ip-blacklist:description]]
        </p>

        <div class="row">
            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-heading">[[ip-blacklist:active-rules]]</div>
                    <div class="panel-body">
                        <textarea id="blacklist-rules">{rules}</textarea><br />
                        <button type="button" class="btn btn-warning" data-action="test">
                            <i class="fa fa-bomb"></i> [[ip-blacklist:validate]]
                        </button>
                        <button type="button" class="btn btn-primary" data-action="apply">
                            <i class="fa fa-save"></i> [[ip-blacklist:apply]]
                        </button>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">[[ip-blacklist:hints]]</div>
                    <div class="panel-body">
                        <p>
                            [[ip-blacklist:hint-1]]
                        </p>
                        <p>
                            [[ip-blacklist:hint-2]]
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div><canvas id="blacklist:hourly" height="250"></canvas></div>
                    </div>
                    <div class="panel-footer"><small>[[ip-blacklist:analytics.blacklist-hourly]]</small></div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-body">
                        <div><canvas id="blacklist:daily" height="250"></canvas></div>
                    </div>
                    <div class="panel-footer"><small>[[ip-blacklist:analytics.blacklist-daily]]</small></div>
                </div>
            </div>
        </div>
    </div>

</div>