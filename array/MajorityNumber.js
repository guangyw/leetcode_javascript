/**
 * @param {number[]} nums
 * @return {number}
 */
 
 //http://gregable.com/2013/10/majority-vote-algorithm-find-majority.html
 
//  The essential concepts is you keep a counter for the majority number X. 
//  If you find a number Y that is not X, the current counter should deduce 1. 
//  The reason is that if there is 5 X and 4 Y, there would be one (5-4) more X than Y. 
//  This could be explained as "4 X being paired out by 4 Y".

var majorityElement = function(nums) {
    var count = 0;
    var major;
    for (var i = 0; i < nums.length; i++) {
        if (count === 0) {
            major = nums[i];
            count = 1;
        } else if (major === nums[i]) {
            count++
        } else {
            count--;
        }
    }
    return major;
};