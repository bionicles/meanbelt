console.log('question model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
  text: {type: String, required: [true, "question required"], minlength: [15, 'question must be at least 15 characters long']},
  correct: {type: String, required: [true, "correct answer required"]},
  fakeOne: {type: String, required: [true, "fake answer required"]},
  fakeTwo: {type: String, required: [true, "fake answer required"]}
});

var Question = mongoose.model("Question", QuestionSchema);
