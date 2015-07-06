#Algorithm Efficiency and Big-O Notation

##What is an algorithm?

A set of instructions to find the solution to a problem.

Note: we use code to implement algoritms, but algorithms don't have to be written in code.

##What is efficiency?

Time efficiency helps us predict how long it could take a particular algorithm to run. Space efficiency helps us predict how much memory a particular algorithm could use up. 

##Why study algorithms and efficiency?

* Understanding algorithms let us reuse knowledge from the field.
* Better-performing algorithms can enhance the user experience.
* Better-performing algorithms can save companies money.
* Algorithms and algorithm analysis are shared languages developers use to talk programs (especially in INTERVIEWS!).

#Big O notation

1. Ask yourself: In the worst case scenario, how many calculations does your algorithm do? 
2. Phrase the answer in terms of the size of the input.  
3. Ignore constant multiples or smaller things added on.

We will consider all mathematical operations constant time (O(1)) operations: `+`, `-`, `*`, `/`, and `%`.

```js
function add(a,b){
	return a+b;
}
// the add algorithm implemented here is O(1)
```

Functions containing for loops that go through the whole input are generally O(n).

```js
function addAll(numArray){
	var sum = 1;
	for (var i=0; i<numArray.length; i++){
		sum +=  numArray[i];
	}
	return sum;
}
// the addAll algorithm here is O(n)
```

notation name
O(1) constant
O(log(n)) logarithmic
O((log(n))
c
) polylogarithmic
O(n) linear
O(n
2
) quadratic
O(n
c
) polynomial
O(c
n
) exponential



Big O is the most commonly-used of five notations for comparing functions:
Notation Analogy
f(n) = O(g(n)) <=
f(n) = o(g(n))  <=
f(n) = 0(g(n)) =
f(n) = Omega(g(n)) >
f(n) = omega(g(n)) <




Performance is not usually the most important goal for an app. Don't lose sight of:

* correctness (getting the right answer),
* maintainability,
* security,
* user-friendliness,
* extensibility,
* reliability, 
* scalability

##Challenges: Algorithm Analysis

1. Write a function called `compare` that compares two numbers. The function should return `1` if the first number is greater than the second, `0` if they are equal, or `-1` if the first number is less than the second.    
    How many calculations does your function do?

1. Write a function to find the middle element in an array.  How many calculations (including comparisons) does your function do for:   
    the input array [0,4,5]   
    the input array [2,4,6,8,10,12,14,16,18,20]   
    an input array with 8 elements    
    any input array with `n` elements   
    
1. Write a function to find the maximum element in an array. How many calculations (including comparisons) does your function do for:    
    the input array [0,4,5]    
    the input array [2,4,6,8,10,12,14,16,18,20]   
    any input array with 8 elements     
    any input array with `n` elements    

1. Write a function called `indexOf` that takes in a number and an array and searches for the number in the array. If the number is in the array, it should return the array index where it found the number. If the number is not in the array, it should return `null`.  How many calculations (including comparisons) does your function do for:    
    the input array [0,4,5]    
    the input array [2,4,6,8,10,12,14,16,18,20]   
    any input array with 8 elements    
    any input array with `n` elements    

1. Write a function called 'findShared' that takes in two arrays and outputs a new array that contains every number appearing in both input arrays.How many calculations (including comparisons) does your function do for:    
    the input array [0,4,5]    
    the input array [2,4,6,8,10,12,14,16,18,20]   
    any input array with 8 elements    
    any input array with `n` elements    
