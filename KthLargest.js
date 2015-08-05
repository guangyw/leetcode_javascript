/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var lo = 0;
    var hi = nums.length - 1;
    while(true) {
        var pos = partition(nums, lo, hi);
        if (pos === k  - 1) return nums[pos];
        if (pos < k - 1) {
            lo = pos + 1;
        } else {
            hi = pos -1;
        }
    }
    
    function partition(nums, lo, hi) {
        var l = lo + 1, r = hi;
        var p = nums[lo];
        while(l <= r) {
            if (nums[l] < p && nums[r] > p) {
                nums[l] = nums[l] ^ nums[r];
                nums[r] = nums[l] ^ nums[r];
                nums[l] = nums[l] ^ nums[r];
                l++; r--;
            }
            if (nums[l] >= p) l++;
            if (nums[r] <= p) r--;
        }
        
        nums[lo] = nums[lo] ^ nums[r];
        nums[r] = nums[lo] ^ nums[r];
        nums[lo] = nums[lo] ^ nums[r];
        
        return r;
    }
};

module.exports = findKthLargest;