#Class-based Object Oriented Programming

Ruby <img alt="heart" src="https://em.wattpad.com/6d0355863f6ca950858ed30d2b8b9b1fe982b54c/687474703a2f2f727562792e7a69677a6f2e636f6d2f77702d636f6e74656e742f75706c6f6164732f73697465732f322f323031332f30312f7370696b655f616e645f7261726974795f5f735f68656172745f7368617065645f666972655f727562795f62795f65647761726474656e2e706e67" width="16px">'s Object Oriented Programming

##Learning Objectives

| Objectives: Students will be able to... |
|:--- |
| Distinguish between objects in JS, hashes and objects in Ruby, and classes in Ruby. |
| Create your own class and use the `initialize` method to set up initial behavior. |
| Distinguish between instance and class variables. |
| Define attributes and methods for instances. |
| Define attributes and methods for whole classes. |
| Explain the class-based inheritance pattern with Ruby as an example. |

##Hashes

Recall: Hashes are simple key value stores. They look a lot like JavaScript's objects.

**Hash Example**

```ruby
 ourhash = {name: "Napoleon", fav_food: "steak", skills: ["archery", "combat", "egg farming"]}

 # => {:name=>"Napoleon", :fav_food=>"steak", :skills=>["archery", "combat", "egg farming"]}
```


##Objects

Ruby also has Objects. In fact, everything in Ruby is an Object. However, we almost never use plain vanilla Objects because there are more sophisticated, specialized object types such a `String`, `Integer`, and `Hash`.


**Class Inheritance Tree**

![Class inheritance](http://i.stack.imgur.com/rvcEi.png)


**Example:**
How can we prove that the Hash we just created inherited from `BasicObject`?


```ruby
ourhash.is_a? Hash  
# => true

Hash < Object
# => true

Object < BasicObject
# => true
```

##Classes

Classes are data types used to create more data. They are similar to the object types we manipulated with constructors and prototypes in JavaScript.

Ruby uses **classes** for object-oriented programming.

**Challenge:** create a `Monster` class and an instance of `Monster`.

*Hint: you'll have to use the Ruby reserved words `class` and `new`.*


## `initialize`

Update the `Monster` class so that a monster goes "Rawr!" when it's first initialized.


##Attributes

What should we do if we want to set attributes on the monster, such as `threat` and `habitat`?

**Challenge:**
Enable this code...

```ruby
rabbit = Monster.new
rabbit.habitat = "Cave of Caerbannog"
rabbit.habitat
=> "Cave of Caerbannog"
```

*Hint: Use the method `attr_accessor`*

**Challenge:** Add a `threat_level` symbol as an instance variable to the Monster class. Allow the user to specify a threat level when the monster is created.

```ruby
dalek = Monster.new(:super_danger)
dalek.threat_level
=> :super_danger
```

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

*Hint: use `def` to define a new method inside the class*


##Class Variables

What if I wanted a running counter for all the monsters I've ever created?  Let's print a monster count message each time a new monster spawns.

**Challenge:** Enable this code...

```ruby
predator = Monster.new(:dangerous)
# Rawr!
# 2 monsters now roam the world!

alien = Monster.new(:dangerous)
# Rawr!
# 3 monsters now roam the world!
```

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

**Challenge:** Given a `Monster` class that contains the method `lets_get_dangerous` & attribute `threat_level`...

```ruby
class Monster
  attr_accessor :threat_level
  def initialize(threat_level)
  	@threat_level = threat_level
  end
  def lets_get_dangerous(new_threat)
  	@threat_level = new_threat
  end
end
```

How could I make a `Warewolf` class and `Zombie` classes while being DRY and not duplicating the method `lets_get_dangerous` in each?  

**Challenge:** Create a `Warewolf` class that inherits from the base `Monster` class.

**Challenge:** The threat of warewolves changes a lot.  Write a custom `threat_level` getter for `Warewolf` that calculates a warewolf's threat based on a boolean parameter that says whether the moon is full.

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
* Print out a person's name, age, and gender in the following format: "Hi, I'm Teddy. I'm a person, and I'm 156 years old."
 * Add a class variable that keeps track of `all` the people you create.