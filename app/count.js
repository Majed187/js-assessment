if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    count: function(start, end) {
      let timeout;
      function doIt() {
        if (start <= end) {
          timeout = setTimeout(doIt, 100);
        }
      }
      doIt();
      return {
        cancel: function() {
          timeout && clearTimeout(timeout);
        }
      };
    }
  };
});
