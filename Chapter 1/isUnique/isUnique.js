var isUnique = function(string) {
	var current;
	for(var i = 0; i < string.length; i++) {
		current = string[i];
		string = string.splice(0, 1);
		if(string.indexOf(string[i]) !== -1) {
			return false;
		}
	}
	return true;
}