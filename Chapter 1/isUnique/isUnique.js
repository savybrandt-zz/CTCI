//copied over from whiteboard

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

//after debugging

var isUnique = function(string) {
	var current;
	for(var i = 0; i < string.length; i) { //not incrementing i, because were shortening the string each time
		current = string[i];
		string = string.slice(1, string.length); //changed splice to slice
		if(string.indexOf(current) !== -1) {
			return false;
		}
	}
	return true;
}

