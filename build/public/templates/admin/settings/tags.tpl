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
    <div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/tags:tag]]</div>
    <div class="col-sm-10 col-xs-12">
        <form>
            <div class="form-group">
                <a class="btn btn-primary" href="{config.relative_path}/admin/manage/tags">
                    <i class="fa fa-external-link"></i>
                    [[admin/settings/tags:link-to-manage]]
                </a>
            </div>
            <div class="form-group">
                <label for="systemTags">[[admin/settings/tags:system-tags]]</label>
                <input id="systemTags" type="text" class="form-control" value="" data-field="systemTags" data-field-type="tagsinput" />
                <p class="help-block">
                    [[admin/settings/tags:system-tags-help]]
                </p>
            </div>
            <div class="form-group">
                <label for="minimumTagsPerTopics">[[admin/settings/tags:min-per-topic]]</label>
                <input id="minimumTagsPerTopics" type="text" class="form-control" value="0" data-field="minimumTagsPerTopic">
            </div>
            <div class="form-group">
                <label for="maximumTagsPerTopics">[[admin/settings/tags:max-per-topic]]</label>
                <input id="maximumTagsPerTopics" type="text" class="form-control" value="5" data-field="maximumTagsPerTopic">
            </div>
            <div class="form-group">
                <label for="minimumTagLength">[[admin/settings/tags:min-length]]</label>
                <input id="minimumTagLength" type="text" class="form-control" value="3" data-field="minimumTagLength">
            </div>
            <div class="form-group">
                <label for="maximumTagLength">[[admin/settings/tags:max-length]]</label>
                <input id="maximumTagLength" type="text" class="form-control" value="15" data-field="maximumTagLength">
            </div>
        </form>
    </div>
</div>

<div class="row">
    <div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/tags:related-topics]]</div>
    <div class="col-sm-10 col-xs-12">
        <form>
            <div class="form-group">
                <label for="maximumRelatedTopics">[[admin/settings/tags:max-related-topics]]</label>
                <input id="maximumRelatedTopics" type="text" class="form-control" value="5" data-field="maximumRelatedTopics">
            </div>
        </form>
    </div>
</div>

</div>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">save</i>
</button>
