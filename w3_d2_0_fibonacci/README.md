# Interview Prep - Fibonacci & Recursion

## Fibonacci

In mathematics, the **Fibonacci sequence** is the series of numbers that follow this pattern:

```
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```

By definition, each number in the sequence is the sum of the two numbers before it, with the exception of the first two numbers, which are both `1`.

## Recursion

In computer science, **recursion** is a problem-solving method where the solution depends on solutions to smaller instances of the same problem. When programming, we see recursion in practice when a function calls itself.

```js
var guessNumber = function(num) {
  var guess = prompt("Guess the number.");

  // base case (no recursion)
  if (guess === num) {
    alert("Your guess is correct!")

  // recursive case (function calls itself)
  } else if (guess > num) {
    alert("Your guess is too high. Try again.");
    guessNumber(num);

  // another recursive case
  } else if (guess < num) {
    alert("Your guess is too low. Try again.");
    guessNumber(num);
  }
};
```

## Challenge

Write a recursive function that returns the `nth` number in the Fibonacci sequence.

```js
var fib = function(n) {

  // base case

  // recursive case
}

fib(1) // returns 1
fib(2) // returns 1
fib(8) // returns 21
```

## Stretch Challenge

Imagine what would happen when you call `fib(50)` (**Hint:** It will most likely crash your browser). When calling `fib(50)`, how many times would `fib(10)` run in your recursive solution? How about `fib(1)`?

Can you think of another way to implement your `fib` function without using recursion?
