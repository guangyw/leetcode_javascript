/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head;
    
    
    var slow = head;
    var fast = head;
    
    var len = 0;
    while(fast) {
        len++;
        fast = fast.next
    }
    fast = head;
    k = k % len;
    
    if (k === 0) return head;
    
    while(k > 0) {
        k--;
        fast = fast.next;
    }
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    var newHead = slow.next;
    fast.next = head;
    slow.next = null;
    return newHead;
};

module.exports = rotateRight;