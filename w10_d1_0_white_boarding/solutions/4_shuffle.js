// Problem 4 - Shuffle

function shuffle(array) {
  var tempValue;
  var randomIndex;

  // loop through elements in array, starting with last element
  for (var i = array.length - 1; i > 0; i--) {
    // pick a random index in the elements that remain
    randomIndex = Math.floor(Math.random() * i);

    // swap element at i with element at randomIndex
    tempValue = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
}