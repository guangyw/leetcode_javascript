//Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

//Each number in C may only be used once in the combination.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var res = [];
    var cur = [];
    candidates = candidates.sort(function(a, b) {return a -b;});
    backtrack(candidates, target, 0, cur, res);
    return res;
};

function backtrack(candidates, target, idx, cur, res) {
    if (target < 0) return;
    if (target === 0) {
        res.push(cur.slice(0));
        return;
    }
    for (var i = idx; i < candidates.length && candidates[i] <= target; i++) {
        if (i > idx && candidates[i] === candidates[i-1]) continue; //Avoid duplicates. i > idx is important here
        cur.push(candidates[i]);
        backtrack(candidates, target - candidates[i], i + 1, cur, res);
        cur.pop();
    }
}