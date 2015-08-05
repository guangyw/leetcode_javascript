// Given a string s and a dictionary of words dict, determine 
// if s can be segmented into a space-separated sequence of one or more dictionary words.

// For example, given
// s = "leetcode",
// dict = ["leet", "code"].

// Return true because "leetcode" can be segmented as "leet code".

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