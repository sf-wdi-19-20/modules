#Updating and Deleting Data

Put the "ud" in CRUD!

| Objectives |
| :--- |
| Delete data items from a server using RESTful routing and AJAX |
| Update data items on a server using RESTful routing and AJAX |
| Create Express app routes with parameterized URLs |
| Use ids in data to manage CRUD operations | 

##Requirements

**To Delete an item, we'll need:**

1. Some way for the user to indicate they want the item deleted (a button!),

1. Some way to tell which item the user wanted to delete (ids!),

2. Detection for when the user clicks that delete button (an event handler!),

3. A way for the client to let the server know the user wants to delete the item (a request!),

3. Server-side code to delete the item (a route!),

3. Client-side code to change the state of the app after the item is deleted from the data (a response handler!).

**To Update an item, we'll need:**

1. Some way for the user to indicate they want to update the item (a button!),

1. Some way to tell which item the user wanted to edit (ids!),

2. Detection for when the user clicks the edit button (an event handler!),

2. A place for the user to enter the new item information (a form!),

3. A way for the client to let the server know the user wants to edit the item (a request!),

3. Server-side code to edit the item (a route!),

3. Client-side code to change the state of the app after the item is edited in the data (a response handler!).

##Examples

### Delete (aka DESTROY)

```html

<li class='list-group-item'>
  JSON
  <!-- label for definiton -->
  <span class="label label-default">JavaScript Object Notation</span>
  <!-- delete button w/ registered onclick function -->
  <button data-id="0" onclick="Phrases.delete(this)" type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</li>
```

```js

//client side JavaScript

Phrases.prototype.delete = function(delBtn){
  var phraseId = $(delBtn).data().id;
  $.ajax({
    url: '/phrases/' + phraseId,
    type: 'DELETE',
    success: function(res) {
      // once successful, re-render all phrases
      Phrases.renderAll();
    }
  });
};
```

```js

//server-side JavaScript
app.delete("/phrases/:id", function(req, res) {
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


###Update (Edit)

```html
<!-- edit link (pencil icon) to toggle form -->
 <a id="edit-form-toggler" data-toggle="collapse" class="active" data-target="#update-0" >
   <span class="glyphicon glyphicon-pencil edit" ></span>
 </a>


<!-- toggle-able edit form -->
<div id="update-0" class="collapse">
  <form id="update-form-0" data-itemid="0" class="form-inline" onsubmit="Phrases.update(event, this)">
    <input name="word" type="text" class="form-control" placeholder="New word?">
    <input name="definition" class="form-control" placeholder="New definition?">
    <button type="submit" class="btn btn-default">Update phrase</button>
  </form>
</div>
```

```js
Phrases.prototype.update = function(event, editForm){
  event.preventDefault();
  var $form = $(editForm);
  var phraseId = $form.data().itemid;
  var newWord = $form.find("input[name='word']").val();
  var newdefinition = $form.find("input[name='definition']").val();
  $.post("/update", {id: phraseId, word: newWord, definition: newdefinition})
  .done(function(res){
    // once done, re-render everything
    Phrases.all();
  });
};

```

```js
app.post("/update", function(req, res){
  console.log("updating with these params", req.body);

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
