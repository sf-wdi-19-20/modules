#Algorithm Efficiency and Big-O Notation - Solutions


##Resources

* simple reading from [Interview Cake](https://www.interviewcake.com/article/big-o-notation-time-and-space-complexity)
* lecture notes from [an intro computer science class](https://courses.edx.org/c4x/MITx/6.00.1x_5/asset/handouts_Big_O_Notes.pdf)
* video from [an algorithms course on Coursera](https://class.coursera.org/algo-003/lecture/11)



##Examples

**add (simple operations)**
```js
function add(a,b){
    return a+b;
}
```

`add` is O(1) 



**addAll (for loop)**

```js
function addAll(numArray){
    var sum = 1;
    for (var i=0; i<numArray.length; i++){
        sum +=  numArray[i];
    }
    return sum;
}
```

`addAll` does an O(1) calculation (`sum += numArray[i]`), but it does this multiple times - once for each eleement of the array.  If we call the array size n, `addAll` is O(n).


**addAllArrays (nested for loops)**

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

`addAllArrays` does a simple O(1) calculation: `sum += numArray[j]`. Like `addAll`, it does this multiple times. 

For the inner for loop, it'll loop through each subarray. If we say the size of the subarrays is m, we now have an inner for loop that is m * O(1) = O(m).  

For the outer for loop, let's say the size of the outer array is n. Then the entire function is n * O(m) = O(m * n).  

In class we assumed the outer and inner arrays were the same size so found a run time n * (n * O(1)), or O(n<sup>2</sup>).




##Challenges

1. Write a function called `compare` that compares two numbers. The function should return `1` if the first number is greater than the second, `0` if they are equal, or `-1` if the first number is less than the second.    
    How many calculations does your function do?

    ```js
    function compare(a,b){
        if (a > b) {
            return 1;
        } else if (a === b){
            return 0;
        } else {
            return -1
        }
    }
    ```

    `compare` always does up to 2 calculations (comparisons), no matter what the size of  `a` and `b` are. So `compare` = O(1).

1. Write a function to find the middle element in an array.  How many calculations (including comparisons) does your function do?   

    ```js
    function mid(arr){
        var midIndex;                       // declaration is O(1)
        if(arr.length % 2 === 0){           // array length lookup and % are O(1)
            midIndex = arr.length/2;        // array length, division, assignment all O(1)
        }else {
            midIndex = (arr.length-1)/2;    // division and subtraction both O(1)
        }
        return arr[midIndex];               // array lookup O(1)
    }
    ```

    `mid` does 
    * one lookup of `arr.length`
    * one calculation with `%` 
    * another lookup of `arr.length`
    * one or two more calculations to find the middle index
    * a lookup to find the array element at the middle index

    Each of these 5-6 individual operations is O(1), so we have 5 * O(1) = O(1) or 6 * O(1) = O(1).

    Whether the array has 3 elements, or 8, or 10000000, or n, `mid` always does the same 5 or 6 operations.  

    Since the number of calculations/operations does **not** depend on the size of the input, `mid` is O(1).


    
1. Write a function to find the maximum element in an array. 


    ```js
    function getMax(arr){
        var currentMax = 0;                     // assignment is O(1)

        for (var i=0; i<arr.length; i++){       // for loop runs arr.length times = n times
            if (arr[i] > currentMax){               // comparison and array lookup are O(1)
                currentMax = arr[i];                // assignment and lookup are O(1)
            }
        }
        return currentMax;
    }
    ```

    `getMax` does O(1) + n * (O(1)) = O(1) + O(n) = O(n)

1. Write a function called `indexOf` that takes in a number and an array and searches for the number in the array. If the number is in the array, it should return the array index where it found the number. If the number is not in the array, it should return `null`.    

    ```js
    function indexOf(num, arr){                 
        var foundIndex = null;                  // O(1)
        for (var i=0; i<arr.length; i++){       // n times (worst case scenario)
            if (arr[i] === num){                    // O(1)
                foundIndex = i;                     // O(1)
            }
        }
        return foundIndex;
    } 
    ```

    `indexOf` does O(1) + n * O(1) = O(1) + O(n) = O(n)


1. Write a function called `countNums` that takes in an array of numbers and counts how many times each number in the array appears.  

    ```js
    function countNums(arr){
        var output = {};                    // O(1)
        for (var i=0; i<arr.length; i++){   // n times:
            if (output[arr[i]] === undefined){      // O(1)
                output[arr[i]] = 1;                 // O(1)
            } else {
                output[arr[i]] += 1;                // O(1)
            }
        }
        
        // bonus section: printing the counts
        for (num in output){                            // n times or fewer
            if (output.hasOwnProperty(num)){                // O(1)
                console.log(num+": ", output[num]);         // O(1)
            }
        }
        return output;
    }
    ```

    `countNums` does O(1) + n * O(1) + (n or less) * O(1) = O(1) + O(n) + O(n) = O(n)

    We can simplify (n or less) * O(1) to O(n) because big O notation gives us an UPPER limit on how long our algorithms take.  If we overestimate, this upper limit is still valid (though if we overestimate too much it's not helpful.)


1. Write a function called `findShared` that takes in two arrays and outputs a new array that contains every number appearing in both input arrays.
    
    ```js
    function findShared(arr1, arr2){
        var shared = [];                    // O(1)
        for (var i=0; i<arr1.length; i++){  // arr1.length times (we'll say n)
            for (var j=0; j<arr2.length; j++){     // arr2.length times (we'll say m)
                if (arr1[i] === arr2[j]){                   // O(1)
                    if (shared.indexOf(arr1[i]) === -1){    // O(1)
                        shared.push(arr1[i]);
                    }
                }
            }
        }
        return shared;
    }
    ```

    `findShared` does O(1) + n * (m * O(1)) = O(1) + n * O(m) = O(1) + O(m * n) = O(m * n)

    Again, we can simplify by sacrificing some accuracy and overestimating. If we say n is the size of the bigger array, we can overestimate the time this algorithm needs as O(n * n) = O(n<sup>2</sup>).
