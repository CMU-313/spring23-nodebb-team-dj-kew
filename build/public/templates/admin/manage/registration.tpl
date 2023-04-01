<div class="row">
    <div class="col-xs-12">
        <div class="registration panel panel-primary">
            <div class="panel-heading">
                [[admin/manage/registration:queue]]
            </div>
            <!-- IF !users.length -->
            <p class="panel-body">
                [[admin/manage/registration:description, {config.relative_path}/admin/settings/user#user-registration]]
            </p>
            <!-- ENDIF !users.length -->
            <div class="table-responsive">
                <table class="table table-striped users-list">
                    <thead>
                        <tr>
                            <th>[[admin/manage/registration:list.name]]</th>
                            <th>[[admin/manage/registration:list.email]]</th>
                            <th class="hidden-xs">[[admin/manage/registration:list.ip]]</th>
                            <th class="hidden-xs">[[admin/manage/registration:list.time]]</th>
                            <!-- BEGIN customHeaders -->
                            <th class="hidden-xs">{customHeaders.label}</th>
                            <!-- END customHeaders -->
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {{{ each users }}}
                        <tr data-username="{users.usernameEscaped}">
                            <td>
                                <!-- IF users.usernameSpam -->
                                <i class="fa fa-times-circle text-danger" title="[[admin/manage/registration:list.username-spam, {users.spamData.username.frequency}, {users.spamData.username.appears}, {users.spamData.username.confidence}]]"></i>
                                <!-- ELSE -->
                                <!-- IF users.spamChecked -->
                                <i class="fa fa-check text-success"></i>
                                <!-- ENDIF users.spamChecked -->
                                <!-- ENDIF users.usernameSpam -->
                                {users.username}
                            </td>
                            <td>
                                <!-- IF users.emailSpam -->
                                <i class="fa fa-times-circle text-danger" title="[[admin/manage/registration:list.email-spam, {users.spamData.email.frequency}, {users.spamData.email.appears}]]"></i>
                                <!-- ELSE -->
                                <!-- IF users.spamChecked -->
                                <i class="fa fa-check text-success"></i>
                                <!-- ENDIF users.spamChecked -->
                                <!-- ENDIF users.emailSpam -->
                                {users.email}
                            </td>
                            <td class="hidden-xs">
                                <!-- IF users.ipSpam -->
                                <i class="fa fa-times-circle text-danger" title="[[admin/manage/registration:list.ip-spam, {users.spamData.ip.frequency}, {users.spamData.ip.appears}]]"></i>
                                <!-- ELSE -->
                                <!-- IF users.spamChecked -->
                                <i class="fa fa-check text-success"></i>
                                <!-- ENDIF users.spamChecked -->
                                <!-- ENDIF users.ipSpam -->
                                {users.ip}
                                {{{ each users.ipMatch }}}
                                <br>
                                <!-- IF users.ipMatch.picture -->
                                <img src="{users.ipMatch.picture}" class="user-img" alt="" />
                                <!-- ELSE -->
                                <div class="user-img avatar avatar-sm" style="background-color: {users.ipMatch.icon:bgColor};">{users.ipMatch.icon:text}</div>
                                <!-- ENDIF users.ipMatch.picture -->
                                <a href="{config.relative_path}/uid/{users.ipMatch.uid}">{users.ipMatch.username}</a>
                                {{{ end }}}
                            </td>
                            <td class="hidden-xs">
                                <span class="timeago" title="{users.timestampISO}"></span>
                            </td>

                            {{{ each users.customRows }}}
                            <td class="hidden-xs">{users.customRows.value}</td>
                            {{{ end }}}

                            <td>
                                <div class="btn-group pull-right">
                                    <button class="btn btn-success btn-xs" data-action="accept"><i class="fa fa-check"></i></button>
                                    <button class="btn btn-danger btn-xs" data-action="delete"><i class="fa fa-times"></i></button>
                                    {{{ each users.customActions }}}
                                    <button id="{users.customActions.id}" title="{users.customActions.title}" class="btn btn-xs {users.customActions.class}">
                                        <i class="fa {users.customActions.icon}"></i>
                                    </button>
                                    {{{ end }}}
                                </div>
                            </td>
                        </tr>
                        {{{ end }}}
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
        </div>

        <div class="invitations panel panel-success">
            <div class="panel-heading">
                [[admin/manage/registration:invitations]]
            </div>
            <p class="panel-body">
                [[admin/manage/registration:invitations.description]]
            </p>
            <div class="table-responsive">
                <table class="table table-striped invites-list">
                    <thead>
                        <tr>
                            <th>[[admin/manage/registration:invitations.inviter-username]]</th>
                            <th>[[admin/manage/registration:invitations.invitee-email]]</th>
                            <th>[[admin/manage/registration:invitations.invitee-username]]</th>
                        </tr>
                    </thead>
                    <tbody>
                        {{{ each invites }}}
                        {{{ each invites.invitations }}}
                        <tr data-invitation-mail="{invites.invitations.email}"
                                data-invited-by="{invites.username}">
                            <td class ="invited-by"><!-- IF @first -->{invites.username}<!-- ENDIF @first --></td>
                            <td>{invites.invitations.email}</td>
                            <td>{invites.invitations.username}
                                <div class="btn-group pull-right">
                                    <button class="btn btn-danger btn-xs" data-action="delete"><i class="fa fa-times"></i></button>
                                </div>
                            </td>
                        </tr>
                        {{{ end }}}
                        {{{ end }}}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
