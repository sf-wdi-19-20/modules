# Authentication with Express & Bcrypt

| Objectives |
| :--- |
| Implement a password **authentication** strategy with bcrypt |
| Saved a logged-in user's data to the session |
| Implement routes for a user to `/login` and `/logout` |

## Authentication & Authorization

* TODO: Add definitions of authentication & authorization
* **Why do we hash passwords?**

## Implementing Authentication

To give users the ability to sign up and log in to our site, we'll need:

* **Express:** for building our application and handling requests
* **Middleware:**
  * `body-parser`: for handling incoming form data
  * `cookie-parser`: for handling incoming cookie data
* **Mongoose Models:** for CRUD-ing users and setting up authentication methods
* <a href="https://github.com/ncb000gt/node.bcrypt.js" target="_blank">**bcrypt:**</a> for hashing users' passwords

## Challenges: Part 1

**Goal:** Create a new Node/Express project.

1. In the terminal, initialize a new Node project and install `express`, `body-parser`, and `ejs`.

  ```
  $ mkdir simple_login
  $ cd simple_login
  $ npm init
  $ npm install --save express body-parser ejs
  $ touch server.js
  ```

  **Note:** <a href="https://github.com/mde/ejs" target="_blank">ejs</a> is a server-side templating engine that allows us to render views from our server with dynamic data.

2. Open your project in Sublime, and set up your server in `server.js` with the following code snippet:

  ```js
  // server.js

  // require express framework and additional modules
  var express = require('express'),
    app = express(),
    ejs = require('ejs'),
    bodyParser = require('body-parser');

  // set view engine for server-side templating
  app.set('view engine', 'ejs');

  // middleware
  app.use(bodyParser.urlencoded({extended: true}));

  // signup route with placeholder response
  app.get('/signup', function (req, res) {
    res.send('coming soon');
  });

  // listen on port 3000
  app.listen(3000, function () {
    console.log('server started on locahost:3000');
  });
  ```

3. In the terminal, run `nodemon` and make sure your server starts without any errors. If you get an error, read the line number and error message. Most likely, you're trying to use an undefined variable or a module that's not installed.

  ```
  $ nodemon
  ```

  **Note:** Keep `nodemon` running the entire time you're developing your application. When you need to execute other terminal commands, press `command + T` to open a new terminal tab.

## Challenges: Part 2

Goal: Write a `UserSchema` and define a `User` model.

1. In the terminal, create a new directory for `models` and create a file for your `User` model.

  ```
  $ mkdir models
  $ touch models/user.js
  ```

2. Also in the terminal, install `mongoose` and `bcrypt`.

  ```
  $ npm install --save mongoose bcrypt
  ```

3. In Sublime, open `user.js` and require your newly installed dependencies, `mongoose` and `bcrypt`.

  ```js
  // user.js

  var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    salt = bcrypt.genSaltSync(10);
  ```

  TODO: Explain salt

4. Also in `user.js`, write your `UserSchema`. Users should have the properties **email** and **passwordDigest**.

  ```js
  // user.js

  var UserSchema = new Schema({
    email: String,
    passwordDigest: String
  });
  ```

5. Continuing in `user.js`, define a `User` model using your `UserSchema` and export the model (so we can require it in other parts of our application).

  ```js
  // user.js

  var User = mongoose.model('User', UserSchema);
  module.exports = User;
  ```

## Challenges: Part 3

**Goal:** Define static and instance methods for our `UserSchema`.

TODO: Explain static and instance methods

1. In `user.js`, define methods for our `UserSchema`. These methods handle creating a user with a secure (hashed) password and authenticating a user.

  TODO: Comment this code

  ```js
  UserSchema.statics.createSecure = function (email, password, callback) {
    var that = this;
    bcrypt.genSalt(function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        console.log(hash);
        that.create({
          email: email,
          passwordDigest: hash
        }, callback);
      });
    });
  };

  UserSchema.statics.encryptPassword = function (password) {
    var hash = bcrypt.hashSync(password, salt);
    return hash;
  };

  UserSchema.statics.authenticate = function (email, password, callback) {
    this.findOne({email: email}, function (err, user) {
      console.log(user);
      if (user === null) {
        throw new Error('Can\'t find user with email ' + email);
      } else if (user.checkPassword(password)) {
        callback(null, user);
      }
    });
  };

  UserSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.passwordDigest);
  };
  ```

2. In the terminal, start up the node REPL, and create a user with our new `createSecure` method.

  TODO: Maybe take this out? Potential bugs/confusion

  ```js
  $ node
  > var User = require('./models/user');
  > User.createSecure('test@example.com', 'secretpass', function (err, user) { console.log('success!', user); });
  ```

## Challenges: Part 4

**Goal:** Add a route to create users with secure (hashed) passwords.

1. In `server.js`, require `mongoose` and our `User` model.

  ```js
  // server.js

  var express = require('express'),
      app = express(),
      ejs = require('ejs'),
      bodyParser = require('body-parser'),
      // new additions
      mongoose = require('mongoose'),
      User = require('./models/user');
  ```

2. Also in `server.js`, connect to your `test` database.

  ```js
  // server.js

  mongoose.connect('mongodb://localhost/test');
  ```

3. Continuing in `server.js` add a `POST /users` route to accept user signup requests.

  ```js
  // server.js

  // user submits the signup form
  app.post('/users', function (req, res) {

    // grab user data from params (req.body)
    var newUser = req.body.user;

    // create the new user
    User.createSecure(newUser.email, newUser.password, function () {
      res.send('signed up!!!');
    });
  });
  ```

4. At this point, your complete `server.js` code should look like the following:

  ```js
  // server.js

  // require express framework and additional modules
  var express = require('express'),
    app = express(),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    User = require('./models/user');

  // connect to mongodb test database
  mongoose.connect('mongodb://localhost/test');

  // set view engine for server-side templating
  app.set('view engine', 'ejs');

  // middleware
  app.use(bodyParser.urlencoded({extended: true}));

  // signup route with placeholder response
  app.get('/signup', function (req, res) {
    res.send('coming soon');
  });

  // user submits the signup form
  app.post('/users', function (req, res) {

    // grab user data from params (req.body)
    var newUser = req.body.user;

    // create the new user
    User.createSecure(newUser.email, newUser.password, function () {
      res.send('signed up!!!');
    });
  });

  // listen on port 3000
  app.listen(3000, function () {
    console.log('server started on locahost:3000');
  });
  ```

5. Test your `POST /users` route with Postman. Check that it creates a new user with a secure (hashed) password.

  TODO: Add image with sample Postman request/response

## Challenges: Part 5

**Goal:** Add routes for user login.

1. In `server.js`, add a `POST /login` route to authenticate a user.

  ```js
  // server.js

  app.post('/login', function (req, res) {
    var user = req.body.user;

    User.authenticate(user.email, user.password, function (err, user) {
      res.send(user);
    });
  });
  ```

2. Test your `POST /login` route with Postman. Check that it sends the authenticated user as a response.

  TODO: Add image with sample Postman request/response

## Challenges: Part 6

**Goal:** Set up sessions to keep track of logged-in user throughout our app.

1. In the terminal, install the `express-session` middleware.

  ```
  $ npm install --save express-session
  ```

2. In `server.js`, require `express-session` and set up the middleware.

  ```js
  // server.js

  var express = require('express'),
      app = express(),
      ejs = require('ejs'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      User = require('./models/user'),
      // new addition
      session = require('express-session');

  // middleware (new addition)
  app.use(session({
    secret: 'super secret',
    resave: false,
    saveUninitialized: true
  }));
  ```

  TODO: What are all these keys?

3. Now that you have `express-session` set up, add the below methods in `server.js` to save a user's data in the session:

  TODO: Comment this code

  ```js
  // server.js

  app.use('/', function (req, res, next) {
    req.login = function (user) {
      req.session.userId = user.id;
    };

    req.currentUser = function (callback) {
      User.findOne({_id: req.session.userId}, function (err, user) {
        req.user = user;
        callback(null, user);
      });
    };

    req.logout = function () {
      req.session.userId = null;
      req.user = null;
    };

    next();
  });
  ```

## Challenges: Part 7

Goal: Refactor the `POST /login` route to set the session and redirect to a user profile page.

1. After authenticating a user, log them in (by calling `req.login(user)`, which sets the session data), and redirect the user to their profile page. In `server.js`, your `POST /login` route should now look like this:

  ```js
  // server.js

  app.post('/login', function (req, res) {
    var user = req.body.user;

    User.authenticate(user.email, user.password, function (err, user) {
      // call login function (sets session data)
      req.login(user);
      // redirect to user profile
      res.redirect('/profile');
    });
  });
  ```

2. In the step above, we're redirecting the user to a route called `/profile`, which we don't have yet, so go ahead and set it up in `server.js`. For now, our profile route will respond with a welcome message.

  ```js
  app.get('/profile', function (req, res) {
    req.currentUser(function (err, user) {
      res.send('Welcome ' + user.email);
    });
  });
  ```

## Challenges: Part 8

**Goal:** Set up a login view to test our login functionality in the browser.

1. In the terminal, make a `views` directory and a view called `login.ejs`.

  **Note:** We're using the <a href="https://github.com/mde/ejs" target="_blank">ejs</a> view engine to easily render files from our server. No more `res.sendFile`!

  ```
  $ mkdir views
  $ touch views/login.ejs
  ```

2. In Sublime, open `login.ejs` and add this login form boilerplate. Writing ejs is no different from HTML, but the file must have the `.ejs` extension.

  **Note:** We use the `name` HTML attribute to send form data to the server. Setting the names `user[email]` and `user[password]` allows us to use `req.body.user` on the server-side, which gives us a user object with `email` and `password` keys.

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap css -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <title>Simple Login</title>
  </head>
  <body>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1>Log In</h1>
          <hr>
          <form method="post" action="/login">
            <div class="form-group">
              <input type="text" name="user[email]" class="form-control" placeholder="Email" autofocus>
            </div>
            <div class="form-group">
              <input type="password" name="user[password]" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
              <input type="submit" value="Log In" class="btn btn-primary">
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
  </html>
  ```

3. Now that the login view is ready, it's time for a login route. In `server.js`, set up `GET /login` to render the `login` view.

  ```js
  // server.js

  app.get('/login', function (req, res) {
    res.render('login');
  });
  ```

4. Test that you can go to `localhost:3000/login` and successfully log in your user that you created via Postman (Challenges: Part 4, #5). After logging in, you should be redirected to `/profile` with the welcome message response.

## Stretch Challenges

1. Add a `GET /signup` route and view. Hint: The `signup` view will have a form similar to the `login` view.
2. Test that a new user can sign up via the form on the `signup` page.
3. After a new user signs up, redirect them to `/login`. Test the user-flow of signing up, then logging in. After logging in, you should still be redirected to `/profile` with the welcome message response.
4. Create a route `GET /logout` that calls your `req.logout` method to destroy the session. Add a link to your site that logs out the user.