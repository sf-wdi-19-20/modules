// DATABASE
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Phrases_app");
var Schema = mongoose.Schema;

var PhraseSchema = new Schema({
	word: String,
	definition: String
});

var Phrases = mongoose.model("Phrases", PhraseSchema);

module.exports.Phrases = Phrases;
