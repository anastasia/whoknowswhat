var http = require('http');
var https = require('https');
var url = require('url');
var _ = require('underscore');
var html = require('html');

var bookshelf = require('bookshelf').PG;

var User = bookshelf.Model.extend({
  tableName: 'users',

  skills: function(){
    return this.hasMany(Skill, 'user_id').through(UserSkill, 'id');
  },

  email: function(){
    return this.email;
  }

});
  
var Skill = bookshelf.Model.extend({
  tableName: 'skills',

  users: function(){
    return this.belongsToMany(User, 'skills_users');
  },

});

var UserSkill = bookshelf.Model.extend({
  tableName: 'skills_users',
});

// var users = [
//   {
//     id: 1,
//     name: "Doug's Beard",
//     email: "doug@hackreactor.com",
//     skills: {
//       "Angular": "Expert",
//       "Beard": "Expert"
//     }
//   },
//   {
//     id: 2,
//     name: "Marcus",
//     email: "Marcus@hackreactor.com",
//     skills: {
//       "Everything": "Expert"
//     }
//   },
//   {
//     id: 3,
//     name: "Doug",
//     email: "doug@hackreactor.com",
//     skills: {
//       "Beard": "Expert",
//       "Trolling": "Expert",
//       "Talking": "Expert"
//     }
//   },
//   {
//     id: 4,
//     name: "Fred",
//     email: "fred@hackreactor.com",
//     skills: {
//       "Node": "Expert",
//       "Angular": "Expert",
//       "Backbone": "Expert",
//       "Git": "Expert"
//     }
//   }
// ];


exports.users = function(req, res){
  User.forge({})
    .query()
    .select()
    .then(function(model) {
      console.log("all users");
      console.log(model);
    });

  Skill.forge({})
    .query()
    .select()
    .then(function(model) {
      console.log("all skills");
      console.log(model);
    });

  UserSkill.forge({})
    .query()
    .select()
    .then(function(model) {
      console.log("all userskills");
      console.log(model);
    });

  new User({id: 1}).skills().fetch().then(function(user){
    _.each(user.models, function(value, key, collection){
      console.log("user");
      console.log(value.attributes);
    });
  });

  new Skill({id: 2}).users().fetch().then(function(skill){
    _.each(skill.models, function(value, key, collection){
      console.log("skill");
      console.log(value.attributes);
    });
  });


  res.json(users);
};

exports.addUser = function(req, res){
  var user = new User({
    name: req.body.name,
    email: req.body.email
  }).findOrCreate().then(function(model){
    console.log(model.toJSON());
  });

  _.each(req.body.skills, function(value, key, collection){
    var skill = new Skill ({
      name: key
    }).findOrCreate().then(function(model){
      console.log(model.toJSON());
    });
  });

  // users.push({
  //   id: users.length + 1,
  //   name: req.body.name,
  //   email: req.body.email,
  //   skills: JSON.parse(req.body.skills)
  // });
  res.send();
};
