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

##Queries Challenge

#####Goal

Create and navigate through relational data in MongoDB.

#####Setup
* startup mongoDB with `mongod`
* `cd` into the folder `exercise` in this directory
* `node console.js` to enter into a REPL where you can interact with your DB

#####Tips
* save your successful code in Sublime for each step
* all your models will be inside an object `db`
* inspect `models.js` to understand what properties each model has


#####Steps

	1) Create a user
	
	2) Create tweets embedded in that user
	
	3) List all the users
	
	4) List all tweets of a specific user
	
	5) Create several ingredients
	
	6) Create a food that references those ingredients
	
	7) List all the Foods
	
	8) List all the ingredients in a Food
