/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    var res = [];
    for (var i = 0; i < input.length; i++) {
        var opt = input[i];        
        if (opt === '+' || opt === '-' || opt === '*') {
            var lefts = diffWaysToCompute(input.substring(0, i));
            var rights = diffWaysToCompute(input.substring(i+1));
            lefts.forEach(function(left) {
               rights.forEach(function(right) {
                  if (opt === '+') {
                      res.push(left + right);
                  } else if (opt === '-') {
                      res.push(left - right);
                  } else if (opt === '*') {
                      res.push(left * right);
                  }
               }); 
            });
        }
    }
    if (res.length === 0) {
        res.push(parseInt(input));
    }
    return res;
};

module.exports = diffWaysToCompute;