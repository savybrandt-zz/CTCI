//copied from whiteboard

String.prototype.checkPermutation = function(string) {
	if(this.length !== string.length) { return false; }
	var srt1 = {};
	var str2 = {};
	for(var i = 0; i < this.length; i++) {
		srt1[this[i]] = srt1[this[i]]+1 || 1;
		srt2[string[i]] = srt2[string[i]]+1 || 1;
	}
	for(var key in str1) {
		if(str1[key] !== str2[key]) { return false;}
	}
	return true;
}