var basePairs = function(str) {
  var newArray = [];
  var search = function (parse) {
    switch (parse) {
      case 'A':
        newArray.push(["A","T"]);
        break;
      case 'T':
        newArray.push(["T","A"]);
        break;
      case 'G':
        newArray.push(["G","C"]);
        break;
      case 'C':
        newArray.push(["C","G"]);
        break;
    }    
  };
  for (var i=0; i < str.length; i++) {
    search(str[i]); 
  }
  return newArray;
}