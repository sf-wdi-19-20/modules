# To Do Lab (OOP Refactor)

Objective: Refactor your existing todo app to use constructor functions


### Minimum Requirements
1. All todos should be created with a constructor function
  * The constructor should accept `title` and `description`
  * The constructor should add the created todo to an array
1. The `Todo` prototype should include a `render` function
  * Calling render should append the todo item
  * `render` should use underscore templates

### Bonus
1. Save each todo to a `List` object instead of a regular array
  1. `List` should have its own constructor
  1. Modify your todo constructor to add items to an instance of `List`
