/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    var head = null
    var pre = null;
    var cur = root;
    while(cur) {
        while(cur) {
            if (cur.left) {
                if (pre) {
                    pre.next = cur.left;
                } else {
                    head = cur.left;
                }
                pre = cur.left;
            }
            if (cur.right) {
                if (pre) {
                    pre.next = cur.right;
                } else {
                    head = cur.right;
                }
                pre = cur.right;
            }
            cur = cur.next;
        }
        cur = head;
        pre = null;
        head = null;
    }
};