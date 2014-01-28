var Bookshelf = require('bookshelf');
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


var User = Bookshelf.PG.Model.extend({
  tableName: 'users',

  initialize: function() {
  },

});

User.forge({})
  .query()
  .where({
    "email": "joey@hackreactor.com"
  })
  .select()
  .then(function(model) {
    console.log(model);
  });
