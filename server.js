var express  = require( 'express' )
var path     = require( 'path' )
var app      = express()
var bodyParser = require('body-parser');
process.env['APPROOT'] = __dirname; // set an environment variable called APPROOT to keep track of the root folder of your app

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('client'))
app.use(express.static('bower_components'))
app.use(bodyParser.json())


//require mongoose configuration, use path.join to build the route
require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
//require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

app.listen( 8000, function() {
  console.log( `server running on port 8000` );
});
