# Intro to JavaScript Data Types
| Objectives |
| :--- |
| Identify 5 primitive data types and know when to use them |
| Explain the difference between primitive and reference data types |
| Explain the difference between dynamic and statically typed languages |
| Use the JS console to manipulate data and create objects |


#### Primitives
  * Boolean
  * Null (nonexistent object)
  * Undefined (empty variable)
  * Number (integer and floating point)
  * String (words in quotes)
  * Symbol (only in ES6)

#### Objects
  Objects are a *reference data type* that allow us to group primitives together as an array or hash. There isn't enough room in a variable to store an entire object; instead, we store a reference to another location in memory.

  Use the object literal to create objects:
  ```
  var car = { make: "Tesla", model: "S", year: 2015 };
  ```
  ```
  var cars = [car, { make: "Toyota", model: "Prius", year: 2010 }];
  ```

## Challenges
  1. Store your first name in a string variable
  2. Concatenate your last name with your first name
  3. `.split` on `" "`
  4. How is the output of `.split` different from the input? (hint: `typeof`)
  5. Define a new array and concatenate the first and last elements


## Stretch Challenges
  1. Explain why `null == undefined` and `null !== undefined` are both true statements.


## Further Reading
  1. [JavaScript data types and data structures [MDN]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
  2. [Working with strings](http://learnjsdata.com/strings.html)
  3. [Different ways to define an object [SO]](http://stackoverflow.com/questions/1143498/difference-between-an-object-and-a-hash)
