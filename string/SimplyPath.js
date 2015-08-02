/**
 * @param {string} path
 * @return {string}
 */
 
 
var simplifyPath = function(path) {
    var stack = [];
    var pathItems = path.split('/');
    for (var i = 0; i < pathItems.length; i++) {
        if (pathItems[i] === '..') stack.pop();
        else if (pathItems[i] === '.' || pathItems[i] === '') continue;
        else stack.push(pathItems[i]);
    }
    return '/' + stack.join('/');
};
 
var simplifyPathLong = function(path) {
    var stack = [];
    for (var i = 0; i < path.length; i++) {
        if (path[i] === '.') {
            if (stack[stack.length -1] === '.') {
                stack.pop();
                while(stack.length > 0 && stack.pop() !== '/') stack.pop();
            } else {
                if (i != path.length -1) stack.push('.');
            }
            continue;
        }
        if (path[i] === '/') {
            if (stack[stack.length -1] === '.') {
                stack.pop();
            } else {
                if (i !== path.length -1 && stack[stack.length -1] !== '/') stack.push('/');
            }
            continue;
        }
        stack.push(path[i]);
    }
    if (stack.length === 0) {
        stack.push('/');
    }
    return stack.join('');
};

module.exports = {
	simplyPath: simplifyPath
}