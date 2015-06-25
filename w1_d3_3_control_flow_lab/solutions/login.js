

var userLogin = {userName: "octocat_rules", password: "abacadabra"}

var password;

for (var i=0; i < 3; i++){
	password = prompt("Enter password for user " + userLogin["userName"] + ".")
	if (password === userLogin["password"]){
		console.log("Passwords match!");
		break;
	} else {
		console.log("Passwords do not match!");
		if (i===2){
			alert("No more password attempts!");
		}
	}
}
