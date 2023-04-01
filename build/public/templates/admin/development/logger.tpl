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
<div class="row logger">
    <div class="col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">[[admin/development/logger:logger-settings]]</div>
            <div class="panel-body">
                <p>
                    [[admin/development/logger:description]]
                </p>
                <br/>
                <p>
                    [[admin/development/logger:explanation]]
                </p>
                <br/>

                <form>

                    <label>
                        <input type="checkbox" data-field="loggerStatus"> <strong>[[admin/development/logger:enable-http]]</strong>
                    </label>
                    <br/>
                    <br/>

                    <label>
                        <input type="checkbox" data-field="loggerIOStatus"> <strong>[[admin/development/logger:enable-socket]]</strong>
                    </label>
                    <br/>
                    <br/>

                    <label for="loggerPath">[[admin/development/logger:file-path]]</label>
                    <input id="loggerPath" class="form-control" type="text" placeholder="[[admin/development/logger:file-path-placeholder]]" data-field="loggerPath" />
                </form>
            </div>
        </div>
    </div>
</div>

</div>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">save</i>
</button>

