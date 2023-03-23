<div class="text-center">
    <div class="panel panel-default">
        <div class="panel-body collapse" id="flags-daily-wrapper" aria-expanded="false">
            <div><canvas id="flags:daily" height="150"></canvas></div>
        </div>
        <div class="panel-footer" data-toggle="collapse" data-target="#flags-daily-wrapper" aria-controls="#flags-daily-wrapper"><small>[[flags:graph-label]]</small>&nbsp;<i class="fa fa-sort"></i></div>
    </div>
</div>

<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">[[flags:quick-filters]]</h3>
    </div>
    <div class="panel-body">
        <ul>
            <li><a href="{config.relative_path}/flags?quick=mine">[[flags:filter-quick-mine]]</a></li>
        </ul>
    </div>
</div>

<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">[[flags:filters]]</h3>
    </div>
    <div class="panel-body">
        <form role="form" component="flags/filters">
            <fieldset>
                <div class="form-group">
                    <label for="filter-cid">[[flags:filter-cid]]</label>
                    <div class="input-group">
                    <div component="category/dropdown" class="btn-group category-dropdown-container bottom-sheet">
   <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    {{{ if selectedCategory }}}<span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> <span class="visible-sm-inline visible-md-inline visible-lg-inline">{selectedCategory.name}</span>{{{ else }}}
    <span class="visible-sm-inline visible-md-inline visible-lg-inline">[[unread:all_categories]]</span><span class="visible-xs-inline"><i class="fa fa-fw fa-list"></i></span>{{{ end }}} <span class="caret"></span>
</button>
<div component="category-selector-search" class="hidden">
    <input type="text" class="form-control" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
    <li role="presentation" class="category" data-all="all">
        <a role="menu-item" href="{config.relative_path}/{allCategoriesUrl}"><i component="category/select/icon" class="fa fa-fw fa-check {{{if selectedCategory}}}invisible{{{end}}}"></i> [[unread:all_categories]]</a>
    </li>
    {{{each categoryItems}}}
    <li role="presentation" class="category {{{ if ../disabledClass }}}disabled{{{ end }}}" data-cid="{../cid}" data-parent-cid="{../parentCid}" data-name="{../name}">
        <a role="menu-item" href="#">{../level}<i component="category/select/icon" class="fa fa-fw fa-check {{{ if !../selected }}}invisible{{{ end }}}"></i><span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">{{{ if ../icon }}}<span class="fa-stack" style="{function.generateCategoryBackground}"><i class="fa fa-fw fa-stack-1x {../icon}" style="color: {../color};"></i></span>{{{ end }}} {../name}</span></a>
    </li>
    {{{end}}}
</ul>
</div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="sort">[[flags:sort]]</label>
                    <select class="form-control" id="sort" name="sort">
                        <optgroup label="[[flags:sort-all]]">
                            <option value="newest">[[flags:sort-newest]]</option>
                            <option value="oldest">[[flags:sort-oldest]]</option>
                            <option value="reports">[[flags:sort-reports]]</option>
                        </optgroup>
                        <optgroup label="[[flags:sort-posts-only]]">
                            <option value="downvotes">[[flags:sort-downvotes]]</option>
                            <option value="upvotes">[[flags:sort-upvotes]]</option>
                            <option value="replies">[[flags:sort-replies]]</option>
                        </optgroup>
                    </select>
                </div>
                <div class="form-group">
                    <label for="filter-state">[[flags:filter-state]]</label>
                    <select class="form-control" id="filter-state" name="state">
                        <option value="">[[flags:state-all]]</option>
                        <option value="open">[[flags:state-open]]</option>
                        <option value="wip">[[flags:state-wip]]</option>
                        <option value="resolved">[[flags:state-resolved]]</option>
                        <option value="rejected">[[flags:state-rejected]]</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="filter-type">[[flags:filter-type]]</label>
                    <select class="form-control" id="filter-type" name="type">
                        <option value="">[[flags:filter-type-all]]</option>
                        <option value="post">[[flags:filter-type-post]]</option>
                        <option value="user">[[flags:filter-type-user]]</option>
                    </select>
                </div>
            </fieldset>

            <fieldset class="collapse{{{ if expanded }}} in{{{ end }}}" id="more-filters" aria-expanded="{expanded}">
                <div class="form-group">
                    <label for="filter-assignee">[[flags:filter-assignee]]</label>
                    <input type="text" class="form-control" id="filter-assignee" name="assignee" />
                </div>

                <div class="form-group">
                    <label for="filter-targetUid">[[flags:filter-targetUid]]</label>
                    <input type="text" class="form-control" id="filter-targetUid" name="targetUid" />
                </div>

                <div class="form-group">
                    <label for="filter-reporterId">[[flags:filter-reporterId]]</label>
                    <input type="text" class="form-control" id="filter-reporterId" name="reporterId" />
                </div>
            </fieldset>

            {{{ if expanded }}}
            <button type="button" class="btn btn-link btn-block" data-toggle="collapse" data-target="#more-filters" aria-controls="#more-filters" data-text-variant="[[flags:more-filters]] ">[[flags:fewer-filters]]&nbsp;<i class="fa fa-sort"></i></button>
            {{{ else }}}
            <button type="button" class="btn btn-link btn-block" data-toggle="collapse" data-target="#more-filters" aria-controls="#more-filters" data-text-variant="[[flags:fewer-filters]] ">[[flags:more-filters]]&nbsp;<i class="fa fa-sort"></i></button>
            {{{ end }}}
            <button type="button" id="apply-filters" class="btn btn-primary btn-block">[[flags:apply-filters]]</button>
        </form>
    </div>
</div>