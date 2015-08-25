// Problem 3 - Calculate Change

function calcChange(cost, money) {
  cost *= 100;
  money *= 100;

  var changeNames = ['$20s', '$10s', '$5s', '$1s', 'quarters', 'dimes', 'nickels', 'pennies'];
  var changeTypes = [2000, 1000, 500, 100, 25, 10, 5, 1];
  var totalChange = money - cost;
  var changeCounts = {};

  // loop through changeTypes
  for(var i = 0; i < changeTypes.length; i++) {
    // calculate count of changeType needed
    var count = Math.floor(totalChange / changeTypes[i]);
    // save count in changeCounts object with changeName as key
    changeCounts[changeNames[i]] = count;
    // subtract amount of current changeType from totalChange
    totalChange -= count * changeTypes[i];
  }
  return changeCounts;
}