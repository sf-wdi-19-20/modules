# Updating and Deleting Data

Put the "UD" in CRUD!

| Objectives |
| :--- |
| Update data items on a server using RESTful routing and AJAX |
| Delete data items from a server using RESTful routing and AJAX |
| Create Express app routes with parameterized URLs |
| Use ids in data to manage CRUD operations |

## Requirements

**To Update an item, we'll need:**

1. Some way for the user to indicate they want to update the item (a button!)

2. Some way to tell which item the user wants to edit (an id!)

3. Detection for when the user clicks the edit button (an event handler!)

4. A place for the user to enter the new item information (a form!)

5. A way for the client to let the server know the user wants to edit the item (a request!)

6. Server-side code to edit the item (a route!)

7. Client-side code to change the state of the app after the item is edited in the data (a response handler!)

**To Delete an item, we'll need:**

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

Implement the "D" (delete) in CRUD in the RESTful API you started this morning.

### Requirements

1. A user should be able to click a button on the page to indicate they'd like to delete an item.
2. Your client-side JavaScript should register clicks on your delete button and send an DELETE request (via AJAX) to the server.
3. When sending the DELETE request, you need to send over the id of the item the user wants to delete.
4. The server should have a route that handles the DELETE request and removes the item from our "database" (an array).
5. On success of the DELETE request, change the state of the view by removing the deleted item from the DOM.
6. You should push your API to a GitHub repo. Remember to submit the link in the <a href="https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform" target="_blank">homework submission form</a>.

### How to Get Started

Use an outside-in approach. Start with the client-side code, then move to the server-side. You can do this by thinking through everything that has to happen starting with the user clicking a button on the page:

> User clicks delete button > JS event-handler > AJAX request > handle DELETE on server > server sends response to client > update the DOM

### Stretch Challenges / Bonus

Add another resource to your API and implement CRUD (e.g. if you're working on a `books` API, you could add an `authors` resource).

### Docs & Resources

* <a href="http://underscorejs.org/#findWhere" target="_blank">Underscore _.findWhere() method</a>
* <a href="https://api.jquery.com/remove" target="_blank">jQuery .remove() method</a>
* <a href="http://expressjs.com/api.html#app.delete.method" target="_blank">Express app.delete() method</a>
* <a href="http://expressjs.com/api.html#req" target="_blank">Express Request Docs</a>
