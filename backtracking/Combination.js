//Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var res = [];
    var cur = [];
    backtrack(n, res, cur, 1, k);
    return res;
};

function backtrack(n, res, cur, level, k) {
    if (cur.length === k) {
		res.push(cur.slice(0));
	} else {
	    for(var i=level; i<=n; i++) {
	        cur.push(i);
	        backtrack(n, res,cur, i+1, k);
	        cur.pop();
    	}
	}
}

module.exports = combine;