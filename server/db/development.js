var Bookshelf = require('bookshelf');
var _ = require('underscore');

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

Bookshelf.PG.Model.prototype.findOrCreate = function(options) {
  options = options || {};
  var cloned = this.clone();
  return this.fetch(_.extend(options, {require: true})).then(null, function(err){
    if (err.message === 'EmptyResponse') return cloned.save();
    throw err;
  });
};

// create users table
Bookshelf.PG.knex.schema.hasTable('users').then(function(exists){
  if (!exists){
    return Bookshelf.PG.knex.schema.createTable('users', function(table) {
      table.increments().primary();
      table.string('name', 69);
      table.string('email', 69);
    });
  }
});

// create skills_users table
Bookshelf.PG.knex.schema.hasTable('skills_users').then(function(exists){
  if (!exists){
    return Bookshelf.PG.knex.schema.createTable('skills_users', function(table) {
      table.increments().primary();
      table.integer('user_id');
      table.integer('skill_id');
      table.string('level', 69);
    });
  }
});

// create skills table
Bookshelf.PG.knex.schema.hasTable('skills').then(function(exists){
  if (!exists){
    return Bookshelf.PG.knex.schema.createTable('skills', function(table) {
      table.increments().primary();
      table.string('skill_name', 69);
    });
  }
});

// if the table doesn't exist
// make it


// var User = Bookshelf.PG.Model.extend({
//   tableName: 'users',

//   initialize: function() {
//   },

// });

// User.forge({})
//   .query()
//   .where({
//     "email": "joey@hackreactor.com"
//   })
//   .select()
//   .then(function(model) {
//     console.log(model);
//   });
