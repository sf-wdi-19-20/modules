#Control Flow Lab 

###Workflow & Submission   

1. Create a repo for this lab.
1. Start each exercise using snippets in the Sources tab of the Chrome Developer Tools ([snippet docs](https://developer.chrome.com/devtools/docs/authoring-development-workflow#snippets)).
1. Test each snippet individually using at least 2 different inputs.
1. Copy your snippets into individual files in your repo. Try making a commit for each one you complete.
1. Push your work to a repo on your GitHub account.
1. Submit the link to your github repo in the [homework submission form](https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform).

###Exercise 1: Sing!

Hint: Be mindful of infinite loops. They will crash your browser, and you'll lose your snippets! When you're working with a loop that might not end, keep a copy of your code in Sublime Text, too.

2. Write code that console logs the "Bottles of beer on the wall" song:

		5 bottles of beer on the wall,
		5 bottles of beer!
		Take one down and pass it around,
		4 bottles of beer on the wall!


  * How would you fix "1 bottles of beer"?
  * How would you change "0" to "No more"?
  * Use a JavaScript `prompt` to ask the user how many verses they want to hear.

###Exercise 2: Login

4. Create a `userLogin` object with one key for a user's name and one key for the user's password. Just make up a user name and password.  Write a code snippet that prompts the user for their password with a message customized to the user. For example, if the user name you created is `octocat_rules`, the message should be `"Enter password for user octocat_rules."`

5. Extend your previous snippet to check whether the password the user gives matches the password in the `userLogin` object. The snippet should communicate whether the passwords matched to the user with console logs or JavaScript `alert`.

Bonus: Modify your user login to give the user three chances to enter the correct password. 

###Exercise 3: Security Questions

1. Create an array called `securityQuestions`. Each element of `securityQuestions` will be an object with two keys: `question` and `expectedAnswer`. 
1. Populate (fill) `securityQuestions` with at least three such objects. Feel free to just make them up. For example, one security question object might be:     
	```
	{ question: "What was your first pet's name?", expectedAnswer: "FlufferNutter" }
	```


1. Write code that goes through each of the security questions doing the following:   
  * prompt the user with the question    
  * check whether the user's input matches the expected answer    
  		* if the answer does match, ask the next question
  		* if the answer doesn't match, stop asking questions and pop up an alert message.


###Bonus: Sign Up   
Hint: You might find the [`match` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) or the [`search` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) for JavaScript Strings useful. Both use [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions). 
 
2. Write a code snippet to prompt a user for their email address and check whether an the address looks real (this is called **input validation**). Hint: what features do valid email addresses share?    

1. Write a code snippet to prompt the user for a password and check whether the password is "strong." You decide what requirements to set for a strong password. If the password is NOT strong, your code should give the user an explanation of what they need to change either through console logs or through alerts.

