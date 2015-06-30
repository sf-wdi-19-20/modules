$(function() {

  // `toDos` array is our model (holds our data)
  // contains test (or "seed") data on load
  var toDos = ["laundry", "grocery shopping", "nap time"];

  // set variables for DOM elements we're interacting with
  var $newToDo = $('#new-todo');
  var $toDoText = $('#todo-text');
  var $toDoList = $('#todo-list');

  // append existing todos (from seed data) to `$toDoList`
  // `_.each` is an "iterator" function provided by Underscore.js
  _.each(toDos, function (todo, index) {
    $toDoList.append('<li class="todo">' + todo + '</li>');
  });

  // submit form to create new todo
  $newToDo.on('submit', function(event) {
    event.preventDefault();
    var newTodoText = $toDoText.val();

    // store our new todo
    toDos.push(newTodoText);

    // clear the form
    $toDoText.val("");

    // append our new todo to the page
    $toDoList.append('<li class="todo">' + newTodoText + '</li>');
  });

  // add class to todo on click to mark it as done
  $toDoList.on('click', '.todo', function() {
    $(this).addClass('done');
  });

});