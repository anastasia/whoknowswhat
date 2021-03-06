var Bookshelf = require('bookshelf');
var _ = require('underscore');

Bookshelf.PG = Bookshelf.initialize({
  client: 'pg',
  connection: {
    host     : 'ec2-54-235-246-73.compute-1.amazonaws.com',
    port     :  5432,
    user     : 'bfbxscyynyvoas',
    password : 'Bf13fEw9nzhRj0QfuhvCif45sB',
    database : 'd8e3b8k75ik7r0',
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
