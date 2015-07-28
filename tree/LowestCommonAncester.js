/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestorBinaryTree = function(root, p, q) {
	if (root === null || root === p || root === q) return root;
	var left = lowestCommonAncestorBinaryTree(root.left, p, q);
	var right = lowestCommonAncestorBinaryTree(root.right, p, q);
	if (left && right) return root;
	return left? left: right;  
};