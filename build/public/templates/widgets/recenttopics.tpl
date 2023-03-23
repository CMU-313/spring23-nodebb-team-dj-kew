<div class="recent-replies">
	<ul id="recent_topics" data-numtopics="{numTopics}">
	<!-- BEGIN topics -->
<li class="clearfix widget-topics">
	<a href="<!-- IF topics.teaser.user.userslug -->{relative_path}/user/{topics.teaser.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.teaser.user.userslug -->">
		<!-- IF topics.teaser.user.picture -->
		<img title="{topics.teaser.user.username}" class="avatar avatar-sm not-responsive" src="{topics.teaser.user.picture}" />
		<!-- ELSE -->
		<div class="avatar avatar-sm not-responsive" style="background-color: {topics.teaser.user.icon:bgColor};">{topics.teaser.user.icon:text}</div>
		<!-- ENDIF topics.teaser.user.picture -->
	</a>

	<p>
		<a href="{relative_path}/topic/{topics.slug}">{topics.title}</a>
	</p>
	<span class="pull-right post-preview-footer">
		<span class="timeago" title="{topics.lastposttimeISO}"></span>
	</span>
</li>
<!-- END topics -->

	</ul>
</div>

<script>
'use strict';
/* globals app, socket*/
(function() {
	function onLoad() {
		var	topics = $('#recent_topics');

		var recentTopicsWidget = app.widgets.recentTopics;

		var numTopics = parseInt(topics.attr('data-numtopics'), 10) || 8;

		if (!recentTopicsWidget) {
			recentTopicsWidget = {};
			recentTopicsWidget.onNewTopic = function(topic) {
				var recentTopics = $('#recent_topics');
				if (!recentTopics.length) {
					return;
				}

				app.parseAndTranslate('partials/topics', { topics: [topic] }, function(html) {
					processHtml(html);

					html.hide()
						.prependTo(recentTopics)
						.fadeIn();

					app.createUserTooltips();
					if (recentTopics.children().length > numTopics) {
						recentTopics.children().last().remove();
					}
				});
			};

			app.widgets.recentTopics = recentTopicsWidget;
			socket.on('event:new_topic', app.widgets.recentTopics.onNewTopic);
		}

		function processHtml(html) {
			if ($.timeago) {
				html.find('span.timeago').timeago();
			}
		}
	}

	if (window.jQuery) {
		onLoad();
	} else {
		window.addEventListener('DOMContentLoaded', onLoad);
	}
})();
</script>
