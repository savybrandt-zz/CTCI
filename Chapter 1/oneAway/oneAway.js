//After whitboarding

var oneAway = function(str1, str2) {
  var flag = false;
  
  // Only swaps, no insertions or deletions
  if (str1.length === str2.length) {
    for (i = 0; i < str1.length; i++) {  // Should use a var for i
      if (str1[i] !== str2[i]) {
        if (flag) {
          return false;
        } else {
          flag = true;
        }
      }
    }
      } else {
        str1.length > str2.length ? longer = str2 : longer = str1;
        str1.length > str2.length ? shorter = str1 : shorter = str2;//Show better syntax;
        for (var j = 0; j < shorter.length; j++) {
          if (longer[j] !== shorter[j]) {
            if (flag) {
              return false;
            }
            flag = true;
            longer.split('').splice(j, 1).join('');
          }
        }
  }
  return true;
};

//After debugging

 var oneAway = function(str1, str2) {
  var flag = false;
  
  // Only swaps, no insertions or deletions
  if (str1.length === str2.length) {
    for (i = 0; i < str1.length; i++) {  // Should use a var for i
      if (str1[i] !== str2[i]) {
        if (flag) {
          return false;
        } else {
          flag = true;
        }
      }
    }
      } else {
        if(str1.length > str2.length) {
            var longer = str1
            var shorter = str2
        } else {
            var shorter = str1
            var longer = str2
        }
        for (var j = 0; j < shorter.length; j++) {
          if (longer[j] !== shorter[j]) {
            if (flag) {
              return false;
            }
            flag = true;
            longer = longer.split('')  //
            longer.splice(j, 1)        // Why did this need to change to this format instead?
            longer = longer.join('');  //
          }
        }
  }
  return true;
}; 