function LinkedListNode(val) {
	this.val = val,
	this.next = null;
}

LinkedListNode.prototype.constructor = LinkedListNode;

LinkedListNode.prototype.next = function() {
	return this.next;
}

LinkedListNode.prototype.getVal = function() {
	return this.val;
}

LinkedListNode.prototype.push = function(val) {
	var node = new LinkedListNode(val);
	this.getLast().next = node;
	return this;
}

LinkedListNode.prototype.getLast = function() {
	var node = this;
	while(node.next) {
		node = node.next;
	}
	return node;
}

module.exports = LinkedListNode;