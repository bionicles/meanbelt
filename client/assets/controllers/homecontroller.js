console.log('homecontroller has started');
appModule.controller("homecontroller", function($scope, userfactory, questionfactory, gamefactory, $location){
    // try getting the session user
    userfactory.getSession(function(factorysession){
      if (factorysession){
        $scope.sessionuser = factorysession;
      }
    })

    // if no session user, prompt for one
    if (!$scope.sessionuser){
      $scope.sessionuser = prompt("Welcome. Please enter your name:");
      userfactory.setUser($scope.sessionuser);
    }

    // try getting question messages
    questionfactory.getMessages(function(questionmessages){
      if (questionmessages){
        $scope.messages = questionmessages;
      }
    })
    // try getting game messages
    gamefactory.getMessages(function(gamemessages){
      if (gamemessages){
        $scope.messages = gamemessages;
      }
    })
    // get the games
    $scope.games = []
    gamefactory.index(function(games){
      $scope.games = games;
    })

    // play the game
    $scope.play = function(){
      console.log('play clicked!');
      $location.url('/lets_play')
    }
})
    // $scope.user = {};
    // $scope.topic = {};
    // var users = [];
    // var topics = [];
    // var categories=[];
    //
    // $scope.categories = ['trees', 'dogs', 'lulz', 'diablo', 'marcus']
    // $scope.topic.category = $scope.categories[0];
    // userfactory.index(function(data){
    //   console.log('home controller index users:', data);
    //   users = data;
    // })
    //
    // userfactory.getUser(function(data){
    //   user = data
    //   console.log("home getUser: ", user);
    // })
    //
    // topicfactory.index(function(data){
    //   console.log('home controller index');
    //   $scope.topics = data
    // })
    //
    // $scope.visitTopic = function(topic){
    //   console.log('visiting topic: ', topic);
    //   $location.url('/topic/'+topic._id);
    // }
    //
    // $scope.visitUser = function(user){
    //   console.log('visiting user: ', user);
    //   $location.url('/user/'+user._id);
    // }
    //
    // $scope.addTopic = function(){
    //   console.log("homecontroller addTopic" );
    //   // console.log('$scope.user: ', $scope.user);
    //   // userfactory.getUser(function(sessionuser){
    //   //   console.log("adding topic, getting session user: ", sessionuser);
    //   //   console.log(user);
    //   // })
    //   var submitted_topic = $scope.topic;
    //   submitted_topic.user = user
    //   console.log('home: ', submitted_topic);
    //
    //   topicfactory.create( submitted_topic, function(data){
    //     console.log('home create topic response data', data);
    //     topicfactory.index(function(data){
    //       $scope.topics = data
    //     })
    //   })
    // }
