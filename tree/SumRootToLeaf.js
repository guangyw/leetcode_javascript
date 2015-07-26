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
var sumNumbers = function(root) {
    var res = 0;
    var num = [];
    getNums(root);
    return res;
    
    function getNums(root) {
        if (!root) return;
        num.push(root.val);
        if (root.left === null && root.right === null) {
           res += +num.join(''); 
        } else {
            if (root.left) {
                getNums(root.left)
                num.pop();    
            }
            if (root.right) {
                getNums(root.right);
                num.pop();    
            }
            
        }
        
    }
};

module.exports = sumNumbers;