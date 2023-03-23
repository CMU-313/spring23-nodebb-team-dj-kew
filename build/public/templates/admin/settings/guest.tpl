<div class="settings">
    <div class="row">
        <div class="col-sm-2 col-xs-12 content-header">
            [[admin/admin:settings-header-contents]]
        </div>
        <div class="col-sm-10 col-xs-12">
            <nav class="section-content">
                <ul></ul>
            </nav>
        </div>
    </div>

<div class="row">
    <div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/guest:settings]]</div>
    <div class="col-sm-10 col-xs-12">
        <form role="form">
            <div class="checkbox">
                <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
                    <input class="mdl-switch__input" type="checkbox" data-field="allowGuestHandles">
                    <span class="mdl-switch__label"><strong>[[admin/settings/guest:handles.enabled]]</strong></span>
                </label>
            </div>
            <p class="help-block">
                [[admin/settings/guest:handles.enabled-help]]
            </p>
        </form>
        <form role="form">
            <div class="checkbox">
                <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
                    <input class="mdl-switch__input" type="checkbox" data-field="guestsIncrementTopicViews">
                    <span class="mdl-switch__label"><strong>[[admin/settings/guest:topic-views.enabled]]</strong></span>
                </label>
            </div>
        </form>
        <form role="form">
            <div class="checkbox">
                <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
                    <input class="mdl-switch__input" type="checkbox" data-field="allowGuestReplyNotifications">
                    <span class="mdl-switch__label"><strong>[[admin/settings/guest:reply-notifications.enabled]]</strong></span>
                </label>
            </div>
        </form>
    </div>
</div>

</div>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">save</i>
</button>
