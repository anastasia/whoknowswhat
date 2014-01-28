var Bookshelf = require('bookshelf');
Bookshelf.PG = Bookshelf.initialize({

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