var swap = function(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};

swap(["moe", "larry", "curly"], 0, 2);