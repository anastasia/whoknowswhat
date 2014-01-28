// node app.js

//
// Module dependencies.
//

var express = require('express');
var routes = require('./server/routes/index');
var api = require('./server/routes/api');
var http = require('http');
var path = require('path');
var _ = require('underscore');

// initialize express

var app = express();

//
// environment configuration
//

app.set('port', process.env.PORT || 1337);
app.set('views', __dirname + '../');
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// When the app starts
var Bookshelf  = require('bookshelf');
Bookshelf.PG = Bookshelf.initialize({
  client: 'pg',
  connection: {
    host     : 'localhost',
    port     :  5432,
    user     : 'postgres',
    password : 'password',
    database : 'myapp_test',
    charset  : 'utf8'
  }
});

// var Bookshelf = require('bookshelf').PG;

var User = Bookshelf.PG.Model.extend({
  tableName: 'users',

  initialize: function() {
  },

});

console.log(User)

User.forge({})
  .query()
  .where({
    "email": "joey@hackreactor.com"
  })
  .select()
  .then(function(model) {
    console.log(model)
  });

// User.forge({})
//   .query("where", "email", "=", "joey@hackreactor.com")
//   .fetch()
//   .then(function(model) {
//     console.log(model)
//   });

// var TestModel = Bookshelf.PG.Model.extend({
//     tableName: 'TestModel',

//     initialize: function() {
//     },

//     name: 'foo'
// });

// var test = new TestModel({"name": "Joey"});
// test.save().then(function(model){
//   console.log("YEAH")
// });

//
// development only - error checking
//

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//
// routes
//

app.get('/', routes.index);
app.get('/client/*', routes.client);
app.get('/api/users/', api.users);

app.post('/api/users/', api.addUser);

//
// create and launch server
//

http.createServer(app).listen(app.get('port'), function(){
  console.log('this ya boi EXPRESS.COM we outchea on ' + app.get('port'));
});

// could also use:
// app.listen(app.get('port'));
