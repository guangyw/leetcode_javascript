/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var money = [];
    money[0] = 0;
    money[1] = nums[0];
    for (var i = 1; i < nums.length; i++) {
        money[i+1] = Math.max(money[i - 1] + nums[i], money[i]);
    }
    return money[nums.length];
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var robII = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    var robFirst = [];
    var dontRobFirst = [];
    robFirst[0] = 0;
    robFirst[1] = nums[0];
    dontRobFirst[0] = 0;
    dontRobFirst[1] = 0;
    
    for (var i = 1; i < nums.length; i++) {
        dontRobFirst[i + 1] = Math.max(dontRobFirst[i - 1] + nums[i], dontRobFirst[i]);
        if (i < nums.length -1) {
            robFirst[i + 1] = Math.max(robFirst[i - 1] + nums[i], robFirst[i]);
        }
    }
    return Math.max(robFirst[nums.length -1], dontRobFirst[nums.length]);
};

module.exports = {
	rob: rob,
	robII: robII
}