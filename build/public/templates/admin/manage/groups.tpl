<div class="row">
    <div class="col-lg-3 pull-right">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="[[admin/manage/groups:search-placeholder]]" id="group-search">
            <span class="input-group-addon search-button"><i class="fa fa-search"></i></span>
        </div>
    </div>
</div>
<div class="row groups">
    <div class="col-xs-12">
        <table class="table table-striped groups-list">
            <thead>
                <tr>
                    <th>[[admin/manage/groups:name]]</th>
                    <th>[[admin/manage/groups:badge]]</th>
                    <th>[[admin/manage/groups:properties]]</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- BEGIN groups -->
                <tr data-groupname="{groups.displayName}" data-name-encoded="{groups.nameEncoded}">
                    <td>
                        <a href="{config.relative_path}/admin/manage/groups/{groups.slug}">{groups.displayName}</a> ({groups.memberCount})
                        <p class="description">{groups.description}</p>
                    </td>
                    <td>
                        <span class="label label-default" style="color:{groups.textColor}; background-color: {groups.labelColor};"><!-- IF groups.icon --><i class="fa {groups.icon}"></i> <!-- ENDIF groups.icon -->{groups.userTitle}</span>
                    </td>
                    <td>
                        <!-- IF groups.system -->
                        <span class="label label-danger">[[admin/manage/groups:system]]</span>
                        <!-- ENDIF groups.system -->
                        <!-- IF groups.private -->
                        <span class="label label-primary">[[admin/manage/groups:private]]</span>
                        <!-- ENDIF groups.private -->
                        <!-- IF groups.hidden -->
                        <span class="label label-default">[[admin/manage/groups:hidden]]</span>
                        <!-- ENDIF groups.hidden -->
                    </td>

                    <td>
                        <div class="btn-group">
                            <a href="{config.relative_path}/api/admin/groups/{groups.nameEncoded}/csv" class="btn btn-default">[[admin/manage/groups:download-csv]]</a>

                            <div component="category-selector" class="btn-group">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
        <span>[[admin/manage/groups:privileges]]</span> <span class="caret"></span>
    </button>
    <div component="category-selector-search" class="hidden">
        <input type="text" class="form-control" autocomplete="off">
    </div>
    <ul component="category/list" class="dropdown-menu category-dropdown-menu dropdown-menu-right" role="menu">
        <li component="category/no-matches" role="presentation" class="category hidden">
            <a role="menuitem">[[search:no-matches]]</a>
        </li>
        {{{each categories}}}
        <li role="presentation" class="category <!-- IF categories.disabledClass -->disabled<!-- ENDIF categories.disabledClass -->" data-cid="{categories.cid}" data-name="{categories.name}" data-parent-cid="{categories.parentCid}">
            <a role="menuitem">{categories.level}<span component="category-markup"><!-- IF categories.icon --><span class="fa-stack" style="{function.generateCategoryBackground}"><i style="color: {categories.color};" class="fa fa-stack-1x fa-fw {categories.icon}"></i></span><!-- ENDIF categories.icon --> {categories.name}</span></a>
        </li>
        {{{end}}}
    </ul>
</div>

                            <!-- IF !groups.system -->
                            <button class="btn btn-danger" data-action="delete"><i class="fa fa-times"></i></button>
                            <!-- ENDIF !groups.system -->
                        </div>
                    </td>
                </tr>
                <!-- END groups -->
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="6"><br /><br /></td>
                </tr>
            </tfoot>
        </table>

        <div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
    <ul class="pagination hidden-xs">
        <li class="previous pull-left<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
            <a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
        </li>

        {{{each pagination.pages}}}
            <!-- IF pagination.pages.separator -->
            <li component="pagination/select-page" class="page select-page">
                <a href="#"><i class="fa fa-ellipsis-h"></i></a>
            </li>
            <!-- ELSE -->
            <li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
                <a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
            </li>
            <!-- ENDIF pagination.pages.separator -->
        {{{end}}}

        <li class="next pull-right<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
            <a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
        </li>
    </ul>

    <ul class="pagination hidden-sm hidden-md hidden-lg">
        <li class="first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
            <a href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
        </li>

        <li class="previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
            <a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
        </li>

        <li component="pagination/select-page" class="page select-page">
            <a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
        </li>

        <li class="next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
            <a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
        </li>

        <li class="last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
            <a href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
        </li>
    </ul>
</div>
    </div>

    <div class="modal fade" id="create-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">[[admin/manage/groups:create]]</h4>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger hide" id="create-modal-error"></div>
                    <form>
                        <div class="form-group">
                            <label for="create-group-name">[[admin/manage/groups:name]]</label>
                            <input type="text" class="form-control" id="create-group-name" placeholder="[[admin/manage/groups:name]]" />
                        </div>
                        <div class="form-group">
                            <label for="create-group-desc">[[admin/manage/groups:description]]</label>
                            <input type="text" class="form-control" id="create-group-desc" placeholder="[[admin/manage/groups:description-placeholder]]" />
                        </div>
                        <div class="form-group">
                            <label>
                                <input id="create-group-private" name="private" type="checkbox" checked>
                                <strong>[[admin/manage/groups:private]]</strong>
                            </label>
                        </div>
                        <div class="form-group">
                            <label>
                                <input id="create-group-hidden" name="hidden" type="checkbox">
                                <strong>[[admin/manage/groups:hidden]]</strong>
                            </label>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        [[global:close]]
                    </button>
                    <button type="button" class="btn btn-primary" id="create-modal-go">
                        [[admin/manage/groups:create-button]]
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<button id="create" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">add</i>
</button>
