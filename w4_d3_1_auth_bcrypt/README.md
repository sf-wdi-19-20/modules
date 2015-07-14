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

1. Initialize a new Node project and install `express`, `body-parser`, and `ejs`.

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

### Setting Up `Mongo`

Now we don't have models yet so that's as good as any place as any to start.

#### Exercise

1. Write a `userSchema` for your Users. It should have the following: **email**, **firstname**, **lastname**, **passwordDigest**.
2. Define a `User` model using your `userSchema`.


#### Creating A User Model

Let's begin with a more organized approach.

```
mkdir models
touch models/index.js
touch models/user.js
```

Let's write some logic in our `models/index`.


`index.js`

```
module.exports.User = require("./user");
```

Let's add some code for our `User`.

```javascript

var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: String,
  passwordDigest: String
});

userSchema.statics.createSecure = function (email, password, cb) {
  var that = this;
  bcrypt.genSalt(function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      console.log(hash);
      that.create({
        email: email,
        passwordDigest: hash
       }, cb)
    });
  })
};

userSchema.statics.encryptPassword = function (password) {
   var hash = bcrypt.hashSync(password, salt);
   return hash;
 };


userSchema.statics.authenticate = function(email, password, cb) {
  this.find({
     email: email
    },
    function(err, user){
      if (user === null){
        throw new Error("Username does not exist");
      } else if (user.checkPassword(password)){
        cb(null, user);
      }

    })
 }
userSchema.methods.checkPassword= function(password) {
        return bcrypt.compareSync(password, this.passwordDigest);
};


var User = mongoose.model("User", userSchema);

module.exports = User;

```

Be sure to install bcrypt

```bash
npm install --save bcrypt
```


### Creating A User

Let's go into the node terminal to play with our model.

```javascript
var db = require("./models");
db.User.
  createSecure("foobar", "foobar", function(err, user){
    console.log("success!", user);
  });
```


### Putting It Together

Let's add our models to our app.

`simple_login/app.js`

```js
var express = require('express'),
    bodyParser = require('body-parser'),
    db = require("./models"),
    app = express();


```

Let's add a `POST /users` route to accept user signup requests.

```javascript
// where the user submits the sign-up form
app.post("/users", function (req, res) {

  // grab the user from the params
  var user = req.body.user;

  // create the new user
  db.User.
    createSecure(user.email, user.password,
    function(){
        res.send("SIGNED UP!");
      });
});

```


The complete code is just the following:


`simple_login/app.js`


```javascript
var express = require('express'),
    bodyParser = require('body-parser'),
    db = require("./models"),
    app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/signup", function (req, res) {
  res.send("Coming soon");
});

// where the user submits the sign-up form
app.post("/users", function (req, res) {

  // grab the user from the params
  var user = req.body.user;

  // create the new user
  db.User.
    createSecure(user.email, user.password,
    function(){
        res.send("SIGNED UP!");
      });
});

app.listen(3000, function () {
  console.log("SERVER RUNNING");
});
```

```bash
curl --data "user[email]=foobar&user[password]=foobar" localhost:3000/users

```

## Logging In: Part 1 -- Setup

Let's add some routes to be able to login.

`simple_login/app.js`

```javascript

app.post("/login", function (req, res) {
  var user = req.body.user;

  db.User
    .authenticate(user.email, user.password,
    function (err, user) {
          res.send(user);
    });
});

```

Then test the route

```
curl --data "user[email]=foobar&user[password]=foobar" localhost:3000/login

```

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
