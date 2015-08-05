/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var opds = [];
    var opts = [];
    var digit;
    var num = 0;
    var isNum = false;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;
        
        while(!isNaN(digit = parseInt(s[i]))) {
            isNum = true;
            num = num * 10 + digit;
            i++;
        }
        
        if (isNum) {
            isNum = false;
            if (opts.length > 0 && opts[opts.length -1] !== '(') {
                var opt = opts.pop();
                if (opt === '+') {
                    opds.push(opds.pop() + num);
                } else if (opt === '-') {
                    opds.push(opds.pop() - num);
                }
            } else {
                opds.push(num);
            }
            num = 0;
        }
        
        if (s[i] === '+' || s[i] ==='-' || s[i] === '(') opts.push(s[i]);
        if (s[i] === ')') {
            if (opts.pop() === '(') {
                opt = opts.pop();
                if (opt === '+') {
                    opds.push(opds.pop() + opds.pop());
                } else if (opt === '-') {
                    opds.push(-opds.pop() + opds.pop());
                }
            }
        }
    }
    return opds[0];
};

module.exports = calculate;