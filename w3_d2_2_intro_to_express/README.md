#Intro to Express

| Objectives |
| :--- |
| Deploy a local Node web server with Express to Heroku |

| Concepts | Tools | Activities |
| :---: | :---: | :---: |
| Frameworks, Packages/Libraries/Modules, Deployment | Node, NPM, Express, Heroku | Build an API |

### Motivation (Why?)

Express is an unopinionated server-side javascript MVC framework that runs on a NodeJS server. It is a very, very popular and trending framework with a bevy of modules you can add to it.

### Analogy (What?)

Think of web frameworks like you are building your own computer.

Node is like the microprocessor and Express is like the motherboard of a computer and you can plug in more stuff to Express, for example any memory (database) or video card (view engine), and Node will run it all.

![computer](computer.png)

#Challenges

### Docs & Resources

1. [Starting an Express Project](http://expressjs.com/starter/installing.html)
2. [Express Hello World](http://expressjs.com/starter/hello-world.html)
3. [Express Basic Routing](http://expressjs.com/starter/basic-routing.html)
4. [Express Static Files](http://expressjs.com/starter/static-files.html)
5. [Express res.render()](http://expressjs.com/4x/api.html#res.render)

### Basic Challenges

1. Install Node & NPM
  * Standalone installer: [https://nodejs.org/download/](https://nodejs.org/download/)
  * Homebrew: [http://blog.teamtreehouse.com/install-node-js-npm-mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)
2. Start an Express project called ```my-first-server``` (directions in first express doc link above)
3. Make a route to ```/``` that returns "Hello World" (directions in next express link above ... you get the idea)
4. Make a route to ```/hello/:name``` that returns "Hello NAME_FROM_URL".
> Hint:
```
app.get("/my_name_is/:name", function (req, res) {
    res.send( "My name is " + req.params.name );
});
```

4. Give your server another route to ```/api/users``` and return an array of two users with names and ages. (hint: use ```res.json()```)
5. Give your server another route to ```/api/books``` and return an array of three books with titles.
6. Use a clone of a jQuery, Underscore, Bootstrap project you've already done to query and display your ```/api/books``` endpoint. (hint: use ```$.get('localhost:3000/api/books', function(data) {})```)

###  Stretch
7. Do [this heroku deployment tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction). The tutorial will provide you with a starter node project to push to heroku.
8. Now do what you did in the tutorial for your ```my-first-server``` project.
  * Start with ```git init``` (don't worry about putting a remote repo in github, we'll just push to heroku).
  * Skip the ```Prepare the App``` step - we're gonna use your app!
  * Do the ```Define a Procfile``` step before the ```Deploy the App``` step.
  * Make sure you're setting the port properly in the ```app.listen``` function before deploying:
  ```
  var server = app.listen(process.env.PORT || 3000, function () {
      var host = server.address().address;
      var port = server.address().port;
      console.log('Example app listening at http://%s:%s', host, port);
  });
  ```
8. Now, point your jQuery, Underscore, Bootstrap project from your local url ```localhost:XXXX``` to your public heroku url ```YOUR_APP.herokuapp.com```.
