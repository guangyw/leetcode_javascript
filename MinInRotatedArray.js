/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 0) return 0;
    return findMinRange(nums, 0, nums.length -1);
};

function findMinRange(nums, start, end) {
    if (start >= end) return nums[start];
    var mid = (start + end) /2 | 0;
    if (nums[mid] > nums[end]) return findMinRange(nums, mid + 1, end);
    else return findMinRange(nums, start, mid);
}

module.exports = findMin;