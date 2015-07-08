# Updating and Deleting Data

Put the "UD" in CRUD!

| Objectives |
| :--- |
| Update data items on a server using RESTful routing |
| Delete data items from a server using RESTful routing |
| Create Express app routes with parameterized URLs |

## Requirements

**To UPDATE an item, we'll need:**

1. A place for the user to enter the new item information (a form!)

2. Some way for the user to indicate they want to update the item (a button!)

3. Some way to tell which item the user wants to edit (an id!)

4. Detection for when the user clicks the edit button (an event handler!)

5. A way for the client to let the server know the user wants to edit the item (a request!)

6. Server-side code to edit the item (a route!)

7. Client-side code to change the state of the app after the item is edited in the data (a response handler!)

**To DELETE an item, we'll need:**

1. Some way for the user to indicate they want the item deleted (a button!)

2. Some way to tell which item the user wants to delete (an id!)

3. Detection for when the user clicks that delete button (an event handler!)

4. A way for the client to let the server know the user wants to delete the item (a request!)

5. Server-side code to delete the item (a route!)

6. Client-side code to change the state of the app after the item is deleted from the data (a response handler!)

## Examples

The examples below are from a "catchphrasely" web dev dictionary app.

### Update (Edit)

```html
<!-- edit link (pencil icon) to toggle form -->
<a class="edit-pencil" data-toggle="collapse" data-target="#update-<%= id %>">
  <span class="glyphicon glyphicon-pencil edit"></span>
</a>

<!-- form to update phrase -->
<div class="collapse" id="update-<%= id %>">
  <br>
  <form class="form-inline update-phrase">
    <input type="text" class="form-control updated-word" value="<%= word %>" placeholder="New word?">
    <input type="text" class="form-control updated-definition" value="<%= definition %>" placeholder="New definition?">
    <input type="submit" class="btn btn-default" value="Update phrase">
  </form>
</div>
```

```js
// client-side JavaScript

// remember:
var phrasesController = {}
phrasesController.template = _.template($('#phrase-template').html());

phrasesController.update = function(phraseId, updatedWord, updatedDefinition) {
  // send PUT request to server to update phrase
  $.ajax({
    type: 'PUT',
    url: '/phrases/' + phraseId,
    data: {
      word: updatedWord,
      definition: updatedDefinition
    },
    success: function(data) {
      // pass phrase object through template and append to view
      var $phraseHtml = $(phrasesController.template(data));
      $('#phrase-' + phraseId).replaceWith($phraseHtml);
    }
  });
};
```

```js
// server-side JavaScript

// remember:
var phrases = [
  {id: 0, word: 'REPL', definition: 'Read, Eval, Print, Loop'}
];

app.put('/phrases/:id', function(req, res) {

  // set the value of the id
  var targetId = parseInt(req.params.id);

  // find item in `phrases` array matching the id
  var foundPhrase = _.findWhere(phrases, {id: targetId});

  // if form gave us a new word, update the phrase's word
  foundPhrase.word = req.body.word || foundPhrase.word;

  // if form gave us a new definition, update that
  foundPhrase.definition = req.body.definition || foundPhrase.definition;

  // send back edited object
  res.json(foundPhrase);
});
```

### Delete (aka DESTROY)

```html
<!-- delete button -->
<button class="close right-side delete-phrase" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

```js
// client-side JavaScript

// remember:
var phrasesController = {}

phrasesController.delete = function(phraseId) {
  // send DELETE request to server to delete phrase
  $.ajax({
    type: 'DELETE',
    url: '/phrases/' + phraseId,
    success: function(data) {
      // remove deleted phrase li from the view
      $('#phrase-' + phraseId).remove();
    }
  });
}
```

```js
// server-side JavaScript

// remember:
var phrases = [
  {id: 0, word: 'REPL', definition: 'Read, Eval, Print, Loop'}
];

app.delete('/phrases/:id', function(req, res) {

  // set the value of the id
  var targetId = parseInt(req.params.id);

  // find item in `phrases` array matching the id
  var foundPhrase = _.findWhere(phrases, {id: targetId});

  // get the index of the found item
  var index = phrases.indexOf(foundPhrase);

  // remove the item at that index, only remove 1 item
  phrases.splice(index, 1);

  // send back deleted object
  res.json(foundPhrase);
});
```

## Challenges (& Tonight's Homework)

Implement the "UD" (update and delete) in CRUD in the RESTful API you started this morning. Focus on the server-side implementation with Node/Express. Client-side code to interact with your API is a stretch challenge if you have time.

### Requirements

1. Create the route PUT `/users/:id`. It should find the user by `id` in your `users` array and update that user.
2. Create the route DELETE `/users/:id`. Again, it should find the user by `id` in your `users` array, but this time, it should delete the found user out of the array.
3. For both update and delete, send a JSON response with the user that was updated or deleted.
4. Test your routes with Postman.
5. Push your API to a GitHub repo. Remember to submit the link in the <a href="https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform" target="_blank">homework submission form</a>.

### Stretch Challenges / Bonus

Implement client-side code to interact with your `users` API. You'll want to read about <a href="https://github.com/sf-wdi-19-20/modules/blob/master/how_tos/express_project_setup.md#serving-static-assets" target="_blank">serving static assets in Express</a> to set up a view, stylesheets, and client-side JavaScript.

**Things you'll need:**

1. An Underscore template to render your `user` data.
2. A form to create new `users`, forms to edit each `user`, and buttons to delete each `user`.
3. For updating and deleting, a way to know which `user` (Hint: remember the `data-id` HTML attribute).
4. jQuery event-handlers to register submit events on the forms and click events on the delete buttons.
5. An AJAX request to GET all `users` on page load.
6. AJAX requests to POST, UPDATE, and DELETE users.
7. Response handlers in your AJAX calls to change the state of the DOM when data comes back from the server.

### Docs & Resources

* <a href="https://github.com/sf-wdi-19-20/modules/blob/master/how_tos/express_project_setup.md" target="_blank">How to Set Up an Express Project</a>
* <a href="http://expressjs.com/api.html#req" target="_blank">Express Request Docs</a>
* <a href="http://expressjs.com/api.html#app.put.method" target="_blank">Express app.put() method</a>
* <a href="http://expressjs.com/api.html#app.delete.method" target="_blank">Express app.delete() method</a>
* <a href="http://underscorejs.org/#findWhere" target="_blank">Underscore _.findWhere() method</a>
* <a href="https://api.jquery.com/remove" target="_blank">jQuery .remove() method</a>
