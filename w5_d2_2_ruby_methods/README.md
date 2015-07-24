# Intro To Ruby: Methods


| Objectives: Students will be able to... |
|:--- |
| Compare and contrast functions in Ruby and JavaScript. |
| Write methods in ruby to solve problems. |

### Types of Knowledge

* Imperative knowledge
> your "how to" knowledge, i.e. describing how to do something
* Declarative knowledge
> your "what is" knowledge. i.e. describing what something is

### Parts of A Language

* Primitives
* Combinations
* **Abstractions**


### Some Abstractions

#### Javascript

* Function
    * Anonymous: `function (param1, [..param2, [...]]){...}`,
    * Named: `function Name(param1, [..param2, [...]]){...}`
    * Use *lexical scope* (look up variables in outer scopes)
    * Captures scope (think of closures)
    * Used as values, passed around like other variables
    * Require explicit return
    * All `params` are optional

#### Ruby

 * Function
    * Uses `def`
    * Does not capture scope
    * Not used as values
    * Optional parameters must be specified
    * Implicitly returns last evaluation

* Block
    * Used with `.each`, `.map`, et cetera

    ```
    some_method do |param1, [param2, [...]]
        # some code
    end

    ```
    * Captures scope

##Ruby Methods

### Define a method

```ruby
def say_hello
  puts "Hello"
end

say_hello
```

### Define a method with a parameter

```ruby
def say(something)
  puts something
end

say('hello')
say 'gello'
```

#### Define a method that operates on two parameters
```ruby
def add_numbers(first, second)
  puts first + second
end

add_numbers(1,2)
add_numbers 1, 2
```

#### Printing and returning are different
```ruby
def add_numbers_quietly(first, second)
  first + second
end

add_numbers_quietly(1,2)
add_numbers_quietly 1, 2
```

#### Methods in Ruby always return the value of the last evaluated expression
```ruby
def implicitly_return_5
  if true
    5
  end
end

implicitly_return_5
```

* What was the value of the if statement?
* What will the status of the world be?
  ```ruby
  status_of_world = if 1 == 2 then "messed up" else "a-o-k" end
  ```

* What will the value of `result` be?
  ```ruby
  result = 1 == 2 ? "wuh oh" : "phew"
  ```

### Parameters can have default values

```ruby
def say(something = "Hello")
  puts something
end

say # prints "Hello"
say "Goodbye" # prints "Goodbye"
```
### Recursion: methods can call themselves

```ruby
def recurse(depth)
  if depth > 0
    puts "Spiraling down..."
    recurse(depth - 1)
    puts "Spiraling up..."
  else
    puts "Bottom of the rabbit hole"
  end
end

recurse(5)
recurse 5
```


### Functions have locally scoped variables (biggest difference from javascript!)
The following code won't change `foo`. Why?
```ruby
foo = 1

def do_stuff
  foo += 1
  bar = 1
  puts foo
  puts bar
end

do_stuff

puts foo
puts bar
```

The problem is the ruby is *entirely* locally scoped -- code within a function only has access to the function's parameters and any variables defined inside of the function.

```ruby
foo = 1

def do_stuff
  foo = 1
  foo += 1
  bar = 1
  puts foo
  puts bar
end

do_stuff

puts foo
puts bar

def do_stuff2(x)
  foo = x
  foo += 1
  bar = 1
  puts foo
  puts bar
end

puts do_stuff2(foo)
```


A common interview question example: computes the *factorial* of a number. (Recall, the factorial of a number just multiplies all lower positive numbers. For example,  `6!` (six factorial) is  `6*5*4*3*2*1`, which equals `720`.)


```ruby
def factorial(num)
   if num > 1
      num * factorial(num-1)
   elif num > -1
      1
   else
      puts "can't do factorial of a negative number!"
      nil
```

##Basic Challenges

You may create a separate file for each of the exercises to avoid cluttering a file.
  
1. Write an `isPrime?` method to check if a number is prime. A prime number is:
  * greater than 1
  * evenly divisible by 1
  * evenly divisible by itself
  * not evenly divisible by any other numbers between 1 and itself

1. Write a method that takes in a number and returns a list of **all** prime numbers less than the given number.

1. Write a method called `get_contact` that

  * takes a `contacts` hash,
  * prompts the terminal for a **new** `name` and a `phone` number,
  * and then adds the `name` and `phone` as a key value pair respectively **if** `name` is not already a contact,
  * and `return`s the updated `contacts` hash.
  
1. Using `Array#map`, write a method called `get_responses` that takes an array of questions (strings) and returns an array of responses input from the console for each question. (Hint: you will need to use `gets.chomp` and `puts` ).

1. Write an `isPalindrome?` method to check if a string is a *palindrome* (the same forwards and backwards).



###Stretch Challenges

Note: there are more stretch challenges after the white space!


1. Using Array#inject, write a method called `partial_sums` that pushes the *partial sums* of an array to a new list. The partial sums of an array are the sums of the first 0 elements, the first 1 elements, the first 2 elements, etc.
   
   ```
   partial_sums([])
   #=> [0]
   partial_sums([5])
   #=> [0, 5]
   partial_sums([5,4,8])
   #=> [0, 5, 9, 17]
   ```


1. Make your `isPrime?` method more efficient. Three hints on how to proceed are spaced out below. Before implementing each hint, develop a short argument to convince yourself that it works.

   <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  * Hint: if the number isn't 2, only check whether the number is divisible by odd numbers
   <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  * Hint: only check possible divisors up to half the original number
   <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  * Hint: only check possible divisors up to the square root of the original number
 

1. Write a method to `reverse` a string *in-place* (without recreating the string). You can only use a little extra space - think one extra character's worth.  Do not use iterators; use only a while loop and indices. 


1. If you used recursion for `factorial`, rewrite it without recursion. If you wrote `factorial` in an interative style, rewrite it *with* recursion. 
