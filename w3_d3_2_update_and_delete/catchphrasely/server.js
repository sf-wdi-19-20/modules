// SERVER-SIDE JAVASCRIPT

// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    _ = require("underscore");

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

// configure bodyParser (for handling data)
app.use(bodyParser.urlencoded({extended: true}));

// pre-seeded phrase data
var phrases = [
  {id: 0, word: 'REPL', definition: 'Read, Eval, Print, Loop'},
  {id: 1, word: 'Reference Type', definition: 'Any data type that is not a primitive type'},
  {id: 2, word: 'Constructor', definition: 'Function used as a blueprint to create a new object with specified properties and methods'},
  {id: 3, word: 'Callback', definition: 'Function passed as an argument to another function'},
  {id: 4, word: 'Query string', definition: 'A list of parameters (represented as key-value pairs) appended to the end of a URL string'}
];

// ROUTES
// root route (serves index.html)
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// phrases index
app.get('/phrases', function (req, res) {
  // send all phrases as JSON response
  res.json(phrases);
});

// create new phrase
app.post('/phrases', function (req, res) {
  // grab params (word and definition) from form data
  var newPhrase = req.body;
  
  // set sequential id (last id in `phrases` array + 1)
  if (phrases.length > 0) {
    newPhrase.id = phrases[phrases.length - 1].id +  1;
  } else {
    newPhrase.id = 0;
  }

  // add newPhrase to `phrases` array
  phrases.push(newPhrase);
  
  // send newPhrase as JSON response
  res.json(newPhrase);
});

// update phrase
app.put('/phrases/:id', function(req, res) {

  // set the value of the id
  var targetId = parseInt(req.params.id);

  // find item in `phrases` array matching the id
  var foundPhrase = _.findWhere(phrases, {id: targetId});

  // if form gave us a new word, update the phrase's word
  foundPhrase.word = req.body.word || foundPhrase.word;

  // if form gave us a new definition, update that
  foundPhrase.definition = req.body.definition || foundPhrase.definition;

  // send back edited object
  res.json(foundPhrase);
});

// delete phrase
app.delete('/phrases/:id', function(req, res) {
  
  // set the value of the id
  var targetId = parseInt(req.params.id);

  // find item in `phrases` array matching the id
  var foundPhrase = _.findWhere(phrases, {id: targetId});

  // get the index of the found item
  var index = phrases.indexOf(foundPhrase);
  
  // remove the item at that index, only remove 1 item
  phrases.splice(index, 1);
  
  // send back deleted object
  res.json(foundPhrase);
});

// set server to localhost:3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});