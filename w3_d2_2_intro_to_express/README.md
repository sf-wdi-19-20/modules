#Intro to Express

| Objectives |
| :--- |
| Deploy a local Node web server with Express |

| Concepts | Tools | Activities |
| :---: | :---: | :---: |
| Frameworks, Packages/Libraries/Modules | Node, NPM, Express | Challenges |

### Motivation (Why?)

Express is an unopinionated server-side javascript MVC framework that runs on a NodeJS server. It is a trending

### Analogy (What?)

### Key Snippets

#Challenges

### Docs & Resources

1. [Starting an Express Project](http://expressjs.com/starter/installing.html)
2. [Express Hello World](http://expressjs.com/starter/hello-world.html)
3. [Express Basic Routing](http://expressjs.com/starter/basic-routing.html)
4. [Express Static Files](http://expressjs.com/starter/static-files.html)
5. [Express res.render()](http://expressjs.com/4x/api.html#res.render)

### Basic Challenges

1. Install Node & NPM [https://nodejs.org/download/](https://nodejs.org/download/)
2. Start an Express project called ```my-first-server```
3. Make a route to ```/hello``` that returns "Hello World"
4. Give your server another route to ```/users``` and return an array of two users with names and ages. (hint: use ```res.json()```)
5. Give your server another route to ```/books``` and return an array of three books with titles.
6. Use a clone of a jQuery, Underscore, Bootstrap project you've already done to query and display your ```/books``` endpoint. (hint: use ```$.get('localhost:3000/books', function(data) {})```)

### Stretch Challenges

2. Include basic static files (```styles.css```, ```scripts.js```, and ```index.html```) in a folder called ```public```
3. Change your root route ```/``` to render the template ```index.html``` (hint: ```res.status(200).render('index')```)
