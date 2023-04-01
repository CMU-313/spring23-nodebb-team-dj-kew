<!-- IF rooms.length -->
{{{each rooms}}}
<li class="<!-- IF ../unread -->unread<!-- ENDIF ../unread -->" data-roomid="{rooms.roomId}">
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
            <!-- IF rooms.roomName -->{rooms.roomName}<!-- ELSE -->{rooms.usernames}<!-- ENDIF rooms.roomName -->
            <!-- ENDIF !rooms.lastUser.uid -->
        </strong>
        <span class="teaser-content">
            <strong class="teaser-username">{rooms.teaser.user.username}:</strong>
            {rooms.teaser.content}
        </span>
    </div>
    <div class="teaser-timestamp notification-chat-controls">{rooms.teaser.timeago}</div>
</li>
{{{end}}}
<!-- ELSE -->
<li class="no_active"><a href="#">[[modules:chat.no_active]]</a></li>
<!-- ENDIF rooms.length -->