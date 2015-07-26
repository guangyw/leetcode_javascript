function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
} 
 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    return genTrees(1,n);
    
    function genTrees(start, end) {
        var res = [];
        if (start > end) {
            res.push(null);
            return res;
        }
        for (var i = start; i <= end; i++) {
            var left = genTrees(start, i -1);
            var right = genTrees(i+1, end);
            
            left.forEach(function(lnode) {
                right.forEach(function(rnode) {
                    var newNode = new TreeNode(i);
                    newNode.left = lnode;
                    newNode.right = rnode;
                    res.push(newNode);
                });
            });
        }
        return res;
    }
};

module.exports = generateTrees;