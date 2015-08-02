// Given a set of distinct integers, nums, return all possible subsets.

// Note:
// Elements in a subset must be in non-descending order.
// The solution set must not contain duplicate subsets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res = [];
    var track = []
    var nums_sorted = nums.sort(function(a, b) {return a - b; });
    backtrack(nums_sorted, 0);
    
    function backtrack(nums, level){
        res.push(track.slice());
        for (var i = level; i < nums.length; i++) {
            track.push(nums_sorted[i]);
            backtrack(nums_sorted, level + 1);
            track.pop();
        }
    }
    return res;
};


var subsets_iterative = function(nums) {
    var res = [];
    res.push([]);
    nums = nums.sort(function(a, b) {return a - b;});
    for (var i = 0; i < nums.length; i++) {
        res.forEach(function(arr) {
           var newArr = arr.slice();
           newArr.push(nums[i]);
           res.push(newArr); 
        });
    }
    return res;
};

module.exports = subsets;