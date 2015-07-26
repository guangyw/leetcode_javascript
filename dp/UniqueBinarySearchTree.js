/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var nums = [];
    nums[0] = 1;
    for (var i = 1; i <=n; i++) {
        nums[i] = 0;
        for (var j =0; j < i; j++) {
            nums[i] += nums[j] * nums[i-j -1];
        }
    }
    return nums[n];
};

module.exports = numTrees;