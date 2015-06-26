// Here are some email addresses we want to allow:
// 	student@generalassemb.ly
// 	jane.doe@email.com
// 	Bob2390@aol.com

// Here are some email addressed we don't want to allow:
// 	@@@@@
// 	email
// 	fake@email.don't_spam_me

// Based on these, let's say the basic pattern for an email is:
// 	- some letters or digits, and possibly a few dots (.)s
// 	- an @ (only one of these in the email address)
// 	- some more letters or digits,
// 	- a final dot,
// 	- and 2-3 more letters that might be ly, com, co, and so on.


var email = prompt("Enter your email address!");

/* With regular expressions, we can accopmlish this with very little code! */
pattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]{2,3}$/
matches = email.match(pattern)
if (matches != null){
	console.log("regex test: email okay");
} else {
	console.log("regex test: invalid email");
}

/***********************/

// get the password from the user and save it as a variable
var password = prompt("Enter your password!");

// store all the problems with the password in an array
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

// Check if there were any problems with the password
if (problems.length !== 0){
	// log each of the problems
	for (var i=0; i<problems.length; i++){
		console.log(problems[i]);
	}
} else {
	console.log("nice password!");
}



