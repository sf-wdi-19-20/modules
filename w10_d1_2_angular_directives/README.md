# Angular Directives Challenges

| Objectives |
| :--- |
| Explain when to use Angularjs directives. |
| Find appropriate built-in directives through online resources. | 
| Practice using common directives: |
| ... show and hide data with `ng-hide`. |
| ... filter data in an `ng-repeat` with a custom filter. |
| ... pluralize words with `ng-pluralize`. |
| ... insert partial templates with `ng-include`. |
| ... validate input with `ng-submit`. |

## Base Challenges

**Goal: Build out this morning's todo app to gather and display richer data about todos, in a more user-friendly format.**

1. Pluralize the message for your todo count. e.g. "You have 4 things to do." or "You have nothing to do."
1. Add an attribute called `created_at` to your todos and use the `date` filter to display this time in a format like "posted on Monday April 24, 2015". Hint: use `new Date()`.
1. Move your todo formatting into a partial, and use the `ng-include` directive to format todos as you iterate over them.

**Goal: Update your todo input to properly submit a form through Angularjs and validate user data.**

1. Update your todo form to use an actual `<form>` with `ng-submit`.
1. Require the user to input a `todo.title`, and disable the form submit button if the title is not valid. Hint: `todo.title.$invalid`.

**Goal: Allow users to mark todos as completed, and visually distinguish between complete and incomplete todos.**

1. Add a boolean attribute called `completed` to each todo.
1. Make a button for each todo that, when clicked, sets the `completed` value of that todo to true.
1. Use the directive `ng-class` to conditionally set a class that strikes through a todo's title and turns the todo's text grey if that todo is completed. Hint: Look up the `ng-class` docs.

## Stretch Challenges

**Create categories of todos, or kinds of todos, and let the user filter down to see only one kind of todo at a time.**

**Goal: Set up kinds of todos.**

1. Add an attribute to your todos that gives each todo a `kind`, and decide 2-3 kinds of todos your users might have.
1. Add a radio button to your new todo form that allows the user to pick one of the existing `kind`s for the new todo.

<!--1. Update your new todo form's validations to require that the user select a kind.-->
 
**Goal: Allow the user to filter the kinds of todos displayed.**

1. Use `filter` to display only one kind of todo on the page.  
1. Add a radio button selector where the user will be able to select which kind of todos to view. Include an "All" button that displays all todos. 
1. Instead of a radio button, convert to a checklist where the user can select one or more kinds of todos to display.

**Goal: Allow the user to create their own kinds/categories of todos.**
 
1. Add a new form that lets the user add new kinds. Validate that the user is not adding blank kinds.
2. Validate that the user is not adding a kind that already exists.
2. When a user adds a kind, make that kind available as a selectable radio button on the new todo form.
