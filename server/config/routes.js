// var mongoose = require('mongoose');
var path = require('path')
var games = require("../controllers/games.js")
var questions = require("../controllers/questions.js")
var users = require("../controllers/users.js")

module.exports = function(app){
  app.post('/question', function(req, res){
    questions.create(req, res);
  })
  app.get('/three', function(req, res){
    questions.getThree(req,res);
  })
  app.post('/game', function(req, res){
    games.createGame(req, res);
  })
  app.get('/games', function(req, res){
    games.index(req, res);
  })
};
  // app.post('/create', function(req, res) {
  //   users.create(req, res);
  // });
  // app.get('/topics', function(req, res) {
  //   topics.index(req,res);
  // })
  // app.post('/topic', function(req, res) {
  //   topics.create(req, res);
  // })
  // app.get('/users', function(req, res){
  //   users.index(req, res);
  // })
  // app.get('/topic/:id', function(req, res){
  //   topics.getTopic(req, res);
  // })
