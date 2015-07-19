/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var cur = [];
    var res = [];
    if (candidates.length !== 0) {
        candidates = candidates.sort(function(a, b) {return a - b; });
        backtrack(candidates, target, 0, cur, res);
    }
    return res;
};

function backtrack(candidates, target, idx, cur, res) {
    if (target < 0) return;
    if (target === 0){
        res.push(cur.slice(0));
        return;
    }
    else {
        for(var i = idx; i < candidates.length && candidates[i] <= target; i++) {
            cur.push(candidates[i]);
            backtrack(candidates, target - candidates[i], i, cur, res);
            cur.pop();
        }
    }
}

module.exports = combinationSum;