console.log('game controller started');

appModule.controller('gamecontroller', function($scope, userfactory, questionfactory, gamefactory, $location){
  // try getting the session user
  userfactory.getSession(function(factorysession){
    if (factorysession){
      $scope.sessionuser = factorysession;
    }
  })

  // get three random questions
  questionfactory.getThree(function(randomquestions){
    $scope.questions = randomquestions;
  })

  // cancel
  $scope.cancel = function(){
    console.log('cancel clicked');
    $location.url('/');
  }

  //select answers
  $scope.selectedAnswers = [];
  $scope.radioSelected = function(isCorrect, index){
    $scope.selectedAnswers[index] = isCorrect;
  }

  // submit w/ validation!
  $scope.submit = function(){
    $scope.messages = [];
    console.log('submit clicked');
    console.log($scope.selectedAnswers);
    console.log($scope.selectedAnswers.length);
    if ($scope.selectedAnswers.length < 3){
      $scope.messages.push('please answer all questions')
    } else {
      var score = 0
      for (var k = 0; k < 3; k++){
        console.log($scope.selectedAnswers[k]);
        if ($scope.selectedAnswers[k]==true){
          score++;
          console.log(score);
        }
      }
      var percent = String(((score / 3) * 100).toFixed(2)) + '%'
      console.log(percent);
      var game = {
        name: $scope.sessionuser,
        score: score,
        percentage: percent
      }
      console.log(game);
      gamefactory.createGame(game, function(){
        $location.url('/');
      });
    }
    // if (!$scope.selectedAnswers.keys){
    // } else if ($scope.selectedAnswers.keys.length != 3){
    //     $scope.messages.push('please answer all questions')
    // }
    // var score = 0;
    // for (var key in $scope.selectedAnswers){
    //   if ($scope.selectedAnswers[key] = true){
    //     score += 1;
    //   }
    // }

  }
})
  // instantiate variables
  // $scope.user = {};
  // $scope.topic = {};
  //
  // // retrieve user object
  // userfactory.getUser(function(data){
  //   console.log('topic controller get user: ', data);
  //   $scope.user = data;
  // })
  //
  // // retrieve topic
  // topicfactory.getTopic($routeParams, function(data){
  //   console.log('topic controller getTopic route params: ', $routeParams);
  //   console.log('topic controller get topic', data);
  //   $scope.topic = data;
  // })
  //
  // //post method
  // $scope.savePost = function(){
  //   console.log('post clicked!');
  //   console.log('user: ', $scope.topic.user);
  //   console.log('post: ', $scope.post);
  //   $scope.post.topic = $scope.topic;
  //   $scope.post.user = $scope.user
  //
  // }

// }])
