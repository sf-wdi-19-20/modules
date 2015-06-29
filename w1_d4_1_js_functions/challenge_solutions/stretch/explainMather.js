// use our `multiply` function as a helper (defined here again)
var multiply = function(num1, num2) {
  return num1 * num2;
};

// `mather` is a function we will pass in as an argument
var explainMather = function(num1, num2, mather) {
  var output = mather(num1, num2);
  console.log(num1 + " and " + num2 + " are the inputs, and " + output + " is the output.");
};

explainMather(5, 8, multiply);