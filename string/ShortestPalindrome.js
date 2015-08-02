/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    var farEnd = -1;
    for (var i = 0; i < s.length; i++) {
        var end = buildPalinDrome(s, i, i);
        var end2 = buildPalinDrome(s, i, i+1);
        farEnd = Math.max(farEnd, end, end2);
    }
    var res = s.split('');
    for (var i = farEnd; i < s.length; i++) {
        res.unshift(s[i]);
    }
    
    return res.join('');
    
    function buildPalinDrome(s, start, end) {
        while(start >= 0 && end < s.length && s[start] === s[end]) {
            if (start === 0) return end + 1;
            start--;
            end++;
        }
        
        return -1;
    }
};

module.exports = shortestPalindrome;