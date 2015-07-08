# How to Set Up an Express Project

1. Create a directory for your project and `cd` into that directory

  ```
  $ mkdir myapp
  $ cd myapp
  ```

2. Run `npm init` to create your `package.json`, which will keep track of your dependencies. Press enter to go through all the options it presents (you many want to change entry point (filename of your server) or version number, but it's also fine not to change anything, especially if you're making a test app).

  ```
  $ npm init
  ```

3. Install Express and save it to the dependencies list

  ```
  $ npm install --save express
  ```

4. Install body-parser to handle data passing through your application (e.g. data from forms and/or AJAX requests)

  ```
  $ npm install --save body-parser
  ```

5. Create a file for your server

  ```
  $ touch server.js
  ```

6. Open your project in Sublime, and set up your server in `server.js`

  ```js
  // require express framework and additional modules
  var express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

  // tell app to use bodyParser middleware
  app.use(bodyParser.urlencoded({extended: true}));

  // set up root route to respond with 'hello world'
  app.get('/', function (req, res) {
    res.send('hello world');
  });

  // listen on port 3000
  app.listen(3000, function () {
    console.log('server started on localhost:3000');
  });

  ```

7. Back in the terminal, in your project's root directory, run either `node server.js`, `npm start`, or `nodemon` (<a href="http://nodemon.io" target="_blank">docs</a>). All three commands do the same thing, which is start your server :)

8. Visit `localhost:3000` in the browser. Make sure you see your "hello world" response before moving further.

## More Tips

* If you're putting your project on GitHub, it's best-practice to include your `node_modules` directory in a `.gitignore` file (put this in your project's root directory).
  * Any file, directory, or path included in `.gitignore` will remain untracked by GitHub. Installing node modules generates a lot of extra files, and it's nice to keep them out of your GitHub repo to save space.
  * Any developer who wants to clone your project on GitHub and run it locally can run `npm install`, and all the node modules listed in your `package.json` will be installed onto their local machine.
