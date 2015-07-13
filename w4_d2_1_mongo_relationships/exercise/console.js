// script to help us test mongoose code in the console
// don't worry about exactly how this works, but feel free to look it up!

var REPL = require("repl");
var db = require("./models");

var repl = REPL.start("> ");
repl.context.db = db;

repl.on("exit", function () {
  console.log("Ciao");
  process.exit();
});

