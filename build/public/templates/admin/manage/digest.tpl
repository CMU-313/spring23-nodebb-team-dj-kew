<p class="lead">[[admin/manage/digest:lead]]</p>
<p>[[admin/manage/digest:disclaimer]]</p>
<p>[[admin/manage/digest:disclaimer-continued]]</p>

<hr />

<table class="table table-striped">
    <thead>
        <th>[[admin/manage/digest:user]]</th>
        <th>[[admin/manage/digest:subscription]]</th>
        <th>[[admin/manage/digest:last-delivery]]</th>
        <th></th>
    </thead>
    <tbody>
        <!-- BEGIN delivery -->
        <tr>
            <td><a href="{config.relative_path}/uid/{../uid}">{buildAvatar(delivery, "sm", true)} {../username}</a></td>
            <td>{{{if ../setting}}}{../setting}{{{else}}}<em>[[admin/manage/digest:default]]</em>{{{end}}}</td>
            <td>{../lastDelivery}</td>
            <td><button class="btn btn-xs btn-default" data-action="resend" data-uid="{../uid}">[[admin/manage/digest:resend]]</button></td>
        </tr>
        <!-- END delivery -->
        <!-- IF !delivery.length -->
        <tr>
            <td colspan="4">
                <div class="alert alert-success">
                    [[admin/manage/digest:no-delivery-data]]
                </div>
            </td>
        </tr>
        <!-- ENDIF !delivery.length -->
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4"><div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
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
</div></td>
        </tr>
        <tr>
            <td colspan="4">
                <em>[[admin/manage/digest:default-help, {default}]]</em>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                [[admin/manage/digest:manual-run]]
                <button class="btn btn-xs btn-default" data-action="resend-day">[[admin/settings/user:digest-freq.daily]]</button>
                <button class="btn btn-xs btn-default" data-action="resend-week">[[admin/settings/user:digest-freq.weekly]]</button>
                <button class="btn btn-xs btn-default" data-action="resend-biweek">[[admin/settings/user:digest-freq.biweekly]]</button>
                <button class="btn btn-xs btn-default" data-action="resend-month">[[admin/settings/user:digest-freq.monthly]]</button>
            </td>
        </tr>
    </tfoot>
</table>
