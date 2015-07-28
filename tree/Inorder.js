function inorderIterative(root) {
	var node = root;
	var stack = [];
	var res;
	while (stack.length > 0 || node) {
		if (node) {
			stack.push(node);
			node = node.left;
		} else {
			node = stack.pop();
			res.push(node);
			node = node.right;
		}
	}
}