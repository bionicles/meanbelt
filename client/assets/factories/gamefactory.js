console.log('started gamefactory');
appModule.factory("gamefactory", function($http){
  var factory = {}
  var results = []
  var gamemessages = [];
  factory.index = function(callback){
    console.log('factory getting all games');
    $http.get('/games').then(function(response){
      console.log('game factory response data: ', response.data);
      callback(response.data)
    })
  }
  factory.getMessages = function(callback){
    console.log('factory getting game messages');
    if (gamemessages.length > 0){
      callback(gamemessages);
    }
  }
  factory.createGame = function(game, callback){
    console.log('factory creating game: ', game);
    $http.post('/game', game).then(function(response){
      console.log('game factory response data: ', response.data);
      gamemessage = "That was great, "+game.name+ "! Your score is "+game.score+"/3"+"("+game.percentage+")."
      gamemessages.push(gamemessage);
      callback();
    })
  }
  return factory;
})
  // factory.index = function(callback){
  //   $http.get("/results").then(function(response){
  //     console.log("result factory index response: ", response);
  //     if (response.errors) {
  //       console.log('result factory index errors: ', response.errors);
  //     } else {
  //       callback(response.data)
  //     }
  //   })
  // }
  // factory.create = function(result, callback){
  //   console.log("result factory create" );
  //
  //   $http.post("/result", result).then(function(response){
  //     console.log('result factory create response: ', response.data);
  //     callback(response.data);
  //   })
  // }
  // factory.getTopic = function(id, callback){
  //   console.log('result factory getTopic for id 444: ', id); //this works
  //
  //   $http.get('/result/' +id.id).then(function(response){
  //     console.log('topic factory getTopic response: ', response.data);
  //     callback(response.data);
  //   })
  // }
