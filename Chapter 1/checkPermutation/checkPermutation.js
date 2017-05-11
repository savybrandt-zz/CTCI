//copied from whiteboard

String.prototype.checkPermutation = function(string) {
	if(this.length !== string.length) { return false; }
	var str1 = {};
	var str2 = {};
	for(var i = 0; i < this.length; i++) {
		str1[this[i]] = str1[this[i]]+1 || 1;
		str2[string[i]] = str2[string[i]]+1 || 1;
	}
	for(var key in str1) {
		if(str1[key] !== str2[key]) { return false;}
	}
	return true;
}

//no changes made after running in console