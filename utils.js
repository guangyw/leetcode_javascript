function ListNode(val) {
      this.val = val;
      this.next = null;
 }

module.exports.createLinkedList = function(arr) {
	var i, len;
	var head;
	var cur;
	var pre = null;
	for (len = arr.length, i = 0; i < len; i++) {
		cur = new ListNode(arr[i]);
		if (!head) {
			head = cur;
		} 
		if (!!pre) {
			pre.next = cur;
		}
		pre = cur;
	}
	return head;
}