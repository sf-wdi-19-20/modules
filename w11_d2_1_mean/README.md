# MEAN Stack: Putting the Pieces Together

| Objectives |
| :--- |
| Hook up our backend (Node.js, Express, and MongoDB) with a front end (Angular.js) |
| Implement RESTful routing |
| CRUD data |

## Questions and Answers App

We're going to add a front end on our previously "headless" app.

As you go along, remember to start your server with `npm start`, or start your server and have it listen for changes with `nodemon`. Also, keep your database running with `mongod`.

## Project Structure Setup

Use your Terminal to create the front-end files. Navigate to your QnA app from yesterday.

```bash
cd QnA
mkdir public
cd public
mkdir scripts
touch scripts/app.js
mkdir views
touch views/index.html
cd views
mkdir templates
touch templates/home.html
touch templates/answers.html
cd ../..
```

## Server File Modifications
Now that we have our file structure setup, we're going to modify our `server.js` file. Add this near the top of the file, after your `require` statements:

```js
// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
```

And add this to the bottom of `server.js`, before your `app.listen(3000)`:

```js
// set location for static files
app.use(express.static(__dirname + '/public'));

// load public/index.html file (angular app)
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});
```
## Client Files

Now we're going to build out an `angular.js` app for our front end in the `public` folder. Here is a boiler plate for your `index.html` file to get you started:

```html
<!doctype html>
<html lang="en" ng-app="questionApp">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- bootstrap css -->
  <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

  <title>Question App</title>

  <!-- angular -->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-resource.min.js"></script>

  <!-- custom script -->
  <script src="scripts/app.js"></script>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3" ng-view></div>
    </div>
  </div>
</body>
</html>
```

## Challenges

**Use `$resource` to interact with the database.**

1. Create a home view that has a list of questions. Make these questions modifiable and deletable.

2. Add functionality to add new questions.

3. Make the questions hyperlinks that link to a page that displays the question with its answers. **Hint:** `/:id`

4. Make the answers on the answers page modifiable and deletable. **Hint:**

  ```js
  app.service('Answer', ['$resource', function ($resource) {
    return $resource('/api/questions/:questionId/answers/:id', {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });
  }]);
  ```

5. Add functionality to add new answers.

If you'd like, you can now safely get rid of the `#` in the url!

```js
$locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
```
