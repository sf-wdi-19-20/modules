// Returns a 'compressed' version of a string 
// by counting repeated characters.  
// "ooohmmmmmmm" => "o3h1m7" 

// If compressed string would be longer,
// returns the original instead. 
// "abc" => "abc"  // NOT "a1b1c1"
var compress = function(str){
	if (!str.length){
		return str;
	}
	// letter will be letter we're currently counting
	var letter = str[0];
	// in JS, using [].join method is faster
	// than just adding a bunch of strings
	var out = [letter];
	// count will store that letter's count so far
	var count = 0;
	for (var i=0; i<str.length; i++){
		if (str[i] == letter){
			// if still on same letter, just keep counting
			count += 1;
		} else {
			// if we have a new letter, push count into the arry
			// followed by the new letter
			out.push(count);
			out.push(str[i]);
			// and update the variables we're using to track
			letter = str[i];
			count = 1;
		}
	}
	// when the for loop ends, we'll still have a count we need to add
	out.push(count);
	// use join to combine the array into one string
	out = out.join("");
	// return either the compressed version or the original version
	// depending on which is shorter
	out = str.length < out.length ? str : out;
	return out;
}

var testStrings = [
	{input: "ooohmmmmmmm", expected: "o3h1m7"},
	{input: "abc", expected: "abc"},
	{input: "", expected: ""}
];
var result;
for (var i=0; i<testStrings.length; i++){
	result = compress(testStrings[i].input);
	console.log("compressed ", testStrings[i].input, " to ", result);
	if (result === testStrings[i].expected){
		console.log("test passed");
	} else {
		console.log("test failed... expected ", testStrings[i].expected);
	}
}

// This agorithm is O(n), where n is the length of the input string,
// because it has to loop through the entire string to compress it.
// In a lower level language we might have to worry about array resizing.
// In JS, we can just consider the time to push into an array O(1).

// It uses O(k) extra space where k is the number of distinct letters in the input string.
// It also has some tracking variables like count, but those are O(1),
// and O(k) + O(1) = O(k).
// Since k will be less than or equal to n, and O() means <=, we can safely say the space is O(n).

