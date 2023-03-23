
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
    return "<label>Amount of Posts to display:</label>\n<input type=\"text\" class=\"form-control\" name=\"numPosts\" placeholder=\"4\" />\n<label>\n\tCustom Category:<br />\n\t<small>Leave blank to dynamically pull from current category. If placed on a page other than a category will pull from all recent posts</small>\n</label>\n<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
