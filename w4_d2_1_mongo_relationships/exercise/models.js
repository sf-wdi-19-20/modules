// Setup
var mongoose = require("mongoose");

// open a connection to the database
mongoose.connect("mongodb://localhost/mongoRelationships");
var Schema = mongoose.Schema;

// Referenced Data
var foodSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }]
});

var ingredientSchema = new Schema({
  title: {
    type: String,
    default: ""
  },
  origin: {
    type: String,
    default: ""
  }
})


var Food = mongoose.model("Food", foodSchema);
var Ingredient = mongoose.model("Ingredient", ingredientSchema);

// Embedded Data
var tweetSchema = new Schema({
  body: {
    type: String,
    default: ""
  }
});

var userSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  tweets: [tweetSchema]
});


var User = mongoose.model("User", userSchema);
var Tweet = mongoose.model("Tweet", tweetSchema);


// Export all our models
module.exports.Food = Food;
module.exports.Ingredient = Ingredient;
module.exports.User = User;
module.exports.Tweet = Tweet;

// For the purposes of these console exercises, 
// we'll close the database connection when we type 
// command + C in the terminal.
// Don't worry about exactly how this works.
// If you're curious feel free to look it up.
process.on('SIGINT', function() {
  console.log('About to exit...');
  mongoose.disconnect(function(){
    console.log("Disconnected DB")
    process.exit(); // now exit the node app
  });
});