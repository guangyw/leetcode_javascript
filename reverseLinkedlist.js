/**
 * Definition for singly-linked list.
 **/

var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    var node = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return node;
}
 
var reverseListIterative = function(head) {
    var cur = head;
    var pre = null;
    var next;
    while (cur !== null) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};