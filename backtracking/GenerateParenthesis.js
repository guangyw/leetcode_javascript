/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    var ret = [];
    var start = 0;
    var end = 0;
    dp(start, end);
    
    function dp(start, end) {
        if (start === n && end === n) {
            ret.push(res.slice().join(''));
            return;
        }
        if (start < n) {
            res.push('(');
            dp(start+1, end);
            res.pop();  
        }
        if (end < start) {
            res.push(')');
            dp(start, end + 1);
            res.pop();
        }
    }
    return ret;
};

module.exports = generateParenthesis;