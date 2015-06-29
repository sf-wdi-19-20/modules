// sillySum solution

var sillySum = function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i += 1) {
    total += arr[i] * i;
  }
  return total;
};

var myArray = [1, 2, 3, 4];
console.log(sillySum(myArray));

var anotherArray = [20, 36, 79, 13, 57];
console.log(sillySum(anotherArray));