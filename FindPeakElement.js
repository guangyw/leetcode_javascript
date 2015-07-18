var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;
    var start = 0;
    var end = nums.length -1;
    while(start < end) {
        var mid = (start + end) / 2 | 0;
        if (((nums[mid] > nums[mid -1]) || (mid - 1 < 0)) && (nums[mid] > nums[mid + 1] || mid + 1 > end)) return mid;
        else if (nums[mid] <= nums[mid -1]) {
            end = mid -1;
            continue;
        } else {
            start = mid + 1;
            continue;
        }
    }
    return start;
};

//include the mid in the next search, the logic would be much easier
function findPeakerShorter(nums) {
    var start = 0;
    var end = nums.length -1;
    while(start < end) {
        var mid = (start + end) / 2 | 0;
        if (nums[mid] > nums[mid + 1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

function findPeakRecur(nums) {
    return findPeakHelper(nums, 0, nums.length -1);
}

function findPeakHelper(nums, start, end) {
    if (nums.length === 1)  return 0;
    var mid = (start + end) /2 | 0;
    if ((mid === 0 || nums[mid] > nums[mid -1]) && (mid === end || nums[mid] > nums[end -1])) return mid;
    else if (nums[mid] <= nums[mid -1]) {
        return findPeakHelper(nums, start, mid -1);
    } else {
        return findPeakHelper(nums, mid + 1, end);
    }
}

var FindPeak = {
    findPeakElement: findPeakElement,
    findPeakRecur: findPeakRecur
}

module.exports = FindPeak;