$(function() {

  // form to create new todo
  var $newToDo = $('#new-todo');

  // element to hold our list of todos
  var $toDoList = $('#todo-list');

  // todo template
  var toDoTemplate = _.template($('#todo-template').html());

  // `toDos` array is our model (holds our data)
  // contains test (or "seed") data
  var toDos = [
    {name: "laundry", desc: "clean clothes"},
    {name: "grocery shopping", desc: "buy food"},
    {name: "nap time", desc: "remember to sleep!"}
  ];

  // append existing todos (from seed data) to `$toDoList`
  // `_.each` is an "iterator" function provided by Underscore.js
  _.each(toDos, function (todo, index) {
    var $todo = $(toDoTemplate(todo));
    $todo.attr('data-index', index);
    $toDoList.append($todo);
  });

  // submit form to create new todo
  $newToDo.on('submit', function(event) {
    event.preventDefault();

    // create new todo object from form data
    var toDoName = $('#todo-name').val();
    var toDoDesc = $('#todo-desc').val();
    var toDoData = {name: toDoName, desc: toDoDesc};

    // store our new todo
    toDos.push(toDoData);
    console.log(toDos);
    var index = toDos.indexOf(toDoData);

    // append our new todo to the page
    var $todo = $(toDoTemplate(toDoData));
    $todo.attr('data-index', index);
    $toDoList.append($todo);

    // reset the form
    $newToDo[0].reset();
    $('#todo-name').focus();
  });

  // add class to todo on click to mark it as done
  $toDoList.on('click', '.todo-text', function() {
    $(this).toggleClass('done');
  });

  // remove todo from model and view
  $toDoList.on("click", ".delete", function () {
    var $todo = $(this).closest(".todo");
    var index = $todo.attr('data-index');

    // remove todo from the `toDos` array (model)
    toDos.splice(index, 1);
    console.log(toDos);

    // remove todo from the DOM (view)
    $todo.remove();

    // reset indexes in DOM to match `toDos` array
    // $.each loops through DOM elements
    $('.todo').each(function(index) {
      $(this).attr('data-index', index);
    });
  });

});