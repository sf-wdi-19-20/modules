#Node Continued

##JavaScript Runtime
- Node operates on the V8 Google Chrome JavaScript runtime.
- This runtime is what is responsible for interpreting the JavaScript and mapping it over to machine commands.
- Commands are executed through an architecture known as the "call stack." Currently-processing requests are part of the call stack, and come from the process queue.

##What is Node?
- Node JS is an interface that allows you to write server-side code in JavaScript.
- This interface provides the ability to handle requests and issue responses.
- It is asynchronous, and as a result, can be written in a way that will not block the call stack.
- Node is also a server that will allow your code to be accessible to the public and be able to issue responses for certain requests.

##First Server with Node

```javascript
// server.js
var http = require("http");

function greet(req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Hello World");
	res.end();
}

var server = http.createServer(greet);

server.listen(3000);
```

##Express JS
- Express is an API to Node JS that makes development more intuitive and quicker.
- Express allows us to easily set up routes that will trigger actions such as rendering pages.

##NPM and NPM Init
- NPM stands for Node Package Manager, and is a tool that allows us to easily download community-built Node packages.
- Initialize new Node project with NPM: `npm init`
- Install NPM packages: `npm install --save express`
- NPM works with package.json, which is a list of dependencies that can be installed on other computers and servers.

##Hello World in Node

```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
})

var server = app.listen(3000);
```

##What is Node Good For?
- Node really shines when it comes to heavy input-output type operations.
- Realtime services like chat applications or conferencing platforms benefit from using Node.
- APIs are also input/output heavy, and they also tend to work with JavaScript out of the box (think JSON). What better platform than Node?

##An API Application with Node
- We will be building in class today a Node application that sends and receives JSON.
- We will try to replicate relatively the same functionality as http://daretodiscover.herokuapp.com/users.
- Here are the steps we will follow:
	- Step 1: Set up a brand new Node project using NPM.
	- Step 2: Install relevant NPM modules for your project (Express and Body Parser).
	- Step 3: Create a blank array called `users` that will hold all of the user objects.
	- Step 4: Create the route `GET /users`. It should send back the `users` array as JSON.
	- Step 5: Create the route `GET /users/:id` that has an ID parameter that will send back a JSON response of a particular user based on their ID.
	- Step 6: Create the route `POST /users`. It should add a new user object to the array `users`.
	- Step 7: Use Postman to test each of these routes.