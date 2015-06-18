#Object Oriented Programming 

##Objectives

Students will be able to...   

* Summarize key tenents of the Object Oriented Programming paradigm
* Model real-world data and relationships with JavaScript objects
* Justify choices of which methods and attributes to include; and whether to put them on a constructor, a prototype, or a single object

##Programming Paradigms

So far, we've been working with **procedural programming**, putting blocks of code in functions (aka procedures) that we call at various points in the program. 


```
data <--> global or local variables

behaviors <--> procedures  (functions)

```


With **object oriented programming**, we encapsulate data and behaviors in objects.  

```
data <--> attributes  ("class" or "instance" variables)

behaviors <--> methods (functions)

```

##Constructor and Prototype Review

###Constructors  
 * variables and functions are **declared** once for each instance
 * functions have access to "private" variables declared within the constructor's scope
 * when you update the constructor, previously created instances DON'T update
 * data is "embedded" in each instance


 ###Prototypes   
  * all instances use the same function and variable declarations
  * when you update the prototype, previously created instances DO get the updates
  * data is "referenced" from the prototype copy

##Activities

We'll be modeling a car dealership!

0) List important attributes and methods for a Car object type.

1) Create a constructor for a Car object type. Include the attributes we discussed.

2) Create a "private" `_price` variable for the Car object along with a setter method and a getter method. 



