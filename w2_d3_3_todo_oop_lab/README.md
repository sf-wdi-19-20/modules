# To Do Lab (OOP Refactor)

**Objective:** Refactor your existing To Do App to use constructor functions. Feel free to reference the [existing To Do App solutions](../w2_d1_3_todo_lab) to get started.

### Minimum Requirements

1. All todos should be created with a constructor function
  * The constructor should accept `title` and `description`
  * The constructor should add the created todo to an array
2. The `Todo` prototype should include a `render` function
  * Calling render should append the todo item
  * `render` should use underscore templates

### Bonus

1. Save each todo to a `List` object instead of a regular array
  * `List` should have its own constructor
  * Modify your `Todo` constructor to add items to an instance of `List`
