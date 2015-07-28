/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var res = [];
    var c;
    if (a.length < b.length) {
        c = a;
        a = b; 
        b = c;
    }
    var alen = a.length;
    var blen = b.length;
    
    var carry = 0;
    var add = 0;
    for (var i = 0; i < alen; ++i) {
        if (i >= blen) {
            add = parseInt(a[alen - i -1]) + carry;
        } else {
            add = parseInt(a[alen - i -1]) + parseInt(b[blen - i -1]) + carry;
        }
        res[i] = add % 2;
        carry = Math.floor(add / 2);
    }
    if (carry === 1) {
        res[i] = 1;
    }
    return res.reverse().join("");
};

module.exports = addBinary;