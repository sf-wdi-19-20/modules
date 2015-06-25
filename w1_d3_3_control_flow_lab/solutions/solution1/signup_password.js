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
if (password.length !== 0){
	// log each of the problems
	for (var i=0; i<problems.length; i++){
		console.log(problems[i]);
	}
}



