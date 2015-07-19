/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort(function(a, b) {return a -b; });
    var res = [];
    for (var i = 0; i < nums.length - 2; i = incLow(nums,i)) {
        var triplet =[];
        if (nums[i] > 0) return res;
        var target = 0 - nums[i];
        for (var m = i+1, n = nums.length -1; m < n;) {
            if (target < nums[m] + nums[n]) {
                n--;
            } else if (target > nums[m] + nums[n]) {
                m++;
            } else {
                triplet.push(nums[i]);
                triplet.push(nums[m]);
                triplet.push(nums[n]);
                res.push(triplet);
                triplet = [];
                m = incLow(nums,m);
                n = decHigh(nums,n);
            }
        }
    }
    return res;
    
};

function incLow(nums, low) {
    while (low < nums.length -1 && nums[low] === nums[++low]) {}
    return low;
}

function decHigh(nums, high) {
    while (high > 0 && nums[high] === nums[--high]) {}
    return high;
}

module.exports = threeSum;