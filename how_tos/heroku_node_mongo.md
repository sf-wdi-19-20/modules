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
  $ echo "web: npm start" >> Procfile
  ```

3. Open your project in Sublime. In your `server.js` file, where you get your server started, change the `port` argument in your `app.listen` function so that it looks for a `proccess.env.PORT` environment variable first.

  ```js
  app.listen(process.env.PORT || 3000)
  ```

### Heroku MongoLab

In bash we want to add the following to get a Mongo database added to our Heroku project.

```bash
 heroku addons:create mongolab
```
At this point, the command line may ask you to enter a credit card number. Heroku charges for some services, or if you go over some data limits. With the tools we're using and the size of our projects' data, everything should be free.  If you had to enter in a credit card, run the `heroku addons:create mongolab` command again.



Then we want to go to our `models/index.js` file and add the following to the `mongoose.connect` method.

```javascript
mongoose.connect( process.env.MONGOLAB_URI ||
			   process.env.MONGOHQ_URL ||
			   "YOUR OWN LOCAL URL HERE")
```

And we are ready to integrate mongolab.


## Dependencies and Bower Integration

Check your `package.json` to make sure that all your depenedencies are present. If something is missing install it. For example, run the following if you're using Bower.io but don't have it listed in `dependencies`:

```bash
npm install --save bower
```


You should now add a `start` script for your application in your `package.json`.

`package.json`

```javascript
...
  "scripts": {
    "start": "node index.js",
    "postinstall": "bower install"   // <---- only need this line if you're using Bower
   }
...
```

This is assuming your main application file is called `index.js`. If your main file is called something else, adjust the script to use your file name.

## Deploying

Now that you're potentially all setup then you just need to `git add` and `commit`.


```bash
git add . -A
git commit -m "deploy attempt number"
git push heroku master
```

If you missed a step just ask for help. Otherwise you should be able to visit your application by saying the following:

```bash
heroku open
```
