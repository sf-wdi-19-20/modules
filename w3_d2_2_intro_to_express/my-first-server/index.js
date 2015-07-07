var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello/:name', function (req, res) {
  res.send( "Hello " + req.params.name );
})

app.get('/api/users', function (req, res) {
  res.json([
      {"name": "Ben"}
    , {"name": "Nick"}
    , {"name": "Adam"}
    , {"name": "Mike"}
    ])
});

app.get('/api/books', function (req, res) {
  res.json([
      {"title": "Moby Dick"}
    , {"title": "Moby Dick"}
    , {"title": "Moby Dick"}
    , {"title": "Moby Dick"}
    ])
});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
