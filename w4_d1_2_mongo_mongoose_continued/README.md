# Mongo & Mongoose Continued
| Objectives |
| :--- |
| Review Mongoose setup in a Node/Express app |
| Find documents with Mongoose |
| Update and delete documents with Mongoose |

## Review: What is Mongoose?

## Review: Mongoose Setup

## Review: RESTful Routing

**Note:** We can use `/api` to differentiate our API routes from any static routes in our application (like our root route `/`, which renders our `index.html`). The `/api` part of the routes is not required and is not a part of RESTful routing.

| HTTP Verb | Path | Description |
| :---: | :---: | :---: |
| GET | /api/phrases | Get all phrases |
| POST | /api/phrases | Create new phrase |
| GET | /api/phrases/:id | Get one phrase |
| PUT | /api/phrases/:id | Update a phrase |
| DELETE | /api/phrases/:id | Delete a phrase |

## CRUD Operations with Mongoose

#### Get all: `.find()`
**Note:** We can also specify conditions to find specific set. (TODO: add detail here)

http://mongoosejs.com/docs/api.html#model_Model.find

```js
// get all phrases
app.get('/api/phrases', function (req, res) {
  // find all phrases in db
  Phrase.find(function (err, phrases) {
    res.json(phrases);
  });
});
```

#### Create: `new` and `.save()`

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

#### Get one: `.findOne()`
**Note:** We can also use `.findById()`. (TODO: add detail here)

http://mongoosejs.com/docs/api.html#query_Query-findOne
http://mongoosejs.com/docs/api.html#model_Model.findById

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

#### Update: `.findOne()` and `.save()`

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

#### Delete: `.findOneAndRemove()`
**Note:** We can also use `.findOne()` (or `.findById()`) and `.remove()`. (TODO: Add detail here)

http://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove
http://mongoosejs.com/docs/api.html#model_Model.remove

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

## Challenges (& Tonight's Homework)

Add Mongo/Mongoose to your Project 0 Microblog. If you would like to start with fresh code, you can clone this <a href="" target="_blank">Microblog solution</a>. (TODO: Add link)

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
