//This one is not working

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordDict) {
    wordDict.push(endWord);
    var queue = [];
    queue.unshift(beginWord);
    var steps = 0;
    while(queue) {
        
        steps++;
        var level = [];
        while(queue) {
            var curWord = queue.shift();
            if (curWord === endWord) return steps;
            var neighbours = findWords(curWord);
            neighbours.forEach(function(e) {
                level.push(e);
            });
        }
        queue = level;
    }
    
    return 0;
    
    function findWords(word) {
        var res = []
        for (var idx = 0; idx < word.length; idx++) {
            var valAtIdx = word[idx];
            var compareWord;
            for (var j = 0; j < wordDict.length; j++) {
                compareWord = wordDict[j];
                word[idx] = compareWord[idx];
                if (word === compareWord) {
                    res.push(compareWord);
                    wordDict.splice(j, 1);
                }

                word[idx] = valAtIdx;
            }
        }
        return res;
    }
    
};

module.exports = ladderLength;