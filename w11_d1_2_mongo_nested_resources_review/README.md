# Mongo Nested Resources Review

```js
//
// models/answer.js
//
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  content: String
});

var Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;
```

```js
//
// models/question.js
//
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    // require Answer model
    Answer = require('./answer');

var QuestionSchema = new Schema({
  text: String,
  // embed answers in questions
  answers: [Answer.schema]
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
```

```js
//
// server.js
//

...

// require Question and Answer models
var Question = require('./models/question'),
    Answer = require('./models/answer');

...

//// API ROUTES

// CREATE new answer for one question
app.post('/questions/:questionId/answers', function (req, res) {
  // question id comes from url params
  var questionId = req.params.questionId;

  // answer data comes from form params
  var answerData = req.body.answer;

  // store new answer in memory
  var newAnswer = new Answer({
    content: answerData.content
  });

  // find question in db by id and add new answer
  Question.findOne({_id: questionId}, function (err, foundQuestion) {
    foundQuestion.answers.push(newAnswer);
    foundQuestion.save(function (err, savedQuestion) {
      res.json(newAnswer);
    });
  });
});

// UPDATE one answer (embedded under a question)
app.put('/questions/:questionId/answers/:id', function (req, res) {
  // question and answer ids come from url params
  var questionId = req.params.questionId;
  var answerId = req.params.id;

  // answer data comes from form params
  var answerData = req.body.answer;

  // find question in db by id, find answer embedded in question, update answer
  Question.findOne({_id: questionId}, function (err, foundQuestion) {
    var foundAnswer = foundQuestion.answers.id(answerId);
    foundAnswer.content = answerData.content;
    foundQuestion.save(function (err, savedQuestion) {
      res.json(foundAnswer);
    });
  });
});

// DELETE one answer (embedded under a question)
app.delete('/questions/:questionId/answers/:id', function (req, res) {
  // question and answer ids come from url params
  var questionId = req.params.questionId;
  var answerId = req.params.id;

  // find question in db by id, find answer embedded in question, remove answer
  Question.findOne({_id: questionId}, function (err, foundQuestion) {
    var foundAnswer = foundQuestion.answers.id(answerId);
    foundAnswer.remove();
    foundQuestion.save(function (err, savedQuestion) {
      res.json(foundAnswer);
    });
  });
});
```
