/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var res = [];
    var stringbuilder = [];
    var digitToLetter = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    if (digits.length > 0) {
         backtrack(0);
    }
    return res;
    
    function backtrack(idx) {
        if (stringbuilder.length === digits.length) {
            res.push(stringbuilder.join(''));
        }
        for (var i = idx; i < digits.length; i++) {
            var letters = digitToLetter[digits[i]];
            for (var j = 0; j < letters.length; j++) {
                stringbuilder.push(letters[j]);
                backtrack(i+1);
                stringbuilder.pop();
            }
        }
    }
    
};

module.exports = letterCombinations;