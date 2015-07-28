/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root) {
    var res = [];
    helper(root, res);
    return res;
    
    function helper(root, res) {
        if (root === null) return;
        res.push(root.val);
        helper(root.left, res);
        helper(root.right, res);
    }
};

function preorderIterativeI(root) {
    var stack = [];
    var node = root;
    var res = [];
    while (stack.length > 0 || node) {
        if (node) {
            res.push(node);
            if (node.right) stack.push(node.right);
            node = node.left;
        } else {
            node - stack.pop();
        }
    }
}

function preorderIterative(root) {
    var res = [];
    if (root === null) return res;    
    var stack = [];
    stack.push(root);
    while(stack.length > 0) {
        var node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return res;
}

module.exports = preorderTraversal;