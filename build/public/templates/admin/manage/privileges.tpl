<div class="row">
    <form role="form" class="category">
        <div class="">
            <p>
                [[admin/manage/categories:privileges.description]]
            </p>

            <div class="lead">
                [[admin/manage/categories:privileges.category-selector]]
                <div component="category-selector" class="btn-group bottom-sheet">
<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    <span component="category-selector-selected">{{{ if (selectedCategory && !showCategorySelectLabel) }}}<span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> {selectedCategory.name}{{{ else }}}
    <span class="visible-sm-inline visible-md-inline visible-lg-inline">{{{ if selectCategoryLabel }}}{selectCategoryLabel}{{{ else }}}[[topic:thread_tools.select_category]]{{{ end }}}</span><span class="visible-xs-inline"><i class="fa fa-fw {{{ if selectCategoryIcon }}}{selectCategoryIcon}{{{ else }}}fa-list{{{ end }}}"></i></span>
    {{{ end }}}</span> <span class="caret"></span>
</button>
<div component="category-selector-search" class="hidden">
    <input type="text" class="form-control" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
    <li component="category/no-matches" role="presentation" class="category hidden">
        <a role="menu-item">[[search:no-matches]]</a>
    </li>
    {{{each categoryItems}}}
    <li role="presentation" class="category {{{ if ../disabledClass }}}disabled {{{ end }}}" data-cid="{../cid}" data-name="{../name}" data-parent-cid="{../parentCid}">
        <a role="menu-item">{../level}<span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">{{{ if ./icon }}}<span class="fa-stack" style="{function.generateCategoryBackground}"><i style="color: {../color};" class="fa fa-stack-1x fa-fw {../icon}"></i></span>{{{ end }}} {../name}</span></a>
    </li>
    {{{ end }}}
</ul>
</div>
            </div>

            <div class="privilege-table-container">
                {{{ if cid }}}
                                    <label>[[admin/manage/privileges:group-privileges]]</label>
                    <table class="table table-striped privilege-table">
                        <thead>
                            <tr class="privilege-table-header">
                                <th class="privilege-filters btn-toolbar" colspan="100">
                                    <!-- IF privileges.columnCountGroupOther -->
                                    <button type="button" data-filter="19,99" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-other]]</button>
                                    <!-- END -->
                                    <button type="button" data-filter="16,18" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-moderation]]</button>
                                    <button type="button" data-filter="6,15" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-posting]]</button>
                                    <button type="button" data-filter="3,5" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-viewing]]</button>
                                </th>
                            </tr><tr><!-- zebrastripe reset --></tr>
                            <tr>
                                <th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>
                                <th class="text-center">[[admin/manage/privileges:select-clear-all]]</th>
                                {{{ each privileges.labels.groups }}}
                                <th class="text-center">{@value}</th>
                                {{{ end }}}
                            </tr>
                        </thead>
                        <tbody>
                            <!-- BEGIN privileges.groups -->
                            <tr data-group-name="{privileges.groups.nameEscaped}" data-private="<!-- IF privileges.groups.isPrivate -->1<!-- ELSE -->0<!-- ENDIF privileges.groups.isPrivate -->">
                                <td>
                                    {{{ if privileges.groups.isPrivate }}}
                                        {{{ if (privileges.groups.name == "banned-users") }}}
                                        <i class="fa fa-fw fa-exclamation-triangle text-muted" title="[[admin/manage/categories:privileges.inheritance-exception]]"></i>
                                        {{{ else }}}
                                        <i class="fa fa-fw fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>
                                        {{{ end }}}
                                    {{{ else }}}
                                    <i class="fa fa-fw fa-none"></i>
                                    {{{ end }}}
                                    {privileges.groups.name}
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            <i class="fa fa-copy"></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                            <li data-action="copyToAllGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>
                                            <li data-action="copyToChildrenGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>
                                            <li data-action="copyPrivilegesFromGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="text-center"><input autocomplete="off" type="checkbox" class="checkbox-helper"></td>
                                {function.spawnPrivilegeStates, privileges.groups.name, ../privileges}
                            </tr>
                            <!-- END privileges.groups -->
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3"></td>
                                <td colspan="{privileges.keys.groups.length}">
                                    <div class="btn-toolbar">
                                        <button type="button" class="btn btn-default pull-right" data-ajaxify="false" data-action="search.group">
                                            <i class="fa fa-users"></i>
                                            [[admin/manage/categories:privileges.search-group]]
                                        </button>
                                        <button type="button" class="btn btn-default pull-right" data-ajaxify="false" data-action="copyPrivilegesFrom">
                                            <i class="fa fa-copy"></i>
                                            [[admin/manage/categories:privileges.copy-from-category]]
                                        </button>
                                        <button type="button" class="btn btn-default pull-right" data-ajaxify="false" data-action="copyToChildren">
                                            <i class="fa fa-copy"></i>
                                            [[admin/manage/categories:privileges.copy-to-children]]
                                        </button>
                                        <button type="button" class="btn btn-default pull-right" data-ajaxify="false" data-action="copyToAll">
                                            <i class="fa fa-copy"></i>
                                            [[admin/manage/categories:privileges.copy-privileges-to-all-categories]]
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="help-block">
                        [[admin/manage/categories:privileges.inherit]]
                    </div>
                    <hr/>
                    <label>[[admin/manage/privileges:user-privileges]]</label>
                    <table class="table table-striped privilege-table">
                        <thead>
                            <tr class="privilege-table-header">
                                <th class="privilege-filters btn-toolbar" colspan="100">
                                    <!-- IF privileges.columnCountUserOther -->
                                    <button type="button" data-filter="19,99" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-other]]</button>
                                    <!-- END -->
                                    <button type="button" data-filter="16,18" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-moderation]]</button>
                                    <button type="button" data-filter="6,15" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-posting]]</button>
                                    <button type="button" data-filter="3,5" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-viewing]]</button>
                                </th>
                            </tr><tr><!-- zebrastripe reset --></tr>
                            <tr>
                                <th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>
                                <th class="text-center">[[admin/manage/privileges:select-clear-all]]</th>
                                {{{ each privileges.labels.users }}}
                                <th class="text-center">{@value}</th>
                                {{{ end }}}
                            </tr>
                        </thead>
                        <tbody>
                            <!-- BEGIN privileges.users -->
                            <tr data-uid="{privileges.users.uid}"{{{ if privileges.users.banned }}} data-banned{{{ end }}}>
                                <td>
                                    <!-- IF ../picture -->
                                    <img class="avatar avatar-sm" src="{privileges.users.picture}" title="{privileges.users.username}" alt="" />
                                    <!-- ELSE -->
                                    <div class="avatar avatar-sm" style="background-color: {../icon:bgColor};">{../icon:text}</div>
                                    <!-- ENDIF ../picture -->
                                </td>
                                <td>
                                    {{{ if privileges.users.banned }}}
                                    <i class="ban fa fa-gavel text-danger" title="[[admin/manage/categories:privileges.banned-user-inheritance]]"></i>
                                    {{{ end }}}
                                    {privileges.users.username}
                                </td>
                                <td class="text-center"><input autocomplete="off" type="checkbox" class="checkbox-helper"></td>
                                {function.spawnPrivilegeStates, privileges.users.username, ../privileges}
                            </tr>
                            <!-- END privileges.users -->
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3"></td>
                                <td colspan="{privileges.keys.users.length}">
                                    <button type="button" class="btn btn-default pull-right" data-ajaxify="false" data-action="search.user">
                                        <i class="fa fa-user"></i>
                                        [[admin/manage/categories:privileges.search-user]]
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                {{{ else }}}
                                    <label>[[admin/manage/privileges:group-privileges]]</label>
                    <table class="table table-striped privilege-table">
                        <thead>
                            {{{ if !isAdminPriv }}}
                            <tr class="privilege-table-header">
                                <th class="privilege-filters btn-toolbar" colspan="100">
                                    <!-- IF privileges.columnCountGroupOther -->
                                    <button type="button" data-filter="19,99" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-other]]</button>
                                    <!-- END -->
                                    <button type="button" data-filter="16,18" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-moderation]]</button>
                                    <button type="button" data-filter="3,8" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-posting]]</button>
                                    <button type="button" data-filter="9,15" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-viewing]]</button>
                                </th>
                            </tr><tr><!-- zebrastripe reset --></tr>
                            {{{ end }}}
                            <tr>
                                <th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>
                                <th class="text-center">[[admin/manage/privileges:select-clear-all]]</th>
                                {{{ each privileges.labels.groups }}}
                                <th class="text-center">{@value}</th>
                                {{{ end }}}
                            </tr>
                        </thead>
                        <tbody>
                            <!-- BEGIN privileges.groups -->
                            <tr data-group-name="{privileges.groups.nameEscaped}" data-private="<!-- IF privileges.groups.isPrivate -->1<!-- ELSE -->0<!-- ENDIF privileges.groups.isPrivate -->">
                                <td>
                                    {{{ if privileges.groups.isPrivate }}}
                                        {{{ if (privileges.groups.name == "banned-users") }}}
                                        <i class="fa fa-fw fa-exclamation-triangle text-muted" title="[[admin/manage/categories:privileges.inheritance-exception]]"></i>
                                        {{{ else }}}
                                        <i class="fa fa-fw fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>
                                        {{{ end }}}
                                    {{{ else }}}
                                    <i class="fa fa-fw fa-none"></i>
                                    {{{ end }}}
                                    {privileges.groups.name}
                                </td>
                                <td></td>
                                <td class="text-center"><input autocomplete="off" type="checkbox" class="checkbox-helper"></td>
                                {function.spawnPrivilegeStates, privileges.groups.name, ../privileges}
                            </tr>
                            <!-- END privileges.groups -->
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3"></td>
                                <td colspan="{privileges.keys.groups.length}">
                                    <div class="btn-toolbar">
                                        <button type="button" class="btn btn-default pull-right" data-ajaxify="false" data-action="search.group">
                                            <i class="fa fa-users"></i>
                                            [[admin/manage/categories:privileges.search-group]]
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="help-block">
                        [[admin/manage/categories:privileges.inherit]]
                    </div>
                    <hr/>
                    <label>[[admin/manage/privileges:user-privileges]]</label>
                    <table class="table table-striped privilege-table">
                        <thead>
                            {{{ if !isAdminPriv }}}
                            <tr class="privilege-table-header">
                                <th class="privilege-filters btn-toolbar" colspan="100">
                                    <!-- IF privileges.columnCountUserOther -->
                                    <button type="button" data-filter="19,99" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-other]]</button>
                                    <!-- END -->
                                    <button type="button" data-filter="16,18" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-moderation]]</button>
                                    <button type="button" data-filter="3,8" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-posting]]</button>
                                    <button type="button" data-filter="9,15" class="btn btn-default pull-right">[[admin/manage/categories:privileges.section-viewing]]</button>
                                </th>
                            </tr><tr><!-- zebrastripe reset --></tr>
                            {{{ end }}}
                            <tr>
                                <th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>
                                <th class="text-center">[[admin/manage/privileges:select-clear-all]]</th>
                                {{{ each privileges.labels.users }}}
                                <th class="text-center">{@value}</th>
                                {{{ end }}}
                            </tr>
                        </thead>
                        <tbody>
                            <!-- BEGIN privileges.users -->
                            <tr data-uid="{privileges.users.uid}"{{{ if privileges.users.banned }}} data-banned{{{ end }}}>
                                <td>
                                    <!-- IF ../picture -->
                                    <img class="avatar avatar-sm" src="{privileges.users.picture}" title="{privileges.users.username}" alt="" />
                                    <!-- ELSE -->
                                    <div class="avatar avatar-sm" style="background-color: {../icon:bgColor};">{../icon:text}</div>
                                    <!-- ENDIF ../picture -->
                                </td>
                                <td>
                                    {{{ if privileges.users.banned }}}
                                        <i class="ban fa fa-gavel text-danger" title="[[admin/manage/categories:privileges.banned-user-inheritance]]"></i>
                                    {{{ end }}}
                                    {privileges.users.username}
                                </td>
                                <td class="text-center"><input autocomplete="off" type="checkbox" class="checkbox-helper"></td>
                                {function.spawnPrivilegeStates, privileges.users.username, ../privileges}
                            </tr>
                            <!-- END privileges.users -->
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3"></td>
                                <td colspan="{privileges.keys.users.length}">
                                    <button type="button" class="btn btn-default pull-right" data-ajaxify="false" data-action="search.user">
                                        <i class="fa fa-user"></i>
                                        [[admin/manage/categories:privileges.search-user]]
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                {{{ end }}}
            </div>
        </div>
    </form>
</div>

<div class="floating-button">
    <button id="discard" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" style="display: none;">
        <i class="material-icons">undo</i>
    </button>

    <button id="save" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored primary">
        <i class="material-icons">save</i>
    </button>
</div>