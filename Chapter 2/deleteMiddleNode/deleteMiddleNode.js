//copied over from whiteboard

var deleteMiddleNode = function(node) {
	node.value = node.next.value;
	node.next = node.next.next;
}

//no changes made after debugging