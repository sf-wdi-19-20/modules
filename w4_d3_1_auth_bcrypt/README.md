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

2 Test your `POST /login` route with Postman. Check that it sends the authenticated user as a response.

  TODO: Add image with sample Postman request/response


### Creating Sessions

To introduce sessions we will need the `express-session` middleware.

```bash
npm install --save express-session

```


Then we add it to the list of require statements


`simple_login/app.js`

```javascript
var express = require('express'),
    bodyParser = require('body-parser'),
    db = require("./models"),
    session = require("express-session"),
    app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'super secret',
  resave: false,
  saveUninitialized: true
}))

```

Then your routes to see if they have a `set-cookie` header

```
curl --data "user[email]=foobar&user[password]=foobar" -i localhost:3000/signup
curl --data "user[email]=foobar&user[password]=foobar" -i localhost:3000/login
```


Notice the headers have a `set-cookie` key and value. Now we can create some special login functionality to save a user's data in the session.

`simple_login/app.js`

```javascript

app.use("/", function (req, res, next) {

  req.login = function (user) {
    req.session.userId = user.id;
  };

  req.currentUser = function (cb) {
     db.User.
      find({
          id: req.session.userId
      },
      function (err, user) {
        req.user = user;
        cb(null, user);
      })
  };

  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  }

  next();
});

```

## Logging In: Part 2 -- Routing

In our app.js we want to make sure we have the correct routing for logging in a user so let's update our login route.

`simple_login/app.js`

```javascript

app.post("/login", function (req, res) {
  var user = req.body.user;

  db.User
    .authenticate(user.email, user.password, function (err, user) {
          res.send(user);
    });
});

```

Technically after you log someone in you want to redirect them to somewhere meaningful.


`simple_login/app.js`

```javascript

app.post("/login", function (req, res) {
  var user = req.body.user;

  db.User
    .authenticate(user.email, user.password,
    function (err, user) {
          // note here the super step
          req.login(user);
          // We need to create this route
          res.redirectTo("/profile"); // redirect to user profile
      });
});

```

The user show path will be the following.


`simple_login/app.js`

```javascript

app.get("/profile", function (req, res) {
  req.currentUser(function (err, user) {
        res.send(user);
   })
});

```

However we need to play with this in the browser to verify this is working, so it's time to add some views.

## Adding Views

First let's  `mkdir` for views



### Adding A Login Path


We need a `GET /login` view and route.


`simple_login/app.js`

```javascript

app.get("/login", function (req, res) {
  res.render("login");
});

```

Then create the login view


`simple_login/views/login.ejs`

```html

<form method="post" action="/login">
  <div>
    <input type="text" name="user[email]">
  </div>
  <div>
    <input type="text" name="user[password]">
  </div>
  <button>Login</button>
</form>

```

Redirect or send data after login.

`simple_login/app.js`

```javascript

app.get("/profile", function (req, res) {
  req.currentUser(function (err, user) {
        res.send("Welcome " + user.email)
      });
});

```



## Exercises

1. Add a `GET /signup` route and view.
2. Login a user after `signup` and redirect to a `/profile` page.
