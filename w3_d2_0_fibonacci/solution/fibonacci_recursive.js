var fib = function(n) {

  // base case
  if (n <= 2) {
    return 1;
  }

  // recursive case
  else {
    return fib(n - 1) + fib(n - 2);
  }
};