function ListNode(val) {
      this.val = val;
      this.next = null;
 }
 
function createLinkedList(arr) {
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

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function UnSerializeTree(arr) {
	var treeNodeMap = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === '#') {
			treeNodeMap[i] = null;
		}
		else {
			treeNodeMap[i] = new TreeNode(arr[i]);
		}
	}
	for (i = 0; i < treeNodeMap.length; i++) {
		treeNodeMap[i].left = treeNodeMap[2 * i + 1];
		treeNodeMap[i].right = treeNodeMap[2 * i + 2];
	}
	return treeNodeMap[0];
}
 



module.exports = {
	ListNode: ListNode,
	createLinkedList: createLinkedList,
	TreeNode: TreeNode,
	UnserializeTree: UnSerializeTree
}

