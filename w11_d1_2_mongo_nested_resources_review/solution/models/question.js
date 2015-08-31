var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Answer = require('./answer');

var QuestionSchema = new Schema({
  text: String,
  answers: [Answer.schema]
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;