# Mongo & Mongoose Continued
| Objectives |
| :--- |
| Review Mongoose setup in a Node/Express app |
| Find documents with Mongoose |
| Update and delete documents with Mongoose |

## Review: What is Mongoose?

<a href="http://mongoosejs.com" target="_blank">Mongoose</a> is an ORM (<a href="https://en.wikipedia.org/wiki/Object-relational_mapping" target="_blank">Object-Relational Mapping</a>) for the non-relational, document-based database <a href="http://docs.mongodb.org/manual" target="_blank">MongoDB</a>.

An ORM is a layer between our application and our database, which allows us to query and manipulate data in the language and structure of our application.

Mongoose allows us to use JavaScript and Object-Oriented Programming to talk to our database, making our code DRY-er and eliminating the need to manually query our Mongo database.

## Review: Mongoose Setup

1. In the terminal, add Mongoose to your application's node modules.

  ```
  $ npm install --save mongoose
  ```

2. In `server.js`, require Mongoose and connect to the database you're using for your application.

  ```js
  // server.js

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/catchphrasely');
  ```

3. At this point, if you haven't already created the database you're using, do so in the terminal. You'll need to start up MongoDB by running:

  ```
  $ mongod
  ```

  **Note:** If you already have an instance of MongoDB running, you'll get an error at this step. If that's the case, you can move on to the next step, since MongoDB is already running!

4. In a separate terminal tab, create and connect to your database. In the example, our new database is called `catchphrasely`.

  ```
  $ mongo
  $ use catchphrasely
  ```

5. In your application, create a folder called `models` with a file for your first model. In the example, we have a `Phrase` model, so our model's filename is `phrase.js`. Your folder structure should look similar to this:

  ```
  | catchphrasely
    | models
      - phrase.js
    | public
      | scripts
        - script.js
      | styles
        - style.css
      | views
        - index.html
    - .gitignore
    - package.json
    - server.js
  ```

6. In your model file (e.g. `phrase.js`), create the model schema, and export it so that you can require it in other parts of your app.

  ```js
  // phrase.js

  var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  var PhraseSchema = new Schema({
    word: String,
    definition: String
  });

  var Phrase = mongoose.model('Phrase', PhraseSchema);

  module.exports.Phrase = Phrase;
  ```

7. In `server.js`, require your model.

  ```js
  // server.js

  var Phrase = require('./models/phrase').Phrase;
  ```

## Review: RESTful Routing

| HTTP Verb | Path | Description |
| :---: | :---: | :---: |
| GET | /api/phrases | Get all phrases |
| POST | /api/phrases | Create new phrase |
| GET | /api/phrases/:id | Get one phrase |
| PUT | /api/phrases/:id | Update a phrase |
| DELETE | /api/phrases/:id | Delete a phrase |

**Note:** We can use `/api` to differentiate our API routes from any static routes in our application (like our root route `/`, which renders our `index.html`). The `/api` part of the routes is not required and is not a part of RESTful routing.

## CRUD Operations with Mongoose

### Get all: <a href="http://mongoosejs.com/docs/api.html#model_Model.find"  target="_blank">`.find()`</a>

We can use `.find()` to get all documents in the collection.

```js
// get all phrases
app.get('/api/phrases', function (req, res) {
  // find all phrases in db
  Phrase.find(function (err, phrases) {
    res.json(phrases);
  });
});
```

**Note:** We can also use `.find()` to get a specific set of documents in the collection (rather than ALL documents) by setting conditions. <a href="http://mongoosejs.com/docs/api.html#model_Model.find"  target="_blank">Read more in the docs.</a>

### Create: `new` and `.save()`

We've seen the `new` keyword before! It creates new instances of an object. We use it here to create new instances of our `Phrase` model. We then call `.save()` to store the new phrase in our database.

```js
// create new phrase
app.post('/api/phrases', function (req, res) {
  // create new phrase with form data (`req.body`)
  var newPhrase = new Phrase({
    word: req.body.word,
    definition: req.body.definition
  });

  // save new phrase in db
  newPhrase.save(function (err, savedPhrase) {
    res.json(savedPhrase);
  });
});
```

### Get one: <a href="http://mongoosejs.com/docs/api.html#query_Query-findOne">`.findOne()`</a>

We can use `.findOne()` to return the first document in the collection that matches certain criteria. In this case, we're looking for a phrase with our target id.

```js
// get one phrase
app.get('/api/phrases/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find phrase in db by id
  Phrase.findOne({_id: targetId}, function (err, foundPhrase) {
    res.json(foundPhrase);
  });
});
```

**Note:** The <a href="http://mongoosejs.com/docs/api.html#model_Model.findById" target="_blank">`.findById()`</a> method will also return a single document matching a specified id field.

### Update: `.findOne()` and `.save()`

Similar to the last example, we can use `.findOne()` to find the document with our target id. After updating the document, we use `.save()` to persist our changes to the database.

```js
// update phrase
app.put('/api/phrases/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find phrase in db by id
  Phrase.findOne({_id: targetId}, function (err, foundPhrase) {
    // update the phrase's word and definition
    foundPhrase.word = req.body.word;
    foundPhrase.definition = req.body.definition;

    // save updated phrase in db
    foundPhrase.save(function (err, savedPhrase) {
      res.json(savedPhrase);
    });
  });
});
```

### Delete: <a href="http://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove" target="_blank">`.findOneAndRemove()`</a>

The `.findOneAndRemove()` method takes care of finding the document with our target id and removing it from the database.

```js
// delete phrase
app.delete('/api/phrases/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find phrase in db by id and remove
  Phrase.findOneAndRemove({_id: targetId}, function (err, deletedPhrase) {
    res.json(deletedPhrase);
  });
});
```

**Note:** Another way to achieve the same functionality is by finding the document first (using `.findOne()` or  `.findById()`) and calling <a href="http://mongoosejs.com/docs/api.html#model_Model.remove" target="_blank">`.remove()`</a> on the found document.

## Challenges (& Tonight's Homework)

Add Mongo/Mongoose to your Project 0 Microblog. If you would like to start with fresh code, you can clone this <a href="https://github.com/sf-wdi-19-20/w4_microblog_starter_code" target="_blank">Microblog starter code</a>.

### Base Challenges

1. Set up Mongoose in your Microblog app. This includes installing the Mongoose module, creating a schema for your blog posts, and requiring the schema in your `server.js`.
2. Use Mongoose methods to perform all of your API's CRUD operations. Your app should have five API routes:
  * GET `/posts` should get all the posts from the database collection.
  * POST `/posts` should create a new post in the database collection.
  * GET `/posts/:id` should get one post document.
  * PUT `/posts/:id` should update a post document.
  * DELETE `/posts/:id` should delete a post document.
3. Test all your API routes with Postman before testing if the addition of Mongoose affected anything on your client-side. **Note:** Your Mongo documents have an `_id` attribute, rather than `id`, so you'll need to update any instances of `id` on the client-side.

### Stretch Challenges / Bonus

## Docs & Reading

* <a href="http://mongoosejs.com/docs" target="_blank">Mongoose Docs</a>
* <a href="http://mongoosejs.com/docs/api.html#model_Model.find" target="_blank">.find()</a>
* <a href="http://mongoosejs.com/docs/api.html#query_Query-findOne" target="_blank">.findOne()</a>
* <a href="http://mongoosejs.com/docs/api.html#model_Model.findById" target="_blank">.findById()</a>
* <a href="http://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove" target="_blank">.findOneAndRemove()</a>
* <a href="http://mongoosejs.com/docs/api.html#model_Model.remove" target="_blank">.remove()</a>
