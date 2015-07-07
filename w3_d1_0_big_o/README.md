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


##Big O notation

1. Ask yourself: In the worst case scenario, how many calculations does your algorithm do? 
2. Phrase the answer in terms of the size of the input.  
3. Ignore constant multiples or smaller things added on.

We will consider all mathematical operations constant time or **O(1)** operations: `+`, `-`, `*`, `/`, and `%`.

```js
function add(a,b){
    return a+b;
}
```

Functions containing for loops that go through the whole input are generally implementing at least linear time or **O(n)** algorithms.

```js
function addAll(numArray){
    var sum = 1;
    for (var i=0; i<numArray.length; i++){
        sum +=  numArray[i];
    }
    return sum;
}
```

Logarithm terms in Big O notation (like O(log(n)) usually come from recursive functions that divide the problem into smaller subproblems. We'll see more about recursive algorithms as we go.

Almost everything else is composed of combinations of those. For example, if a for loop has more complex operations inside it, time complexity is usually higher.

```js
function addAllArrays(arrayOfArrays){
    var sum = 1;
    var oneArray;
    for (var i=0; i<arrayOfArrays.length; i++){
        oneArray = arrayOfArrays[i];
        for (var j=0; j<oneArray.length; j++){
            sum +=  numArray[j];
        }
    }
    return sum;
}
```

###Names given to common orders of complexity.

| notation | name |
| :-----: | :------: |
| O(1) | constant |
| O(log(n)) | logarithmic |
| O(n<sup>c</sup>), for c < 1 |  |
| O(n) | linear |
| O(n(log(n)) | linearithmic | 
| O(n<sup>2</sup>) | quadratic |
| O(n<sup>c</sup>), for c > 1 | polynomial |
| O(c<sup>n</sup>), for c > 1 | exponential |

Every row listed in this table is more complex (takes more time or space) than the rows above it.  That means, if we decide an algorithm takes polynomial time to do one set of operations and then moves on and needs a linear amount of work to finish up, we can just say it's a polynomial algorithm for the purposes of Big O notation. 


Graph: how the number of operations (time) grows with the number of input    
elements for various orders of complexity   
![time complexity graph from daveperrett.com](http://www.daveperrett.com/images/articles/2010-12-07-comp-sci-101-big-o-notation/Time_Complexity.png)



###Bonus: Related Notations

Big O is the most commonly-used notations for comparing functions in computer science, but there are others:

| notation | analogy |
| :----: | :----: |
| **f(n) = O(g(n))** | **<=** |
| f(n) = o(g(n)) |  <= |
| f(n) = Θ(g(n)) | = |
| f(n) = Ω(g(n)) | > |
| f(n) =  ω(g(n)) | < |


##Resources

* simple reading from [Interview Cake](https://www.interviewcake.com/article/big-o-notation-time-and-space-complexity)
* lecture notes from [an intro computer science class](https://courses.edx.org/c4x/MITx/6.00.1x_5/asset/handouts_Big_O_Notes.pdf)
* video from [an algorithms course on Coursera](https://class.coursera.org/algo-003/lecture/11)

##Challenges: Algorithm Analysis

1. Write a function called `compare` that compares two numbers. The function should return `1` if the first number is greater than the second, `0` if they are equal, or `-1` if the first number is less than the second.    
    How many calculations does your function do?

1. Write a function to find the middle element in an array.  How many calculations (including comparisons) does your function do for:   
    the input array [0,4,5]   
    an input array with 8 elements    
    any input array with `n` elements   
    
1. Write a function to find the maximum element in an array. How many calculations (including comparisons) does your function do for:    
    the input array [0,4,5]    
    any input array with 8 elements     
    any input array with `n` elements    

1. Write a function called `indexOf` that takes in a number and an array and searches for the number in the array. If the number is in the array, it should return the array index where it found the number. If the number is not in the array, it should return `null`.  How many calculations (including comparisons) does your function do for:    
    the input array [0,4,5]    
    any input array with 8 elements    
    any input array with `n` elements    

1. Write a function called `countNums` that takes in an array of numbers and counts how many times each number in the array appears.  How many calculations (including comparisons) does your function do for:    
    the input array [0,4,5]      
    any input array with 8 elements    
    any input array with `n` elements    


1. Write a function called `findShared` that takes in two arrays and outputs a new array that contains every number appearing in both input arrays. How many calculations (including comparisons) does your function do for:    
    the input array [0,4,5]      
    any input array with 8 elements    
    any input array with `n` elements    
