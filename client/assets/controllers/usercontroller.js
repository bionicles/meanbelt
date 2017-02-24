console.log('angular usercontroller');


appModule.controller("usercontroller", function($scope, userfactory, $location){
  // initialize variables
  $scope.user = {};
  $scope.visited_user = {};
  $scope.errors = []

  userfactory.getUser(function(sessionuser){
    $scope.user = sessionuser;
  })

  // userfactory.getVistedUser(function(){
  //   $scope.user
  // })

  $scope.login = function(){
    // alert('user login!')
    // console.log('user controller login scope.user: ', $scope.user);
    userfactory.login($scope.user, function(data){
      if(data.errors){
        console.log("data.errors AA", data.errors);
        $scope.errors = data.errors
        return;
      }
      $scope.user = data
      // console.log("Angular user controller response data: ", data);
      $location.url("/dashboard");
    })
  }
})
