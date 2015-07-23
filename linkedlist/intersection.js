//Write a program to find the node at which the intersection of two singly linked lists begins.

//There is a algorithm to use two pointers to traverse each list, when reaching the end, jump to the head of the other list.
//Because it takes the same steps to reach the intersection

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var ptrA = headA, ptrB = headB;
    if (headA === null || headB === null) return null;
    var lenA = 0, lenB = 0;
    while (ptrA) {
        lenA++;
        ptrA = ptrA.next;
    }
    while (ptrB) {
        lenB++;
        ptrB = ptrB.next;
    }
    
    ptrA = headA;
    ptrB = headB;
    
    for (var i = 0; i < Math.abs(lenA - lenB); i++) {
        if (lenA > lenB) ptrA = ptrA.next;
        else ptrB = ptrB.next;
    }
    
    while(ptrA != ptrB) {
        ptrA = ptrA.next;
        ptrB = ptrB.next
    }
    return ptrA;
};



var getIntersectionNodeTwoPointer = function(headA, headB) {
    if (!headA || !headB) return null;
    var pA = headA, pB= headB;
	// To exists the while loop we need both traverse reach the null node before jump to the other head, instead of skipping null
    while(pA != pB) {
        // pA = pA.next === null? headB: pA.next;
        // pB = pB.next === null? headA: pB.next;
        pA = pA === null? headB: pA.next;
        pB = pB === null? headA: pB.next;
    }
    return pA;
}