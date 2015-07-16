# Interview Prep - Iterators

Today you'll be implementing *even more* iterator functions on the whiteboard in groups of three. Since there are three problems, each group member should take a turn "driving" for one problem with the other two as support ("navigators").

**Note:** DO NOT use any built-in iterator functions from Underscore or another library. You will often be asked in interviews to implement well-known methods like this from scratch as problem-solving exercises.


## How to Get Started

* Use pseudo-code to plan the logic of your function before writing actual code on the board.

* Write down at least one new example of test input, and write down the expected output. **Hint:** For `filter` and `partition`, one of your test inputs will be a function.

* Only when you have pseudo-code and test input with expected output should you write code to implement the body of the function.

## Problems

1. `filter(arr, truthTest)`

	```js

	function isEven(num){
		return num % 2 === 0;
	}

	filter([1, 2, 3, 4, 5, 6], isEven);

	// => [2, 4, 6]
	```

	Write a function called `filter` that takes in an array and another function (a truth test). `filter` should iterate through the array, check whether each value passes the truth test function, and return a new array containing all the values that passed.




1. `partition(arr, truthTest)`


	```js
	function isOdd(num){
		return num % 2 !== 0;
	}

	partition([0, 1, 2, 3, 4, 5], isOdd);
	// => [[1, 3, 5], [0, 2, 4]]
	```

	Write a function called `partition` that takes in an array and another function (a truth test).  `partition` should split the array into two groups: one whose elements all pass the truth test and one whose elements all fail. It should return a new array with the two groups nested inside.



1. `pluck(arr, key)`

	```js
	grandparents = [
		{first: "June", last: "Crane", age: 74},
		{first: "Jim", last: "Crane", age:76},
		{first: "Linda", "Fuentes", age: 62},
		{first: "Panfilo", "Fuentes", age: 76}
		];

	pluck(grandparents, 'first');
	// =>["June", "Jim", "Linda", "Panfilo"]
	```

	Write a function called `pluck` that takes in an array of objects and a key. `pluck` should iterate through the array, pick out the value each object has associated with the given key, and return a new array containing those values.

	1. Optional Stretch: `where(arr, properties)`

	```js

  events = [
		{location: "Yerba Buena", day: "Wednesday", time: "0900"},
		{location: "GA", day: "Tuesday", time: "1830"},
		{location: "Blue Bottle", day: "Tuesday", time: "1100"},
		{location: "GA", day: "Thursday", time: "1830"},
		{location: "GA", day "Thursday", time: "0917"}
		];

	where(events, {time: "1830", location: "GA"});
	// => [
	//			{location: "GA", day: "Tuesday", time: "1830"},
	//			{location: "GA", day: "Thursday", time: "1830"}
	//	  ]
	```


	Write a function called `where` that takes an array of objects and another object. `where` looks through each object in the array, returning a new array containing the objects that match *every* key-value pair given in the second argument.

	Hint: Remember looping through objects with "for in" loops and "hasOwnProperty"? If not, you'll need to look it up!
