# Underscore Templating
| Objectives |
| :--- |
| Add the Underscore.js library to your projects |
| Create and compile an Underscore template |
| Use Underscore templating to display data from an array on your HTML page |

## What is a template?

* A **template** is a document (or piece of code) that contains **parameters** which are dynamically replaced with data by the templating engine.

* Thus far, we've been coding information (or data) directly into our HTML file. Eventually, the data on our HTML page will come from a server, and we'll need a way to dynamically display that data.

* We'll use <a href="http://underscorejs.org/#template" target="_blank">Underscore's templating engine</a> to dynamically display data in our HTML, and the parameters will live inside `<%= %>` tags. We won't have data from a server yet, so for now, we'll store our data in an array.

## Why use client-side templating?

* Separate markup from logic. Remember this?

  ```js
  $('#task-list').append('<li class="task">' + taskName + ' ' + taskDesc + '</li>')
  ```

  * When appending new HTML elements to the page, the string of elements to append will only get longer as you begin to write more complex markup.

  * Wouldn't it be nice if the HTML structure was already set up for us? That's where templating comes in!

* Maximize code reusability and maintainability.

  * If you need to change your HTML structure for elements you're creating and displaying (e.g. adding an additional class name to your tasks), all you have to do is change the template!

## Underscore.js

<a href="http://underscorejs.org/" target="_blank">Underscore.js</a> is a JavaScript library that provides over 100 functions to help you manipulate and display data in JavaScript. Underscore also provides a templating engine, which we'll be using here.

## A Note on Iterators

Among Underscore's 100+ helper functions are `iterators` that help us manipulate arrays. Perhaps most notably is the <a href="http://underscorejs.org/#each" target="_blank">_.each iterator</a> that loops through every element in an array and performs some action on it.

`_.each` takes in an array and a callback function as arguments. The callback function gives us access to the element we're at in the array and its index.

```js
_.each([1, 2, 3], function (element, index) {
  console.log("index " + index + ": " + element)
});
```

`_.each` replaces our need for a `for loop`. The above code could be written like this:

```js
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i += 1) {
  console.log("index " + i + ": " + arr[i])
}
```

We'll be using `_.each` to iterate over the data we want to use in our template.

## Setup

1. Add the Underscore CDN to your `index.html` (remember you can go to <a href="https://cdnjs.com" target="_blank">cdnjs</a> to search for CDN's). Make sure to require Underscore before your custom script file.

  ```html
  <body>
    <div class="container">
      <!-- page content -->
    </div>

    <!-- jquery -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>

    <!-- underscore -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>

    <!-- custom script -->
    <script type="text/javascript" src="script.js"></script>

  </body>
  ```

2. Next create the template below your custom script. Remember to give your template an `id` so we can use jQuery to select it (e.g. `pets-template`).

  ```html
  <body>
    <!-- ... -->

    <!-- custom script -->
    <script type="text/javascript" src="script.js"></script>

    <!-- underscore template -->
    <script type="text/template" id="pets-template">
      <div class="pet">
        <p>
          <%= name %> - <%= species %>
        </p>
        <hr>
      </div>
    </script>
  </body>
  ```

3. You will also need an element in your `index.html` where you will append the data from your template. Make sure to give this an `id` as well (e.g. `pets-list`).

  ```html
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div id="pets-list">
        </div>
      </div>
    </div>
  </body>
  ```

4. Compile your template in your `script.js` file. This step turns `petsTemplate` into a function, where we will later pass in the data we want to render in the template.

  ```js
  var petsTemplate = _.template($('#pets-template').html());
  ```

5. Set up some test data in your `script.js` file. **Your object keys must match the parameters you set up in your template!** (e.g. `<%= name %>` and `<%= species %>`)

  ```js
  var pets = [
    {name: "Sprinkles", species: "cat"},
    {name: "Bagel", species: "dog"},
    {name: "Fluffy", species: "dinosaur"}
  ];
  ```

6. Iterate through your test data, using your template to create a new HTML element for each data object. Once the element is created, append it to the list element you set up in step 3 (e.g. `pets-list`). **Note:** We're also saving the object's index in the array to an HTML data attribute (this will come in handy when we want to delete elements from the DOM).

  ```js
  _.each(pets, function (pet, index) {
    var $pet = $(petsTemplate(pet));
    $pet.attr('data-index', index);
    $petsList.append($pet);
  });
  ```

## Challenges, Part 1

1. Add the Underscore CDN to your To Do app. Make sure to require it before your custom script.

2. Create an underscore template below your custom script. Remember to give it an id. Think about the data you will be displaying related to each to do item. That data will determine your template's parameters (inside the `<%= %>` tags).

3. Set up a "list" element in your HTML where you will eventually append the data from your template. A `<div>` or a `<ul>` is a good choice. Remember to give it an id.

## Challenges, Part 2

1. Compile your template, using jQuery to select it by its id.

2. Set up test data in your custom script file. This should be an array of objects, where the keys match your template's paraeters.

## Challenges, Part 3

1. Iterate through your test data, creating a new HTML element for each object in the array and appending it to the "list" element you set up in part 1 of the challenges.

2. Open your `index.html` in the browser to see if your test data displays on the page. If not, check the JS console to see what errors you're getting.

3. Once you've successfully displayed your test data on the page, refactor your new To Do form to use the template when adding new tasks.

## Stretch Challenges

1. When a new task is created, make sure you are pushing it into the array of "test" data you set up in part 2 of the challenges to keep your model updated with your view.

2. Implement a delete functionality to remove tasks from your To Do list. Think about the places you'll need to make updates (**Hint:** Model and View).

## Docs & Reading

* <a href="http://underscorejs.org/#template" target="_blank">Underscore _.template</a>
* <a href="http://underscorejs.org/#each" target="_blank">Underscore _.each</a>
* <a href="http://www.smashingmagazine.com/2012/12/05/client-side-templating" target="_blank">Client-Side Templating</a>
