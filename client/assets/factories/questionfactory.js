console.log('started questionfactory');
appModule.factory("questionfactory", function($http){
  var factory = {}
  var question = {};
  var questions = [];
  var questionmessages = [];

  factory.addQuestion = function(question, callback){
    console.log('factory adding question:', question);
    $http.post('/question', question).then(function(response){
      console.log('factory got response data: ', response.data);
      questionmessages.push("Question added successfully!")
      callback(response.data);
    })
  }
  factory.getMessages = function(callback){
    console.log('factory getting question messages');
    callback(questionmessages);
  }
  factory.getThree = function(callback){
    console.log('factory getting three questions');
    $http.get('/three').then(function(response){
      console.log('factory got response data: ', response.data);
      randomquestions = response.data;
      callback(randomquestions);
    })
  }
  return factory;
})
