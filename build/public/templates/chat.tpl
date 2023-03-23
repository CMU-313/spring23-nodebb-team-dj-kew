
<div id="chat-modal" class="chat-modal hide" tabindex="-1" role="dialog" aria-labelledby="Chat" aria-hidden="true" data-backdrop="none">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button id="chat-close-btn" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <button type="button" class="close hidden-xs hidden-sm" data-action="maximize"><span aria-hidden="true"><i class="fa fa-expand"></i></span><span class="sr-only">[[modules:chat.maximize]]</span></button>
                <button type="button" class="close hidden-xs hidden-sm" data-action="minimize"><span aria-hidden="true"><i class="fa fa-minus"></i></span><span class="sr-only">[[modules:chat.minimize]]</span></button>
                <div class="dropdown pull-right">
  <button class="close" data-toggle="dropdown" component="chat/controlsToggle"><i class="fa fa-gear"></i></button>
  <ul class="dropdown-menu dropdown-menu-right pull-right" component="chat/controls">
    <li class="dropdown-header">[[modules:chat.options]]</li>
    <li>
      <a href="#" data-action="members"><i class="fa fa-fw fa-cog"></i> [[modules:chat.manage-room]]</a>
    </li>
    <li>
      <a href="#" data-action="rename"><i class="fa fa-fw fa-edit"></i> [[modules:chat.rename-room]]</a>
    </li>
    <li>
      <a href="#" data-action="leave"><i class="fa fa-fw fa-sign-out"></i> [[modules:chat.leave]]</a>
    </li>
    <!-- IF users.length -->
    <li role="separator" class="divider"></li>
    <li class="dropdown-header">[[modules:chat.in-room]]</li>
    {{{each users}}}
    <li>
      <a href="{config.relative_path}/uid/{../uid}">{buildAvatar(users, "sm", true)} {../username}</a>
    </li>
    {{{end}}}
    <!-- END -->
  </ul>
</div>


                <h4 component="chat/room/name"><!-- IF roomName -->{roomName}<!-- ELSE -->{usernames}<!-- ENDIF roomName --></h4>
            </div>

            <div class="modal-body">
                <div component="chat/messages/scroll-up-alert" class="scroll-up-alert alert alert-info" role="button">[[modules:chat.scroll-up-alert]]</div>
                <ul class="chat-content" component="chat/messages">
                    {{{each messages}}}
    {{{ if !./system }}}
    <li component="chat/message" class="chat-message clear<!-- IF ../deleted --> deleted<!-- END -->" data-index="{messages.index}" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-break="{messages.newSet}" data-timestamp="{messages.timestamp}">
    <div class="message-header">
        <a href="{config.relative_path}/user/{messages.fromUser.userslug}">{buildAvatar(messages.fromUser, "md", true, "not-responsive")}</a>
        <strong><span class="chat-user"><a href="{config.relative_path}/user/{messages.fromUser.userslug}">{messages.fromUser.displayname}</a></span></strong>
        <!-- IF ../fromUser.banned -->
        <span class="label label-danger">[[user:banned]]</span>
        <!-- END -->
        <!-- IF ../fromUser.deleted -->
        <span class="label label-danger">[[user:deleted]]</span>
        <!-- END -->
        <span class="chat-timestamp timeago" title="{messages.timestampISO}"></span>
        <!-- IF messages.edited -->
        <div class="text-muted pull-right" title="[[global:edited]] {messages.editedISO}"><i class="fa fa-edit"></i></span></div>
        <!-- ENDIF messages.edited -->
    </div>
    <div class="message-body-wrapper">
        <div component="chat/message/body" class="message-body">
            {messages.content}
        </div>

        <!-- IF !config.disableChatMessageEditing -->
        <!-- IF messages.self -->
        <div class="btn-group controls">
            <button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>
            <button class="btn btn-xs btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>
            <!-- IF isAdminOrGlobalMod -->
            <button class="btn btn-xs btn-link chat-ip" title="[[modules:chat.show-ip]]"><i class="fa fa-info-circle chat-ip-button"></i></button>
            <!-- ENDIF isAdminOrGlobalMod -->
        </div>
        <!-- ENDIF messages.self -->
        <!-- ENDIF !config.disableChatMessageEditing -->
    </div>
</li>
    {{{ else }}}
    <li component="chat/system-message" class="system-message clear" data-index="{messages.index}" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-break="0" data-timestamp="{messages.timestamp}">
    [[modules:chat.system.{messages.content}, {messages.fromUser.username}]]
</li>
    {{{ end }}}
{{{end}}}
                </ul>

                <div component="chat/composer">
                    <textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="1"></textarea>
                    <button class="btn btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>
                    <span component="chat/message/remaining">{maximumChatMessageLength}</span>
                    <form component="chat/upload" method="post" enctype="multipart/form-data">
                        <input type="file" name="files[]" multiple class="hidden"/>
                    </form>
                </div>
            </div>
            <div class="imagedrop"><div>[[topic:composer.drag_and_drop_images]]</div></div>
        </div>
    </div>
</div>