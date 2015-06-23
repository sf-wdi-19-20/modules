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
  3. `split` on `" "`
  4. How is the output of `split` different from the input? (hint: `typeof`)
  5. Define a new array and concatenate the first and last elements


## Stretch Challenges
  1. Explain why `null == undefined` and `null !== undefined` are both true statements.


## Further Reading
  1. [JavaScript data types and data structures [MDN]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
  2. [Different ways to define an object [SO]](http://stackoverflow.com/questions/1143498/difference-between-an-object-and-a-hash)
  3. [Working with strings](http://learnjsdata.com/strings.html)


## Homework
  1. Complete the [Codecademy module on Data Structures](http://www.codecademy.com/courses/javascript-beginner-en-9Sgpi/0/1?curriculum_id=506324b3a7dffd00020bf661)
  2. Find a partner to exchange secret messages with
    * How you encode your message is up to you
    * You might want to convert your message to binary or use some built-in JS functions (`slice`, `replace`, etc) to obscure the data you are sending.
  3. Get creative and make sure to include detailed instructions so that your partner knows how to decode the message.


#### Extra Credit
  Send the instructions for decoding via email and the message body via slack for extra security. How is this similar to public/private key cryptography?
