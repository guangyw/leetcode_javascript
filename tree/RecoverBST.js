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
 
var TreeNode = require('../utils').TreeNode;
 
var recoverTree = function(root) {
    var first, second;
    var pre = new TreeNode(-Infinity);
    inOrder(root);
    first.val = first.val ^ second.val;
    second.val = first.val ^ second.val;
    first.val = first.val ^ second.val;
    
    function inOrder(root) {
        if (root === null) return;
        inOrder(root.left);
        if (!first && pre.val > root.val) {
            first = pre;
        }
        
        if (first && pre.val > root.val) {
            second = root;
        }
        
        pre = root;
        
        inOrder(root.right);
    }
};