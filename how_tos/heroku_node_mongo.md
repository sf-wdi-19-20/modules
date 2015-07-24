# Deploying to Heroku with Node & Mongo

## Before You Do Anything

1. Make sure your app is under version control with `git`.  If you're not sure if your project is under version control yet, you definitely haven't been committing often enough! Run `git status` to check if your project directory is a repo. If not, run `git init` to make it into one if necessary (then commit everything you have so far).

2. Make sure you have an account with <a href="https://www.heroku.com" target="_blank">Heroku</a>.

3. Make sure you have installed the <a href="https://toolbelt.heroku.com" target="_blank">Heroku toolbelt</a>.

4. Add a new remote to your project repository that points to Heroku's servers. **NOTE: YOUR PROJECT MUST BE A GIT REPO TO CONTINUE.**

  In the terminal, from your project's root directory, run:

	```
	$ heroku create YOUR_APP_NAME
	```

  **Note:** If you don't supply a name for your app, Heroku will create a random one for you. We strongly suggest giving your app a name to personalize it and reflect its purpose.

5. Also in the terminal, from your project's root directory, run:

  ```
  $ git remote -v
  ```

  You should see something like this:

  ```
  heroku	https://git.heroku.com/YOUR_APP_NAME.git (fetch)
  heroku	https://git.heroku.com/YOUR_APP_NAME.git (push)
  origin	https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_REPO_NAME.git (fetch)
  origin	https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_REPO_NAME.git (push)
  ```

## To Start

1. In the terminal, from your project's root directory, create a `Procfile`. "Procfile" should have a capital "P", it should not have an extension, and it should be in the same folder as your main server file (usually `server.js`).

  ```
  $ touch Procfile
  ```

2. Also in the terminal, from your project's root directory, run:

  ```
  $ echo 'web: npm start' >> Procfile
  ```

3. Open your project in Sublime. In your `server.js` file, where you get your server started, change the `port` argument in your `app.listen` function so that it looks for a `proccess.env.PORT` environment variable first.

  ```js
  // server.js

  app.listen(process.env.PORT || 3000);
  ```

## Heroku MongoLab

1. In the terminal, from your project's root directory, add a Mongo database to your Heroku app:

  ```
   $ heroku addons:create mongolab
  ```

  **Note:** At this point, the terminal may ask you to enter a credit card number. Heroku charges for some services or if you go over certain data limits. With the tools you're using and the size of your project's database, everything should be free. Heroku requires you to add a card when you first set up your MongoLab link *just in case* you eventually go over the free plan limits. If you had to enter in a credit card, run the `heroku addons:create mongolab` command again.

2. Back in Sublime, add the following to the `mongoose.connect` method in `server.js`:

  ```js
  // server.js

  mongoose.connect(
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/YOUR_LOCAL_DATABASE_NAME' // plug in the db name you've been using
  );
  ```

## Dependencies (Node Modules)

1. In Sublime, check your `package.json` to make sure all your dependencies are present. If something is missing, install it. For example, run the following if you're using `express` and `body-parser` but don't have them listed under `"dependencies"`:

  ```
  $ npm install --save express body-parser
  ```

2. Now add a `start` script for your application in your `package.json`:

  ```js
  // package.json

  ...
  "scripts": {
    "start": "node server.js"
  }
  ...
  ```

  **Note:** This is assuming your main application file is called `server.js`. If your main file is called something else, adjust the script to use your file name.

## Deploying

1. You should be all set up now, so do one more `git add` and `git commit` before pushing to Heroku:

  ```
  $ git status
  $ git add -A
  $ git commit -m "ready for first deploy"
  $ git push heroku master
  ```

2. If all went well, you should be able to visit your live application by running:

  ```
  $ heroku open
  ```
