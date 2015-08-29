# MEAN Stack: Node/Express/Mongo Review

## Why MEAN stack?

MEAN allows developers to build full-stack applications using only JavaScript (and of course HTML and CSS).

**<span style="font-size:200%">M</span>ongoDB**
* uses JS for its query language (instead of the more traditional SQL -- which is why it's a *NoSQL database*) 
* stores data in *documents*, a JSON-like format

**<span style="font-size:200%">E</span>xpress** 
* unopioninated, minimalist, fast **back end** web framework for use with Node.js
* a thin layer over Node.js that provides extra convenince methods written in JS

**<span style="font-size:200%">A</span>ngularJS**
* **front end** web framework written in JS
* opinionated, but powerful and extensible
* replaces jQuery and underscore from our first stack

**<span style="font-size:200%">N</span>ode.js**
* platform for creating web servers in JS
* uses non-blocking asynchronous input and output that works great for real-time applications
* extensible with node modules

## Questions and Answers App

To review Node, Express, and Mongo, we'll create a server-side only application. Applications without a front end are often called "headless". Many real world APIs are written as "headless" apps that allow access from sites on other domains.  Separating, or decoupling, the front and back end can allow more flexibility.  We'll add an angular front end to this project to complete our MEAN stack, but for today we're going to build only the server side API and test it with Postman. 

##