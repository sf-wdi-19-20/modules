#Nested Resources

| Objectives |
| :--- |
| Explain the difference between referenced and embedded data |
| Create an express API to CRUD referenced data |


<!--    | Create an express API to CRUD embedded data |-->

##@TODO

* docs & resources
* check feasibility of extra views: can we use the same `app.get('/study-sets')` to both send back all study sets and send back the view file? (same for single study sets data versus views)
* create challenge solutions based on updated catchphrasely app (prereq: get latest catchphrasely app)
*  check viability of multi-param urls for nested resources (http://stackoverflow.com/questions/25260818/rest-with-express-js-nested-router)



##Motivation (Why?)

In the real-world, data we want to model isn't all separate and flat; there are important relationships among the object types we'll want to work with.

Bloggers have Posts
Posts have Comments

Classes have Students

To Do Lists are made up of Tasks

We need to be create APIs that allow apps (including our own apps) to easily CRUD *nested* data that represents these situations.


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
* Single "source of truth": since there is only one copy, we can use a simpler update pattern to make changes to the referenced information. There's less risk of getting out of synch.

Weaknesses
* Speed: looking up the referenced information separately takes extra time.
* Extra identifier requirement: we have to make sure each piece of information that we might want to reference has its own unique lookup code - usually an id or a direct url to look up the referenced data.

Referencing is most appropriate when the same data is used in many larger records, when large data objects don't need to be sent along with every request, or when shared data will change frequently.

Example:
* Videos might be referenced by Users in a "favorite videos" list.

##Example: Study Sets

We'd like to allow users to make named sets of phrases that they can use to study.

 <!-- On the page, maybe we'll display it like this:

![Acronyms (list of phrases)](acronyms.png)

There could be a little confusion over whether the X button will delete the phrase or remove it from the study set, but we can work on that later (see stretch challenges). -->

Recall that the phrases data on our server looks something like this:

```js

var phrases =[
  {id: 0, word: "REPL", definition: "Read, Eval, Print, Loop"},
  {id: 1, word: "Reference Type", definition: "Any data type that is not a primitive type"},
  {id: 2, word: "Constructor", definition: "Function used as a blueprint to create a new object with specified properties and methods"},
  {id: 3, word: "Callback", definition: "Function passed as an argument to another function"},
  {id: 4, word: "Query string", definition: "A list of parameters (represented as key-value pairs) appended to the end of a URL string"},
  {id: 5, word: "REST", defintion: "Representational State Transfer"},
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

##Basic Challenges: Study Sets Routes

**Goal: make a route to show all study sets from the server**
1. Make a `studySets` array on in your server-side JavaScript file, and add seed data - a few study sets.
1. Make a new route on your server to handle requests to GET all of the study sets. What should the RESTful route for this resource be?
	Hint: remember the route we used for all phrases: `/phrases`.
1. Start your server and look at your site in the browser. Navigate to the route you set up, and make sure you see the data you expected.  
   Hint: when you navigate to a url in the browser, the browser usually makes a GET request to the route from the url.

**Goal: make a route to show a specific study set**
1. Make a new route on your server to handle requests to GET a single study set. What should the RESTful route for this resource be?
	Hint: remember the route we used for a single phrase: `/phrases/:id`
1. Start your server and look at your site in the browser. Navigate to the route you set up, and make sure you see the data you expected.  
   Hint: when you navigate to a url in the browser, the  browser usually makes a GET request to the route from the url.

**Goal: make a route to create a new study set**
1. Make a route on your server to create a study set. What should the RESTful route be?
	Hint: remember the action and route we used for creating a phrase: `app.post('/phrases')`

**Goal: make a route to delete a specific study set**
1. Make a route to delete a study set. What should the RESTful route be?
	Hint: remember the action and route we used for deleting a phrase: `app.delete('/phrases/:id')`

**Goal: make a route to update a specific study set**
1. Make a route to edit which phrases are included in a study set. What should the RESTful route be?
	Hint: remember the action and route we used for editing a phrase: `app.patch('/phrases/:id')`


##Stretch Challenges: Study Sets Views/UI

**Goal: make a view on the client to display all study sets**

We currently only have one view: `index.html`. Let's make a new one for study sheets!

1. Create a new `all-sets.html` file in your `views` directory.
1. Set up your new html file with structure to show a list of all of the study set names.
  Hint: feel free to copy over and modify what you had in `index.html` for this new view.
1. Change the route for all study sets to send back the new view file instead of just sending raw data.
  Hint: look at our route that displayed `index.html` for an example.

**Goal: make a view on the client to display a single study set**
 Let's make a new view for single study sheets!

1. Create a new `single-set.html` file in your `views` directory.
1. Set up your new html file with structure to show the study set name and a list of all of the phrases in that study set.
  Hint: again, feel free to copy over and modify what you had in `index.html` for this new view.
1. Change the route for a single study sets to send back the new view file instead of just sending raw data.
  Hint: look at our route that displayed `index.html` for an example.

**Goal: make a form on the all study sets view to add a new study set**
1. In the all study sets view file, make a form that allows the user to create a new study set. The form should require a study sheet name.


<!-- ##Stretch Challenges: Comments on Phrases

Let's add commenting to the phrases in our dictionary so that people can leave details or tips.

**Goal: update phrase data model to include an array of embedded comments**
1. Change the phrases data in your server file to include a list of embedded comments. Add some seed comments to a few of your phrases.
1. Change your view templates to display the comments users have made on each phrase.
1. Change your client-side javascript code to send the new templates all of the information they need to display comments.

 -->
##Docs & Resources
