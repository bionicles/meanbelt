console.log('user model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'name required']},
});

var User = mongoose.model("User", UserSchema);
