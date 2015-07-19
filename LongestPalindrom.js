/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	var start = 0;
	var len = 0;
	for (var i = 0; i < s.length; i++) {
		if (isPalindrom(s, i - len, i)) {
			start = i - len;
			len = len + 1;
		} else if (isPalindrom(s, i - len -1, i)) {
			start = i - len -1;
			len = len + 2;
		}
	}
	return s.substr(start, len);
};

function isPalindrom(s, start, end) {
	for (var i = start, j = end; i < j; i++, j--) {
		if (s[i] !== s[j]) {
			return false;
		}
	}
	return true;
}

module.exports = longestPalindrome;