// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
function ListNode(val) {
	this.val = val;
	this.next = null;
}

var insertionSortList = function(head) {
    var dummy = new ListNode(0);
    if (head === null) return head;
    var cur = head;
    var pre = dummy;
    var next = null;
    while(cur) {
        next = cur.next;
        while(pre.next !== null && pre.next.val <= cur.val) {
            pre = pre.next;
        }
        cur.next = pre.next;
        pre.next = cur;
        
        cur = next;
        pre = dummy;
    }
    return dummy.next;
}

//This is WRONG!!!
//Problem is, when previous value is needed, we may just use pre as the know node and compare current node with pre.next, this way, we can 
//insert current node between pre and pre.next, 

//Another catch is, keep record of next node to visit

//Most import catch is, dont link dummy node to head, instead of complicating the original list, just build a new list from the start.
//This way, we dont need to link previous node of current node to cur.next
var insertionSortListWrong = function(head) {
    var dummy = new ListNode(0);
    dummy.next = head;
    if (head === null || head.next === null) return head;
    var node = head.next;
    var ptr;
    var pre = dummy;
    var next;
    while(node) {
        next = node.next;
        ptr = dummy.next;
        while(node.val > ptr.val) {
            pre = ptr;
            ptr = ptr.next;
        }
        pre.next = node;
        node.next = ptr;
        ptr.next = ptr.next.next;
        node = next;
    }
    return dummy.next;
};

module.exports = {
    insertionSortList: insertionSortList,
    ListNode: ListNode
}