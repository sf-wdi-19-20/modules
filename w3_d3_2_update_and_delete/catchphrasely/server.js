// SERVER-SIDE JAVASCRIPT

// requirements
var express = require("express"),
    app = express(),
    path = require("path"),
    _ = require("underscore"),
    bodyParser = require("body-parser");

// config
// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'));
// body parser config
app.use(bodyParser.urlencoded({ extended: true }));

// pre-seeded phrase data
var phrases =[
  {id: 0, word: "REPL", definition: "Read, Eval, Print, Loop"},
  {id: 1, word: "Reference Type", definition: "Any data type that is not a primitive type"},
  {id: 2, word: "Constructor", definition: "Function used as a blueprint to create a new object with specified properties and methods"},
  {id: 3, word: "Callback", definition: "Function passed as an argument to another function"},
  {id: 4, word: "Query string", definition: "A list of parameters (represented as key-value pairs) appended to the end of a URL string"}
];

// ROUTES
// root path
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

// phrases index path
app.get("/phrases", function (req, res){
  // render phrases index as JSON
  res.send(JSON.stringify(phrases));
});

app.post("/phrases", function (req, res){
  // grab the word and definition from the form
  var newPhrase = req.body;
  // set a sequential id
  if (phrases.length !== 0){
    newPhrase.id = phrases[phrases.length - 1].id + 1;
  } else {
    newPhrase.id = 0;
  }
  // add the new phrase to the phrases array
  phrases.push(newPhrase);
  // send a JSON response
  res.send(JSON.stringify(newPhrase));
});

app.delete("/phrases/:id", function(req, res) {
  // set the value of the id
  var targetId = parseInt(req.params.id);
  // find item in the array matching the id
  var targetItem = _.findWhere(phrases, {id: targetId});
  console.log("item found: ", targetItem)
  // get the index of the found item
  var index = phrases.indexOf(targetItem);
  // remove the item at that index, only remove 1 item
  phrases.splice(index, 1);
  // send back deleted object
  res.send(JSON.stringify(targetItem));
});

app.post("/phrases/:id", function(req, res){
  console.log("updating with these params", req.body);
  // set the value of the id
  var targetId = parseInt(req.params.id);

  // find item in the array matching the id
  var targetItem = _.findWhere(phrases, {id: targetId});

  // if form gave us a new word, update the phrase's word
  targetItem.word = req.body.word || targetItem.word;

  // if form gave us a new definition, update that
  targetItem.definition = req.body.definition || targetItem.definition;

  // send back edited object
  res.send(JSON.stringify(targetItem));
});



// listen on port 3000
app.listen(3000, function (){
  console.log("Listening on port 3000...");
});
