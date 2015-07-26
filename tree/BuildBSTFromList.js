/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 
var TreeNode = require('../utils').TreeNode;

var sortedListToBST = function(head) {
    if (head === null) return null;
    var list = head;
    var len = 0;
    while(list) {
        len++;
        list = list.next;
    }
    list = head;
    return buildTree(len);
    
    function buildTree(n) {
        if (n === 0) return null;
        var node = new TreeNode(0);
        node.left = buildTree(n/2 |0);
        node.val = list.val;
        list = list.next;
        node.right = buildTree(n - (n/2 |0) -1);
        return node;
    }
};

module.exports = sortedListToBST;