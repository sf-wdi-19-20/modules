var securityQuestions = [
	{ 
		question: "What was your first pet's name?", 
		expectedAnswer: "FlufferNutter" 
	},
	{ 
		question: "What was the model year of your first car?", 
		expectedAnswer: "1985" 
	},
	{ 
		question: "What city were you born in?", 
		expectedAnswer: "NYC"
	}
]


var thisAnswer = "";
for (var i=0; i < securityQuestions.length; i++){
	thisAnswer = prompt(securityQuestions[i]["question"]);
	if (thisAnswer !== securityQuestions[i].expectedAnswer){
		alert("Incorrect security question response!");
		break;
	}
}