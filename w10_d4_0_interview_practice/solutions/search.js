var binarySearch = function(arr, val, low, high){
	if (arr.length === 0){
		return -1;
	}
	// if high is earlier in array than low, 
	// value we wanted is not present
	if (high < low){
		return -1;
	}

	// find middle index
	var mid = Math.floor((low + high)/2);

	// decide whether to move left/right or if we've found it
	if (val < arr[mid]) {
		// recurse in left half
		return binarySearch(arr, val, low, mid-1);
	} else if (val > arr[mid]){
		// recurse in right half
		return binarySearch(arr, val, mid+1, high);
	} else { 
		// we found it!
		return mid;
	}
}


var arr1 = [2,4,6,8,10];
var val1 = 8;
var val2 = 7;
console.log( val1 + " is at " + binarySearch(arr1, val1, 0, arr1.length) + " in " + arr1 );
console.log( val2 + " is at " + binarySearch(arr1, val2, 0, arr1.length) + " in " + arr1 );
console.log( "10 is at " + binarySearch([], 10) + " in []");


// Binary search is O(log_2(n)) ("log base 2 of n") 
// because every time we recurse we:
//  - divide the problem size by 2 and 
//  - do only 1 smaller problem

// Compare it to mergesort, where every time we recurse we:
//  - divide the problem size by 2 and
//  - do *both* of the smaller problems
// Mergesort is O(n*log_2(n)).

// We won't talk about the math in this class, 
// but if you're interested in calculating (versus memorizing)
// log-style run times, look into "recursion trees" and "the master theorem."
