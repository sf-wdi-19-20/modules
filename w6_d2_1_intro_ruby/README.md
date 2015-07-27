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

## Ruby Console
Every Mac comes with Ruby inside! Just go into your terminal, and type `irb` to enter the Ruby console.

```
$ irb

irb(main):001:0> 2 + 2
=> 4
```

## JavaScript vs. Ruby

### Data Types

| JavaScript | Ruby |
| :--- | :--- |
| Strings: `"JavaScript"` or `'JavaScript'` | Strings `"Ruby"` or `'Ruby'` |
|  | Symbols `:title` |
| Numbers `45`, `100.199` | Integers (Fixnum or Bignum) `45`, Floats `100.199` |
| Booleans `true`, `false` | Booleans `true`, `false` |
| Arrays `[1, 2, 3]` | Arrays `[1, 2, 3]` |
| Objects `{city: "San Francisco", state: "CA"}` | Hashes `{city: "San Francisco", state: "CA"}` or `{:city => "San Francisco", :state => "CA"}` |
| `null`, `undefined` | `nil` |

### Conventions & Data Manipulation

| JavaScript | Ruby |
| :--- | :--- |
| `camelCase` | `snake_case` |
| `var name = "Bob"` | `name = "Bob"` |
| `"Hello, " + name` | `"Hello, #{name}"` |
| `object.key`, `object['key']` | `hash[:key]` |
| `typeof()` | `.class` |
| `.toString()` | `.to_s` |
| `parseInt()` | `.to_i`, `to_f` |

### Console Methods

| JavaScript | Ruby |
| :--- | :--- |
| Console in Browser | Console in Terminal (`$ irb`) |
| `console.log()` | `puts`, `p` |
| `prompt()` | `gets`, `gets.chomp` |

### Operators

| JavaScript | Ruby |
| :--- | :--- |
| Arithmetic `+`, `-`, `*`, `/`, `%` | Arithmetic `+`, `-`, `*`, `/`, `%`, `**` |
| Comparison `==`, `===`, `>`, `>=`, `<`, `<=` | Comparison `==`, `>`, `>=`, `<`, `<=`, `.eql?`, `.equal?` |
| Assignment `=`, `+=`, `++`, `-=`, `--`, `*=`, `/=`, `%=` | Assignment `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` |
| Logical `!`, `||`, `&&` | Logical `!`, `not`, `||`, `or`, `&&`, `and` |

## JavaScript vs. Ruby: Control Flow

### Conditionals

**JavaScript**

```js
if (x > y) {
  console.log("x is greater than y");
} else if (x < y) {
  console.log("x is less than y");
} else {
  console.log("x equals y");
}
```

**Ruby**

```ruby
if x > y
  puts "x is greater than y"
elsif x < y
  puts "x is less than y"
else
  puts "x equals y"
end
```

### While Loop

**JavaScript**

```js
while (i < 100) {
  console.log(i);
  i++;
}
```

**Ruby**

```ruby
while i < 100
  puts i
  i += 1
end
```

### For Loop

**JavaScript**

```js
var names = ["Sonja", "Jared", "Alexis"];

for (i = 0; i < names.length; i++) {
  console.log("Hello, " + names[i]);
}
```

**Ruby**

```ruby
names = ["Sonja", "Jared", "Alexis"]

for i in names
   puts "Hello, #{i}"
end
```

### Each Iterator

**JavaScript** (Using Underscore)

```js
var pets = ["Fluffy", "Sprinkles", "Toto"];

_.each(pets, function(pet, index) {
  console.log(pet + " is at index " + index);
})
```

**Ruby** (Built-In Methods)

```ruby
pets = ["Fluffy", "Sprinkles", "Toto"]

# each
pets.each do |pet|
  puts pet
end

# each_with_index
pets.each_with_index do |pet, index|
  puts "#{pet} is at index #{index}"
end
```

### Map Iterator

**JavaScript** (Using Underscore)

```js
var nums = [1, 2, 3];

var numsSquared = _.map(nums, function(num, index) {
  num * num;
});
```

**Ruby** (Built-In Methods)

```ruby
nums = [1, 2, 3]

nums_squared = nums.map do |num|
  num * num
end

# OR

nums_squared = nums.map {|num| num * num}
```

### More Ruby Methods

Ruby has some methods that JavaScript doesn't, for example `.any?` and `.empty?`, which both return `true` or `false`.

```ruby
my_friends = ["Andrew", "Sally", "Bill"]

# checks if there are any values in array
my_friends.any? # => true

# checks if array is empty
my_friends.empty? # => false
```

* conditionals
  * unless
* iterators
  * Ranges `[1..100]`, `[1...100]`
  * Times `100.times do |i| ... end`

## Docs & Resources

* <a href="http://ruby-doc.org/core-2.2.0/Array.html" target="_blank">Ruby Array Docs</a>
* <a href="http://ruby-doc.org/core-2.2.0/Hash.html" target="_blank">Ruby Hash Docs</a>
* <a href="https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Control_Structures" target="_blank">Ruby Control Flow Structures</a>
