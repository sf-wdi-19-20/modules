// merge solution

var list1 = [3, 6, 11]; 
var list2 = [2, 4, 5, 8, 9];
// output should be [2, 3, 4, 5, 6, 8, 9, 11]

var merge = function(arr1, arr2) {
  var result = [];

  while (arr1.length > 0 && arr2.length > 0) {

    // compare first element in both arrays
    // remove the smaller number from its original array (using shift)
    // and push that value into result
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }

  }
  // we need concat here b/c there will be a number left over
  // in one of the two arrays
  return result.concat(arr1).concat(arr2);
};

console.log(merge(list1, list2));