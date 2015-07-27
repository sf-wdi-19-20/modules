# <img src="http://engineering.yp.com/img/ruby-logo.png" width="50"> Intro to Ruby

| Objectives |
| :--- |
| Identify data types, operators, and control flow patterns in JavaScript and utilize them in Ruby |
| Apply Ruby control flow to create command line applications |

## Framing for the Week

As we learn Ruby, it's important to revisit how we learned our first language and use that to organize the study of our new language. Learning our second programming language is a process of translating concepts, expressions, and patterns from our familiar language into our new language. Learning our first language involved more identification and comprehension of the knowledge required to implement our first programs. We should begin by organizing this knowledge to build a better understanding as we transition to Ruby.

## Types of Knowledge

* **Declarative Knowledge** > your "what is" knowledge, i.e. describing what something is
* **Imperative knowledge** > your "how to" knowledge, i.e. describing how to do something

## Parts of A Language

* `Primitives`
* `Combinations`
* `Abstractions`

## Think-Pair-Share

* What is JavaScript? What does it look like?
* What are some of the primitives in JavaScript?
  * Think data types, variable declarations, conditionals, functions, etc.
* How did we use JavaScript to build things? How did we build up from the fundamentals of the language?
* What could possibly be different in another language? How could we change the syntax, but keep the semantics?

## Base Challenges

*Use `irb` in your terminal for these challenges.*

### Data Types

1. Store your `first_name` in a variable and your `last_name` in another variable.
2. Concatenate your `first_name` and `last_name` variables, and store the output in a new variable called `full_name`.
3. Use <a href="http://ruby-doc.org/core-2.2.0/String.html#method-i-split" target="_blank">`.split`</a> to turn your `full_name` variable into an array.

### Loops

1. Print (`puts`) "Ruby is awesome!" 50 times. Implement this 3 different ways, using:
  1. <a href="http://www.tutorialspoint.com/ruby/ruby_loops.htm" target="_blank">`while`</a>
  2. <a href="http://www.tutorialspoint.com/ruby/ruby_loops.htm" target="_blank">`for`</a>
  3. <a href="http://ruby-doc.org/core-2.0.0/Integer.html#method-i-times" target="_blank">`.times`</a>
2. Save any string to a variable, and reverse it using `while`, `for`, or `.times`.
3. Save any string to a variable, then create an empty hash called count (`count = {}`). Count occurences of each letter in the string, and save them in your `count` hash.
  * **Example:** For the string `apple`, `count` would look like this: `{a: 1, p: 2, l: 1, e: 1}`.
4. Write a program that gets user input from the terminal and `puts` it until the input is the word `"quit"` or `"q"`.
  * **Hint:** Use `gets.chomp` instead of `gets` to remove trailing `\n`.
5. Write a program that prints the "Bottles of beer on the wall" song:

  ```
  5 bottles of beer on the wall,
  5 bottles of beer!
  Take one down and pass it around,
  4 bottles of beer on the wall!
  ```

  * Use `gets.chomp` to ask the user how many verses they want to hear.
  * Make sure your song prints "1 **bottle** of beer".
  * When the song gets to `0 bottles of beer on the wall`, it should print `No more bottles of beer on the wall` instead.

### Iterators

1. Define an array of 4 phrases: `"Hello, world"`, `"OMG"`, `"Ruby"`, and `"Pair Programming"`. Use `.each` to iterate over the array, and `puts` each phrase.
2. Iterate over your array of phrase again, but this time, only `puts` the phrase if its length 5 letters or longer. Otherwise, print a message that the phrase is too short, and include the phrase's index in the message (Hint: Look up `.each_with_index`).

### Array#map

1. Write a program that maps an array of numbers to double each number.
2. Write a program that maps an array of words to the reverse of each word. (Hint: look up `.reverse()`)
3. Write a program that maps an array of questions (strings) to an array of responses inputted from the console for each question. (Hint: you will need to use puts and gets.chomp)

## Stretch Challenges

1. **Temperature Converter:** Create a simple temperature convertor. It should function like the example below:

  ```
  Type '1' to convert from Celsius to Fahrenheit OR type '2' to convert from Fahrenheit to Celsius
  1
  Enter Celsius Temperature:
  24
  24 degrees Celsius is equal to 75.2 degrees Fahrenheit
  ```

2. **Calculator:** Create a simple calculator that first asks the user what method they would like to use (addition, subtraction, multiplication, division) and then asks the user for two numbers, returning the result of the method with the two numbers. Here is a sample prompt:

  ```
  What calculation would you like to do? (add, sub, mult, div)
  add
  What is number 1?
  3
  What is number 2?
  6
  Your result is 9
  ```

## Docs & Resources

* <a href="http://ruby-doc.org/core-2.2.0/Array.html" target="_blank">Ruby Docs: Array</a>
* <a href="http://ruby-doc.org/core-2.2.0/Hash.html" target="_blank">Ruby Docs: Hash</a>
* <a href="https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Control_Structures" target="_blank">Ruby Control Flow Structures</a>
