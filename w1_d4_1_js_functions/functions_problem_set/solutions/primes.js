// use the isPrime function from the previous problem, defined again here

var isPrime = function(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

var primes = function(max) {
  for (var i = 2; i <= max; i += 1) {
    if (isPrime(i) === true) {
      console.log(i);
    }
  }
};

primes(100);