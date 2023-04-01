
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
    return "    <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"upload-file\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                    <h3>" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h3>\n                </div>\n                <div class=\"modal-body\">\n                    <form id=\"uploadForm\" action=\"\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\">\n                            " + 
      (guard((context != null) ? context['description'] : null) ?
        "\n                            <label for=\"fileInput\">" + 
          __escape(guard((context != null) ? context['description'] : null)) + 
          "</label>\n                            " :
        "") + 
      "\n                            <input type=\"file\" id=\"fileInput\" name=\"files[]\" " + 
      (guard((context != null) ? context['accept'] : null) ?
        "accept=\"" + 
          __escape(guard((context != null) ? context['accept'] : null)) + 
          "\"" :
        "") + 
      ">\n                            " + 
      (guard((context != null) ? context['showHelp'] : null) ?
        "\n                            <p class=\"help-block\">\n                                " + 
          (guard((context != null) ? context['accept'] : null) ?
            "\n                                [[global:allowed-file-types, " + 
              __escape(guard((context != null) ? context['accept'] : null)) + 
              "]]\n                                " :
            "") + 
          "\n\n                                " + 
          (guard((context != null) ? context['fileSize'] : null) ?
            "<span id=\"file-size-block\">([[uploads:maximum-file-size, " + 
              __escape(guard((context != null) ? context['fileSize'] : null)) + 
              "]])</span>" :
            "") + 
          "\n                            </p>\n                            " :
        "") + 
      "\n                        </div>\n                        <input type=\"hidden\" id=\"params\" name=\"params\" />\n                    </form>\n\n                    <div id=\"upload-progress-box\" class=\"progress progress-striped hide\">\n                        <div id=\"upload-progress-bar\" class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\">\n                            <span class=\"sr-only\"> [[success:success]]</span>\n                        </div>\n                    </div>\n\n                    <div id=\"alert-status\" class=\"alert alert-info hide\"></div>\n                    <div id=\"alert-success\" class=\"alert alert-success hide\"></div>\n                    <div id=\"alert-error\" class=\"alert alert-danger hide\"></div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">[[global:close]]</button>\n                    <button id=\"fileUploadSubmitBtn\" class=\"btn btn-primary\">" + 
      __escape(guard((context != null) ? context['button'] : null)) + 
      "</button>\n                </div>\n            </div>\n        </div>\n    </div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
