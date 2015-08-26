# Linked List Interview Problems

## Assumptions

Assume you have an implementation of linked lists in your language of choice that gives you the following interface:

* `llist.head` - returns the first node of the linked list
* `llist.append(val)` - inserts a node with value `val` at the end of the list and makes it the list's new `tail`
* `llist.prepend(val)` - inserts a node with value `val` at the beginning of the list and makes it the list's new `head`

Additionally, you should assume each node has:

* `node.val` - returns the value stored at that node
* `node.next` (JavaScript) or `node.next_node` (Ruby) - returns the next node in the linked list

## In Class Problems

1. Write a function that, given a number n, finds the nth from last node in a linked list.

1. Write a function that finds the middle node in a linked list.

1. Write a function that removes all duplicates nodes from a sorted linked list, keeping only one node with each value.

1. Write a function that reverses a linked list. Bonus: Do it without creating a new linked list.

## Further Practice

1. Write a function that sorts a linked list, given that the values in the list's nodes are all `2`, `3`, or `4`.  Bonus: write another function that solves this problem in a different way.

1. Write a function that merges two sorted linked lists into one sorted linked list. Bonus: Do it using O(1) extra space.
