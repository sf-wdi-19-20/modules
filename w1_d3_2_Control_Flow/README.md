##Objectives  
| Objectives |
| :--- |
| Describe and use boolean logic |
| Trace the flow of a program based on its code |
| Predict the output from `if/else` and `switch` statements |
| explain the differences between `for` loops and `while` loops, and when to use each |
| implement `if/else` logic, `for` and `while` loops, and combinations |

### Motivation (Why?)

Conditionals and loops are fundamental to all programming in every language and paradigm.

### Analogy (What?)

Condtionals are like a **choose your own adventure book**

Loops are like a **room of people introducing themselves**

### Examples/Demo (How?)

#### Truthy/Falsy Operators

| English | "and" | "or" | "not" or "bang" | "double bang" |
| ------------- |:-------------|:-------------|:-------------| :------- |
| Javascript | `&&` | &#124;&#124; | `!` | `!!` | |  
| e.g. | `a && b` | a  &#124;&#124; b | `!b` | `!!b` |
| English | A and B | A or B | not B | not NOT B |

#### Operators

| strict equality | loose equality | not strictly equal | not loosely equal | greater than | less than | greater than or equal to | less than or equal to |
| ------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
| `===` | `==` | `!==` | `!=` | `>` | `<` | `>=` | `<=` |

#### `if/else`

```
if (badWeather) {
  takeTheBus();
}

if (!badWeather) {
  walkToWork();
}
```

```
if (badWeather) {
  takeTheBus();
} else {
  walkToWork();
}
```

#### `else if`

```
if ( hasCar ) {
	// drive it!
} else if ( hasBike ) {
	// ride it!
} else if ( hasTransitPass ) {
	// take the bus!
} else {
	// better start walking!
}
```

#### `while/for` loops

```
var m = ["Bill", "Nicki", "Kelly"]
for (i = 0; i < m.length; i++) {
  console.log(m[i] + " is a nice person")
}

```

```
while (timeBeforeWork > 180000) { // Remember JS counts time in milliseconds
  hitSnooze()
}
```

##Challenges

### Docs & Resources

[Conditionals - Codeacademy](http://www.codecademy.com/glossary/javascript/if-statement)
</br>
[Loops - CodeAcademy](http://www.codecademy.com/glossary/javascript/loops)
</br>
[Loops - JSforcats](http://jsforcats.com/#loops)
</br>

### Basic Challenges
1. Which of the following are truthy values? (hint: try `if("abc"){"console.log('I'm truthy!')"}` in the JS console)
  * 1;
  * "abc";
  * "";
  * [];
  * {};
  * -1;
  * (1+1);
  * 0;
  * 3.14159;
  * Object
2. Jimmy loves roller coasters, but there are a bunch of rules (ugh!) for riding:

For starters, it costs 5 tokens. Here's how we might code that:

```
var tokens = 3; // Jimmy's tokens

// Can he ride?
if ( tokens >= 5 ) {
    console.log("Step right up!");
} else {
    console.log("Sorry, you can't ride")
}
```
Edit the code above to check the following additional Requirements:

    Must be at least 4ft tall
    Must be at least 12 years old
    Replace the prevoius rule: now riders under 12 must be accompanied by an adult
    (If the boss isn't looking, you can sneak in!)
    Riders with a reservation get in free.

2. Log to the console "This is awesome!" 25 times.
3. Create a snippet inside of developer tools. Use snippets to do the rest of the challenges.
4. In the snippet, create a new variable that is an array of 4 phrases: Howdy there, , javascript, Pair Programming.
5. Loop over the array and console log each phrase.
6. Loop over the array and log each phrase to the console if its total length is 4 or longer. Otherwise, console log that the phrase is too short.
6. Come up with three different ways to break a `for` loop that result in three different errors. What three different errors did you get?


### Stretch Challenges

5. In a snippet, create a new variable that is an array containing 5 objects, each of which has the keys `name` and `age`.
6. Log to the console the name value of each object.
7. Create and log an array with the age of each object in months.
9. Find and log the sum of the ages.
8. Log to the console only the name of the oldest person.
9. Log to the console the index of each element in the array.
10. Create and log an array containing only the objects with an age over 20.
11. Create and log an array of all the names, in which any names that begin with a consonant are upper case.
12. Create and log an array that is the original array in a random order.

### Homework

1. Write the "Bottles of beer on the wall" song:

		5 bottles of beer on the wall,
		5 bottles of beer!
		Take one down and pass it around,
		4 bottles of beer on the wall
  * How would you fix "1 bottles of beer"?
  * How would you change "0" to "No more"?
  * Use a prompt to ask the user how many verses they want to hear


### External Reading and Tutorials

[Javascripting](https://github.com/sethvincent/javascripting)
</br>
