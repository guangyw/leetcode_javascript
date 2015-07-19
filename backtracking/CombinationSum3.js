//Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

//Ensure that numbers within the set are sorted in ascending order.

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var res = [];
    var cur = [];
    backtrack(k, n, 1, cur, res);
    return res;
};

function backtrack(k, target, idx, cur, res) {
    if (target < 0 || k < 0) return;
    if (k === 0 && target === 0) {
        res.push(cur.slice(0)); 
    } else {
        for (var i = idx; i <= Math.min(9, target); i++) {  //remember to start from idx. 
            cur.push(i);
            backtrack(k -1, target - i, i+1, cur, res);
            cur.pop();
        }
    }
}

module.exports = combinationSum3;