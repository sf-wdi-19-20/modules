// use our `getRand` function as a helper (defined here again)
var getRand = function(min, max) {
  return Math.random() * (max - min) + min;
};

var randArr = function(length) {
  var newArr = [];
  for (var i = 0; i < length; i += 1) {
    newArr.push(getRand(1, 100));
  }
  return newArr;
};

randArr(3);