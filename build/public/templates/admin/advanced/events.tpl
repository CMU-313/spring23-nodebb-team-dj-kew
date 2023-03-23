<div class="row events">
    <div class="col-lg-9">
        <div class="panel panel-default">
            <div class="panel-heading"><i class="fa fa-calendar-o"></i> [[admin/advanced/events:events]]</div>
            <div class="panel-body">
                <!-- IF !events.length -->
                <div class="alert alert-info">[[admin/advanced/events:no-events]]</div>
                <!-- ENDIF !events.length -->
                <div class="events-list">
                <!-- BEGIN events -->
                <div data-eid="{events.eid}">
                    <span class="label label-default">#{events.eid}</span>
                    <span class="label label-info">{events.type}</span>
                    <span class="label label-default">uid {events.uid}</span>
                    <!-- IF events.ip --><span class="label label-default">{events.ip}</span><!-- END -->
                    <a href="{config.relative_path}/user/{events.user.userslug}" target="_blank">
                        <!-- IF events.user.picture -->
                        <img class="avatar avatar-xs" src="{events.user.picture}" alt="" />
                        <!-- ELSE -->
                        <div class="avatar avatar-xs" style="background-color: {events.user.icon:bgColor};">{events.user.icon:text}</div>
                        <!-- ENDIF events.user.picture -->
                    </a>
                    <a href="{config.relative_path}/user/{events.user.userslug}" target="_blank">{events.user.username}</a>
                    <span class="pull-right delete-event"><i class="fa fa-trash-o"></i></span>
                    <span class="pull-right">{events.timestampISO}</span>
                    <pre class="well">{events.jsonString}</pre>
                </div>
                <!-- END events -->
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
            </div>
        </div>
    </div>
    <div class="col-lg-3 acp-sidebar">
        <div class="panel panel-default">
            <div class="panel-heading">[[admin/advanced/events:filters]]</div>
            <div class="panel-body">
                <form role="form" id="filters">
                    <div class="form-group">
                        <label for="type">[[admin/advanced/events:filter-type]]</label>
                        <select id="type" name="type" class="form-control">
                            <!-- BEGIN types -->
                            <option value="{types.value}" <!-- IF types.selected -->selected<!-- ENDIF types.selected -->>{types.name} - ({types.count}) </option>
                            <!-- END types -->
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="start">[[admin/advanced/events:filter-start]]</label>
                        <input type="date" id="start" name="start" value="{query.start}" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="end">[[admin/advanced/events:filter-end]]</label>
                        <input type="date" id="end" name="end" value="{query.end}" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="perPage">[[admin/advanced/events:filter-perPage]]</label>
                        <input type="text" id="perPage" name="perPage" value="{query.perPage}" class="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" id="apply">[[admin/advanced/events:filters-apply]]</button>
                </form>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-body">
                <button class="btn btn-block btn-danger" data-action="clear">
                    <i class="fa fa-eraser"></i> [[admin/advanced/events:delete-events]]
                </button>
            </div>
        </div>
    </div>
</div>
