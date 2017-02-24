var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/belt'); // create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');

// mongoose.connection.on( 'error', function ( err ) { //  If the connection throws an error
//   console.error( `Mongoose default connection error: ${ err }` );
// });
//
// mongoose.connection.on( 'disconnected', function () { // When the connection is disconnected
//   console.log( 'Mongoose default connection disconnected' );
// });

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
if(file.indexOf('.js') >= 0) {
  require(models_path + '/' + file);   // require the file (this runs the model file which registers the schema)
}
});
