# Tree Week!

This week we'll add trees to our collection of abstract data structures.

## Graphs 

In computer science, graphs are just collections of **vertices** (also known as nodes) and **edges**. Each edge connects two vertices together.  You can think of vertices as cities on a map and think of edges as the roads between them.  Graphs are widely used in computer science and algorithms, but we today we'll focus on a particular kind of graph.

## Trees 

In computer science, trees are a kind of "directed acyclic graph".

In "directed" graphs, the edges are all like one-way roads. You can only move on an edge (called "traversing" the edge) in one direction. The word "acyclic" describes graphs without any cycles; that is, there's no cycle of edges that will lead you back to a node if you leave it. 

Trees have a few additional rules. First, every tree has a unique, special start node called the "root" node. And second, the nodes in trees can only ever have one "parent".

We usually draw trees vertically with the "root" at the top of the tree. 

Let's go into the terminology a little more with some diagrams.

## Terminology

[@TODO vertices(nodes)/edge]
Graphs have vertices (aka "nodes") that usually represent data, or the current "state" (configuration) of something.  Edges connect the vertices and usually represent a relationship between data objects, or a transistion from one state to another.  A sequence of edges is called a "path".

[@TODO parent/child]

Tree data structures adopt language from family trees. If an edge in a tree connects two vertices, the source vertex is called the "parent", and the target vertex is called the "child".  From the perspective of a single node, some other nodes will be on the path between that node and the root. These are the node's "ancestors." Other nodes might be children of the  node, or children of the node's children. These are called the node's "descendants."  Nodes that share the same "parent" are known as "siblings."

[@TODO root/branch/leaf]

Trees start with a unique "root" node at the top of the tree.  The edges in a tree are sometimes referred to as "branches".  Nodes of the tree that do not have any children are called "leaves" because no branches lead away from them. The length of the longest path from the root to a leaf is called the tree's "height".

## Trees to Know for Interviews

### Binary Trees

The most common types of trees for interviews are "binary trees," which allow each node to have up to 2 children. We say each node can have a "left child" and a "right child."

### Binary Search Trees

Binary search trees add on an extra restriction to binary trees: each node's left child (if it has one) will have a lesser value than the node itself.  Each node's right child (if it has one) must have a greater value than the node itself.

### Balanced Binary Trees

Balanced binary trees are another basic variant of binary trees. A "balanced" tree has a height about as low as it can possibly be while still holding all its nodes.  For binary trees, that means the height is O(log<sub>2</sub>(n)), where n is the number of nodes in the tree.  There are different definitions of exactly how to balance a tree, but you can tell a tree is balanced if all of the leaves are either at the very bottom level of the tree or just one level higher.

### Balanced Binary Search Trees

Balanced binary search trees combine the balanced structure requirement with the node value requirement of binary search trees.  If an interview question asks about a tree, try to clarify whether the tree is balanced and whether it is a binary search tree. 

### Tries

Tries, also called prefix trees, aren't usually binary.  They allow each node to have as many children as needed. The special thing about tries is how they store data. Tries' data builds up over the path from the root to each node.  Here's an example:

![wikipedia trie image](https://upload.wikimedia.org/wikipedia/commons/b/be/Trie_example.svg)

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
 
 ### Vocab Practice 

1. Use the diagram below to fill in the following table:

| Node  | parent | left child | right child |
| :---- | :-- | :-- | :-- | 
| A | | | | 
| B | | | | 
| C | | | |

1. In the same diagram (above), which node is the root?  Which are leaves?

1. What is the height of the tree?

1. Which of the following is a tree? (There may be more than one.)

1. Which of the following is a balanced tree? (There may be more than one.)

1. Which of the following is a binary search tree? (There may be more than one.)


## Basic Challenges 

1. Create a balanced binary search tree from the following array: [0,1,2,3,4,5,6].

1. Describe an algorithm to check if a particular number is inside a binary search tree.  *Hint: start by checking if it's the value of the root.*

1. Given a binary search tree, how can you insert a new node into it? Note: the tree does not need to be balanced, but you must maintain the binary search tree property.

1. In a binary search tree, how can you find the minimum element? The maximum? 

1. Create a trie for the following word list: ["hey", "hello", "howdy", "g'day"].

1. Add the phrase "hello, govnuh" to your trie from above.  

1. What determines the height of a trie?

1. How many paths are there in a tree and a trie from the root node to:

	* the root node?
	* a particular leaf?
	* a particular node that is not a leaf?

1. A "min heap" is another abstract data structure often thought of as a type of binary tree. It has an additional restriction called the "min heap property:" every node's value is less than the values of its children. What is special about the root of a min heap?  

### Stretch Challenges 

1. How could you print out all the numbers in a binary search tree in order from least to greatest?  *Hint*: This problem is probably easiest using recursion.  @INTERVIEW

1. Design an algorithm to find a path from one node in a binary tree to another.

1. Given access to one node in a binary search tree, how can you find the next largest node?

1. You're tasked with setting up a quiz that adapts to the user by displaying different questions based on the percent of questions the user has gotten right so far. If the user has above 70% right, the next question should be slightly harder. If the user has below 70% right, the next set question should be slightly easier.  Question difficulty is rated on a scale from 1 to 10. Describe the algorithm you would use to run the quiz. 

1. You have to write a program that recognizes common words typed in on a 10-digit phone keypad (see the image below). Assume the user input comes to you as a sequence of letters.  Also assume you get a list of all the words you should include ahead of time. How would you structure your data?  Could you preprocess the list of words to make your program run faster?


![phone keypad with letters 2:abc](https://parentsof10.files.wordpress.com/2013/03/phone-keypad-picture-application.png)

@TODO image

1. A naieve insert algorithm can easily result in an unbalanced binary search tree, as you'll probably see if you insert the following numbers into an empty binary search tree one at a time: [1,2,3,4,5].  Look up algorithms that are used to insert into and delete from "self-balancing" binary search trees. The algorithms you find will probably 


