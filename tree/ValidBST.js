/**
 * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return true;
    return isValidBSTHelper(root, -Infinity, Infinity);
};

function isValidBSTHelper(root, min, max) {
    if (!root) return true;
    if (!(root.val > min && root.val < max)) return false;
    return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}


var isValidBSTInOrder = function(root) {
    var stack = [];
    var node = root;
    var pre = -Infinity;
    while(stack.length > 0 || node) {
        if (node) {
            stack.push(node);
            node = node.left
        } else {
            var p = stack.pop();
            if (pre >= p.val) return false;
            pre = p.val;
            node = p.right;
        }
    }
    return true;
};


var isValidBSTInOrderRecursive = function(root) {
    var pre = -Infinity;
    return inOrder(root);
    
    function inOrder(root) {
        if (root === null) return true;
        if (!inOrder(root.left)) return false;
        if (root.val <= pre) return false;
        pre = root.val;
        return inOrder(root.right)
    }
};

module.exports = {
    isValidBST: isValidBST,
    isValidBSTInOrder: isValidBSTInOrder,
    isValidBSTInOrderRecursive: isValidBSTInOrderRecursive
}