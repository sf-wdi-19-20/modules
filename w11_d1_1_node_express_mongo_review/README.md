# MEAN Stack: Node/Express/Mongo Review

| Objectives |
| :--- |
| Start a project with Node.js, Express, and MongoDB. |
| Create restful routing for a resource with Express. |
| CRUD data for the resource from MongoDB. |

## Why MEAN stack?

MEAN allows developers to build full-stack applications using only JavaScript (and of course HTML and CSS).  Because they use Node.js, MEAN stack applications can also scale well to handle large numbers of client requests quickly and smoothly.


**<span style="font-size:200%">M</span>ongoDB**
* uses JS for its query language (instead of the more traditional SQL -- which is why it's a *NoSQL database*)
* stores data in *documents*, a JSON-like format

**<span style="font-size:200%">E</span>xpress**
* unopioninated, minimalist, fast **back end** web framework for use with Node.js
* a thin layer over Node.js that provides extra convenince methods written in JS

**<span style="font-size:200%">A</span>ngularJS**
* **front end** web framework written in JS
* opinionated, but powerful and extensible
* replaces jQuery and underscore from our first stack

**<span style="font-size:200%">N</span>ode.js**
* platform for creating web servers in JS
* uses non-blocking asynchronous input and output that works great for real-time applications
* extensible with node modules
* comes with package manager NPM, and a JS repl

## Questions and Answers App

To review Node, Express, and Mongo, we'll create a server-side only application. Applications without a front end are often called "headless". Many real world APIs are written as "headless" apps that allow access from sites on other domains. Today we'll use Node, Express, and Mongo to write our own API, but we won't allow access from anywhere, yet.

We'll test our routes with Postman. Remember to use the `x-www-form-urlencoded` option to send data.

As you go along, remember to start your server with `npm start`, or start your server and have it listen for changes with `nodemon`. Also, keep your database running with `mongod`.

## Project Structure Setup

We already have Node.js and MongoDB installed, so we'll start from that point. Use your Terminal to do basic project setup.

  ```bash
  $ mkdir QnA  # make a directory for your project!
  $ cd QnA
  $ git init  # turn this directory into a git repo
  $ touch README.md
  ```

Now, let's make it a Node.js project with server-side code.

  ```bash
  $ touch server.js  # create server-side js file
  $ ls    # check that your dir has README.md and server.js
  $ npm init   # initialize a node project in this directory. fill in the answers to each question
  $ ls   # note that your dir now has package.json in it
  $ cat package.json  #  take a look at the config data that `npm install` put into package.json
  ```

Let's install express and a few other node modules we know we'll need.

  ```bash
  $ npm install --save express   # our back end framework
  $ ls     # note that we now have a node_modules folder - thanks npm!
  $ cat package.json   # also note that package.json now lists express as a dependency for our app
  $ npm install --save body-parser   # we use this node module to parse data from requests
  ```

Finally, we know we want to use MongoDB with mongoose, so let's set up a directory and install the module for that.

  ```bash
  $ mkdir models
  $ touch models/question.js  # this store our questions model code
  $ npm install --save mongoose   # like ActiveRecord, provides convenience methods for accessing our DB
  ```

## Server File Setup  

```js
// server.js

// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),  // for data from the request body
    mongoose = require('mongoose');       // to interact with our db

// connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/REPLACE WITH YOUR APP DB NAME'
);

// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));



// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});
```



## Model

```js
// models/question.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  text: String
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
```

**Once the model file is set up, require it in `server.js`!**

```js
// server.js

var Question = require('./models/question');
```

## Routes

If we think about a Rails analogy, our `server.js`  file for Express apps has been where we write our routes and our controller code.  Let's look at three routes - a GET for all questions, a  POST to create a new question, and a PATCH to update parts of an existing question.

```js
// server.js

// send back all questions
app.get('/api/questions', function (req, res) {
  Question.find({}, function (err, questions) {
    res.json(questions);
  });
});
```

Remember, the `app.VERB` methods in our Express code say what the server should do when it receives a request, including what kind of response it should send back.  Here, we use `Question.find` (from mongoose and our `question.js` file) to find all the questions in the databse. The empty object we gave the query as the first argument means that the questions won't be filtered down at all before they're sent back. In the callback from the database query we send all the questions back to the client as json with `res.json`.  Note that we didn't put in any way to handle a database error if one occurs.



```js

// server.js

// create new question
app.post('/api/questions', function (req, res) {
  // create new question with data from the body of the request (`req.body`)
  // body should contain the question text itself
  var newQuestion = new Question({
    text: req.body.text
  });

  // save new question
  newQuestion.save(function (err, savedQuestion) {
    res.json(savedQuestion);
  });
});
```

Here we use mongoose for database interactions, again. The `new` method creates a new document, and `save` actually adds it to our database. We also incorporate data from the request, using `req.body`. We have easy access to data from the request body because of `body-parser`.

```js
// server.js

// update question, but only the part(s) passed in in the request body
// not currently that exciting when question has only one attribute
app.put('/api/questions/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find question in db by id
  Question.findOne({_id: targetId}, function (err, foundQuestion) {
    // update the question's text, if the new text passed in was truthy
    // otherwise keep the same text
    foundQuestion.text = req.body.text || foundQuestion.text;

    // save updated question in db
    foundQuestion.save(function (err, savedQuestion) {
      res.json(savedQuestion);
    });
  });
});
```

The final additional feature to show here is the addition of an `id` that comes to our server as a url parameter and corresponds to the database id of the question to edit. We take it out of the request with `req.params.id`, and we use `find` _with parameters_, `{_id: targetId}` to find the desired question in the database. As with creating a new post, we have to `save` to actually put changes into the database.

## Challenges

1. Test your current routes using Postman.
2. Create a few questions in your database with Postman.
1. In `server.js`, add the correct restful route method declarations for the actions listed below. For this step, just get the routes set up and use comments to plan what should happen in each route.
  * Get one specific question.
  * Delete one specific question.
  * Update a question by completely overwriting its data.
1. Fill in the route to send back a specific question from the database, and test your route with Postman.
1. Fill in the route to delete a question, and test it with Postman.
1. Fill in the route to update a question by owerwriting it.  Test it with Postman.  


## Resources

* <a href="http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js" target="_blank">Why Use Node.js?</a>
