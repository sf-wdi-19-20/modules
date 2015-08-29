# MEAN Stack: Node/Express/Mongo Review

## Why MEAN stack?

MEAN allows developers to build full-stack applications using only JavaScript (and of course HTML and CSS).  Because they use Node.js, MEAN stack applications can also scale well to handle large numbers of client requests quickly and smoothly.

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
* comes with package manager NPM, and a JS repl

## Questions and Answers App

To review Node, Express, and Mongo, we'll create a server-side only application. Applications without a front end are often called "headless". Many real world APIs are written as "headless" apps that allow access from sites on other domains. Today we'll write use Node, Express, and Mongo to write our own API, but we won't allow access from anywhere, yet.

## Project Structure Setup

We already have Node.js and MongoDB installed, so we'll start from that point. Type these instructions in your Terminal to do basic project setup. 
  
  ```bash
  $ mkdir QnA  # make a directory for your project and cd into it
  $ cd QnA
  $ git init  # turn this directory into a git repo
  $ touch README.md
  ```

Now, let's set it up as a Node.js project.

  ```bash
  $ touch server.js  # create server-side js file
  $ ls    # check that your dir has README.md and server.js
  $ npm init   # initialize a node project in this directory. fill in the answers to each question
  $ ls   # note that your dir now has package.json in it
  $ cat package.json  #  take a look at the config data npm install put into package.json
  ```

Let's install express and a few other node modules we know we'll need.

  ```bash
  $ npm install --save express   # our back end framework
  $ ls     # note that we now have a node_modules folder - thanks npm!
  $ cat package.json   # also note that package.json now lists express as a dependency for our app
  $ npm install --save body-parser   # we use this node module to parse data from requests 
  ```

Finally, we know we want to use MongoDB with mongoose, so let's set up a directory and install the module for that.

  ```bash
  $ mkdir models
  $ touch models/question.js  # this store our questions model code
  $ npm install --save mongoose   # like ActiveRecord, provides convenience methods for accessing our DB
  ```



## Resources

* <a href="http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js" target="_blank">Why Use Node.js?</a> 
