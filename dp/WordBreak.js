/**
 * @param {string} s
 * @param {set<string>} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var dp = [];
    dp[0] = true;
    
    for (var i = 1; i < s.length + 1; i++) {
        for (var j = 0; j < i; j++) {
            if (dp[j] && wordDict.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return !(dp[s.length] === undefined);
};