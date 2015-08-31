# Mongo Nested Resources Review

| Objectives |
| :--- |
| Add a nested resource to Mongoose schema |
| Create, update, and delete data for the nested resource |

## Mongoose Data Relationships

**Embedded Data** is directly nested inside of other data. Each record has a copy of the data.

**Referenced Data** is stored as an id inside other data. The id can be used to look up the information. All records that reference the same data look up the same copy.

There are trade-offs between *efficiency* and *consistency* depending on which type of data relationship you choose.

## Embedded Data Example: To-Do Lists

Image you had a database of todo `Lists`, each with many `Todos`. Since todos only belong to one list, you could use embedded data to store todos inside the list they belong to. If you needed to update or delete a todo, you would first need to find the associated list, then the todo to update or delete.

```js
// List model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    // require Todo model
    Todo = require('./todo');

var ListSchema = new Schema({
  name: String,
  // embed todos in list
  todos: [Todo.schema]
});

var List = mongoose.model('List', ListSchema);
module.exports = List;
```

```js
// Todo model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: String,
  completed: Boolean
});

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
```

### Route to Create Embedded Data

```js
// create todo embedded in list
app.post('/api/lists/:listId/todos', function (req, res) {
  // set the value of the list id
  var listId = req.params.listId;

  // store new todo in memory with data from request body
  var newTodo = new Todo(req.body.todo);

  // find list in db by id and add new todo
  List.findOne({_id: listId}, function (err, foundList) {
    foundList.todos.push(newTodo);
    foundList.save(function (err, savedList) {
      res.json(newTodo);
    });
  });
});
```

### Route to Update Embedded Data

```js
// update todo embedded in list
app.put('/api/lists/:listId/todos/:id', function (req, res) {
  // set the value of the list and todo ids
  var listId = req.params.listId;
  var todoId = req.params.id;

  // find list in db by id
  List.findOne({_id: listId}, function (err, foundList) {
    // find todo embedded in list
    var foundTodo = foundList.todos.id(todoId);
    // update todo content with data from request body
    foundTodo.content = req.body.todo.content;
    foundList.save(function (err, savedList) {
      res.json(foundTodo);
    });
  });
});
```

### Route to Delete Embedded Data

```js
// delete todo embedded in list
app.delete('/api/lists/:listId/todos/:id', function (req, res) {
  // set the value of the list and todo ids
  var listId = req.params.listId;
  var todoId = req.params.id;

  // find list in db by id
  List.findOne({_id: listId}, function (err, foundList) {
    // find todo embedded in list
    var foundTodo = foundList.todos.id(todoId);
    // remove todo
    foundTodo.remove();
    foundList.save(function (err, savedList) {
      res.json(foundTodo);
    });
  });
});
```

## Referenced Data Example: Recipes

Image you had a database of `Recipes`, each with many `Ingredients`. It's very likely that ingredients could appear in multiple recipes, so it makes sense to use referenced data. Since we only need to store ingredient ids inside recipes, if an ingredient needs to be updated or deleted, the action only needs to happen in one place.

```js
// Recipe model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    // require Ingredient model
    Ingredient = require('./ingredient');

var RecipeSchema = new Schema({
  name: String,
  instructions: String,
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }]
});
```

```js
// Ingredient model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  name: String
});
```

## Challenges

1. Create an `Answer` model. Like questions, answers will only have one attribute. We'll call it `content`.

2. Require the `Answer` model in `question.js` so the `Question` model has access to the `Answer`'s schema.

3. Embed answers in the `QuestionSchema`.

4. Make a route to create a new answer that's embedded in a question. **Hint:** Get the question id from the URL params (`req.params`) and the new answer's content from the form params (`req.body`).

5. Make a route to update an answer that's embedded in a question. **Hint:** Get the question and answer ids from the URL params (`req.params`) and the updated answer's content from the form params (`req.body`).

6. Make a route to delete an answer that's embedded in a question. **Hint:** Take a similar approach as your update method, but you'll need to `remove` the answer after finding it embedded inside the question.

## Stretch Challenges

1. Add <a href="http://mongoosejs.com/docs/validation" target="_blank">validations</a> to both the `Question` and `Answer` models. Both the question `text` and answer `content` should be <a href="http://mongoosejs.com/docs/api.html#schematype_SchemaType-required" target="_blank">required</a>.

2. In your API routes to create and update questions, respond with an error if the required validation is not met. **Hint:** Send back the <a href="http://mongoosejs.com/docs/validation#validation-errors" target="_blank">validation error</a> from Mongoose. Also, take a look at this <a href="http://expressjs.com/guide/error-handling.html" target="_blank">guide to Express error-handling</a>.

3. Implement the same error-handling for your API routes to create and update an embedded answer.

4. Install `mocha`, `chai`, and `request`, and write <a href="https://github.com/sf-wdi-19-20/modules/tree/master/w3_d4_2_js_integration_testing" target="_blank">request specs</a> for all your API routes. Start with testing your `get` routes for a response code of 200, then move on to testing `post`, `put`, and `delete`.
