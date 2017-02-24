console.log('server questions controller');

var mongoose = require("mongoose");
var Question = mongoose.model('Question');


module.exports = {
  create: function(req, res){
    Question.create(req.body, function(err, data){
      if (err){
        console.log('server questions controller error: ', err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  getThree: function(req, res){
    Question.find({}, function(err, data){
      if (err){
        console.log('server get three error: ', err);
      } else {
        console.log('server get three data: ', data);
        var randomquestions = [];
        while (randomquestions.length < 3){
          var randomquestion = data[Math.floor(Math.random() * data.length)];
          //lol contains!
          var contains = function(arr, object){
            for (var i = 0; i<arr.length; i++){
              if (arr[i] == object){
                return true;
              }
            }
            return false;
          }
          console.log('random question: ', randomquestion);
          if (!contains(randomquestions, randomquestion)){
            randomquestions.push(randomquestion);
          }
        }
        console.log('server get three random questions: ', randomquestions);
        res.json(randomquestions)
      }
    })
  }
};
