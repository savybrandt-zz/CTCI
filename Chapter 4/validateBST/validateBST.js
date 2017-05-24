var validateBST = function(node) {
	if (!node.right) {
		return true;
	}
	if (node.left > node.value || node.right < node.current) {
		return false;
	}
	return validateBST(node.left) && validateBST(node.right);
}