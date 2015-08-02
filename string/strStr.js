/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    for (var i = 0; ; i++) {
        for (var j = 0; ; j++) {
            if (j >= needle.length) return i;
            if (i + j >= haystack.length) return -1;
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
    }
    return -1;
};
 
// var strStr = function(haystack, needle) {
//     if (needle === '') return 0;
//     for (var i = 0; i < haystack.length; i++) {
//         for (var j = i; j < needle.length; j++) {
//             var k = i;
//             if (haystack[k] !== needle[i]) {
//                 break;
//             }
//             if (j - i + 1 === needle.length) return i;
//             k++;
//             j++;
//         }
//     }
//     return -1;
// };

module.exports = strStr;