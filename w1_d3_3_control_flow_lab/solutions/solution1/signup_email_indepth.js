
// Here are some email addresses we want to allow:
// 	student@generalassemb.ly
// 	jane.doe@email.com
// 	Bob2390@aol.com

// Here are some email addressed we don't want to allow:
// 	@@@@@
// 	email
// 	fake@email.don't_spam_me

// Based on these, let's say the basic structure of an email is:
// 	- some letters or digits, and possibly a few dots (.)s
// 	- an @ (only one of these in the email address)
// 	- some more letters or digits,
// 	- a final dot,
// 	- and 2-3 more letters that might be ly, com, co, and so on.

// get the email input from the user and save it in a variable
var email = prompt("Enter your email address!");

// First, we'll try checking validity with plain conditionals.

// We'll start by assuming the email is valid, and check as we go
var isValid = true;

// The beginning of the email should include letters, digits, and maybe .
// Let's set up a few arrays we can use to check...
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
			   "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
			   "u", "v", "w", "x", "y", "z"];
var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];



// ... and loop through the beginning of the array until we see that @
var i=0;
while (email[i] !== "@"  && i < email.length){
	if ((digits.indexOf(email[i]) === -1) &&  
		// ^ this character of email isn't a digit
		(letters.indexOf(email[i].toLowerCase()) === -1) && 
		// ^ and isn't a letter (note we converted to lower case to check)
		(email[i] !== ".")){ 
		// ^ and isn't a . either!

		// so the email isn't valid
		console.log("invalid character before .");
		isValid = false;
	}
	i++;
}

if (i === 0){
	// if we found an @ with i===0, it means the @ is the first char
	// which is not a valid email
	console.log("email starts with @");
	isValid = false;
} else if (i === email.length){
	// similarly, if i got to the end of the email without us finding an @,
	// it's not a valid email
	console.log("no @ in email");
	isValid = false;
}

// assuming our email is still holding up, i is now the index of @
// we'll save that info for later by copying i's value into a variable
var atIndex = i;

// let's increase i by 1 to get past the @ and continue looping
i++;


while (email[i] !== "." && i < email.length){
	if ((digits.indexOf(email[i]) === -1) &&  
		// ^ this character of email isn't a digit
		(letters.indexOf(email[i].toLowerCase()) === -1)){
		// ^ and isn't a letter
		// so since we're after the @, the email isn't valid.
		console.log("invalid chars between @ and .");
		isValid = false;
	}
	i++;
}

// again, we might have broken out of the loop for two reasons
if (i === atIndex + 1){
	// in this case, we found a . right after the @
	console.log("no cars between @ and .");
	isValid = false;
} else if (i === email.length){
	// i got to the end of the email without us finding a dot
	console.log("no . found after @");
	isValid = false;
}

// now we'll increase i to move past the dot
var dotIndex = i;
i++;

// we can go ahead and check that there are only 2 or 3 characters after the .
if ((email.length-dotIndex < 3) || (email.length-dotIndex > 4)){
	console.log("wrong number of characters after .");
	isValid = false;
}
// now we only want to allow up to 3 more letters after the dot
while (i < email.length && i-dotIndex < 3){
	if (letters.indexOf(email[i].toLowerCase()) === -1){
		// if these last characters aren't letters, it's not valid
		console.log("found non-letter characters after .");
		isValid = false;
	}
	i++;
}

// Finally, we'll communicate the results!
if (isValid) {
	console.log("manual test: email okay");
} else {
	console.log("manual test: invalid email");
}


// Using regular expressions, we can accomplish that process with far less code!
pattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]{2,3}$/
matches = email.match(pattern)
if (matches != null){
	console.log("regex test: email okay");
} else {
	console.log("regex test: invalid email");
}

