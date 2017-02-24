console.log('server users controller');

var mongoose = require("mongoose");
var User = mongoose.model('User');


module.exports = {

};
// marcus rules
// potential nested population syntax - path = column in schema
// Project.findOne({name: req.query.name})
//     .populate({
//         path: 'threads',
//         populate: {
//             path: 'messages'
//             , model: 'Message'
//             , populate: {
//                 path: 'user'
//                 , model: 'User'
//             }
//         }
//     })

// module.exports = {
//   //get categories
//   index: function(req, res){
//     User.find({}, function(err, users){
//       if (err){
//         console.log('server user controller error: ', err);
//         res.json(err);
//       } else {
//         console.log('server user controller users: ', users);
//         res.json(users);
//       }
//     })
//   },
//   show: function(req, res){
//     User.findOne({}, function(err, user){
//       if (err){
//         console.log(err);
//         res.json(err);
//       } else {
//         console.log(user);
//         res.json(user);
//       }
//     })
//   },
//   create: function(req, res){
//     User.create(req.body, function(err, data){
//       if (err){
//         console.log(err);
//         res.json(err)
//       } else {
//         console.log('user created: ', data);
//         res.json(data);
//       }
//     })
//   }
// }
