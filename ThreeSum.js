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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
//Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
var threeSumClosest = function(nums, target) {
    nums = nums.sort(function(a, b) {return a - b; });
    var minDiff = Infinity;
    var closest;
    for (var i = 0; i < nums.length -2; i++) {
        var middle = target - nums[i];
        for (var m = i + 1, n = nums.length -1; m < n;) {
            var low = nums[m], high = nums[n];
            if (low + high === middle) return target;
            if (Math.abs(low + high - middle) < minDiff) {
                closest = low + high + nums[i];
                minDiff = Math.abs(low + high - middle);
            } 
            if (low + high > middle) {
                while(n > 0 && nums[n] === nums[--n]) {}
            } else {
                while(m < nums.length -1 && nums[m] === nums[++m]) {} 
            }
        }
    }
    return closest;
};

function incLow(nums, low) {
    while (low < nums.length -1 && nums[low] === nums[++low]) {}
    return low;
}

function decHigh(nums, high) {
    while (high > 0 && nums[high] === nums[--high]) {}
    return high;
}

module.exports = {
    threeSum: threeSum,
    threeSumClosest: threeSumClosest
};