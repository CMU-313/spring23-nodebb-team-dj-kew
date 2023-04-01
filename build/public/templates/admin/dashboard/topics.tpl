<div class="row dashboard">
    <div class="col-xs-12">
        <a class="btn btn-link" href="{config.relative_path}/admin/dashboard">
            <i class="fa fa-chevron-left"></i>
            [[admin/dashboard:back-to-dashboard]]
        </a>

        <div class="panel panel-default" id="analytics-panel">
    <div class="panel-heading">
        [[admin/dashboard:forum-traffic]]
        <div class="pull-right">
            <a href="#"><i class="fa fa-fw fa-expand"></i></a>
        </div>
        <div class="pull-right">
            <a target="_blank" id="view-as-json" href="{config.relative_path}/api/v3/admin/analytics/{set}?type=hourly"><i class="fa fa-fw fa-terminal"></i></a>
        </div>
    </div>
    <div class="panel-body">
        <div class="graph-container" id="analytics-traffic-container">
            <canvas id="analytics-traffic" width="100%" height="400"></canvas>
        </div>
        <hr/>
        <div class="row">
            <div class="col-sm-3 hidden-xs text-center pageview-stats">
                <div><strong id="pageViewsThirty">{{{ if summary.month }}}{./summary.month}{{{ else }}}0{{{ end }}}</strong></div>
                <div><a href="#" class="updatePageviewsGraph" data-action="updateGraph" data-units="days" data-amount="30">[[admin/dashboard:page-views-thirty]]</a></div>
            </div>
            <div class="col-sm-3 text-center pageview-stats">
                <div><strong id="pageViewsSeven">{{{ if summary.week }}}{./summary.week}{{{ else }}}0{{{ end }}}</strong></div>
                <div><a href="#" class="updatePageviewsGraph" data-action="updateGraph" data-units="days" data-amount="7">[[admin/dashboard:page-views-seven]]</a></div>
            </div>
            <div class="col-sm-3 hidden-xs text-center pageview-stats">
                <div><strong id="pageViewsPastDay">{{{ if summary.day }}}{./summary.day}{{{ else }}}0{{{ end }}}</strong></div>
                <div><a href="#" class="updatePageviewsGraph" data-action="updateGraph" data-units="hours" data-amount="24">[[admin/dashboard:page-views-last-day]]</a></div>
            </div>
            <div class="col-sm-3 text-center pageview-stats">
                <div><strong><i class="fa fa-clock-o"></i></strong></div>
                <div><a href="#" class="updatePageviewsGraph" data-action="updateGraph" data-units="custom">[[admin/dashboard:page-views-custom]]</a></div>
            </div>
        </div>
    </div>
</div>
        <div class="table-responsive">
    <table class="table table-striped">
        <thead>
            <tr>
                <th></th>
                <th class="text-right">[[admin/dashboard:stats.yesterday]]</th>
                <th class="text-right">[[admin/dashboard:stats.today]]</th>
                <th></th>
                <th class="text-right">[[admin/dashboard:stats.last-week]]</th>
                <th class="text-right">[[admin/dashboard:stats.this-week]]</th>
                <th></th>
                <th class="text-right">[[admin/dashboard:stats.last-month]]</th>
                <th class="text-right">[[admin/dashboard:stats.this-month]]</th>
                <th></th>
                <th class="text-right">[[admin/dashboard:stats.all]]</th>
            </tr>
        </thead>
        <tbody>
            <!-- BEGIN stats -->
            <tr>
                <td>
                    <strong>
                        {{{ if ../href }}}
                            <a href="{../href}">{../name}</a>
                        {{{ else }}}
                            {../name}
                        {{{ end }}}
                    </strong>
                </td>
                <td class="text-right formatted-number">{stats.yesterday}</td>
                <td class="text-right formatted-number">{stats.today}</td>
                <td class="{stats.dayTextClass}"><small>{stats.dayIncrease}%</small></td>

                <td class="text-right formatted-number">{stats.lastweek}</td>
                <td class="text-right formatted-number">{stats.thisweek}</td>
                <td class="{stats.weekTextClass}"><small>{stats.weekIncrease}%</small></td>

                <td class="text-right formatted-number">{stats.lastmonth}</td>
                <td class="text-right formatted-number">{stats.thismonth}</td>
                <td class="{stats.monthTextClass}"><small>{stats.monthIncrease}%</small></td>

                <td class="text-right formatted-number">{stats.alltime}</td>
            </tr>
            <!-- END stats -->
        </tbody>
    </table>
</div>

        <table class="table table-striped topics-list">
            <tbody>
                {{{ if !topics.length}}}
                <tr>
                    <td colspan=4" class="text-center"><em>[[admin/dashboard:details.no-topics]]</em></td>
                </tr>
                {{{ end }}}
                {{{ each topics }}}
                <tr>
                    <td><a href="{config.relative_path}/topics/{../slug}">{../title}</a></td>
                    <td>[[topic:posted_by, {../user.username}]]</td>
                    <td><span class="timeago" data-title="{../timestampISO}"></span></td>
                </tr>
                {{{ end }}}
            </tbody>
        </table>
    </div>
</div>