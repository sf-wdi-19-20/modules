var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Answer = require('./answer');

var QuestionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  answers: [Answer.schema]
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;