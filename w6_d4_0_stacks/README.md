# Interview Prep: Stacks

## Conceptual Review

Stacks are "last-in, first-out", meaning the last item pushed to the stack will be the first thing popped off. We can use the `.push` method to add an item to the top of the stack and the `.pop` method to remove an item from the top of the stack. Since we'll be implementing our stack with an array, take a look at Ruby's array methods <a href="http://ruby-doc.org/core-2.2.0/Array.html#method-i-push" target="_blank">push</a> and <a href="http://ruby-doc.org/core-2.2.0/Array.html#method-i-pop" target="_blank">pop</a>.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/2000px-Data_stack.svg.png" width="400px">

## Challenge: Battle of the Parentheses

Image you have a set of opening and closing parentheses, and you want to check if they're closed up properly. **Examples**:

```ruby
# everything's closed up
(((())))

# right side has one extra )
()(()))

# left side has two extra (
((()())(()
```

We can use a stack to perform this check! To make it more interesting, let's gamify the problem...

<img src="http://vignette4.wikia.nocookie.net/seuss/images/9/92/Zax_in_prax.jpg/revision/latest?cb=20130206183730">

> The day before today, One day, making tracks<br>
In the prairie of Prax,<br>
Came a North-Going Zax<br>
And a South-Going Zax.<br>
And it happened that both of them came to a place<br>
Where they bumped. There they stood.<br>
Foot to foot. Face to face.<br>

Imagine our parentheses are soldiers in a battle, but this is a non-violent war. Every time a soldier on the left side of the battle `(` meets a soldier on the right `)`, they make peace, hug it out, and leave the battle. The last soldier left in the battle wins the fight for their side, since everyone else has forfeited.

**Your challenge is to use a stack data-structure (implemented with an array) to find out which side wins the battle.**

### Specs

* Your method should take in an array of "soldiers" and return the winning side
* Your method should iterate through the soldiers and use a stack to keep track of soldiers on the left vs. soldiers on the right
* **Hint:** soldiers on the left should be pushed onto the stack, and when a soldier on the right comes along, you should pop from the stack. Figure out who's left standing... This will involve checking if the stack is <a href="http://ruby-doc.org/core-2.2.0/Array.html#method-i-empty-3F" target="_blank">empty</a> at certain points.

### How to Get Started

Remember our steps for diagramming a problem...

1. Use pseudo-code to diagram the input and output of your method before writing any code.

2. Come up with at least three examples of test input, and write down the expected output. Your input will be an array, but the format of the elements inside is up to you. **Example formats:**
  * Input: `["(", "(", ")", ")", ")"]` => Output: `")"` (winner!)
  * Input: `["L", "L", "R", "R", "R"]` => Output: `"R"` (winner!)
  * Input: `[0, 0, 1, 1, 1]` => Output: `1` (winner!)

  *No matter what format you choose, make sure you have at least three examples before you start coding!*

3. Once you have pseudo-code and test input with expected output, you can write code to implement the body of the function.
