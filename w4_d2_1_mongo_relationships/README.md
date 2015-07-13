#Relationships in Mongo


##Learning Objectives

| Objectives |
| :---- |
| Describe one-to-one, one-to-many, and many-to-many data relationships |
| Write mongoose schemas for referenced and embedded data |
| Build the appropriate queries for nested data relationships |

##Types of Data Relationships

###One-to-One

Each person "has one" social security number, and each social security number "has one" person.

###One-to-Many

Each tree "has many" leaves, and each leaf "has one" tree.

###Many-to-Many

Each student "has many" classes, and each class "has many" students.

###Entity Relationship Diagrams

![Entity Relationship Diagram example](https://www.edrawsoft.com/images/examples/entity-relationship-diagram.png)

[Full guidelines for ERDs](http://docs.oracle.com/cd/A87860_01/doc/java.817/a81358/05_dev1.htm)

##Data Relationships with Mongoose

###Embedded Data

* **Embedded Data** is directly nested *inside* of other data

###Referenced Data

* **Referenced Data** contains an *id* that can be used to lookup the information

There is a tradeoff between *efficiency* and *consistency* depending on which one you choose.

###Scenario:

How would you design the following?

* A `User` that has many `Tweets`?
* A `Food` that has many `Ingredients`?


###Implementing each

**Referencing Data**

```javascript
var foodSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  ingredients: [{
    type: Schema.Types.ObjectId,	//REFERENCING :D
    ref: 'Ingredient'
  }]
});

var ingredientSchema = new Schema({
  title: {
    type: String,
    default: ""
  },
  origin: {
    type: String,
    default: ""
  }
});
```

**Embedding Data**

```javascript
var tweetSchema = new Schema({
  body: {
    type: String,
    default: ""
  }
});

var userSchema = new Schema({
  username: {
    type: String,
    default: ""
  },
  tweets: [tweetSchema]		// EMBEDDING :D
});
```

##Route Design

Remember RESTful routing? It's the most popular modern convention for designing resource paths for nested data. Here is an example of an application that has routes for `Store` and `Item` models:

###RESTful Routing
|| | |
|---|---|---|
| **HTTP Verb** | **Path** | **Description** |
| GET | /store | Get all stores |
| POST | /store | Create a store |
| GET | /store/:id | Get a store |
| DELETE | /store/:id | Delete a store |
| GET | /store/:store_id/items | Get all items from a store |
| POST | /store/:store_id/items | Create an item for a store |
| GET | /store/:store_id/items/:item_id | Get an item from a store |
| DELETE | /store/:store_id/items/:item_id | Delete an item from a store |

*In routes, avoid nesting resources more than one level deep.*

##Challenges

Create and navigate through relational data in MongoDB.

**Goal: start up a node REPL with access to our database**

1. `git clone` the `w4_d2_1_exercise` repo, and `cd` into the new `w4_d2_1_exercise` directory.

1. Start mongoDB with `mongod`.

1. `cd` into the folder `exercise`.

1. Take a quick look at `console.js`, a script we wrote to help set up your REPL to use your database. Don't worry about exactly how it works, but notice this line:

  ```js
  var db = require("./models");
  ```

  Hint: in the REPL, all your models will be inside an object called `db`.

1. Use `node console.js` to enter into a REPL where you can interact with your database.


**Goal: inspect and understand existing code base**

1. You're working from existing code here, so start by figuring it out. Open `models.js` in Sublime.

1. `models.js` has many comment lines that currently just ask questions (`cmd+f ?` to find them all).  Replace these lines with a VERY brief answer to their questions.

1. **Stretch:** Draw an entity relationship diagram for Users and Tweets.

1. **Stretch:** Draw an entity relationship diagram for  Foods and Ingredients.


**Goal: manipulate embedded data**

NOTE: After each step is successful, save the code you used in `solution.js`.

1. In the REPL, create a user.
	
1. Create at least two tweets.

1. Embedded the tweets you created into the user.

1. List all the users.

1. List all tweets of a specific user.

**Goal: manipulate referenced data**

NOTE: After each step is successful, save the code you used in `solution.js`.

1. Create at least two ingredients.

1. Create a food that references those ingredients.

1. List all the foods.

1. List all the ingredients in the food you created.
