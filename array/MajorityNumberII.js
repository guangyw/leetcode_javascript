/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElementII = function(nums) {
    var res = [];
    var candidate1, candidate2;
    var count1 = 0, count2 = 0;
    for (var i = 0; i < nums.length; i++) {
        if (candidate1 === nums[i]) {
            count1++;
        } else if (candidate2 === nums[i]){
            count2++;
        } else if (count1 === 0) {
            candidate1 = nums[i];
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = nums[i];
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    count1 = 0, count2 = 0;
    nums.forEach(function(num) {
        if (num === candidate1) count1++;
        if (num === candidate2) count2++;
    });
    
    if (count1 > (nums.length / 3 | 0)) res.push(candidate1);
    if (count2 > (nums.length / 3 | 0)) res.push(candidate2);
    return res;
};