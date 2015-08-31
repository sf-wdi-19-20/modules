var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  content: {
    type: String,
    required: true
  }
});

var Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;