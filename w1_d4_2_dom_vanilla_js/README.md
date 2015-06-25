#The DOM and Vanilla JS

| Objectives |
| :--- |
| Manipulate the DOM using plain vanilla Javascript |
| Select DOM elements using vanilla JS selector functions |
| Detect DOM events with event listeners and trigger changes |
| Detect form submissions and display submitted data |

### Motivation (Why?)

Vanilla JS underlies all Javascript frameworks. Understanding basic JS is an important interview competence.

### Analogy (What?)

* HTML = Skeleton
* Javascript = Muscles, Brain, and Organs
* CSS = Skin and Clothes

![muscles](http://www.anselm.edu/homepage/jpitocch/genbio/antagmusc.JPG)

### Demo (How?)

#### Include JavaScript files in your project

```HTML
<html>
<head>
  <title>Funky Blog</title>
  <!-- LOCAL SCRIPTS -->
  <script src="scripts.js"></script>

  <!-- REMOTE SCRIPT (FROM CONTENT DELIVERY NETWORK (CDN)) -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</head>
<body>
  <!-- YOUR HTML -->
</body>
</html>
```

#### Select Elements

Get the first matching DOM element by selector
```
var h1Element = document.querySelector("h1")
var myId = document.querySelector("#myId")
```

Get all matching DOM elements by selector
```
var primaryButtons = document.querySelectorAll(".btn-primary")
```

--------------------------------------------------------

Get DOM element by id
```
var el = document.getElementById("myId");
```

Get DOM elements by class
```
var arr = document.getElementsByClassName("myclass");
```

Get DOM elements by HTML tag
```
var el = document.getElementsByTagName("h1");
```

#### Add Dynamic Changes to Events with Functions
Add a function
```
el.addEventListener("click", function() {
  alert("you clicked a button");
});

// Other Event Listeners
// "mouseenter"
// "mouseleave"
// "submit"
```


Change or add a style attribute value
```JS
var arr = document.getElementsByClassName('text-good');
// console.log(arr)

for(i = 0; i < arr.length; i++) {
    console.log(i)
    console.log(arr[i]);
    arr[i].style.color = "green"
    // arr[i].style.display= "none" // hide the element
}
```

Change text
```
el.innerText = "New Text!"
```

Add class
```
el.classList.add("danger")
```

Prevent Default Behavior
```
var button = document.querySelector("a#san-francisco_cta");
button.onclick = function(event){
    event.preventDefault(); // SUPER IMPORTANT PART
    alert("Hahah! Now you get me instead")
};
```

#Challenges

### Docs & Resources

* [Document Object Model docs (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/API/document)
* [Document Object Model docs (W3Schools)](http://www.w3schools.com/jsref/dom_obj_document.asp)
* [List of DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events)

### Basic Challenges:
0. Navigate to Craigslist SF.
1. Type "document" in the console. Examine this tree-structured object.
2. Use a snippet for the rest of the basic challenges.
3. Use JavaScript to change the text of the craigslist logo to "CL Disco"
2. Add an event listener to the craigslist logo that when you click it changes the font color of links to green. (hint: make sure to prevent the default behavior)
3. Make it so when you click the logo it changes the link color randomly to either blue, red, green, or yellow. (Cragslist DISCO!). (remember [#GTS](https://www.google.com/search?q=return+a+random+array+element+javascript&oq=return+a+random+array+element+javascript&aqs=chrome..69i57j0.13214j0j1&sourceid=chrome&es_sm=91&ie=UTF-8))
4. Make it so when you click any link a popup comes up with the link's text.
5. When you mouse over links, make their background color turn to pink. Can you make it turn back to white when the mouse is not hovering over the element?

### Stretch Challenges & Homework - Making your Portfolio Site Dynamic

1. Switch to your portfolio you built earlier this week and add a link to a `scripts.js` file.
2.
2. Add a contact form (email, subject, messasge) to your portfolio project. Remember to use Bootstrap's input styling.
3. When the form is submitted make an alert display the text that is typed into the text field. Do you need to prevent the default behavior?
4. Add an "about me", "projects", and "background" buttons to your site. When they are clicked let a different corresponding section appear and hide the other two without reloading the page. This is called "pill tabs."
5. For extra credit: Add two more dynamic elements to your portfolio site.
6. If you are looking for more, go back to the [stretch challenges from js_functions lesson](../w1_d4_1_js_functions#stretch-challenges) this morning.

**Important note:**

Any code we put in our `scripts.js` will be run as soon as the page loads. The browser needs a little extra time to get the DOM ready for us. You'll see the following error in the JS console if you attempt to add an event listener to a DOM element before the DOM is ready:

    Cannot read property 'addEventListener' of null

The browser gives us an event called "DOMContentLoaded" that can help us get around this issue. Try putting all of your code inside a block like this:

    window.addEventListener("DOMContentLoaded", function() {
      // all code goes here
    })

Now the code won't run until the browser finishes setting up the DOM for us.

# Further Reading
