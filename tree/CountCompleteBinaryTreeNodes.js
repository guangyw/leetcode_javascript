/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root === null) return 0;
    var hl = 1; hr = 1;
    var left = root.left;
    var right = root.right;
    while(left) {
        hl++;
        left = left.left;
    }
    while(right) {
        hr++;
        right = right.right;
    }
    if (hl === hr) return Math.pow(2, hl) -1;
    return 1 + countNodes(root.left) + countNodes(root.right);
};