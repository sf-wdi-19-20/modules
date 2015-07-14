# Intro to Mongo

| Objectives |
| :--- |
| Install and use MongoDB with a node/express app |
| Describe and explain what an ORM is and why it rocks. |
| Perform Read & Write operations on a model |

| Concepts | Tools | Activities |
| :---: | :---: | :---: |
| Document-based Database, Schemaless Database, Models | MongoDB, Mongoose | Challenges |

### Motivation (Why?)

NoSQL databases are a popular and trending database technology and it gives us a full Javascript/JSON stack.

* Node - JavaScript
* Express - JavaScript
* jQuery - JavaScript
* AJAX - JSON (JavaScript)
* **Mongo - JSON (JavaScript)**
* AngularJS - JavaScript

### Analogy (What?)

Imagine you're going to make a cake.

SQL is like shopping for the ingredients for the recipe. At the store, you have to go to many different aisles to get each ingredient.

Wouldn’t it be nicer if there was a store was organized by recipe, so you could go to one place in the store and grab everything you need from that one spot? That would be nice. And that would be like a NoSQL database.

[mgoffin/Stack Overflow](http://stackoverflow.com/questions/14428069/sql-and-nosql-analogy-for-the-non-technical/14428221#14428221)

> NOTE: a "model" is like a JavaScript constructor for objects we will save to our database. Models are the 'data layer' of MVC frameworks. Want to access or store your data? Use a model.

### Key Snippets

##### Enter a Node Server Console (REPL Console - Read-Eval-Print-Loop Console)
```
$ node
```

##### Connect a Server to Your Database
```

//
// index.js or server.js
//

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
```

##### Make a Model
```
//
//  models/dinosaur.js
//

var Schema = mongoose.Schema;
var DinosaurSchema = new Schema({
    name: String,
    period: String,
    description: String,
    height_in_inches: Integer
});

mongoose.model('Dinosaur', DinosuarSchema);

```

##### Get Documents using a Model

```
require('./models/dinosaur.js')

var Dinosaur = require('mongoose').model('Dinosaur');

var dinosaurs = Dinosaur.find().exec(function(err, dinosaurs) {
  console.log(dinosaurs)
})
```

##### Save a new Model Instance to DB

```
var Dinosaur = require('mongoose').model('Dinosaur');

var dinosaur = new Dinosaur({
    name: req.body.name
  , period: req.body.period
  , height: req.body.height_in_in
});
console.log(dinosaur);
dinosaur.save(function (err, dinosaur) {
  console.log('dinosaur saved')
  if (err) { return res.json(err) };
  res.status(201).json(dinosaur)
});
```

#Challenges

### Docs & Resources

* [MongoDB Shell Quick Reference](http://docs.mongodb.org/manual/reference/mongo-shell/)
* [Mongoose Docs](http://mongoosejs.com/docs/)

### Installation

Install MongoDB, a popular noSQL database.

* First we'll need to run brew update to update our brew packages.

  ```bash
  $ brew update
  ```
* Next we'll need to run `brew install` for **MongoDB**

  ```bash
  $ brew install mongodb
  ```

* Then we'll need a directory for **MongoDB** to save data.

  ```bash
  $ sudo mkdir -p /data/db
  ```

  * Finally we'll want to make sure we have permission to read and write to this directory.

  ```bash
  $ sudo chown -R $USER /data/db
  ```

  * Now you can start your mongo service

  ```
  $ mongod
  ```

### Basic Mongo CLI Challenges

3. Open your mongo console with ```mongo```.
4. Type ```help``` - can you find out how to show all your database names?
5. Type ```use awesomeshop``` - to specify that you want to use a new database for an imaginary ecommerce website.
6. Check which db you're in with ```db.show```.
7. Look at your database names again. Is your new DB there?
8. Add a collection and item to your ```awesomeshop``` DB. ```db.products.insert({title:"iphone"})```
9. Now check your database names.
10. Read [this doc](http://docs.mongodb.org/manual/core/crud-introduction/) on MongoDB CRUD operations. (Ignore the "Related Features" section.)
11. [Insert another 2 documents into two collections](http://docs.mongodb.org/manual/tutorial/insert-documents/) with at least two attributes each. E.g.
```
  book: { title:"title", published_on_year:1994 } }
  users: { name:"George", email:"george@gmail.com" } }
```
12. [Query all your user documents.](http://docs.mongodb.org/manual/tutorial/query-documents/)
13. Query only book documents published after 1990.

### Basic Mongo/Express Challenges

1. Create a new node project with ```npm init```.
2. Add express and mongoose to the project with ```npm install express mongoose --save```.
2. Start your MongoDB database in a new terminal window with ```mongod```.
3. Connect your node/express server to mongoDB using mongoose. See key snippets above.
4. Create a model for ```Book``` and include it in ```app.js```. See key snippets above.
5. Let's create a get route to ```/books``` that returns a JSON array of all saved books. Use your existing code and the a key snippet above. Expected output: ```[]``` an empty array. Why is this empty?
6. Use your mongo console to insert 3 books into your database collection ```books```. Remember that your database name is in the address you connected to with this line of code: ```mongoose.connect("mongodb://localhost/test");```
7. Navigate your browser to ```/books``` - do you see your books?
8. Create a POST route in your express app that saves a new book. Use Postman to send in form data for a new book and save it.

### Evening Challenge

9. Add Mongoose to your API projects query and create routes (POST and GET).

Remember to submit [evening survey here](https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform)
