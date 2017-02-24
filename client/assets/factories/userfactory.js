console.log('started userfactory');
appModule.factory("userfactory", function($http){

  // define variables
  var factory = {};
  if (sessionuser = undefined){
    var sessionuser = "";
  }
  var messages = [];
  // define methods
  factory.setUser = function(userobject){
    sessionuser = userobject;
  }
  factory.getSession = function(callback){
    if (sessionuser){
      callback(sessionuser);
    }
  }

  return factory;
})


  // factory.login = function (scope_user, callback){
  //   $http.post('/create', scope_user).then(function(response){
  //     callback(response.data)
  //     if (!response.data.errors){
  //       sessionuser = response.data
  //       console.log("userfactory sessionuser: ", sessionuser);
  //     }
  //   })
  // }
  //
  // factory.getUser = function(callback){
  //   console.log('factory getUser sessionuser: ', sessionuser);
  //   callback(sessionuser)
  // }
  //
  // factory.index = function(callback){
  //   console.log('user factory index');
  //   $http.get('/users').then(function(response){
  //     console.log('user factory index response: ', response.data);
  //     callback(response.data)
  //   })
  // }
  //
  //   // $http.get('/friends').then(successCallback, errorCallback);
  // //   $http({
  // //   method: 'GET',
  // //   url: '/friends'
  // //   }).then(function successCallback(response) {
  // //     // console.log("response.data: " +response.data) // RECEIVED data from the mongo server
  // //     callback(response.data)
  // //   // this callback will be called asynchronously when the response is available
  // //   }, function errorCallback(response) {
  // //     console.log("Error: "+ response)
  // //   // called asynchronously if an error occurs or server returns response with an error status.
  // //   });
  // // }
  // // factory.addUser = function (data){
  // //   // $http.post('/friends', data).then(successCallback, errorCallback);
  // //   $http({
  // //   method: 'POST',
  // //   url: '/friends',
  // //   data: data
  // //   }).then(function successCallback(response) {
  // //     console.log("response success: " +response)
  // //   }, function errorCallback(response) {
  // //     console.log("response error: "+ response)
  // //   });
  // // }
  //
  // // factory.deleteUser = function ( user_id, callback ){
  // //   $http.delete('/friends/' +user_id) // DELETE the specified user_id
  // //   .then(function (response) {
  // //     callback(response.data) // returns the GET query json object through controller callback
  // //   })
  // // }
  // // factory.update = function (id, user, callback ){
  // //   $http.put('/friends/' +id, user) // UPDATE the specified user_id
  // //   .then(function (response) {
  // //     callback(response.data) // returns the GET query json object through controller callback
  // //   })
  // // }
  // // factory.showUser = function (id, callback){
  // //   $http.get('/friends/' +id)
  // //   .then(function(response){
  // //     callback(response.data)
  // //   }); // successCallback, errorCallback
  // //
  // // }
