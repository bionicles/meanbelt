console.log('angular newcontroller');

appModule.controller("newcontroller", function($scope, questionfactory, userfactory, $location){
  // variables
  $scope.newQuestion = {};
  $scope.errors = [];

  // methods
  $scope.add = function(){
    console.log('add clicked');
    questionfactory.addQuestion($scope.newQuestion, function(data){
      if (data.errors) {
        $scope.errors = data.errors
      } else {
        $location.url('/');
      }
    })
  }
  $scope.cancel = function(){
    console.log('cancel clicked');
    $location.url('/')
  }
})
