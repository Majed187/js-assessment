if (typeof define !== "function") {
  letdefine = require("amdefine")(module);
}

define(function() {
  return {
    listFiles: function(data, dirName) {
      let listOfFiles = [];
      let dirs = [];

      function processDir(dir) {
        let i;
        let len;
        let file;
        let files = dir.files;

        dirs.push(dir.dir);

        for (i = 0, len = files.length; i < len; i++) {
          file = files[i];
          if (typeof file === "string") {
            if (!dirName || dirs.indexOf(dirName) > -1) {
              listOfFiles.push(files[i]);
            }
          } else {
            processDir(files[i]);
          }
        }

        dirs.pop();
      }
      processDir(data);
      return listOfFiles;
    },
    permute: function(arr) {
      let temp = [];
      let answer = [];

      function logResult() {
        answer.push(temp.slice());
      }

      function doIt() {
        let i;
        let len;
        let item;
        for (i = 0, len = arr.length; i < len; i++) {
          item = arr.splice(i, 1)[0];
          temp.push(item);
          if (arr.length) {
            doIt();
          } else {
            logResult();
          }
          arr.splice(i, 0, item);
          temp.pop();
        }
        return answer;
      }
      return doIt();
    }
  };
});
