/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;
    var res = [];
    
    for(var i = 0; i < len1; i++) {
        for (var j = 0; j < len2; j++) {
            if(!res[i+j]) res[i+j] = 0;
            res[i + j] += num1[len1 - i -1] * num2[len2 - j -1];
        }
    }
    
    var carry = 0;
    for (var k = 0; k < len1 + len2 -1; k++) {
        res[k] += carry;
        carry = res[k] / 10 | 0;
        res[k] = res[k] % 10;
    }
    if (carry) {
        res[k+1] = carry;
    }
    
    for(k = res.length-1; k > 0 && res[k] === 0; k--) {
        res.pop();
    }
    
    return res.reverse().join('');
};

module.exports = multiply;