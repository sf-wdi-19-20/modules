#Class-based Object Oriented Programming

Ruby <img alt="heart" src="https://em.wattpad.com/6d0355863f6ca950858ed30d2b8b9b1fe982b54c/687474703a2f2f727562792e7a69677a6f2e636f6d2f77702d636f6e74656e742f75706c6f6164732f73697465732f322f323031332f30312f7370696b655f616e645f7261726974795f5f735f68656172745f7368617065645f666972655f727562795f62795f65647761726474656e2e706e67" width="16px">'s Object Oriented Programming

##Learning Objectives

| Objectives: Students will be able to... |
|:--- |
| Distinguish between objects in JS, hashes and objects in Ruby, and classes in Ruby. |
| Create your own class and use the `initialize` method to set up initial behavior. |
| Define attributes and methods for instances, and for the class as a whole. |
| Explain the class-based inheritance pattern with Ruby as an example. |

##Hashes

Recall: Hashes are simple key value stores. They look a lot like JavaScript's objects.

**Hash Example**

```ruby
 ourhash = {name: "Napoleon", fav_food: "steak", skills: ["archery", "combat", "egg farming"]}

 # => {:name=>"Napoleon", :fav_food=>"steak", :skills=>["archery", "combat", "egg farming"]}
```

Recall that there are 2 notations for hashes, a colon (`:`) notation and a hash rocket (`=>`) notation.  The colon notation always results in your keys being symbols. The hash rocket notation gives you more control over the types of your keys. 

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

Object < BaseObject
# => true

Hash < BasicObject
# => true
```

##Classes

Classes are data types used to create more data. They are similar to the object types we manipulated with constructors and prototypes in JavaScript.

Ruby uses **classes** for object-oriented programming.

**Challenge:** create a `Monster` class and an instance of `Monster`.

<img alt="monster" src="http://blog.spoongraphics.co.uk/wp-content/uploads/2009/furry-monster/monster.jpg" width=200px>

*Hint: you'll have to use the Ruby reserved words `class` and `new`.*


## `initialize`

Update the `Monster` class so that a monster goes "Rawr!" when it's first initialized.


## Instance Variables 

What should we do if we want to set attributes on the monster, such as its `habitat`?

**Challenge:**
Enable this code...

```ruby
rabbit = Monster.new
rabbit.habitat = "Cave of Caerbannog"
rabbit.habitat
=> "Cave of Caerbannog"
```

*Hint: Use the method `attr_accessor`*

**Challenge:** Add a `threat_level` instance variable to the Monster class. Allow the user to specify a threat level when the monster is created.  (The threat levels used in later challenges will be `:meh`, `:semi_danger`, `:super_danger`, and `:threat_level_midnight`.)

```ruby
dalek = Monster.new(:super_danger)
dalek.threat_level
=> :super_danger
```

**Challenge:** Allow the user to create an instance of `Monster` without specifying a threat level. The default threat level for a new monster should be `:meh`.

##Instance Methods

**Challenge:** Create a `habitat?` instance method for `Monster` that tests whether the monster's habitat matches what is passed in?

```ruby
yeti = Monster.new
yeti.habitat = "tundra"
yeti.habitat?("swamp")
=> false
yeti.habitat?("tundra")
=> true
```

*Hint: use `def` to define a new method inside the class*

##Class Variables and Class Methods

What if I wanted a running counter for all the monsters I've ever created?  Let's keep track and print a monster `count` message each time a new monster spawns.

**Challenge:** Enable this code...

```ruby
predator = Monster.new(:semi_danger)
# Rawr!
# 2 monsters now roam the world!

alien = Monster.new(:semi_danger)
# Rawr!
# 3 monsters now roam the world!
```

*Hint: Create a class variable with `@@`*

**Challenge:** Create a class method to get the current value of the monster count.

*Hint: Use the reserved word `self`*

**Note** Class variables are used much less often than instance variables!

**Stretch Challenge:** Create a `fight` class method for `Monster` that takes in two monster instances and compares their  `threat_level`s. The `fight` method should return the monster that has the higher threat level. Remember, the threat levels to consider are `:meh`, `:semi_danger`, `:super_danger`, and `:threat_level_midnight`.

*Hint: One way to do this is to create a hash with keys that are threat level symbols and values that are easier to compare. Another idea is to look into ruby's version(s) of "enums".*

**Stretch Challenge:** Include the `Comparable` module in your `Monster` class and create a custom `<=>` method to compare monsters based on their threat levels. Refactor `fight` to use this comparison.

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

**Challenge:** Given a `Monster` class that contains a method `lets_get_dangerous` & attribute `threat_level`...

```ruby
class Monster
  attr_accessor :threat_level
  def initialize(threat_level)
  	@threat_level = threat_level
  end
  
  def lets_get_dangerous()
  	if @threat_level == :meh
  	  @threat_level = :semi_danger
  	elsif @threat_level == :semi_danger
  	  @threat_level = :super_danger
  	else
  	  @threat_level = :threat_level_midnight
  	end
  end
end
```

... how could we make a `Warewolf` class and `Zombie` classes while being DRY and not duplicating the method `lets_get_dangerous` in each? 

**Challenge:** Create a `Zombie` class that inherits from the base `Monster` class. Set it up so that all zombies (instances) start with a habitat of `"graveyard"`.

**Challenge:** Create a `Warewolf` class that inherits from the base `Monster` class.  The threat of warewolves changes a lot.  Write a custom `check_threat_level` method for `Warewolf` that calculates a warewolf's threat level based on a boolean parameter that says whether the moon is full. The `check_threat_level` method should update the warewolf's `@threat_level` and return its new value.

## Stretch Challenges: The Animal Kingdom

People are animals too! In this exercise, you'll define:

  1. An `Animal` class, with the following:
    * Instance Variables:
      * `kind`: A string that holds the type of animal
      * `state`: Used to track whether the animal is awake or sleeping (see `sleep` and `wake` below).
    * Instance Methods:
      * `eat`: Takes a parameter `food` to eat and prints out a message that the animal is eating `food`
      * `sleep` & `wake`: These two methods should NOT be passed any arguments. Instead, they will set an instance variable `@state` to the string `"asleep"` or `"awake"` respectively.

  2. A `Person` class, with the following characteristics:
    * Inherits from `Animal`
    * Automatically sets `kind` to `"person"`
    * Adds 3 new instance vars:
      * age
      * gender
      * name
    - Also, people aren't cannibals! Make sure your `Person` class *overrides* the existing `eat` method (in `Animal`) so that a `Person` cannot eat a `"person"`

**Bored? More!**

* People can speak, and it's good to be polite. Add an instance method called `greet` that:
* Print out a person's name, age, and gender in the following format: "Hi, I'm Teddy. I'm a person, and I'm 156 years old."
 * Add a class variable that keeps track of `all` the people you create.
 * Add a class method to print out the names of existing people.
