// isPrime solution

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

console.log(isPrime(9)); // returns false
console.log(isPrime(7)); // returns true