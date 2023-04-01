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

<div class="clearfix">
    <div class="pull-right">
        <div class="btn-group">
            <button id="new-folder" class="btn-primary"><i class="fa fa-folder"></i> [[admin/manage/uploads:new-folder]]</button>
        </div>
        <div class="btn-group">
            <button id="upload" class="btn-success"><i class="fa fa-upload"></i> [[global:upload]]</button>
        </div>
    </div>
</div>

<div class="table-responsive">
    <table class="table table-striped users-table">
        <thead>
            <tr>
                <th>[[admin/manage/uploads:filename]]</th>
                <!-- IF showPids --><th class="text-right">[[admin/manage/uploads:usage]]</th><!-- END -->
                <th class="text-right">[[admin/manage/uploads:size/filecount]]</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <!-- BEGIN files -->
            <tr data-path="{files.path}">
                <!-- IF files.isDirectory -->
                <td class="col-md-6" role="button">
                    <i class="fa fa-fw fa-folder-o"></i> <a href="{config.relative_path}/admin/manage/uploads?dir={files.path}">{files.name}</a>
                </td>
                <!-- ENDIF files.isDirectory -->

                <!-- IF files.isFile -->
                <td class="col-md-6">
                    <i class="fa fa-fw fa-file-text-o"></i> <a href="{config.relative_path}{files.url}" target="_blank">{files.name}</a>
                </td>
                <!-- ENDIF files.isFile -->

                <!-- IF showPids -->
                <td class="col-md-3 text-right">
                    {{{ each ../inPids }}}
                    <a target="_blank" href="{config.relative_path}/post/{@value}"><span class="label label-default">{@value}</span></a>
                    {{{ end }}}
                    <!-- IF !../inPids.length -->
                    <span class="label label-danger">[[admin/manage/uploads:orphaned]]</span>
                    <!-- END -->
                </td>
                <!-- END -->

                <td class="col-md-2 text-right"><!-- IF files.isFile -->{files.sizeHumanReadable}<!-- ELSE -->[[admin/manage/uploads:filecount, {files.fileCount}]]<!-- ENDIF files.isFile --></td>

                <td role="button" class="col-md-1 text-right"><i class="delete fa fa-fw fa-trash-o <!-- IF !files.isFile --> hidden<!-- ENDIF !files.isFile -->"></i></td>
            </tr>
            <!-- END files -->
        </tbody>
    </table>
</div>

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