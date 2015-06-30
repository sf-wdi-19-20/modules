#Control Flow Challenge Solutions
## Basic Challenges

1. Which of the following are truthy values? (hint: try `if("abc"){"console.log('I'm truthy!')"}` in the JS console).       
	truthy: 1, "abc", [], {}, -1, (1+1), 3.14159, Object       
	falsey: "", 0    

2. Log to the console "This is awesome!" 25 times.   
	```
	for (var i=0; i<25; i++){
		console.log("This is awesome!");
	}
	```

3. Create a snippet inside of developer tools. Create snippets to do the rest of the challenges.

4. In your snippet, create a new variable that is an array of 4 phrases: `Howdy there`, `OMG`, `javascript`, and `Pair Programming`.

	`var phrases = ["Howdy there", "OMG", "javascript", "Pair Programming"];`

5. Loop over the array and console log each phrase.

	```
	for (var i=0; i<phrases.length; i++){
		console.log(phrases[i]);
	}
	```

6. Loop over the array and log each phrase to the console if its total length is 4 or longer. Otherwise, console log that the phrase is too short.

	```
	for (var i=0; i<phrases.length; i++){
		if (phrases[i].length >= 4){
			console.log(phrases[i]);
		} else {
			console.log("Phrase " + phrases[i] + " is too short!");
		}
	}
	```


7. Come up with three different ways to break a `for` loop that result in three different errors. What three different errors did you get?

	```
	for (var i=0; i<10; i--){
		console.log("This loop never ends!");
	}
	```

	```
	for (var i=0; i>10; i++){
		console.log("This loop's continue starts out false.")
		console.log("So code inside this loop is never executed!");
	}
	```

	```
	for (var i=0; i>10; i++){
		// Only functions can return.
		// Since this for loop isn't inside a function,
		// we get this error message:
		// "Uncaught SyntaxError: Illegal return statement"
		return i;
	}
	```

1. Jimmy loves roller coasters, but there are a bunch of rules (ugh!) for riding:

	For starters, it costs 5 tokens. Here's how we might code that:

	```
	var tokens = 3; // Jimmy's tokens

	// Can he ride?
	if ( tokens >= 5 ) {
	    console.log("Step right up!");
	} else {
	    console.log("Sorry, you can't ride.");
	}
	```

	Edit the code above to check the following additional Requirements:

    a. Must be at least 4ft tall

	```
	var tokens = 3; // Jimmy's tokens
	var height; // Jimmy's height in feet

	// Can he ride?
	if ( tokens >= 5 && height >= 4) {
	    console.log("Step right up!");
	} else {
	    console.log("Sorry, you can't ride.");
	}
	```

    b. Must be at least 12 years old

	```
	var tokens = 3; // Jimmy's tokens
	var height; // Jimmy's height in feet
	var age; // Jimmy's age in years

	// Can he ride?
	if ( tokens >= 5 && height >= 4 && age >=12) {
	    console.log("Step right up!");
	} else {
	    console.log("Sorry, you can't ride.");
	}
	```



    c. Replace the prevoius rule: now riders under 12 must be accompanied by an adult

	```
	var tokens = 3; // Jimmy's tokens
	var height; 	// Jimmy's height in feet
	var age; 		// Jimmy's age in years
	var hasAdult; 	// bool - does Jimmy have an adult?

	// Can he ride?
	if ( tokens >= 5 && height >= 4 ) {
		if (age >= 12 || hasAdult){
		    console.log("Step right up!");
		} else {
			console.log("Sorry, you can't ride.");
		}
	} else {
	    console.log("Sorry, you can't ride.");
	}
	```




    d. (If the boss isn't looking, you can sneak in!)

    ```
	var tokens = 3; // Jimmy's tokens
	var height; 	// Jimmy's height in feet
	var age; 		// Jimmy's age in years
	var hasAdult; 	// bool - does Jimmy have an adult?
	var isLooking; 	// bool - is the boss looking?

	// Can he ride?
	if (!isLooking){
		console.log("Step right up!");
	} else {
		if ( tokens >= 5 && height >= 4 ) {
			if (age >= 12 || hasAdult){
			    console.log("Step right up!");
			} else {
				console.log("Sorry, you can't ride.");
			}
		} else {
		    console.log("Sorry, you can't ride.");
		}
	}
	```



    e. Riders with a park pass get in free.

    ```
	var tokens = 3; // Jimmy's tokens
	var height; 	// Jimmy's height in feet
	var age; 		// Jimmy's age in years
	var hasAdult; 	// bool - does Jimmy have an adult?
	var isLooking; 	// bool - is the boss looking?
	var hasPass; 	// bool - does Jimmy have a park pass?

	// Can he ride?
	if (!isLooking){
		console.log("Step right up!");
	} else {
		if ( (tokens >= 5 || hasPass) && height >= 4 ) {
			if (age >= 12 || hasAdult){
			    console.log("Step right up!");
			} else {
				console.log("Sorry, you can't ride.");
			}
		} else {
		    console.log("Sorry, you can't ride.");
		}
	}
	```



### Stretch Challenges

5. In a snippet, create a new variable that is an array containing 5 objects, each of which has the keys `name` and `age`. You can make up the names and ages for your objects.

	```
	var pets = [
		{ name: "Abra", age: 2 },
		{ name: "Benji", age: 4 },
		{ name: "Chairman Meow", age: 14 },
		{ name: "Dandelion", age: 1 },
		{ name: "Evie", age: 6 }
	]
	```

6. Log to the console the name value of each object.
	
	```
	for (var i=0; i<pets.length; i++){
		console.log(pets[i]["name"]);
		// or
		// console.log(pets[i].name);
	}
	```


7. Create and log an array with the age of each object in months (assume the original ages were in years).

	```
	var petAges = [];
	for (var i=0; i<pets.length; i++){
		petAges.push(pets[i]["age"]*12);
		// or
		// petAges.push(pets[i].age*12);
	}
	console.log(petAges);
	```


9. Find and log the sum of the ages.

	```
	var sum = 0;
	for (var i=0; i<petAges.length; i++){
		sum = sum + petAges[i];  // or sum += petAges[i]
	}
	console.log(sum);
	```

8. Log to the console only the name of the oldest person.

	```
	// pets are people too >.<
	var oldest = pets[0]; // start by assuming first pet is oldest
	for (var i=0; i<pets.length; i++){
		if (pets[i].age > oldest.age){  // or pets[i]["age"], oldest["age"]
			oldest = pets[i]; 	// update when assumption is proven false
		}
	}
	console.log(oldest.name);  // or oldest["name"]
	```

9. Log to the console the index of each element in the array.

	```
	for (var i=0; i<pets.length; i++){
		console.log(i);
	}
	```


10. Create and log an array containing only the objects with an age over 20.
	
	```
	var oldPets = [];
	for (var i=0; i<pets.length; i++){
		if (pets[i]["age"] > 20){  // or pets[i].age
			oldPets.push(pets[i]);
		}
	}
	console.log(oldPets)
	```

11. Create and log an array of all the names, in which any names that begin with a consonant are upper case.

	```
	var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
	// or var consonants = "bcdfghjklmnpqrstvwxz".split("");
	var names = [];
	for (var i=0; i<pets.length; i++){
		if (consonants.indexOf(pets[i]["name"]) === -1){  // or pets[i].name
			names.push(pets[i]["name"]);
		} else {
			names.push(pets[i]["name"].toUpperCase());
		}
	}
	console.log(names);
	```

12. Create and log an array that is the original array in a random order.

	Note: A good algorithm is Fisher-Yates, which is *not* the algorithm below.

	```
	var shuffledPets = [];

	// start off by copying everything into the new array
	// so we don't mess up the order of pets
	for (var i=0; i<pets.length; i++){
		shuffledPets.push({ name: pets[i]["name"], age: pets[i]["age"]});
	}

	var temp;
	for (var i=0; i<shuffledPets.length; i++){
		// swap shuffledPets[i] with pet at a random other index from the rest of the array
		temp = shuffledPets[i];
		randIndex = Math.floor(Math.random()*(shuffledPets.length));
		shuffledPets[i] = shuffledPets[randIndex];
		shuffledPets[randIndex] = temp;
	}

	console.log(shuffledPets);
	```

