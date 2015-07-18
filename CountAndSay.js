/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 0) return "";
    if (n === 1) return "1";
    var res = "1";
    for (var i = 1; i < n; i++) {
        var s = "";
        var count = 1;
        for (var j = 0; j < res.length; j++) {
            while(j + 1 < res.length && res[j] == res[j+1]) {
                j++;
                count++;
            }
            s += count + res[j];
            count = 1;
        }
        res = s;
    }
    return res;
};

console.log(countAndSay(2));