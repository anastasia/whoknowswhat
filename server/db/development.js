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

// create users table
Bookshelf.PG.knex.schema.hasTable('users').then(function(exists){
  if (!exists){
    return Bookshelf.PG.knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('name', 69);
      table.string('email', 69);
    });
  }
});

// create users_skills table
Bookshelf.PG.knex.schema.hasTable('users_skills').then(function(exists){
  if (!exists){
    return Bookshelf.PG.knex.schema.createTable('users_skills', function(table) {
      table.increments('id').primary();
      table.integer('user_id');
      table.integer('skill_id');
    });
  }
});

// create skills table
Bookshelf.PG.knex.schema.hasTable('skills').then(function(exists){
  if (!exists){
    return Bookshelf.PG.knex.schema.createTable('skills', function(table) {
      table.increments('id').primary();
      table.string('name', 69);
    });
  }
});

// if the table doesn't exist
// make it


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
