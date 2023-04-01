<div class="chats-full">
    <div component="chat/nav-wrapper" data-loaded="<!-- IF roomId -->1<!-- ELSE -->0<!-- END -->">
        <div class="chat-search dropdown">
            <input class="form-control" type="text" component="chat/search" placeholder="[[users:search-user-for-chat]]" data-toggle="dropdown" />
            <ul component="chat/search/list" class="dropdown-menu"></ul>
        </div>
        <ul component="chat/recent" class="chats-list" data-nextstart="{nextStart}">
            {{{each rooms}}}
            <li component="chat/recent/room" data-roomid="{rooms.roomId}" class="<!-- IF rooms.unread -->unread<!-- ENDIF rooms.unread -->">
    {{{each rooms.users}}}
    <!-- IF @first -->
    <div class="main-avatar">
        <a href="{config.relative_path}/user/{rooms.users.userslug}">{buildAvatar(rooms.users, "sm", true)}</a>
    </div>
    <!-- ENDIF @first -->
    {{{end}}}

    <ul class="members">
        {{{each rooms.users}}}
        <li>
            <a href="{config.relative_path}/user/{rooms.users.userslug}">{buildAvatar(rooms.users, "sm", true)}</a>
        </li>
        {{{end}}}
    </ul>

    <div class="notification-chat-content">
        <strong class="room-name">
            <!-- IF !rooms.lastUser.uid -->
            <span>[[modules:chat.no-users-in-room]]</span>
            <!-- ELSE -->
            <span component="chat/title"><!-- IF rooms.roomName -->{rooms.roomName}<!-- ELSE -->{rooms.usernames}<!-- ENDIF rooms.roomName --></span>
            <!-- ENDIF !rooms.lastUser.uid -->
        </strong>
    </div>
</li>
            {{{end}}}
        </ul>
    </div>
    <div component="chat/main-wrapper">
        <!-- IF roomId -->
<div component="chat/messages" class="expanded-chat" data-roomid="{roomId}">
    <div component="chat/header">
        <button type="button" class="close" aria-label="Close" data-action="close"><span aria-hidden="true">&times;</span></button>
        <button type="button" class="close" data-action="pop-out"><span aria-hidden="true"><i class="fa fa-compress"></i></span><span class="sr-only">[[modules:chat.pop-out]]</span></button>

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

        <span class="members">
            [[modules:chat.chatting_with]]:
            {{{each users}}}
            <a href="{config.relative_path}/uid/{../uid}">{../username}</a><!-- IF !@last -->,<!-- END -->
            {{{end}}}
        </span>
    </div>
    <div component="chat/messages/scroll-up-alert" class="scroll-up-alert alert alert-info" role="button">[[modules:chat.scroll-up-alert]]</div>
    <ul class="chat-content">
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
        <textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="2"></textarea>
        <button class="btn btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>
        <span component="chat/message/remaining">{maximumChatMessageLength}</span>
        <form component="chat/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="files[]" multiple class="hidden"/>
        </form>
    </div>
</div>
<!-- ELSE -->
<div class="alert alert-info">
    [[modules:chat.no-messages]]
</div>
<!-- ENDIF roomId -->
    </div>
    <div class="imagedrop"><div>[[topic:composer.drag_and_drop_images]]</div></div>
</div>