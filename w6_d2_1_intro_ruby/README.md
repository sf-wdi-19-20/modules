# <img src="http://engineering.yp.com/img/ruby-logo.png" width="50"> Intro to Ruby

| Objectives |
| :--- |
| Identify data types, operators, and control flow patterns in JavaScript and utilize them in Ruby |
| Apply Ruby control flow to create command line applications |

## What is Ruby?

> <a href="http://www.techotopia.com/index.php/What_is_Ruby%3F" target="_blank">Techtopia</a>

Ruby is an object-oriented interpreted scripting language. When we say it is interpreted we mean to say that the Ruby source code is compiled by an interpreter at the point of execution (similar in this regard to JavaScript and PHP). This contrasts with compiled languages such as Java, Objective C, C, or C++ where the code is pre-compiled into a binary format targeted to run on a specific brand of microprocessor.

## History of Ruby

> <a href="http://www.techotopia.com/index.php/What_is_Ruby%3F" target="_blank">Techtopia</a>

Ruby was created by Yukihiro Matsumoto (more affectionately known as Matz) in Japan starting in 1993. Matz essentially kept Ruby to himself until 1995 when he released it to the public. Ruby quickly gained a following in Matz's home country of Japan in the following years, and finally gained recognition in the rest of the programming world beginning in the year 2000. From that point on Ruby has grown in popularity, particularly because of the popularity of the Ruby on Rails web application development framework.

## JavaScript vs. Ruby

#### Data Types

| JavaScript | Ruby |
| :--- | :--- |
| Strings `""` or `''` | Strings `""` or `''` |
| Numbers `45`, `100.199` | Integers `45`, Floats `100.199` |
| Booleans `true`, `false` | Booleans `true`, `false` |
| `null`, `undefined` | `nil` |

#### Manipulating Data

| JavaScript | Ruby |
| :--- | :--- |
| `var name = "Bob"` | `name = "Bob"` |
| `"Hello, " + name` | `"Hello, #{name}"` |
| `.toString()` | `.to_s` |
| `parseInt()` | `.to_i`, `to_f` |

#### Console Methods

| JavaScript | Ruby |
| :--- | :--- |
| Console in Browser | Console in Terminal (`$ irb`) |
| `console.log()` | `puts`, `p` |
| `prompt()` | `gets`, `gets.chomp` |

#### Operators

| JavaScript | Ruby |
| :--- | :--- |
| Arithmetic `+`, `-`, `*`, `/`, `%` | Arithmetic `+`, `-`, `*`, `/`, `%`, `**` |
| Comparison `==`, `===`, `>`, `>=`, `<`, `<=` | Comparison `==`, `>`, `>=`, `<`, `<=`, `.eql?`, `.equal?` |
| Logical `!`, `||`, `&&` | Logical `!`, `not`, `||`, `or`, `&&`, `and` |

### Javascript

* Arrays
  `indexOf`,`splice`, `slice`
* Objects
  * `["some_key"]`, `.some_key`

### Ruby

* Symbols
* Ranges
* Arrays
  * `[x..y]`, `[x...y]`, `index`
* Hashes
  * `{ :key => value }`
  * `{ key: value }` which is the same as `{:key =>value }`
  * `[some_key]` and `[some_key]=`
  * `key`,`.keys`, `.each`
* operators
  * `||=`, `*=`, `/=`

### Control flow

#### while, for, each, map, any?, present?, blank?

#### Javascript ([Some Control Flow Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements))

* Conditionals
    * `if`, `else if`, `else`, `switch`, ...
* Loops
    * `do-while`, `while`,  ...
* iterators,
    * `for-in`

#### Ruby ([Some Control Flow Structures](http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Control_Structures))

* Conditionals
    * `if`, `elsif`, `else`, `unless`, `case when else` ...
* Loops
    * `until`, `while`, `times` ...
* iterators,
    * `.each`, `for ... in`


## Exercises

You may create a separate file for each of the exercises to avoid cluttering a file.

### Looping And Other Exercises

Use a loop to do  the following:

1.) Write a method called `p_times` that takes a `statement` and a `num` puts the `statement` some `num` of times to the console.

2.) Write a method called `letter_count` to count letter occurence in a string, returned as a `Hash`.

3.) Write a method called `mock_me` that `gets` some input from the terminal and puts it until the input is the word `quit` or `q`. (Be sure to remove trailing `\n`.)

4.) Write a method called `print_contacts` that takes a `hash` of `name` and `phone-number` key-value pairs and puts the `name` with the contact info.

5.) Write a method called `get_contact` that

* takes a `contacts` hash,
* prints the contacts,
* prompts the terminal for a **new** `name` and a `phone` number,
* and then adds the `name` and `phone` as a key value pair respectively if `name` is not already a contact.
* The `get_contact` method should `return` the `contacts` hash.

### List exercises

#### Using `Array#inject`

Write a method for each exercise below that uses `Array#inject`:

1.) Write a method called `get_sum` to find the `sum` of the values in an array.

2.) Write a method called `get_max` to find the `max` of the values in an array.

3.) Write a method called `get_min` to find the `min` of the values in an array.

4.) Write a method called `reverse_str` to reverse a string.

**Challenge**: *write a method called `partial_sums` that pushes the partial sum of an array to a new list*

```
partial_sums([])
#=> [0]
partial_sums([5])
#=> [0, 5]
partial_sums([5,6,7])
#=> [0, 5, 11, 18]
```

#### Using `Array#map`

Write a method for each exercise below that uses `Array#map`:

1.)  Write a method called `multiply_by` that takes a number and returns an array of numbers multiplied by that number.

2.)  Write a method called `reverse_each` that takes an array of words and returns an array of reversed words.

3.)  Write method called `get_responses` that takes an array of questions (strings) and returns an array of responses input from the console for each question. (Hint: you will need to use `gets.chomp` and `puts` )
