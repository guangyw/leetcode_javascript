//You are climbing a stair case. It takes n steps to reach to the top.

//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the t

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var ways = [];
    ways[0] = 1;
    for (var i = 1; i <= n; i++) {
        ways[i] = ways[i -1] + (i-2 >= 0? ways[i-2]:0);
    }
    return ways[n];
};

//This recursive method would recalculating climbsStairsRecur(n-1) and a lot more.
//NO GOOD
function climbStairsRecur(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairsRecur(n -1) + (n > 2 ? climbStairsRecur(n-2): 0);
}

module.exports = climbStairs;