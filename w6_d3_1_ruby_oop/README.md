#Theme: Ruby <3's OOP

##Learning Objectives

**Morning**

* Distinguish between an object & a class in Ruby
* Create your own class and leverage the `initialize` method
* Define attributes & methods for instances
* Leverage the keyword `self`
* Distinguish between instance and class variables
* Practice inheritance in Ruby and implement it in an exercise modeling an Animal Kingdom
* Synthesize knowledge from today by building a Race simulation for HW

##Hashes

* Recall: Hashes are simple key value stores. They look a lot like JavaScript's objects.

**Hash Example**
How can I organize my data using key/value pairs in Ruby? Like so:

```ruby
ourhash = {:name=>"Napoleon", :fav_food=>"steak", :skills=>["archery", "combat", "egg farming"]}
```

Notice that ruby marks the association between a key and a value with a "fat arrow", `=>`.

##Objects (10m)

* Ruby also has Objects.

* Everything in Ruby is an Object; however, we almost never use plain vanilla Objects because there are more sophisticated, specialized implementations such a `String`, `Integer`, and `Hash`.

**Example:**
How can we prove that the Hash we just created inherited from `Basic Object`?

```ruby 
ourhash.is_a? Hash  # true
Hash < Object       # true
```

###Class Inheritance Tree

![Class inheritance](http://i.stack.imgur.com/rvcEi.png)

##Classes 

**Example:**
Ruby uses classes for object-oriented programming. How can we create a class in Ruby? 

Goal: Let's create a Monster that goes "Rawr" when it's first initialized

*Refresher: Classes are data types used to create more data. They are analogous to constructors in JavaScript.*

##Attributes

What should we do if we want to set attributes on the monster, such as threat and habitat?

**Challenge:**
Enable this code...

```ruby
dracula = Monster.new
dracula.habitat = "Transylvania"
dracula.habitat
=> "Dracula"
```

*Hint: Use the method `attr_accessor`*

##Methods
**Challenge:**
How would we create an instance method for Monster named `habitat?`, which tests whether the habitat matches what is passed in?

```ruby
yeti = Monster.new
yeti.habitat = "tundra"
yeti.habitat?("swamp")
=> false
yeti.habitat?("tundra")
=> true
```

*Hint: use the `def` keyword to define a new method inside the class*

##The `self` Keyword & Instance Variables

**Challenge:**
What If I want to set the habitat of the monster at the moment I'm creating it? How could I enable code like this?

```ruby
goblinKing = Monster.new("cave")
goblinKing.habitat
=> "cave"
```

*Hint: Create an instance variable with `@`*

##Class Variables

What if I wanted a running counter for all the monsters I've ever created?

*Hint: Create a class variable with `@@`*

*FYI: Class variables are used much less often than instance variables*

## Quick Review

  * What is a class?
    - What is an attribute?
    - What is a method?
  * What is the difference between:
    - an instance variable,
    - a class variable
  * Why do we use classes?
  * What is inheritance?
  
## Inheritance

Given an `Monster` class that contains the method `increaseDanger` & attribute `threat`...

```ruby
class Monster
  attr_accessor :threat
  def initialize
  	@threat = 0
  end
  def increaseDanger(moreThreat)
  	@threat += moreThreat
  end
end
```

**Challenge:**
How can I create both `Monster` and `Zombie` classes while being DRY and not duplicating the method `increaseDanger` in each?

## Exercise: The Animal Kingdom

Humans are still animals after all. In this exercise, you'll define:

  1. An `Animal` class, with the following:
    * Properties:
      * `kind`: A string that holds the type of animal
    * Instance Methods:
      * `eat`: Takes a parameter `food` to eat and prints out a message that the animal is eating `food`
      * `sleep` & `wake`: These two methods should NOT be passed any arguments. Instead, they will set an instance variable `@state` to the string `"asleep"` or `"awake"` respectively.

  2. A `Person` class, with the following characteristics:
    * Inherits from `Animal`
    * Automatically sets `@type` to `"person"` 
    * Adds 3 new instance vars:
      * age
      * gender
      * name
    - Also, people aren't cannibals! Make sure your `Person` class *overrides* the existing `eat` method (in `Animal`) so that a `Person` cannot eat a `"person"`

**BONUS:**

* People can speak, and it's good to be polite. Add an instance method called `greet` that:
* Print out a person's name, age, and gender in the following format: "Hi, I'm Teddy. I'm a person, and I'm 156 years old." (Hint: look up how to interpolate strings in Ruby)
 * Add a `class variable` that keeps track of all the people you create.