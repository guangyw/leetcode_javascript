/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordDict) {
    var ladder = [];
    var minLength = Infinity;
    if (wordDict.indexOf(endWord) === -1) {
        wordDict.push(endWord);
    }
    var idx;
    if ((idx = wordDict.indexOf(beginWord)) !== -1) {
        wordDict.splice(idx, 1);
    }
    ladder.push(beginWord);
    buildLadder(beginWord, endWord, wordDict, ladder);
    return minLength;
    
    function buildLadder(start, end, dict, ladder) {
        if (start === end) {
            if (ladder.length < minLength) minLength = ladder.length;
            return;
        }
        if (dict.length <= 0 || ladder.length >= minLength) return;
        
        for (var i = 0; i < dict.length; i++) {
            var next = dict[i];
            if (isNeighbor(start, next)) {
                ladder.push(next);
                dict.splice(i,1);
                buildLadder(next, end, dict, ladder);
                dict.unshift(ladder.pop());
            }
        }
    }
};

function isNeighbor(me, you) {
    var diff = 0;
    if (me.length !== you.length) return false;
    for (var i = 0; i < me.length; i++) {
        if (me[i] !== you[i]) diff++;
    }
    return diff === 1;
}

module.exports = ladderLength;