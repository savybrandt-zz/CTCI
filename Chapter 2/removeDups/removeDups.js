//as whiteboarded

var removeDups = function(list) {
	var storage = {list.value: 1};
	var traverse(node) {
		if(!node.next) { return list; }
		if(!storage[node.next.value]) {
			storage[node.next.value] = 1;
		} else {
			node.next.value = null; //forgot to add thisin whiteboarded solution
			node.next = node.next.next;
		}
		traverse(node.next); //forgot to add thisin whiteboarded solution
	}
	return traverse(list);
}

