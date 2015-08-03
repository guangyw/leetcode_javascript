// Given an array of n integers where n > 1, nums, 
// return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var res = [];
    res[0] = 1;
    for (var i = 1; i < nums.length; i++) {
        res[i] = res[i-1] * nums[i-1];
    }
    var tmp = 1;
    for (var i = nums.length -1; i >=0; i--) {
        res[i] = res[i] * tmp;
        tmp *= nums[i];
    }
    
    return res;
};