### 1.    Implement underscore's `once` function:

This `function` takes in another `function` `f` and returns a new `function` `g` that is the same as `f`, but can only be called once.

For example:

```javascript
var once = function (f) { ... };

var log = function(message) {
   console.log(message);
};

var logOnce = once(log);

logOnce("a"); // logs "a"
logOnce("b"); // doesn't log anything
```

### 2.    What is wrong with the following code and how can it be fixed?

```javascript
for (var i = 0; i < 10; i++) {

  // Call API that returns the square of a number
  $.get("http://example.com/math/square?val=" + i, function (data) {

    // Print out the number and it's result
    // (assume data is what we want to print and that this is a valid use of the API)
    console.log("The square of " + i + " is " + data);
  
  });
}
```
**Hint:** Think about what happens if the API takes different amounts of time for each request, as long as a couple of seconds.

### 3.    Implement `flatten_object` function:

Given an object like this:

```javascript
var obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: {
    g: {
      h: 5
    }
  }
};
```

Output a flattened object like this:

```javascript
var result = {
  a: 1,
  b: 2,
  c_d: 3,
  c_e: 4,
  f_g_h: 5
};
```