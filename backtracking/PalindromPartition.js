/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var res = [];
    var curList = [];
    backtrack(s, res, curList, 0);
    return res;
};

function backtrack(s, res, curList, level) {
    if (curList.length === s.length) res.push(curList.slice(0));
    
    if (level >= s.length) return;
    
    for (var i = level; i < s.length; i++) {
        if (isPalindrom(s, level, i)) {
            curList.push(s.substring(level, i+1));
            backtrack(s, res, curList, i + 1);
            curList.pop();
        }
    }
}

function isPalindrom(s, start, end) {
    if (s.length === 1 || start === end) return true;
    while(start < end) {
        if (s[start++] !== s[end--]) return false;
    }
    return true;
}

module.exports = partition;