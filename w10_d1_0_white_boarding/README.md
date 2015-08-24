# Interview Prep - White-Boarding

## Problem #1 - Palindrome

Write a program that determines if a string is a palindrome, meaning it reads the same forwards as backwards, like "racecar".

For additional complexity, discount white space and punctuation, so that a string like "never odd or even" would be accepted as well.

```js
isPalindrome('racecar')
// => true
```

## Problem #2 - Greatest Difference

Given an array of numbers, write a program that returns the greatest difference from subtracting any two elements.

## Problem #3 - Calculate Change

Write a program that takes in a cost and the amount of money given. The program should return the amount of change needed and display it in terms of $20s, $10s, $5s, $1s, quarters, dimes, nickels, and pennies.

```js
calcChange(9.35, 55);
// => { '$20s': 2,
//      '$10s': 0,
//      '$5s': 1,
//      '$1s': 0,
//      quarters: 2,
//      dimes: 1,
//      nickels: 1,
//      pennies: 0 }
```

## Problem #4 - Shuffle

Given an array with any number of elements, write a program that randomly shuffles the elements. The array elements can be any data type. Calling `shuffle` on the same array should yield a randomized result each time.

```js
shuffle(['a', 'b', 'c', 'd', 'e']);
// => [ 'b', 'c', 'd', 'e', 'a' ]

shuffle(['a', 'b', 'c', 'd', 'e']);
// => [ 'c', 'e', 'b', 'a', 'd' ]
```