/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
    if (s === '') return 0;
    var numOfDecoding = [];
    if (s[0] === '0') return 0;
    numOfDecoding[0] = 1;
    numOfDecoding[1] = 1;
    for (var i = 1; i < s.length; i++) {
        numOfDecoding[i+1] = 0;
        if (s[i] >= '1' && s[i] <= '9') numOfDecoding[i+1] += numOfDecoding[i];
        if (s.substr(i-1, 2) <= '26' && s.substr(i-1,2) >='10') numOfDecoding[i+1] += numOfDecoding[i-1];
    }
    return numOfDecoding[s.length] || 0;
};
 
// var numDecodings = function(s) {
//     var numOfDecoding = [];
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] !== '0') break;
//     }
//     s = s.substring(i);
//     numOfDecoding[0] = 0;
//     for (var i = 0; i < s.length; i++) {
//         var num = 0;
//         if (parseInt(s[i]) > 0) num++;
//         if (i > 1) {
//             if (parseInt(s[i -1] + s[i]) <= 26) {
//                 num++;
//             } 
//         }

//         numOfDecoding[i + 1] = numOfDecoding[i] + num;
//     }
//     return numOfDecoding[s.length] || 0;
// };

module.exports = numDecodings;