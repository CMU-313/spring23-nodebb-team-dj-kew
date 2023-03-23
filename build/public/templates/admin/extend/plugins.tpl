{{{ if !canChangeState }}}
<div class="alert alert-warning">[[error:plugins-set-in-configuration]]</div>
{{{ end }}}
<ul class="nav nav-pills">
    <li>
        <a href="#trending" data-toggle="tab">
            [[admin/extend/plugins:trending]]
            <i class="fa fa-star"></i>
        </a>
    </li>
    <li class="active">
        <a href="#installed" data-toggle="tab">
            [[admin/extend/plugins:installed]]
            <span class="badge">{installedCount}</span>
        </a>
    </li>
    <li>
        <a href="#active" data-toggle="tab">
            [[admin/extend/plugins:active]]
            <span class="badge">{activeCount}</span>
        </a>
    </li>
    <li>
        <a href="#deactive" data-toggle="tab">
            [[admin/extend/plugins:inactive]]
            <span class="badge">{inactiveCount}</span>
        </a>
    </li>
    <li>
        <a href="#upgrade" data-toggle="tab">
            [[admin/extend/plugins:out-of-date]]
            <span class="badge">{upgradeCount}</span>
        </a>
    </li>
    <li>
        <a href="#download" data-toggle="tab">[[admin/extend/plugins:find-plugins]]</a>
    </li>
</ul>
<br />

<div class="plugins row">
    <div class="acp-sidebar col-lg-3 col-lg-push-9">
        <div class="panel panel-default">
            <div class="panel-heading">[[admin/extend/plugins:plugin-search]]</div>
            <div class="panel-body">
                <input autofocus class="form-control" type="text" id="plugin-search" placeholder="[[admin/extend/plugins:plugin-search-placeholder]]"/><br/>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-body">
                <div class="checkbox">
                    <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
                        <input id="plugin-submit-usage" class="mdl-switch__input" type="checkbox" data-field="submitPluginUsage" <!-- IF submitPluginUsage -->checked<!-- ENDIF submitPluginUsage -->/>
                        <span class="mdl-switch__label">[[admin/extend/plugins:submit-anonymous-usage]]</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">[[admin/extend/plugins:reorder-plugins]]</div>
            <div class="panel-body">
                <button class="btn btn-default btn-block" id="plugin-order"><i class="fa fa-exchange"></i> [[admin/extend/plugins:order-active]]</button>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">[[admin/extend/plugins:dev-interested]]</div>
            <div class="panel-body">
                <p>
                    [[admin/extend/plugins:docs-info]]
                </p>
            </div>
        </div>
    </div>

    <div class="col-lg-9 col-lg-pull-3">
        <div class="tab-content">
            <div class="tab-pane fade" id="trending">
                <div class="alert alert-info no-plugins hide">[[admin/extend/plugins:none-found]]</div>
                <ul class="trending">
                    {{{ each trending }}}
                                        <!-- IF !../error -->
                    <li id="{../id}" data-plugin-index="{@index}" data-plugin-id="{../id}" data-version="{../version}" class="clearfix <!-- IF ../active -->active<!-- ENDIF ../active -->">
                        <div class="pull-right controls">
                            {{{ if ../installed }}}
                                <!-- IF ../isTheme -->
                                <a href="{config.relative_path}/admin/appearance/themes" class="btn btn-info">[[admin/extend/plugins:plugin-item.themes]]</a>
                                <!-- ELSE -->
                                <button data-action="toggleActive" class="btn <!-- IF ../active --> btn-warning<!-- ELSE --> btn-success<!-- ENDIF ../active --> <!-- IF !canChangeState -->disabled<!-- ENDIF -->">
                                <i class="fa fa-power-off"></i> <!-- IF ../active -->[[admin/extend/plugins:plugin-item.deactivate]]<!-- ELSE -->[[admin/extend/plugins:plugin-item.activate]]<!-- ENDIF ../active --></button>
                                <!-- ENDIF ../isTheme -->

                                <button data-action="toggleInstall" data-installed="1" class="btn btn-danger"><i class="fa fa-trash-o"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>

                                <!-- IF ../active -->
                                <!-- IF ../settingsRoute -->
                                <a href="{config.relative_path}{../settingsRoute}" class="btn btn-primary"><i class="fa fa-wrench"></i> [[admin/extend/plugins:plugin-item.settings]]</a>
                                <!-- ENDIF ../settingsRoute -->
                                <!-- ENDIF ../active -->
                            {{{ else }}}
                                <button data-action="toggleInstall" data-installed="0" class="btn btn-success"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.install]]</button>
                            {{{ end }}}
                        </div>

                        <h2><strong>{../name}</strong></h2>

                        <!-- IF ../description -->
                        <p>{../description}</p>
                        <!-- ENDIF ../description -->
                        <!-- IF ../outdated --><i class="fa fa-exclamation-triangle text-danger"></i> <!-- ENDIF ../outdated -->
                        <small>[[admin/extend/plugins:plugin-item.installed]] <strong class="currentVersion">{../version}</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">{../latest}</strong></small>

                        <!-- IF ../outdated -->
                        <button data-action="upgrade" class="btn btn-success btn-xs"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>
                        <p>
                            <!-- IF ../isCompatible -->
                            <i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, {version}]]
                            <!-- ELSE -->
                            <i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]
                            <!-- ENDIF -->
                        </p>
                        <!-- ENDIF ../outdated -->

                        <!-- IF ../url -->
                        <p>[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="{../url}">{../url}</a></p>
                        <!-- ENDIF ../url -->
                    </li>
                    <!-- ENDIF !../error -->
                    <!-- IF ../error -->
                    <li data-plugin-id="{../id}" class="clearfix">
                        <div class="pull-right">
                            <button class="btn btn-default disabled"><i class="fa fa-exclamation-triangle"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>
                            <button data-action="toggleInstall" data-installed="1" class="btn btn-danger"><i class="fa fa-trash-o"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
                        </div>

                        <h2><strong>{../id}</strong></h2>
                        <p>
                            [[admin/extend/plugins:plugin-item.unknown-explanation]]
                        </p>
                    </li>
                    <!-- ENDIF ../error -->

                    {{{ end }}}
                </ul>
            </div>
            <div class="tab-pane fade active in" id="installed">
                <div class="alert alert-info no-plugins hide">[[admin/extend/plugins:none-found]]</div>
                <ul class="installed">
                    <!-- BEGIN installed -->
                                        <!-- IF !../error -->
                    <li id="{../id}" data-plugin-index="{@index}" data-plugin-id="{../id}" data-version="{../version}" class="clearfix <!-- IF ../active -->active<!-- ENDIF ../active -->">
                        <div class="pull-right controls">
                            {{{ if ../installed }}}
                                <!-- IF ../isTheme -->
                                <a href="{config.relative_path}/admin/appearance/themes" class="btn btn-info">[[admin/extend/plugins:plugin-item.themes]]</a>
                                <!-- ELSE -->
                                <button data-action="toggleActive" class="btn <!-- IF ../active --> btn-warning<!-- ELSE --> btn-success<!-- ENDIF ../active --> <!-- IF !canChangeState -->disabled<!-- ENDIF -->">
                                <i class="fa fa-power-off"></i> <!-- IF ../active -->[[admin/extend/plugins:plugin-item.deactivate]]<!-- ELSE -->[[admin/extend/plugins:plugin-item.activate]]<!-- ENDIF ../active --></button>
                                <!-- ENDIF ../isTheme -->

                                <button data-action="toggleInstall" data-installed="1" class="btn btn-danger"><i class="fa fa-trash-o"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>

                                <!-- IF ../active -->
                                <!-- IF ../settingsRoute -->
                                <a href="{config.relative_path}{../settingsRoute}" class="btn btn-primary"><i class="fa fa-wrench"></i> [[admin/extend/plugins:plugin-item.settings]]</a>
                                <!-- ENDIF ../settingsRoute -->
                                <!-- ENDIF ../active -->
                            {{{ else }}}
                                <button data-action="toggleInstall" data-installed="0" class="btn btn-success"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.install]]</button>
                            {{{ end }}}
                        </div>

                        <h2><strong>{../name}</strong></h2>

                        <!-- IF ../description -->
                        <p>{../description}</p>
                        <!-- ENDIF ../description -->
                        <!-- IF ../outdated --><i class="fa fa-exclamation-triangle text-danger"></i> <!-- ENDIF ../outdated -->
                        <small>[[admin/extend/plugins:plugin-item.installed]] <strong class="currentVersion">{../version}</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">{../latest}</strong></small>

                        <!-- IF ../outdated -->
                        <button data-action="upgrade" class="btn btn-success btn-xs"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>
                        <p>
                            <!-- IF ../isCompatible -->
                            <i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, {version}]]
                            <!-- ELSE -->
                            <i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]
                            <!-- ENDIF -->
                        </p>
                        <!-- ENDIF ../outdated -->

                        <!-- IF ../url -->
                        <p>[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="{../url}">{../url}</a></p>
                        <!-- ENDIF ../url -->
                    </li>
                    <!-- ENDIF !../error -->
                    <!-- IF ../error -->
                    <li data-plugin-id="{../id}" class="clearfix">
                        <div class="pull-right">
                            <button class="btn btn-default disabled"><i class="fa fa-exclamation-triangle"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>
                            <button data-action="toggleInstall" data-installed="1" class="btn btn-danger"><i class="fa fa-trash-o"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>
                        </div>

                        <h2><strong>{../id}</strong></h2>
                        <p>
                            [[admin/extend/plugins:plugin-item.unknown-explanation]]
                        </p>
                    </li>
                    <!-- ENDIF ../error -->

                    <!-- END installed -->
                </ul>
            </div>
            <div class="tab-pane fade" id="active">
                <div class="alert alert-info no-plugins hide">[[admin/extend/plugins:none-found]]</div>
                <ul class="active"></ul>
            </div>
            <div class="tab-pane fade" id="deactive">
                <div class="alert alert-info no-plugins hide">[[admin/extend/plugins:none-found]]</div>
                <ul class="deactive"></ul>
            </div>
            <div class="tab-pane fade" id="upgrade">
                <div class="alert alert-info no-plugins hide">[[admin/extend/plugins:none-found]]</div>
                <ul class="upgrade"></ul>
            </div>
            <div class="tab-pane fade" id="download">
                <div class="alert alert-info no-plugins hide">[[admin/extend/plugins:none-found]]</div>
                <ul class="download">
                    <!-- BEGIN download -->
                                        <li id="{../id}" data-plugin-id="{../id}" class="clearfix">
                        <div class="pull-right">
                            <button data-action="toggleActive" class="btn btn-success hidden"><i class="fa fa-power-off"></i> [[admin/extend/plugins:plugin-item.activate]]</button>
                            <button data-action="toggleInstall" data-installed="0" class="btn btn-success"><i class="fa fa-download"></i> [[admin/extend/plugins:plugin-item.install]]</button>
                        </div>

                        <h2><strong>{../name}</strong></h2>

                        <!-- IF ../description -->
                        <p>{../description}</p>
                        <!-- ENDIF ../description -->

                        <small>[[admin/extend/plugins:plugin-item.latest]] <strong class="latestVersion">{../latest}</strong></small>
                        <p>
                            <!-- IF ../isCompatible -->
                            <i class="fa fa-check text-success"></i> [[admin/extend/plugins:plugin-item.compatible, {version}]]
                            <!-- ELSE -->
                            <i class="fa fa-question text-warning"></i> [[admin/extend/plugins:plugin-item.not-compatible]]
                            <!-- ENDIF -->
                        </p>

                        <!-- IF ../url -->
                        <p>[[admin/extend/plugins:plugin-item.more-info]] <a target="_blank" href="{../url}">{../url}</a></p>
                        <!-- ENDIF ../url -->
                    </li>

                    <!-- END download -->
                </ul>
            </div>
        </div>
    </div>

    <div class="modal fade" id="order-active-plugins-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">[[admin/extend/plugins:order-active]]</h4>
                </div>
                <div class="modal-body">
                    <p>
                        [[admin/extend/plugins:order.description]]
                    </p>
                    <p>
                        [[admin/extend/plugins:order.explanation]]
                    </p>
                    <ul class="plugin-list"></ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">[[global:buttons.close]]</button>
                    <button type="button" class="btn btn-primary" id="save-plugin-order">[[global:save]]</button>
                </div>
            </div>
        </div>
    </div>


</div>


