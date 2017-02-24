var appModule = angular.module("myApp", ['ngRoute'])

appModule.config(function($routeProvider){
$routeProvider
  .when("/", {
    templateUrl: "partials/home.html",
    controller: "homecontroller"
  })
  .when("/new_question", {
    templateUrl: 'partials/new.html',
    controller: 'newcontroller'
  })
  .when("/lets_play", {
    templateUrl: 'partials/game.html',
    controller: 'gamecontroller'
  })
  // .when('/logout')
  // .when("/", {
  //   templateUrl: "partials/dashboard.html",
  //   controller: "dashboardcontroller"
  // })
  // .when('/topic/:id', {
  //   templateUrl: 'partials/topic.html',
  //   controller: 'topiccontroller'
  // })
  // .when('/user/:id', {
  //   templateUrl: 'partials/user.html',
  //   controller: 'usercontroller'
  // })
  // .when('/logout')
  .otherwise({
    redirectTo: '/'
  })
  // .when("/show/:id", {
  //   templateUrl: "partials/show.html",
  //   controller: "editUserController"
  // })
  // .when('/edit/:id',{
  //   templateUrl: 'partials/edit.html',
  //   controller: "editUserController"
  // })
  // .otherwise({
  //   redirectTo: "/"
  // })
})
