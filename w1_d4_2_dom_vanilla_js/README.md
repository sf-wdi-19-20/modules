#The DOM and Vanilla JS

| Objectives |
| :--- |
| Manipulate the DOM using plain vanilla Javascript |

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
  <script src="scripts/funky-script.js"></script>

  <!-- REMOTE SCRIPT (FROM CONTENT DELIVERY NETWOR(CDN)) -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</head>
<body>
  <!-- YOUR HTML -->
</body>
</html>
```

#### Select Elements

Get DOM element by selector
```
var h1Elements = document.querySelector("h1")
var myId = document.querySelector("#myId")
var primaryButtons = document.querySelector("btn-primary")
```

###### Or

Get DOM element by id
```
var el = document.getElementById("#myId");
```

Get DOM elements by class
```
var arr = document.getElementsByClassName(".myclass");
```

Get DOM elements by HTML tag
```
var el = document.getElementsByTagName(".myclass");
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
2. Add an event listener to the craigslist logo that when you click it changes the font color of links to green. (hint: make sure to prevent the default behavior)
3. Make it so when you click the logo it changes the link color to either blue, red, green, or yellow. (Cragslist DISCO!). Can you get it to select a random color?
4. Make it so when you click any link a popup comes up with the link's text.
5. When you mouse over links, make their background color turn to pink. Can you make it turn back to white when the mouse is not hovering over the element?

### Stretch Challenges - Making your Portfolio Site Dynamic

6. Add a contact form (email, subject, messasge) to your portfolio project. Remember to use Bootstrap's input styling.
8. When the form is submitted make an alert display the text that is typed into the text field. Do you need to prevent the default behavior?
1. Add an "about me", "projects", and "background" buttons to your site. When they are clicked let a different corresponding section appear and hide the other two without reloading the page. This is called "pill tabs."
2. For extra credit: Add two more dynamic elements to your portfolio site.
3. If you are looking for more, go back to the stretch challenges from js_functions lesson this morning.

# Further Reading
