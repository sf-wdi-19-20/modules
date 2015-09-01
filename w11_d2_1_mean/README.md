# MEAN Stack: Putting the Pieces Together

| Objectives |
| :--- |
| Hook up our backend (Node.js, Express, and MongoDB) with a front end (Angular.js) |
| Implement restful routing. |
| CRUD data. |

## Questions and Answers App

We're going to add a front end on our previously "headless" app.

As you go along, remember to start your server with `npm start`, or start your server and have it listen for changes with `nodemon`. Also, keep your database running with `mongod`.

## Project Structure Setup

Use your Terminal to create the front end files. Navigate to your QnA app from yesterday.

```bash
cd QnA
mkdir public
cd public
touch app.js
touch index.html
cd public
touch answers.html
touch home.html
```

## Server File Modifications
Now that we have our file structure setup, we're going to modify our `server.js` file. Add this right after you do the `require`s.
```js
// configure body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
```

And add this to the bottom of `server.js`
```js
app.use(express.static(__dirname + '/public')); // set the static files location

app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});
```
## Client files
Now we're going to build out an `angular.js` app for our front end in the `public` folder. Here is a boiler plate HTML file to get you started:

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
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-resource.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.min.js"></script>

  <!-- custom script -->
  <script src="app.js"></script>

</head>
<body>

  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div ng-view></div>
      </div>
    </div>
  </div>


</body>
</html>
```

## Challenges
**Use `$resource` to interact with the database.**

1. Create a home view that has a list of questions. Make these questions modifiable and deletable.
1. Add functionality to add new questions.
1. Make the questions hyperlinks that link to a page that displays the question with its answers. hint: `/:id`
1. Make the answers on the answers page modifiable and deletable. hint:

  ```js
    app.service('Answer', ['$resource', function ($resource) {
      return $resource('/api/questions/:id/answers/:ida', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
      });
    }]);
  ```
1. Add functionality to add new answers.
