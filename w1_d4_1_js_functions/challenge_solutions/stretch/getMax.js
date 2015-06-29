var getMax = function(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

getMax([65, 234, 99, 0, 12, 450]);