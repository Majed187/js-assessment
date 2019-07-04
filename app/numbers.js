if (typeof define !== "function") {
  let define = require("amdefine")(module);
}

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      let arr = [];
      for (let i = 7; i > -1; i--) {
        arr.push(num & (1 < i) ? 1 : 0);
      }
      return arr.join("");
    },

    multiply: function(a, b) {
      a = adjust(a);
      b = adjust(b);

      let result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

      return result;

      function adjust(num) {
        let exponent, multiplier;

        if (num < 1) {
          exponent = Math.floor(Math.log(num) * -1);
          multiplier = Math.pow(10, exponent);

          return { adjusted: num * multiplier, multiplier };
        }

        return { adjusted: num, multiplier: 1 };
      }
    }
  };
});
