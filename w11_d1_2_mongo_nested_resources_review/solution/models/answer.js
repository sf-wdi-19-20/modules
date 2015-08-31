var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  content: String
});

var Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;