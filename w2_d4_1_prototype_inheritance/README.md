#Prototypal Inheritance

##Homework Review
- We will review your todo refactor using prototypes and constructors.
- We will build on this for the afternoon lesson on inheritance.

##Objects Revisited
- What is the point of an object?
- Let's check out a simple object literal about a person:

```javascript
{
	name: "Arun Sood",
	role: "Instructor",
	username: "arsood",
	email: "arun@ga.co"
}
```

- Let's compare that now to a constructor that accomplishes relatively the same thing:

```javascript
function Person(name, role, username, email) {
	this.name = name;
	this.role = role;
	this.username = username;
	this.email = email;
}
```

- Do you notice any differences?

##LocalStorage Refresher
- LocalStorage is a prototype function of the `window` global object.
- It allows you to save up to 5MB of data per domain locally on the browser.
- It was meant to help replace functionality that was otherwise accomplished via cookies.
- We will be using it to practice persisting data in our application (before we get on to databases of course!).

#####Saving to localStorage
- localStorage only accepts data as a string.
- If you want to save arrays or objects you must first use `JSON.stringify()` to convert them into string data.

```javascript
window.localStorage.setItem("name", "Arun");
```

#####Retrieving from localStorage
- You may use `JSON.parse()` to retrieve the data in its original format when you need it back since it will be saved as a string.

```javascript
window.localStorage.getItem("name");
```

#####Removing from localStorage

```javascript
window.localStorage.removeItem("name");
```

#####Clearing localStorage

```javascript
window.localStorage.clear();
```

##Prototypal Inheritance
- In general OOP practices, prototypes (similar to classes in other languages) can inherit properties from parent constructors and prototypes.
- We will demonstrate this through a simple library application. The starter app can be found [here](https://github.com/sf-wdi-19-20/w2_oop_book_library).

##Challenges
- Implement prototypal inheritance in your todo application.
- You will need to think about which functions are more generic and which ones are more specific. This will determine how you break things up.
