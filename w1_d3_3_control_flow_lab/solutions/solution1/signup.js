
var email = prompt("Enter your email address!");


// Let's an email address should at least follow this structure:
// a@b.c

/* First, let's try checking this with plain conditionals: */

var isValid = true;

// one easy thing to check is that there's an @
var atIndex = email.indexOf("@");
// the @ should be somewhere after the first character
// but far enough from the end to leave room for .com (etc)
if (atIndex < 1 || atIndex > email.length-3){
	isValid = false;
}

// there should also be a .
var dotIndex = email.indexOf(".");
if (dotIndex < 3 || dotIndex > email.length-2){
	isValid = false;
}

if (isValid){
	console.log("basic test: email okay");
} else {
	console.log("basic test: invalid email");
}

/* With regular expressions, we can be much more specific with even less code! */
pattern = /^[a-zA-z][a-zA-Z0-9_]*@[a-zA-Z0-9]*\.[a-z]{1,3}$/
matches = email.match(pattern)
if (matches != null){
	console.log("regex test: email okay");
} else {
	console.log("regex test: invalid email");
}

/***********************/

var password = prompt("Enter your password!");
var problems = [];

// a strong password should be at least 8 characters long!
if (password.length < 8){
	problems.push("Password must be at least 8 characters long!");
} 
// let's also say it should have at least one lowercase letter
if (password.search(/[a-z]/) === -1){
	problems.push("Password must contain at least one lowercase letter.");
}
// ... and one uppercase
if (password.search(/[A-Z]/) === -1){
	problems.push("Password must contain at least one uppercase letter.");
}
// ... and one number
if (password.search(/[0-9]/) === -1){
	problems.push("Password must contain at least one number.");
}




