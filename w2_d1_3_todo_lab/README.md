#To Do Lab

Objective: Build a to do app using HTML, CSS, and JavaScript with jQuery.

##Minimum Requirements

1. The user will be able to:
	* add tasks to their to do list
	* see the tasks that are currently on their list
	* cross off tasks by clicking them
	<br><br>
2. Each task will include:
	* a task title
	* a description of the task
	<br><br>
3. Read about [Client-Side Templating](http://www.smashingmagazine.com/2012/12/05/client-side-templating/) to prepare for tomorrow!

##Bonuses
**Goal: Starter Tasks**

When the page loads, display all of the starter items hard coded into your `scripts.js` file.

1. In `script.js`, user jQuery to create a new `li` for each of the tasks in your hard coded to do list. Hint: use a loop or an iterator!
2. Update the loop you wrote above so that it also appends each new task to the `ul` in the view.
3. Encapsulate your loop code in a function called `displayTasks`. Call the function in your code.

**Goal: Give each task a due date.**

Consider using the JavaScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) data structure.

1. Think about the places where you'll have to make changes:
	* the list item view will have to display the quantity
	* the item input form will need another blank for the quantity
	* the data model will have to include the quantity
2. Change the hard coded tasks in your HTML to display a due date.
3. Update the form to ask for a due date.
4. Update the form submit event handler so that the new tasks it creates match the format you used in your hard coded HTML.
5. Change the data model to store the due date.
1. Change the styling of a task if its due date is soon.

**Goal: Delete/Remove Tasks**

1. Instead of crossing off tasks when clicked, remove the task from the view and the model.
1. Building off part 1, add a delete button to each task. Update your code so that the task is only deleted when the button is clicked.

**Goal: Input Validation**

1. Add a check for empty form inputs. If a task's title or description is empty, don't add it to the page.

1. Give the user some feedback if their task is rejected because of an empty input field. Consider using a [Bootstrap Alert](http://getbootstrap.com/components/#alerts).

**Goal: Styling / Branding**

1. Add nicer styling to your page to make it more attractive to users. Get as creative as you want!  

**Super Stretch Goal: Edit Tasks**

1. Create a form to edit tasks. Add the form to each task's `li`.
1. Add an edit button to each task display, and style the form so that it *toggles* when the edit button is clicked. Hint: search "jQuery toggle form display."
1. Use the form data to update the task in the view and the model.

##Workflow & Submission

1. You may choose to start on this project in two ways. Either:
  (a) Fork this repository, and clone it onto your local computer, OR
	(b) Create a repo for the To Do app on your local computer.

1. Meet the minimum requirements listed above. Use the [module notes](https://github.com/sf-wdi-19-20/staging-modules/tree/master/w2_d1_2_jquery_forms_app) as a reference.

1. Push your To Do app to a remote repo on your GitHub account.

1. Submit the link to your To Do app repo in the [homework submission form](https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform), along with any questions or comments from the pre-reading.
