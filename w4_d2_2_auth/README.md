# Authentication

| Objectives |
| :--- |
| Review the request and response cycle and the stateless web. |
| Use Express to add sessions to your application. |
| Implement basic authentication in your application. |

| Concepts | Tools | Activities |
| :---: | :---: | :---: |
| Stateless web, sessions, authentication | Node, Express, Postman | Challenges |

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
...

var session = require('express-session')
var cookieParser = require('cookie-parser')

...

app.use(cookieParser('miyahamiyahimiyahemiyahoho'));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'OurSuperSecretCookieSecret',
  cookie: { maxAge: 60000 }
}));
```

```js
//
// server.js
//

...

app.get('/login', function(req, res) {
  var html = '<form action="/" method="post">' +
               'Your name: <input type="text" name="userName"><br>' +
               '<button type="submit">Submit</button>' +
               '</form>';
  if (req.session.user) {
    html += '<br>Your username from your session is: ' + req.session.user.userName;
  }
  res.send(html);
})

app.post('/', function(req, res){
  req.session.user = { userName: req.body.userName }
  res.redirect('/login');
});

...

```

```js
//
// user.js
//

...

UserSchema.statics.authenticate = function (email, password, cb) {
  this.find({
    email: email
    },
    function (err, user) {
      if (user === null){
        throw new Error("Email does not exist");
      } else if (user.password == password){
        cb(null, user);
      }
    });
};
```

## Challenges

### Docs & Resources

* [express-session README](https://github.com/expressjs/session)

### Basic Challenges

**Goal: Add insecure authentication to one of your existing Express projects.**

1. Initialize ```express-session``` and ```cookie-parser``` to your express server file.
2. create a ```GET``` and ```POST``` routes to `/login`
3. Try logging in with your username.
4. Log the ```req.session``` and ```req.sessionID``` to the console. These are generated behind the scenes by ```express-session```.
5. What happens when you or nodemon restarts your server?
6. Change ```userName``` to ```email``` and add a ```password``` field.
7. Can you login with both those now? Can you see them in the session? Do you really want to store the password in the session? :) (more on encrypting passwords tomorrow)
8. Add an ```authenticate``` method to your User model using ```UserSchema.statics```
9. Add a few user documents to the users collection in db using the mongo CLI. Set emails and plain-text passwords (more on password encryption tomorrow!)
9. Use the ```User.authenticate(email, password, function(data){})``` method to authenticate the user.

### Stretch Challenges

1. What would a ```/logout``` route method look like?
2. Can you set a "remember me" function?
3. What other data could you save to the session?

### Evening Challenges

From the morning.
