$(function() {

  // constructor functions
  function ToDo(name, desc) {
    this.name = name;
    this.desc = desc;

    // store our new todo
    var toDos = JSON.parse(localStorage.getItem('toDos')) || [];
    toDos.push(this);
    localStorage.setItem('toDos', JSON.stringify(toDos));

    this.render = function() {
      // find the index of this toDo
      var toDos = JSON.parse(localStorage.getItem('toDos'));
      var index = toDos.indexOf(this);

      // append this toDo to the page
      var $todo = $(toDoTemplate(this));
      $todo.attr('data-index', index);
      $toDoList.append($todo);
    }
  };

  // `ToDo.all` contains our seed data
  ToDo.all = [
    new ToDo('laundry', 'clean clothes'),
    new ToDo('grocery shopping', 'buy food'),
    new ToDo('nap time', 'remember to sleep!')
  ];

  // form to create new todo
  var $newToDo = $('#new-todo');

  // element to hold our list of todos
  var $toDoList = $('#todo-list');

  // todo template
  var toDoTemplate = _.template($('#todo-template').html());

  // append existing todos (from seed data) to `$toDoList`
  // `_.each` is an "iterator" function provided by Underscore.js
  _.each(ToDo.all, function (todo, index) {
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
    var toDo = new ToDo(toDoName, toDoDesc);

    // render the toDo
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
