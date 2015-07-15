// `each` takes in an array and a callback function
var each = function(list, callback) {
  // iterates through each item in array
  for (var i = 0; i < list.length; i += 1) {
    // calls callback function with item and index
    callback(list[i], i);
  }
  // returns original array
  return list;
};

// `map` takes in an array and a callback function
var map = function(list, callback) {
  var mappedList = [];
  // iterates through each item in array
  for (var i = 0; i < list.length; i += 1) {
    // calls callback function with item and index (adds result to `mappedList`)
    mappedList.push(callback(list[i], i));
  }
  // returns mapped array of results
  return mappedList;
};

// `reduce` takes in an array of numbers
var reduce = function(numList) {
  var sum = 0;
  for (var i = 0; i < numList.length; i += 1) {
    sum += numList[i];
  }
  return sum;
};