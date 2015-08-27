# Interview Practice

## Process

Pair up! One person will act as the interviewer, while the other will act as the interviewee.  Switch off after each question.  The interviewer may reference the solutions. 

## In Class Problems

1. Given 2 arrays of the same length, create a Hash (in Ruby) or Object (in JavaScript) where the elements from the first array are used as keys and elements from the second array are used as values.

	```ruby
	to_hash [:name, :age, :height], ["bill", 47, 70]
	# => {:name => "bill", :age => 47, :height => 70}
	```

1. Write a function to 'compress' a string by counting repeated characters.  For example, the string `"ooohmmmmmmm"` would become `"o3h1m7"`. If your compressed string would be longer than the original, you should return the original instead. 

1. Binary Search: Given a sorted array and a particular value, write a function to find that value in the array. Don't use `arr.indexOf(val)` (in JavaScript) or `arr.index(val)` (in Ruby).  If the value is not in the array, return `-1`.

  ```js
  search([1,4,7,9,14,15], 7)
  // 2
  search([1,4,7,9,14,15], 199)
  // -1
  
  ```

1. Given two strings, check if the first string occurs within the second string. Return true if the second is within the first.  Hint: you can use built-in methods.

  ```ruby
  substring("abc", "catabcd")
  # true
  substring("a", "eeee")
  # false
  ```

## Further Practice 



1. Matrix Search: Given an array of arrays (called a matrix) that is sorted from the top left to the bottom right, find a given value within the matrix. Return a pair of numbers that indicate the value's row and column. If the value is not present, return `[-1, -1]`.

  ```
  matrix = [
  	[  1,  3,  6,  9 ],
  	[ 10, 14, 18, 20 ],
  	[ 28, 30, 34, 37 ]
  ]
  searchNested(matrix, 18)
  // [1,2]
  searchNested(matrix, 17)
  // [-1,-1]
  
  ```





