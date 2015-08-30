// models/question.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  text: String
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;