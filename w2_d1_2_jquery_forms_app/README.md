#jQuery Continued

| Objectives: students will be able to . . . |
| :--- |
|  |
| set up a new web development project to use jQuery |
| change the structure of the DOM using jQuery |
| gather user input from forms |

## Motivation

jQuery is a small, feature-rich JavaScript library. It makes things like DOM manipulation, event handling, and animation much simpler with an easy-to-use API that works across a multitude of browsers. It allows us to write expressive code and overcome browser compatibility issues in a way that is faster and more convenient than writing plain JavaScript.

## Setup

###CDN

As we've seen with Bootstrap, Content Delivery Networks (CDNs) serve distributed files to users that are visiting websites. CDNs are an alternative to serving files yourself, and they offer a few significant benefits versus serving your own copy of popular libraries:

- Auto-updating: Most CDNs allow you to link to the "latest" version of a library, so you don't have to monitor for updates
- Faster load times through caching: When you visit a website, your browser may "cache" its content, saving it so it's faster and easier to access later.  It's likely your users have been on other sites that link to CDNs for a popular library, so the file may already be cached by their browser.
- Reduced hosting costs: Hosting a website (making it available online) often gets more expensive as you serve more data yourself.

Include jQuery in your projects with a CDN. Find the jQuery CDN either by googling "JQuery CDN" or heading to [cdnjs](https://cdnjs.com/) and searching for the JS library you're looking for.


###Documentation

It is necessary to reference the [jQuery Documentation](http://api.jquery.com) in order to get the most out of the library.

The website refers to its **API Documentation**.


###APIs

An *Application Programming Interface* is a set of predefined functions that can be called on in order to execute specific commands. API's will typically have documentation outlining proper usage.

Thinking of a restaurant: the menu is the API, ordering is executing an API call, the food is your output.

## Demo: Project Setup

In class today we'll be looking at a Shopping List app. This afternoon and tonight, you'll be making a To Do List app using a similar process.

###Basic Challenges

1. Start your To Do List project by creating a directory with the necessary files for your site.
	```
	todo
	├── README.md
	├── index.html
	├── script.js
	└── style.css
	```

1. Add jQuery to your project with a CDN.  
1. Add Bootstrap's CSS to your project, and create a `div` with class `container` to hold the page's content.

###Stretch Challenge
1. Curious why we often add stylesheets in the `<head>` and scripts at the end of the `<body>`? See [Yahoo's Performance Rules](https://developer.yahoo.com/performance/rules.html).

##Demo: Design

Think about what your user needs. For a shopping list app, we'd like the user to be able to at least:
* add items to the list
* see the items that are currently on their list
* check off items from their list

What does your user need to remember about each item on their list?
* the item name

A cool additional feature would be to let the user remember how many of each item they need. It'd also be nice to let the user edit the shopping list items, in case, for instance, they decide to change the item name to specify their favorite brand.

For today, though, we'll focus on the minimum requirements.

These requirements will help us design a *model* and *view* for our user's data.  We'll look at the process of building the shopping list app from the outside in, so we'll start with the view.

###View

Based on the app's requirements, our view will need a list of items and a form to enter in new items.

First, a form!

```
<form id="new_shopping_item">
  <div class="form-group">
    <input class="form-control" id="item_name" placeholder="What do you need to get?" autofocus>
  </div>
  <div class="form-group">
    <input type="submit" class="btn btn-success" value="Add to List!">
  </div>
</form>
```


Now, a list of shopping items.  We'll want to add and remove items *programatically* later, but for now let's *hard code* in some examples to get started on an HTML structure.

```
<ul id="shopping_list"></ul>
  <li class="item">Apples</li>
  <li class="item">Tea Bags</li>
  <li class="item">July BART pass</li>
</ul>
```

###Challenges

1. In your `README.md`, list minimum requirements for a To Do app. What does a user need to remember about each task?

1. Update your `index.html` file to include a form and space for a list of tasks.

1. Open your `index.html` in your browser to check your progress.

##jQuery [Events](http://api.jquery.com/category/events/) and Form Data

jQuery makes event handling easy and consistent across browsers. Event handlers with event-type names such as `.click()`, `.mousedown()`, `.change()`, and so on take a function as a parameter. Generally, though, we'll use `.on()` and specify both the event type and the event handler function.

###Example: Hover and Click Events

```
var $allLis = $("li");
$allLis
.hover( function() {					//using the event as the function
    $(this).css({"color": "orange"});
})
.on("click", function() {	//using on method and passing in an event (preferred)
	var itemName = $(this).text();
    console.log("User clicked on: " + itemName + "!");
});
```


###Basic Challenges

Capture the form data the user submits.

1. Use jQuery to set up your `script.js` file so that your JavaScript will run after the DOM elements are loaded.

2. Write a jQuery selector that finds the form in your `index.html`. Save the form in a variable. **Note: it's good practice to start variable names with $ when the variables store jQuery objects.**

3. Add a "submit" event handler to your form. The event handler should `console.log` the text the user entered into the form. Hint: this is the input element's `value`. Look up how to access it by searching "jQuery form value."  Hint: Remember to prevent the default submit behavior!

### Stretch Challenges

Click tasks to mark them as done.

1. Write a jQuery selector that finds the unordered list in your `index.html`. Save the unordered list in a variable.

2. Add a "click" event handler to the unordered list that add the class "done" to a task's list item when that task is clicked.

3. Create a custom style in your `style.css` to give a different appearance to items with the "done" class.


**Why do we add one event handler to the whole list instead of adding one event handler for each element? Read about [event delegation](http://learn.jquery.com/events/event-delegation/).**



##Model  
We want the user to be able to save a shopping list, so we have to model that list somehow and store the data somewhere. 

How would you model:
* a shopping list item?
* the whole shopping list?  

```
var item1 = "toothpaste";
var shoppingList = ["baking soda", item1, "notebook"];
```

###Data Storage

Now that we have these models, where do we actually store the user's shopping list data?

Eventually, we'll learn more advanced ways to store data. For now, we'll simply store our data in our `script.js` file.

###Challenge

1. Hard code three tasks into a data structure in your `script.js` file.

##Element Creation

We've seen that JavaScript gives us tools to change the contents and style of existing DOM elements. It also lets us change the structure of the DOM - adding and removing elements while the site is running. Of course, jQuery gives us a way to do this too. Each of the code samples below creates a new `p` element and adds it to the DOM under the element with id "header-main".

Standard DOM API

```
var p = document.createElement('p');
p.appendChild(document.createTextNode('Hello WDI!!!!!'));
var logo = document.querySelector('#header-main');
logo.appendChild(p);
```

jQuery's API

```
var newP = $('<p>Hello WDI!!!!!</p>');
$('#header-main').append(newP);
```

### Challenges

1. Select the `ul` from your `index.html` and save it in a variable.
2. Use jQuery to create a new `li` for the first task your to do list data and append the new list item to the `ul`.

##Connecting the Model and View!

We can get user's data in through the form. We can display the data we have saved in our JavaScript file. Let's connect the two.

###Challenges

1. Update your form's submit event handler to add new tasks into your to do list array instead of just `console.log`ing them.
2. Update your form's submit event handler to add the new tasks to the view by making `li`s for them and appending them to the `ul`.


##Bonus: [Animations](http://api.jquery.com/animate/)

We can use `.animate()`, which takes an object representing a CSS style and a time (in milliseconds). The method then changes the existing CSS to the new style in the given amount of time. See example below.

	```
	// Collapse a search bar
	$("#search").animate({width: '100px'}, 5000)
	```

###Stretch Challenge: Animation

1. Update your list click event handler to also fade out a list item to 0.5 opacity over 1 second when it's clicked.

##Docs & Resources

[You Might Not Need jQuery](http://youmightnotneedjquery.com/) shows the feature overlap among JavaScript and various JavaScript libraries -- with coded examples!

[jQuery docs on DOM Manipulation](https://api.jquery.com/category/manipulation/)
