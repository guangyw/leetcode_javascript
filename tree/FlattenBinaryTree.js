//trick: set left children to null
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var right;
    var stack = [];
    var cur = root;
    var pre;
    while(stack.length > 0 || cur) {
        if (cur) {
            if (cur.right) stack.push(cur.right);
            cur.right = cur.left;
            pre = cur;
            cur = cur.left;
            pre.left = null;
        } else {
            cur = stack.pop();
            pre.right = cur;
            pre = pre.right;
        }
    }
};