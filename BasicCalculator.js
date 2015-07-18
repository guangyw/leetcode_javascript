/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var stack = [];
    var res = 0;
    var num = 0;
    var sign = "+"
    for (var i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {
            num = num * 10 + parseInt(s[i]);
        }
        if ((isNaN(parseInt(s[i])) && s[i] !== " ") || i === s.length -1) {
            if (sign === "*") {
                stack.push(stack.pop() * num);
            }
            if (sign === "/") {
                stack.push(stack.pop() / num | 0);
            }
            if (sign === "-") {
                stack.push(-num)
            }
            if (sign === "+") {
                stack.push(num);
            }
            sign = s[i];
            num = 0;
        }
        
    }

    stack.forEach(function(n) {
        res += n;
    });
    
    return res;
};


//This following is wrong and unfinished
var calculateWrong = function(s) {
    
    var len = s.length;
    var numBuffer = 0;
    var buffered;
    var sign = 1;
    var stack = [];
    for (var i = 0; i < len; i++) {
        if (s[i] === "(") stack.push("(");
        var parsed = parseInt(s[i]);
        if (!isNaN(parsed)) {
            numBuffer = 10 * numBuffer + parsed;
            buffered = true;
        } else {
            if (buffered) {
                stack.push(sign * numBuffer);
                buffered = false;
                numBuffer = 0;
            }
            if (s[i] === ")") {
                var res = 0;
                var a;
                while ((a = stack.pop()) !== "(") {
                    res += a;
                }
                stack.push(res);
                res = 0;
            }
            if (s[i] === "-") sign = -1;
            if (s[i] === "+") sign = 1;
        }
    }
    stack.push(sign * numBuffer);
    var ret = 0;
    stack.forEach(function(val) {
        ret += val;
    });
    return ret;
};

var Calculator = {
	basic1: calculate,
    basic2: calculate2
}

module.exports = Calculator;