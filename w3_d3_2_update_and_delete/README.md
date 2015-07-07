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

The examples below are from a Web Dev Dictionary app.

### Delete (aka DESTROY)

```html
<!-- item we want to delete in the HTML -->

<li class="list-group-item" id="phrase-0">
  <!-- label for phrase -->
  <span class="label label-default">JSON</span>
  <!-- definition -->
  JavaScript Object Notation
  <!-- delete button w/ registered onclick function -->
  <button data-id="0" onclick="Phrases.delete(this)" type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</li>
```

```js
// client-side JavaScript

Phrases.prototype.delete = function(delBtn){
  var phraseId = $(delBtn).data().id;
  $.ajax({
    type: 'DELETE',
    url: '/phrases/' + phraseId,
    success: function(data) {
      // once successful, remove deleted phrase li from the DOM
      $('#phrase-' + phraseId).remove();
    }
  });
};
```

```js
//server-side JavaScript

app.delete('/phrases/:id', function(req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find item in the array matching the id
  var targetItem = _.findWhere(phrases, {id: targetId});

  // get the index of the found item
  var index = phrases.indexOf(targetItem);

  // remove the item at that index, only remove 1 item
  phrases.splice(index, 1);

  // send back deleted object
  res.send(JSON.stringify(targetItem));
});
```

### Update (Edit)

```html
<!-- item we want to edit in the HTML -->

<!-- edit link (pencil icon) to toggle form (insert into each phrase li) -->
<a id="edit-form-toggler" data-toggle="collapse" class="active" data-target="#update-0" >
  <span class="glyphicon glyphicon-pencil edit" ></span>
</a>

<!-- toggle-able edit form -->
<div id="update-0" class="collapse">
  <form id="update-form-0" data-phraseid="0" class="form-inline" onsubmit="Phrases.update(event, this)">
    <input name="word" type="text" class="form-control" placeholder="New word?">
    <input name="definition" class="form-control" placeholder="New definition?">
    <button type="submit" class="btn btn-default">Update phrase</button>
  </form>
</div>
```

```js
// client-side JavaScript

Phrases.prototype.update = function(event, editForm){
  event.preventDefault();
  var $form = $(editForm);
  var phraseId = $form.data().phraseid;
  var newWord = $form.find('input[name="word"]').val();
  var newdefinition = $form.find('input[name="definition"]').val();
  $.post('/phrases/' + phraseId, {word: newWord, definition: newdefinition});
  .done(function(res) {
    // once done, use template to format edited phrase
    // @TODO change from pseudocode
    var newPhraseHTML = compiled_template(res)
    $('#phrase-' + phraseId).replaceWith(newPhraseHTML);
  });
};
```

```js
//server-side JavaScript

app.post('/phrases/:id', function(req, res) {
  console.log('updating with these params', req.body);

  // set the value of the id
  var targetId = req.params.id;

  // find item in the array matching the id
  var targetItem = _.findWhere(phrases, {id: targetId});

  // if form gave us a new word, update the phrase's word
  targetItem.word = req.body.word || targetItem.word;

  // if form gave us a new definition, update that
  targetItem.definition = req.body.definition || targetItem.definition;

  // send back edited object
  res.send(JSON.stringify(targetItem));
});
```

## Challenges (& Tonight's Homework)

Implement the "D" in CRUD in the RESTful API you started this morning.

### Requirements

1. A user should be able to click a button on the page to indicate they'd like to delete an item.
2. Your client-side JavaScript should register clicks on your delete button and send an DELETE request (via AJAX) to the server.
3. When sending the DELETE request, you need to send over the id of the item the user wants to delete.
4. The server should have a route that handles the DELETE request and removes the item from our "database" (an array).
5. On success of the DELETE request, change the state of the view by removing the deleted item from the DOM.

### How to Get Started

Use an outside-in approach. Start with the client-side code, then move to the server-side. You can do this by thinking through everything that has to happen starting with the user clicking a button on the page:

```
User clicks button > JS event-handler > AJAX request > handle DELETE on server > server sends response to client > update the DOM
```

### Stretch Challenges / Bonus

Add another resource to your API (e.g. if you're working on a `books` API, you could add an `authors` resource).

### Docs & Resources
