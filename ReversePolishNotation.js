// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];
    for (var i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            // var val = tokens[i];
            // while(!isNaN(tokens[++i])) {
            //     val = val* 10 + tokens[i];
            // }
            stack.push(tokens[i]);
        } 
        if (tokens[i] === '+') {
            stack.push(+stack.pop() + +stack.pop());
        } else if (tokens[i] === '-') {
            stack.push(-stack.pop() + +stack.pop());
        } else if (tokens[i] === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (tokens[i] === '/') {
            stack.push(1 / stack.pop() * stack.pop() | 0);
        }
    }
    return +stack.pop();
};

module.exports = evalRPN;