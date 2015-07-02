$(function() {

  // constructor functions
  function ToDo(name, desc) {
    this.name = name;
    this.desc = desc;
  }

  // `ToDo.all` contains our seed data
  ToDo.all = [
    new ToDo('laundry', 'clean clothes'),
    new ToDo('grocery shopping', 'buy food'),
    new ToDo('nap time', 'remember to sleep!')
  ];

  ToDo.prototype.save = function() {
    // store our new todo
    ToDo.all.push(this);
    console.log(ToDo.all);
  };

  ToDo.prototype.render = function() {
    // append our new todo to the page
    var $todo = $(toDoTemplate(this));
    this.index = ToDo.all.indexOf(this);
    $todo.attr('data-index', this.index);
    $toDoList.append($todo);
  };

  // form to create new todo
  var $newToDo = $('#new-todo');

  // element to hold our list of todos
  var $toDoList = $('#todo-list');

  // todo template
  var toDoTemplate = _.template($('#todo-template').html());

  // append existing todos (from seed data) to `$toDoList`
  // `_.each` is an "iterator" function provided by Underscore.js
  _.each(ToDo.all, function (todo, index) {
    todo.render();
  });

  // submit form to create new todo
  $newToDo.on('submit', function(event) {
    event.preventDefault();

    // create new toDo object from form data
    var toDoName = $('#todo-name').val();
    var toDoDesc = $('#todo-desc').val();
    var toDo = new ToDo(toDoName, toDoDesc);

    // save toDo
    toDo.save();

    // render toDo
    toDo.render();

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

    // remove todo from the `ToDo.all` array (model)
    ToDo.all.splice(index, 1);
    console.log(ToDo.all);

    // remove todo from the DOM (view)
    $todo.remove();

    // reset indexes in DOM to match `ToDo.all` array
    // $.each loops through DOM elements
    $('.todo').each(function(index) {
      $(this).attr('data-index', index);
    });
  });

});
