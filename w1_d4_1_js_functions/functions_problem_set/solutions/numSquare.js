// numSquare solution

var numSquare = function(max) {
  var squaresArr = [];
  
  for (var i = 0; i <= max; i += 1) {
    if (Math.sqrt(i) % 1 === 0) {
      squaresArr.push(i);
    }
  }
  return squaresArr;
};

console.log(numSquare(100));


// alternate solution

var numSquare = function(max) {
  var squaresArr = [];

  for (i = 1; i * i <= max; i += 1) {
    squaresArr.push(i * i);
  }
  return squaresArr;
};