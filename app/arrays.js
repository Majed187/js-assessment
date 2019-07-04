if (typeof define !== "function") {
  var define = require("amdefine")(module);
}

define(function() {
  return {
    indexOf: function(arr, item) {
      return arr.indexOf(item);
    },
    sum: function(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    },
    remove: function(arr, item) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
          var item = arr.splice(i, 1);
        }
      }
      return arr;
    },

    removeWithoutCopy: function(arr, item) {
      let i,
        arrLength = arr.length;

      for (i = 0; i < arrLength; i += 1) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i = i - 1;
        }
      }
      return arr;
    },

    append: function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function(arr) {
      arr.pop();
      return arr;
    },

    prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail: function(arr) {
      arr.shift();
      return arr;
    },

    concat: function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
      let i,
        arrLength = arr.length;

      for (i = 0; i < arrLength; i += 1) {
        if (i === index) {
          arr.splice(i, 0, item);
          arrLength += arrLength;
        }
      }
      return arr;
    },

    count: function(arr, item) {
      let i,
        count = 0,
        arrLength = arr.length;

      for (i = 0; i < arrLength; i += 1) {
        if (arr[i] === item) {
          count += 1;
        }
      }
      return count;
    },

    duplicates: function(arr) {
      let i,
        counts = [],
        duplicates = [],
        arrLength = arr.length,
        countsLength;

      for (i = 0; i < arrLength; i += 1) {
        if (counts[arr[i]] === undefined) {
          counts[arr[i]] = 1;
        } else {
          counts[arr[i]] += 1;
        }
      }

      countsLength = counts.length;
      for (i = 0; i < countsLength; i += 1) {
        if (counts[i] > 1) {
          duplicates.push(i);
        }
      }
      return duplicates;
    },

    square: function(arr) {
      let i;
      arrLength = arr.length;

      for (i = 0; i < arrLength; i += 1) {
        arr[i] = arr[i] * arr[i];
      }
      return arr;
    },

    findAllOccurrences: function(arr, target) {
      let i,
        duplicates = [],
        arrLength = arr.length;
      for (i = 0; i < arrLength; i += 1) {
        if (arr[i] === target) {
          duplicates.push(i);
        }
      }

      return duplicates;
    }
  };
});
