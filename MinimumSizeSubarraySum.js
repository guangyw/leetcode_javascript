/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (s <= nums[0]) return 1;
    var n = 0;
    var min = Infinity;
    var ns = [];
    for (var i = 0; i < nums.length; i++) {
        n += nums[i];
        ns.push(nums[i]);
        while (n >= s) {
            min = Math.min(ns.length, min);
            n -= ns.shift();
        }
    }
    return min === Infinity? 0 : min;
};

module.exports = minSubArrayLen;