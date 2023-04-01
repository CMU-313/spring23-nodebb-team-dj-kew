
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "\n<div class=\"row database\">\n    " + 
      (guard((context != null) ? context['mongo'] : null) ?
        "\n    <div class=\"col-lg-6\">\n        " + 
          (guard((context != null && context['mongo'] != null) ? context['mongo']['serverStatusError'] : null) ?
            "\n        <div class=\"alert alert-warning\">\n            " + 
              __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['serverStatusError'] : null)) + 
              "\n        </div>\n        " :
            "") + 
          "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\"><i class=\"fa fa-hdd-o\"></i> [[admin/advanced/database:mongo]]</div>\n            <div class=\"panel-body\">\n                <div class=\"database-info\">\n                    <span>[[admin/advanced/database:mongo.version]]</span> <span class=\"text-right\">" + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['version'] : null)) + 
          "</span><br/>\n                    <hr/>\n                    <span>[[admin/advanced/database:uptime-seconds]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['uptime'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:mongo.storage-engine]]</span> <span class=\"text-right\">" + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['storageEngine'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:mongo.collections]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['collections'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:mongo.objects]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['objects'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:mongo.avg-object-size]]</span> <span class=\"text-right\">[[admin/advanced/database:x-b, " + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['avgObjSize'] : null)) + 
          "]]</span><br/>\n                    <hr/>\n                    <span>[[admin/advanced/database:mongo.data-size]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['dataSize'] : null)) + 
          "]]</span><br/>\n                    <span>[[admin/advanced/database:mongo.storage-size]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['storageSize'] : null)) + 
          "]]</span><br/>\n                    <span>[[admin/advanced/database:mongo.index-size]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['indexSize'] : null)) + 
          "]]</span><br/>\n                    " + 
          (guard((context != null && context['mongo'] != null) ? context['mongo']['fileSize'] : null) ?
            "\n                    <span>[[admin/advanced/database:mongo.file-size]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
              __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['fileSize'] : null)) + 
              "]]</span><br/>\n                    " :
            "") + 
          "\n                    <hr/>\n                    <span>[[admin/advanced/database:mongo.resident-memory]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['mem'] != null) ? context['mongo']['mem']['resident'] : null)) + 
          "]]</span><br/>\n                    <span>[[admin/advanced/database:mongo.virtual-memory]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['mem'] != null) ? context['mongo']['mem']['virtual'] : null)) + 
          "]]</span><br/>\n                    <span>[[admin/advanced/database:mongo.mapped-memory]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['mem'] != null) ? context['mongo']['mem']['mapped'] : null)) + 
          "]]</span><br/>\n                    <hr/>\n                    <span>[[admin/advanced/database:mongo.bytes-in]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['network'] != null) ? context['mongo']['network']['bytesIn'] : null)) + 
          "]]</span><br/>\n                    <span>[[admin/advanced/database:mongo.bytes-out]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['network'] != null) ? context['mongo']['network']['bytesOut'] : null)) + 
          "]]</span><br/>\n                    <span>[[admin/advanced/database:mongo.num-requests]]</span> <span class=\"text-right\">" + 
          __escape(guard((context != null && context['mongo'] != null && context['mongo']['network'] != null) ? context['mongo']['network']['numRequests'] : null)) + 
          "</span><br/>\n                </div>\n            </div>\n        </div>\n    </div>\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null) ? context['redis'] : null) ?
        "\n    <div class=\"col-lg-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\"><i class=\"fa fa-hdd-o\"></i> [[admin/advanced/database:redis]]</div>\n            <div class=\"panel-body\">\n                <div class=\"database-info\">\n                    <span>[[admin/advanced/database:redis.version]]</span> <span class=\"text-right\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['redis_version'] : null)) + 
          "</span><br/>\n                    <hr/>\n                    <span>[[admin/advanced/database:uptime-seconds]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['uptime_in_seconds'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:uptime-days]]</span> <span class=\"text-right\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['uptime_in_days'] : null)) + 
          "</span><br/>\n                    <hr/>\n                    <span>[[admin/advanced/database:redis.keys]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['keys'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:redis.expires]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['expires'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:redis.avg-ttl]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['avg_ttl'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:redis.connected-clients]]</span> <span class=\"text-right\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['connected_clients'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:redis.connected-slaves]]</span> <span class=\"text-right\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['connected_slaves'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:redis.blocked-clients]]</span> <span class=\"text-right\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['blocked_clients'] : null)) + 
          "</span><br/>\n                    <hr/>\n\n                    <span>[[admin/advanced/database:redis.used-memory]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['used_memory_human'] : null)) + 
          "]]</span><br/>\n                    <span>[[admin/advanced/database:redis.memory-frag-ratio]]</span> <span class=\"text-right\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['mem_fragmentation_ratio'] : null)) + 
          "</span><br/>\n                    <hr/>\n                    <span>[[admin/advanced/database:redis.total-connections-recieved]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['total_connections_received'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:redis.total-commands-processed]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['total_commands_processed'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:redis.iops]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['instantaneous_ops_per_sec'] : null)) + 
          "</span><br/>\n\n                    <span>[[admin/advanced/database:redis.iinput]]</span> <span class=\"text-right\">[[admin/advanced/database:x-mb, " + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['instantaneous_input'] : null)) + 
          "]]</span><br/>\n                    <span>[[admin/advanced/database:redis.ioutput]]</span> <span class=\"text-right\">[[admin/advanced/database:x-mb, " + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['instantaneous_output'] : null)) + 
          "]]</span><br/>\n                    <span>[[admin/advanced/database:redis.total-input]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['total_net_input'] : null)) + 
          "]]</span><br/>\n                    <span>[[admin/advanced/database:redis.total-output]]</span> <span class=\"text-right\">[[admin/advanced/database:x-gb, " + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['total_net_output'] : null)) + 
          "]]</span><br/>\n\n                    <hr/>\n                    <span>[[admin/advanced/database:redis.keyspace-hits]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['keyspace_hits'] : null)) + 
          "</span><br/>\n                    <span>[[admin/advanced/database:redis.keyspace-misses]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['keyspace_misses'] : null)) + 
          "</span><br/>\n                </div>\n            </div>\n        </div>\n    </div>\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null) ? context['postgres'] : null) ?
        "\n    <div class=\"col-lg-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\"><i class=\"fa fa-hdd-o\"></i> [[admin/advanced/database:postgres]]</div>\n            <div class=\"panel-body\">\n                <div class=\"database-info\">\n                    <span>[[admin/advanced/database:postgres.version]]</span> <span class=\"text-right\">" + 
          __escape(guard((context != null && context['postgres'] != null) ? context['postgres']['version'] : null)) + 
          "</span><br/>\n                    <hr/>\n                    <span>[[admin/advanced/database:uptime-seconds]]</span> <span class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['postgres'] != null) ? context['postgres']['uptime'] : null)) + 
          "</span><br/>\n                </div>\n            </div>\n        </div>\n    </div>\n    " :
        "") + 
      "\n</div>\n\n<div class=\"row database\">\n    " + 
      (guard((context != null) ? context['mongo'] : null) ?
        "\n    <div class=\"col-lg-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\".mongodb-raw\">\n                <h3 class=\"panel-title\"><i class=\"fa fa-caret-down\"></i> [[admin/advanced/database:mongo.raw-info]]</h3>\n            </div>\n\n            <div class=\"panel-body mongodb-raw collapse\">\n                <div class=\"highlight\">\n                    <pre>" + 
          __escape(guard((context != null && context['mongo'] != null) ? context['mongo']['raw'] : null)) + 
          "</pre>\n                </div>\n            </div>\n        </div>\n    </div>\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null) ? context['redis'] : null) ?
        "\n    <div class=\"col-lg-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\".redis-raw\">\n                <h3 class=\"panel-title\"><i class=\"fa fa-caret-down\"></i> [[admin/advanced/database:redis.raw-info]]</h3>\n            </div>\n\n            <div class=\"panel-body redis-raw collapse\">\n                <div class=\"highlight\">\n                    <pre>" + 
          __escape(guard((context != null && context['redis'] != null) ? context['redis']['raw'] : null)) + 
          "</pre>\n                </div>\n            </div>\n        </div>\n    </div>\n    " :
        "") + 
      "\n\n    " + 
      (guard((context != null) ? context['postgres'] : null) ?
        "\n    <div class=\"col-lg-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\".postgresql-raw\">\n                <h3 class=\"panel-title\"><i class=\"fa fa-caret-down\"></i> [[admin/advanced/database:postgres.raw-info]]</h3>\n            </div>\n\n            <div class=\"panel-body postgresql-raw collapse\">\n                <div class=\"highlight\">\n                    <pre>" + 
          __escape(guard((context != null && context['postgres'] != null) ? context['postgres']['raw'] : null)) + 
          "</pre>\n                </div>\n            </div>\n        </div>\n    </div>\n    " :
        "") + 
      "\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
