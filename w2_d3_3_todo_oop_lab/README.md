# To Do Lab (OOP Refactor)

**Objective:** Refactor your existing To Do App to use constructor functions. Feel free to reference the [existing To Do App solutions](../w2_d1_3_todo_lab) to get started.

### Requirements
1. All todos should be created with a constructor function
  * The constructor should accept `title` and `description`
1. The `ToDo` constructor should have a property `all`
  * `all` should be an array of `toDo`'s
  * **Hint:** `all` should be set directly on the `ToDo` constructor, NOT on new instances of `ToDo`
1. The `ToDo` prototype should have a `save` method that adds the `toDo` to `ToDo.all`
1. The `Todo` prototype should have a `render` function
  * `render` should use underscore templates
  * Calling render should append the `toDo` to the page
1. Submit the link to your To Do app repo in the [homework submission form](https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform)
1. Read about [Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) to prepare for tomorrow morning's module and [How to Start a Project](http://blog.cayenneapps.com/2014/11/25/5-steps-to-building-minimum-viable-product-with-story-mapping) to prepare for Project 0
