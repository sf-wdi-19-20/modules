# Interview Prep - Merge Sort

## Divide and conquer

Have you ever been overwhelmed by a big problem? Try and think of a time when you felt like there wasn't a way to complete everything in the time available; maybe you've had hours of homework across multiple subjects and wondered how you'll ever finish before dawn.

Consider how you might break this huge problem into smaller pieces. In the homework example, our huge problem might be that we have two essays to complete, one problem set, and a handful of other assignments.

As a first step, we can divide our big problem of having too much homework into individual assignments. In this way, we can focus on the problem set first and avoid being completely overwhelmed by the essays and other assignments we still have to complete.

Taking it a step further, we might break our medium sized problem (one really long problem set) into individual problems. In this way, we can focus on one problem at a time without being overwhelmed by the problems we haven't gotten to yet.

If the problems in the set are difficult, you will probably end up breaking each individual problem into smaller pieces as well.

[![Divide and conquer](https://s3.amazonaws.com/ka-cs-algorithms/divide_conquer_1_step.png)](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms)

## Revisiting Recursion

If our small problems look similar, this should be a hint that we might want to use recursion.

In a recursive implementation, we first solve for the simplest version of the problem (the base case). Then, we write our function in such a way that it calls itself -- the problem should get smaller with each recursive function call. Once the problem can't get any smaller, we have reached the base case.

[![Divide and conquer (complex)](https://s3.amazonaws.com/ka-cs-algorithms/divide_conquer_3_steps.png)](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms)

## Sorting Things

If you were given an array of 10 random numbers, how would you sort them in ascending order?

Arrays in JavScript have a [`sort`](http://www.w3schools.com/jsref/jsref_sort.asp) function. If we have access to a JavaScript runtime, we can treat this as a small problem and simply call the built-in array function.

Without a JS runtime, we'd be on our own. We'd have to think of sorting arrays as a big problem and come up with an implementation ourselves.

## Algorithm Design

Sorting algorithms might seem like a contrived example because most languages have built-in functionality for sorting. When building web apps, we generally avoid re-inventing the wheel by reusing functionality that the language or framework provides.

Sorting algorithms are a popular interview topic because they force candidates to take a very disciplined approach. The seemingly simple problem of sorting an array of integers quickly becomes complex when you don't have access to `sort`. Just explaining the steps involved can give the interviewer a lot of insight into your abilities as a problem solver.

## Sorting Recursively

There are many ways to sort an array of numbers. Each have their pros and cons in terms of time complexity, space complexity, readability, etc.

Today, we'll focus on a recursive solution called merge sort.

## Challenge

Write a function `mergeSort` that takes an array of numbers as input and returns a new array. The new array should have all the same elements as the input and they should be sorted in ascending order.

## Stretch Challenges

  * What's another way to sort an array?
  * Compare the two approaches
    * Which one is faster for a given input? (time complexity)
    * Which one has more space complexity?
