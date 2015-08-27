// Given 2 arrays of the same length, 
// creates an Object where:
// - the elements from the first array are used as keys 
// - the elements from the second array are used as values.

var toHash = function(keyArr, valArr){
	// check same length just to be safe
	if (keyArr.length !== valArr.length){
		return null;
	}
	// set up new object
	var newObj = {};
	// loop through both arrays
	for (var i=0; i<keyArr.length; i++){
		// add key value pair to new object each time
		newObj[keyArr[i]] = valArr[i];
	}
	return newObj;
}

var keys = ["name", "age"];
var vals = ["bob", 30];
console.log("combining ", keys, " and ", vals);
console.log("got ", toHash(keys, vals));

// Since we loop once through the entire length of the array,
// the algorithm above has big oh O(n), where n is the length of our arrays.

// It also uses O(n) extra space because it has to create the new hash and store it somewhere!