// Given two strings, 
// check if the first string occurs within the second string.


var substring = function(str1, str2){
	// using indexOf
	return str2.indexOf(str1) != -1;
}

console.log(substring("abc", "catabcd"));
console.log(substring("a", "eeee"));
console.log(substring("", "f"));
console.log(substring("", ""));

// It's hard to analyze the efficiency of built in functions.
// Feel free to try to write this method out by hand, if you'd like.
// One loop-based idea for a hand-written algorithm would be O(m*n),
// if m is the length of str1 and n is the length of str2.

// This should be doable with O(1) extra space,
// since we only need a few extra variables to keep track of 
// where we are in each string.

