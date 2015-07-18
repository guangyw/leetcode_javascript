var util = require('./utils');
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) {
        return nums;
    }
    var len = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i -1]) {
            nums[len++] = nums[i];
        }
    }
    return len;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElementsFromLinkedList = function(head, val) {
    if (!head) return head;
    var dummy = new ListNode(-1);
    dummy.next = head;
    var pre = dummy;
    while(head !== null) {
        if (head.val === val) {
            pre.next = head.next;
        } else {
            pre = pre.next;
        }
        head = head.next;
    }
    return dummy.next;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElementFromArrary = function(nums, val) {
    var idx = 0;
    for(var i=0; i < nums.length; ++i) {
        if (nums[i] !== val) {
            nums[idx++] = nums[i];
        }
    }
    return idx;
};