#Nested Resources

| Objectives |
| :--- |
| Explain the difference between referenced and embedded data |
| Create an express API to CRUD referenced data |
| Create an express API to CRUD embedded data |


##Motivation (Why?)

In the real-world, data we want to model isn't all separate and flat; there are important relationships among the object types we'll want to work with.

Bloggers have Posts
Articles have Comments
Classes have Students
To Do Lists are made up of Tasks

We need to create APIs that allow apps (including our own apps) to easily CRUD *nested* data that represents these situations.


##Nested Data Modeling

In general, there are 2 ways to include information inside a data record -- you can *reference* the other information, or *embed* it.

###Embeding

**Embedded** information is directly copied into the larger data record.

Strengths
* Speed: to get at embedded information, you just look at the data record you already have.

Weaknesses
* Space: if the information is shared by multiple data records, they each need their own copy. This isn't usually a problem for small amounts of unneeded information, but it can get unweildy if we're sending along  large items like video files that the client may not need.
* Multiple "sources of truth": when emebedded information has to be updated, you must be careful to update *every* copy.

Embedding is most appropriate when the embedded data doesn't change often, or when each piece of embedded information is only used once.

Example:
* Comments might be embedded in Articles in a "comments" list.


###Referencing

When **referencing** outside information, we embed a short identifier in the larger data record that can be used to look up the outside information separately.

Strengths
* Space: we only need to keep one copy of the referenced information.
* Single "source of truth": since there is only one copy, we can use a simpler update pattern to make changes to the referenced information. There's less risk of getting out of sync.

Weaknesses
* Speed: looking up the referenced information separately takes extra time.
* Extra identifier requirement: we have to make sure each piece of information that we might want to reference has its own unique lookup code - usually an id or a direct url to look up the referenced data.

Referencing is most appropriate when the same data is used in many larger records, when large data objects don't need to be sent along with every request, or when shared data will change frequently.

Example:
* Videos might be referenced by Users in a "favorite videos" list.

##Example: Study Sets

We'd like to allow users to make named sets of phrases that they can use to study.

Recall that the phrases data on our server looks something like this:

```js
var phrases =[
  {id: 1, word: "REPL", definition: "Read, Eval, Print, Loop"},
  {id: 2, word: "Reference Type", definition: "Any data type that is not a primitive type"},
  {id: 3, word: "Constructor", definition: "Function used as a blueprint to create a new object with specified properties and methods"},
  {id: 4, word: "Callback", definition: "Function passed as an argument to another function"},
  {id: 5, word: "Query string", definition: "A list of parameters (represented as key-value pairs) appended to the end of a URL string"},
  {id: 6, word: "REST", defintion: "Representational State Transfer"},
  {id: 9, word: "JSON", definition: "JavaScript Object Notation"}
];
```


Since many study sets might include the same phrases, let's reference the phrase data.

Then a single study set might look like this:
```js
{
	id: 0,
	name: "Acronyms",
	phrases: [0, 5, 9]
}
```

##Demo: Study Set API start

**Goal: make a route to get all study sets from the server**   

1. Make a `studySets` array on in your server-side JavaScript file, and add seed data - a few study sets.   
	Hint: make sure your study sets are using phrase ids that already exist.

1. Make a new route on your server to handle requests to GET all of the study sets. What should the RESTful route for this resource be?    
	Hint: remember the route we used for all phrases: `/api/phrases`.

1. Start your server and look at your site in the browser. Navigate to the route you set up, and make sure you see the data you expected.    
   Hint: when you navigate to a url in the browser, the browser usually makes a GET request to the route from the url.

1. Now, to be double-sure, use Postman to check that the route is working (or use `curl` from your terminal -- for all phrases, the curl command would be: `curl -X GET http://localhost:3000/phrases`).

**Goal: make a route to add a specific phrase to a study set**     

1. Make a new route on your server to add a specific phrase to a specific study set. What should the RESTful route for this resource be?  What should the HTTP verb be?   

1. Use Postman or `curl` to check that the route is working.

You're ready to work on the challenges! Check out the starter_code folder to see how the demo routes are set up.

##Basic Challenges: Study Sets/Phrases API Routes

**Goal: make a route to show a specific study set**    

1. Make a new route on your server to handle requests to GET a single study set. What should the RESTful route for this resource be?      
	Hint: remember the route we used to edit or delete a single phrase: `/api/phrases/:id`

1. Start your server and look at your site in the browser. Navigate to the route you set up, and make sure you see the data you expected.    
   Hint: when you navigate to a url in the browser, the  browser usually makes a GET request to the route from the url.

1. Use Postman or `curl` to check that the route is working.   
  Hint:  you'll have to modify the url you used to test the last goal.   
  Hint: remember to use Postman's x-www-form-urlencoded option for form data.  

**Goal: make a route to create a new study set**

1. Make a route on your server to create a study set. What should the RESTful route be?   
	Hint: remember the action and route we used for creating a phrase: `app.post('/api/phrases')`.

1. Use Postman with form data, or `curl` with a `--data` option to check that the route is working.   
	Hint: the `curl` command to create a new phrase would be: `curl -X POST --data "word=1905&definition=%20OK%20"  http://localhost:3000/api/phrases`.   
	Hint: remember to use Postman's x-www-form-urlencoded option for form data.   

**Goal: make a route to delete a specific study set**

1. Make a route to delete a study set. What should the RESTful route be?    
	Hint: remember the action and route we used for deleting a phrase: `app.delete('/api/phrases/:id')`.   

1. Use Postman or use `curl` with a `--data` option to check that the route is working.   
	Hint: the `curl` command to delete *phrase* 1 would be: `curl -X DELETE --data "word=1905&definition=%20OK%20"  http://localhost:3000/api/phrases/1`.

**Goal: make a route to entirely replace a specific study set with new data**

1. Make a route to update an entire study set. What should the HTTP verb be?  What should the RESTful route be?   
	Hint: remember the action and route we used for editing a phrase: `app.put('/api/phrases/:id')`.

1. Use Postman or `curl` with a `--data` option to check that the route is working.   
	Hint: if using `curl`,model your `curl` command after the one from the last goal.

**Goal: make a route to delete one phrase from a study set**

1. Make a route to delete a study set. What should the RESTful route be?   
	Hint: remember the action and route we used for deleting a phrase: `app.delete('/api/phrases/:id')`.   
	Hint: remember the action and route we used to add a phrase to a specific study set!   

1. Use Postman or use `curl` with a `--data` option to check that the route is working.


##Stretch Challenges: Study Sets Views/UI

**Goal: make a view on the client to display all study sets**

We currently only have one view: `index.html`. Let's make a new one for study sheets!

1. Sketch/wireframe your view: it should have at least a list of study set titles that link to the full study sets.

1. Create a new `all-sets.html` file in your `views` directory.

1. Set up your new html file with structure to show a list of all of the study set names.   
	Hint: feel free to copy over and modify what you had in `index.html` for this new view.

1. Add a new client (non-API) route for all study sets to send back the new view file.   
	Hint: look at our route that displayed `index.html` for an example.

**Goal: use templating and AJAX requests on the client side to fill out the all study sets view** 

1. Create a client-side JavaScript file for your all sets view, and connect it to your html file.   
	Hint: you can copy over and modify your `phrases.js` code if you'd like.

1. Use jQuery AJAX requests to get all of the set titles, and use jQuery to append them to the page.   

1. Add an underscore template for a study set title/link in the html (if you don't  have one already).

1. Structure the client-side JS code by creating a controller.

**Goal: make a view on the client to display a single study set**

Let's make a new view for single study sheets!

1. Sketch/wireframe your view: it should have at least the study set's title, the list of phrases in that set, and any notes that have been added to the set.   

1. Create a new `single-set.html` file in your `views` directory.

1. Set up your new html file with structure to show the study set name and a list of all of the phrases in that study set.    
  Hint: feel free to copy over and modify what you had in `index.html` for this new view.

1. Add a new client (non-API) route for single study sets to send back the new view file.   
  Hint: look at our route that displayed `index.html` for an example.

**Goal: use templating and AJAX requests on the client side to fill out the single study sets view**  

1. Create a client-side JavaScript file for your single sets view, and connect it to your html file.   
	Hint: again, you can copy over and modify your `phrases.js` code if you'd like.

1. Use a jQuery AJAX request to get the set information from the server.

1. Use more jQuery AJAX requests to get the information for each phrase whose id is listed in the study set's phraseIds list.

1. Display the information from the server on the page.

1. Add an underscore template for the study set title, items, and notes in the html (if you don't  have one already).

1. Structure the client-side JS code by creating a controller.

**Super Stretch Goal: make a form on the all study sets view to add a new study set**

1. In the all study sets view file, make a form that allows the user to create a new study set. The form should require a study sheet name.

1. Use jQuery and jQuery AJAX calls to send the form data to the server and have it create the new study set.

**Super Stretch Goal: add ui elements to edit a set on the single set view**

1. In the single set view, make a form to edit the name of the set.

1. Add a button to each phrase to remove the phrase from the set.  Use jQuery on your client side to make a request to the server to remove the phrase from the set when the button is clicked.

1. Add a form to add an existing phrase to the study set.    
    Hint: the server needs the phrase id, but you should find a more user-friendly way for the users to specify which phrase they want to add.


##Docs & Resources

[express app.route docs](http://expressjs.com/api.html#app.route)


[curl tutorial](http://curl.haxx.se/docs/httpscripting.html)
