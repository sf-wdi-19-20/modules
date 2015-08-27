# Interview Practice

## Process

Pair up! One person will act as the interviewer, while the other will act as the interviewee.  Switch off after each question.  The interviewer may reference the solutions. 

Be thinking about <a href="http://www.amazon.com/Cracking-Coding-Interview-6th-Edition/dp/0984782850" target="_blank">Cracking the Coding Interview</a>'s "Five Steps to a Technical Question", paraphrased below:

1. Ask your interviewer questions to resolve any ambiguities.
2. Design an Algorithm.
3. Write pseudocode first (but tell your interviewer you plan to write real code later).
4. Write your code at a moderate pace.
5. Test your code with test cases and carefully fix any mistakes.

Also, talk out loud! Your interviewer is trying to learn how you think through problems.

## In Class Problems

1. Given 2 arrays of the same length, create a Hash (in Ruby) or Object (in JavaScript) where the elements from the first array are used as keys and elements from the second array are used as values.

	```ruby
	to_hash [:name, :age, :height], ["bill", 47, 70]
	# => {:name => "bill", :age => 47, :height => 70}
	```

1. Write a function to 'compress' a string by counting repeated characters.  For example, the string `"ooohmmmmmmm"` would become `"o3h1m7"`. If your compressed string would be longer than the original, you should return the original instead. 

1. Given a sorted array and a particular value, write a function to find the index of that value in the array. Don't use `arr.indexOf(val)` (in JavaScript) or `arr.index(val)` (in Ruby).  If the value is not in the array, return `-1`.  Hint: You can use the fact the array is sorted to do this problem _without looking at every value in the array_.  It's much faster.  Hint: That faster algorithm is <a href="https://www.youtube.com/watch?v=Rz4i37pOVps" target="_blank">binary search</a>.

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



1. Matrix Search: Given an array of arrays (called a matrix) that is sorted from the top left to the bottom right, find a given value within the matrix. Return a pair of numbers that indicate the value's row and column. If the value is not present, return `[-1, -1]`.  Can you use the idea of binary search to do it quickly?

  ```js
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
  
  A more difficult variation of this problem is <a href="http://articles.leetcode.com/2010/10/searching-2d-sorted-matrix.html" target="_blank">described and explained by someone named 1337c0d3r, here</a>.
  
1. Given two strings, find thier longest common substring, the longest substring that they share.





