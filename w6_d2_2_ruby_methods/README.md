# Intro To Ruby: Methods


| Objectives: Students will be able to... |
|:--- |
| Compare and contrast functions in Ruby and JavaScript. |
| Write methods in Ruby to solve problems. |

### Parts of A Language

* `Primitives`
* `Combinations`
* **`Abstractions`**


### Some Abstractions

#### Javascript

* Function
    * Anonymous: `function (param1, [..param2, [...]]){...}`,
    * Named: `function Name(param1, [..param2, [...]]){...}`
    * Use *lexical scope* (look up variables in outer scopes)
    * Captures scope (think of closures)
    * Used as values, passed around like other variables
    * Require explicit `return`
    * All parameters are optional

#### Ruby

 * Function
    * Uses `def`
    * Does not capture scope
    * Not used as values or passed around
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

Ruby uses the `def` reserved word to create a method. The method definition must finish with the word `end`.

```ruby
def say_hello
  puts "Hello"
end

say_hello
# Hello
# => nil
```

### Define a method with a parameter

```ruby
def say(something)
  puts something
end

say('hello')
# hello
# => nil

say 'gello'
# gello
# => nil
```

<<<<<<< HEAD:w5_d2_2_ruby_methods/README.md
### Define a method returns true or false

If a function returns true or false, we add a ```?``` to the end as a convention. The ```?``` doesn't "do" anything. Its just a convention.

```ruby
def is_my_friend?(food)
  if food.is_delicious?
    return true
  else
    return false
  end
end
```
=======
You don't have to use parentheses when listing a method's parameters (or calling a method), but it can make it easier to read. The following would also work for the first line of the snippet above: `def say something`
>>>>>>> 01af21e4f2d204e0a286bbba8051dcb9eb0ccfcf:w6_d2_2_ruby_methods/README.md

#### Define a method that operates on two parameters

```ruby
def add_numbers(first, second)
  puts first + second
end

add_numbers(1,2)
# 3
# => nil
```

#### Methods in Ruby always return the value of the last evaluated expression

Why aren't we returning anything from these functions?  Well, methods in Ruby return the value of the last expression evaluated, so we almost never actually have to use the word `return`.

In the console (and in these notes), the value returned by a function will have `=>` in front of it.  If you look at the last example, the `add_numbers` function returned `nil`.  


```ruby
def implicitly_return_5
  if true
    5
  end
end

implicitly_return_5
# => 5
```

Sometimes, we do have to use the reserved word `return`. The best example is if we might to break out of a loop early:

```ruby
def is_burst?
   num_swings = 3
   rand_gen = Random.new  # this will generate random numbers for us
   while num_swings > 0
      if rand_gen.rand(0..4) == 4 # random number out of 0, 1, 2, 3, or 4
         puts "You burst the pinata!"
         return true
      end
      num_swings = num_swings - 1
      puts "#{num_swings} swings left!"
   end
   false
end

```



#### Printing/logging and returning are different

Why did we get a `nil` return value when we `puts` (above)?

The `puts` and `print` methods in Ruby are like `console.log` in JS: they print out a value, but they don't return anything. If they're the last expression evaluated, we get the default `nil`.  The only difference between *those* two methods is that `puts` adds a new line character ('\n') to the end of the string it prints out.  

Another method, called `p`, prints things out in a more carefully formatted way based on the things' `.inspect` method, and it also returns the value.  Programmers can customize `.inspect` to give complex objects a better format for printing.  

```ruby
def list_numbers_quietly(first, second)
  [first, second]
end

list_numbers_quietly(1,2)
# => [1, 2]

puts list_numbers_quietly(3,4)
# 3
# 4
# => nil

p list_numbers_quietly(5,6)
# [5,6]
# => [5, 6]
```

 The `puts` method is the most commonly used one for printing/logging.


### Parameters can have default values

```ruby
def say(something = "Hello")
  puts something
end

say
# Hello
# => nil

say "Goodbye"
# Goodbye
# => nil
```
### Recursion: methods can call themselves

```ruby
def recurse(depth)
  if depth > 0
    puts "#{depth} spiraling down..."
    recurse(depth - 1)
    puts "#{depth} spiraling up..."
  else
    puts "Bottom of the rabbit hole"
  end
end

recurse 3

# 3 spiraling down...
# 2 spiraling down...
# 1 spiraling down...
# Bottom of the rabbit hole
# 1 spiraling up...
# 2 spiraling up...
# 3 spiraling up...
# => nil
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
# undefined method `+' for nil:NilClass

puts foo
# 1
# => nil

puts bar
# undefined local variable or method `bar' for main:Object
```

The problem is that ruby is *entirely* locally scoped -- code within a function only has access to the function's parameters and any variables defined inside of the function.

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
# 2
# 1
# => nil

puts foo
# 1
# => nil

puts bar
# undefined local variable or method `bar' for main:Object

def do_other_stuff(x)
  foo = x
  foo += 1
  bar = 1
  puts foo
  puts bar
end

puts do_other_stuff(foo)
# 2
# 1
# => nil

puts foo
# 1
# => nil
```

###Example: Factorial

A simple, common interview question asks candidates to compute the *factorial* of a number. (The factorial of a number just multiplies it by all lower positive numbers. For example, `6` factorial (written `6!`) is  `6*5*4*3*2*1`, which equals `720`.)


```ruby
def factorial(num)
   if num > 1
      num * factorial(num-1)
   elsif num == 1 or num == 0
      1
   else
      puts "can't do factorial of a negative number!"
   end
end

factorial(6)
# => 720

factorial(-1)
# can't do factorial of a negative number!
# => nil
```

## How to run a ruby script inside a file
1. ```$ touch script.rb```
2. ```$ sublime script.rb```
3. ```$ ruby script.rb```
4. THAT'S IT!
5. From irb you can run a ruby file by loading it ```$ load './filename.rb'```

## How to use gems in irb

Say you want to use a gem like "Awesome Print" to make your printing of objects and strings colorized and indented?

1. First install the gem on your computer: ```$ gem install awesome_print```
2. Now just require it at the top of your file or in irb and then use it according to its documentation.
  ```ruby
  require 'awesome_print'
  a = ["value1", "value2", "value3"]
  ap a
  ```


##Basic Challenges

1. Make a folder called ruby-methods to keep all these ruby scripts we're about to write!
2. In a new file, write a method called ```full_name``` that takes in two arguments ```first``` and ```last``` and returns a concatenated full name string.
3. Use the ```.map``` iterator to iterate over the following hash and return an array of the reverse the make string. Hint: ```"string".reverse #=> "gnirts"```
```ruby
[
  { make: "Toyota", model: "Matrix", sold_on: Time.now },
  { make: "Ford", model: "Focus", sold_on: Time.now },
  { make: "Tesla", model: "Roadster", sold_on: Time.now }
]
```
4. New file: Let's have a party . . . an [HTTParty](https://github.com/jnunemaker/httparty)! Install the httparty gem ```$ gem install httparty```. Now require it and then use it to call an album search on the word "White" to the spotify API. Can you require both ```httparty``` and ```awesome_print``` to have the output look nice? (remember just ```ap``` instead of ```p```)
5. In the same file, can you write a loop that returns an array of the album names from your search?
6. Can you write a loop that makes an array for each album that says "The <<artist name>> made the album: <<album name>> in <<album year>>"

  **Challenge Set 1: Primes**

1. Write an `is_prime?` method to check if a number is prime. A prime number is:
  * greater than 1
  * evenly divisible by 1
  * evenly divisible by itself
  * not evenly divisible by any other numbers between 1 and itself

1. Write a method that takes in a number and returns a list of **all** prime numbers less than the given number.

   **Challenge Set 2: Command Line Interaction**

1. Write a method called `get_contact` that

  * takes a `contacts` hash,
  * prompts the terminal for a **new** `name` and a `phone` number,
  * and then adds the `name` and `phone` as a key value pair respectively **only if** `name` is not already a contact name,
  * and `return`s the updated `contacts` hash.
1. Using `Array#map`, write a method called `get_responses` that takes an array of questions (strings) and returns an array of responses input from the console for each question. (Hint: you will need to use `gets.chomp` and `puts` ).


###Stretch Challenges

1. Make your `is_prime?` method more efficient. Three hints on how to proceed are spaced out below. Before implementing each hint, develop a short argument to convince yourself that it works.  **Note: There are more challenges after the white space!**

   <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  * Hint: if the number isn't 2, only check whether the number is divisible by odd numbers
   <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  * Hint: only check possible divisors up to half the original number
   <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  * Hint: only check possible divisors up to the square root of the original number

1. Guessing Game

   Create a program that asks the user to guess a number between 1 and 100.  Once the user guesses a number, the program should say higher or lower, or report that the number was correct.  The user should continue to make guesses until the correct number is found.  Also, once the user guesses correctly, the program should print the number of guesses needed to arrive at the correct answer. Below is sample output:

   ```
   Guess a number between 1 and 100
   50
   The number is lower than 50.  Guess again!
   25
   The number is lower than 25.  Guess again!
   13
   The number is higher than 13.  Guess again!
   20
   The number is lower than 20.  Guess again!
   17
   The number is higher than 17.  Guess again!
   18
   The number is higher than 18.  Guess again!
   19
   You got 19 in 7 tries!
   ```

1. Write a method to `reverse` a string *in-place* (without creating a new string of the same length). You can only use a little extra space - think one extra character's worth.  Do not use iterators; use only a `while` loop and indices.

1. Rewrite `factorial` without recursion.
