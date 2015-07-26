/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var stack = [];
    var cur = root;
    var count = 0;
    while(stack.length > 0 || cur) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            if (++count === k) return cur.val;
            cur = cur.right;
        }
    }
};