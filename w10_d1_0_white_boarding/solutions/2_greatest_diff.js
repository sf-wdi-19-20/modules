// Problem 2 - Greatest Difference

// Solution 1 - nested for loops (O(n^2) time)
function greatestDiff(array) {
  var maxDiff = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] - array[j] > maxDiff) {
        maxDiff = array[i] - array[j];
      }
    }
  }
  return maxDiff;
}

// Solution 2 - single for loop (O(n) time)
function greatestDiff(array) {
  var min = Infinity;
  var max = - Infinity;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    else if (array[i] > max) {
      max = array[i];
    }
  }
  return max - min;
}