# Tree Week! Intro Trees Challenge Solutions

## Challenges

PLEASE DO NOT CODE UNLESS A CHALLENGE SPECIFICALLY INSTRUCTS YOU TO

Assume for the following challenges that you have a `binary_tree` data structure allowing you to:

* access the root node with `.root`.
* given any node, find the left child of that node with `.left_child`
* given any node, find the right child of that node with `.right_child`
* given any node, find the parent of that node with `.parent`

Also assume a `trie` data structure that allows you to:

* find the root with `.root`
* given any node, get a list of the node's children with `.children`
* given any node, find the node's parent with `.parent`
 
 ### Vocab Practice (skip)

1. Use the diagram below to fill in the following table:
	
	| Node  | parent | left child | right child |
	| :---- | :-- | :-- | :-- | 
	| A | *B* | *none*  | *none*  | 
	| B | *D* | *A* | *C* | 
	| C | *B* |  *none* |  *none* |


  <img src="images/labels.jpg" width="300px">

1. In the same diagram (above), which node is the root?  Which are leaves?

  *D is the root.  A, C, and E are leaves.*

1. Finally, in that same diagram, what is the height of the tree?

  *The height is 2, because the longest path from root to leaf has 2 edges/branches in it.*
  <br><br>

1. Which of the following is a tree? (There may be more than one.)

  <img src="images/which_tree.jpg" width="300px">
  
  *B, D, E are trees.
  
  A is not a tree because one node has 2 parents. 
  
  C is not a tree because there is a cycle.
  
  F is not a tree because it's 2 trees! This is called a "forest".*
  
  

1. Which of the following is a balanced tree? (There may be more than one.)

  <img src="images/which_balanced.jpg" width="300px">
  
  *B, D, and C are balanced because all of the "missing children" in these trees are either at the bottom level or one level above.*

1. Which of the following is a binary search tree? (There may be more than one.)

  <img src="images/which_bst.jpg" width="300px">
  
  *Only the tree rooted with 6 is a binary search tree. The others both have nodes in the root's left subtree that are greater than the root node.*


### Basic Challenges - Binary Search Trees

1. Create a binary search tree from the following array: [0,1,2,3,4,5,6].

  *There are many possible solutions.  Here's a balanced one:*
  
  ```
         3
      /     \
     1       5
    / \     / \
   0   2   4   6 
  ```
  
  *Here's another valid BST that's not balanced:*
  ```
        3
       / \
      2   4
     /     \
    1       5
   /         \
  0           6
  ```
  
1. Describe an algorithm to check if a particular number value is inside a binary search tree.  *Hint: start by checking if it's the value of the root.*

  * start at root
  * for each node we look at
    * check the node's value against the value we're looking for
    * if they're equal, we've found the number inside the tree! we're done
    * otherwise if the node's value is less than our target number,  restart the process with this node's right child (move down the right subtree to check the nodes with greater values)
    * otherwise if the node's value is greater than our target number, restart the process with this node's left child (move down the left subtree to check the nodes with lesser values)
  * if we ever try to make one of those moves into a subtree where our target should be but find out that the subtree is empty, then we know the target number isn't in the tree

1. In a binary search tree, how can you find the minimum element? The maximum? 

  min: relies on the insight that the minimum will be the leftmost node in the tree (convince yourself!)
    * start at root
    * for each node we look at
      * move to its left child 
    * when we can't move anymore, we're at the minimum element in the tree

  max: relies on the insight that the max is the rightmost node (convince yourself!)
    * start at root
    * for each node we look at
      * move to its right child 
    * when we can't move anymore, we're at the max

### Basic Challenges - Tries

1. Create a trie for the following word list: ["hey", "hello", "howdy", "g'day"].

1. Add the phrase "hello, govnuh" to your trie from above.  

1. In a normal tree, the number of nodes determines the tree's minimum possible height. What determines the minimum possible height of a trie?

  The height of a trie is determined by the length of the longest word.


### Stretch Challenges

1. A "min heap" is another abstract data structure often thought of as a type of binary tree. It has an additional restriction called the "min heap property:" every node's value is less than the values of its children. What is special about the root of a min heap?  

  The root node of a min heap is the minimum element!  There's a similar data structure called a "max heap".

1. How could you print out all the numbers in a binary search tree in order from least to greatest?  *Hint*: This problem is probably easiest using recursion. 

  Stay tuned! 
  


### Actual Interview Questions

1. You're tasked with setting up a quiz that adapts to the user by displaying different questions based on the percent of questions the user has gotten right so far. If the user has above 70% right so far, the next question should be slightly harder. If the user has below 70% right, the next set question should be slightly easier.  Question difficulty is rated on a scale from 1 to 10. Describe how you could use a tree to run this quiz.

  Stay tuned!

1. Your job is to write a program that recognizes common words typed in on a 10-digit phone keypad (see the image below). Assume the user input comes to you as a sequence of numbers types into the phone.  Also assume you get a list of all the words you should include ahead of time. How would you structure your data?  

  ![phone keypad with letters](https://parentsof10.files.wordpress.com/2013/03/phone-keypad-picture-application.png)
  
  Stay tuned!




