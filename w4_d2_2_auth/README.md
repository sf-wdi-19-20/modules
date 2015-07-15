# Authentication

| Objectives |
| :--- |
| Review the request and response cycle and the stateless web. |
| Use Express to add sessions to your application. |
| Implement basic authentication in your application. |

| Concepts | Tools | Activities |
| :---: | :---: | :---: |
| Stateless web, sessions, authentication | Node, Express, Postman | Challenges |

![cookiemonster](http://media0.giphy.com/media/EKUvB9uFnm2Xe/giphy.gif)

### Motivation (Why?)

Every HTTP request/response stands on its own. Because the request is the only context the client needs understand the response, the HTTP protocol is said to be *stateless*.

Sometimes we need state to persist across requests; this is where sessions come in. One example is a shopping cart. Without sessions, your shopping cart would be empty as soon as you navigated to the next page!

User authentication is another common example. When a user logs in, we'd like them to stay logged in until they log out or their session expires.

User/password combinations are a common way of authenticating. They are relatively insecure but provide sufficient security for most web applications. Thumb prints, driver's license, etc. are other ways we authenticate ourselves in the physical world.

### Analogy (What?)

Imagine you're in the habit of having deep conversations with a close friend every Sunday night. Every time you speak, you're able to pick up right where you left off. You're able to do this because you both have the context provided by previous conversations. The context you both share is analogous to a session.

Without sessions, each request/response is self contained. It would be as though you and your friend both had Alzheimer's.

### Key Snippets

```js
//
// server.js
//

var session = require('express-session');

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'OurSuperSecretCookieSecret',
  cookie: { maxAge: 60000 }
}));
```

Without User model

```js
//
// server.js
//

...

app.get('/login', function (req, res) {
  var html = '<form action="/api/sessions" method="post">' +
               'Your email: <input type="text" name="userName"><br>' +
               '<button type="submit">Submit</button>' +
               '</form>';
  if (req.session.user) {
    html += '<br>Your email from your session is: ' + req.session.user.email;
  }
  console.log(req.session);
  res.send(html);
})

app.post('/api/sessions', function (req, res) {
  req.session.user = { userName: req.body.userName }
  res.redirect('/login')
});

...

```

With User Model

```js
//
// user.js
//

...

UserSchema.statics.authenticate = function (email, password, callback) {
  this.findOne({email: email}, function (err, user) {
    console.log(user);
    if (user === null) {
      callback('Can\'t find user with email ' + email, user);
    } else if (user.checkPassword(password)) {
      callback(null, user);
    }
  });
};

UserSchema.methods.checkPassword = function (password) {
  return password == this.password;
};
```

```js
app.post('/api/sessions', function (req, res) {
  User.authenticate(req.body.email, req.body.password, function(error, user) {
    if (error) {
      res.send(error)
    } else if (user) {
      req.session.user = user;
      res.redirect('/login');
    }
  });
});
```

## Challenges

### Docs & Resources

* [express-session README](https://github.com/expressjs/session)

### Basic Challenges

1. Install ```express-session``` and require it in the express ```server.js``` file of an existing, working express project.
2. Use ```app.get('/login')``` to create a ```GET``` route to the login form.
3. Use ```app.post('/api/sessions')``` to create a ```POST``` route to create a new session. (Creating a new session is the same as logging in!).
4. Try logging in with your username. It should display your username.
5. In developer tools look at Resources > Cookies. What is the Cookie's value?
6. Log the ```req.session``` and ```req.sessionID``` to the console. Is the sessionID the samea s the cookie value? These are generated behind the scenes by ```express-session```.
5. What happens when you or nodemon restarts your server?
6. Change ```userName``` to ```email``` and add a ```password``` field to the html you are sending to your ```app.get('/login')```
7. Update the req.session.user object to have email and password.
8. Pass the email and password form data to the ```User.authenticate()``` method.
7. What happens when you login now? Is the user found?
8. ```db.users.insert()``` at least one user to your ```mongo``` REPL console. Make sure the user has an email and password. (more on encrypting passwords tomorrow)
9. Low try to login with the email and password of one of the users you just added to your DB. (make sure your ```mongoose.connect()``` is pointing to the same db you added the users to. Check which db you are in in the mongo REPL with: ```> db```)

### Stretch Challenges

1. What would a ```/logout``` route method look like?
2. Can you set a "remember me" function?
3. What other data could you save to the session?

### Evening Challenges

[Mongoose Relationship Lab](https://github.com/sf-wdi-19-20/modules/tree/master/w4_d2_3_relationship_lab)
