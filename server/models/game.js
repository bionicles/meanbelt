console.log('result model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'name required']},
  score: Number,
  percentage: String
})

var Game = mongoose.model("Game", GameSchema);
