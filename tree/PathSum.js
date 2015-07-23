// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values 
// along the path equals the given sum.

 
 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) return false;
    if (root.val === sum && root.left === null && root.right === null) return true;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum -root.val);
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var res = [];
    var path = [];
    pathSumHelper(root, sum, path);
    
    function pathSumHelper(root, sum, path) {
        if (!root) return;
        
        path.push(root.val);
        
        if (!root.left && !root.right && root.val === sum) {
            res.push(path.slice(0));
            path.pop();
            return;
        }
        if (root.left)
            pathSumHelper(root.left, sum - root.val, path);
        // path.pop();
        if (root.right)
            pathSumHelper(root.right, sum - root.val, path);
        path.pop();
    }  
    return res;
};

module.exports = {
	pathSum: pathSum,
	hasPathSum: hasPathSum
}