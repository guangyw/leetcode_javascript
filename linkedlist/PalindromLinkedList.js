'use strict'
var utils = require('./utils');

var isPalindrome = function(head) {
    var slow = head;
    var fast = head;
    var rev = null;
    var pre;
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        pre = rev;
        rev = slow;
        slow = slow.next;
        rev.next = pre;
    }
    if (!!fast) {
        slow = slow.next;
    }
    while(!!rev && !!slow && rev.val === slow.val) {
        slow = slow.next;
        rev = rev.next;
    }
    return !rev;
};

var head = utils.createLinkedList([0,1,2])
isPalindrome(head);