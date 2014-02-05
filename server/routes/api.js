var http = require('http');
var https = require('https');
var url = require('url');
var _ = require('underscore');
var html = require('html');
var Promise = require('bluebird');

var bookshelf = require('bookshelf').PG;

var userRelations = ["skills", "skillLevels"];

var User = bookshelf.Model.extend({

  // A user:
  // has one: name
  // has one: email
  // has many: skills

  tableName: 'users',

  skills: function(){
    return this.hasMany(Skill, 'user_id').through(SkillUser, 'id');
  },

  skillLevels: function(){
    return this.hasMany(SkillUser, 'user_id');
  },

  email: function(){
    return this.email;
  }

});
  
var Skill = bookshelf.Model.extend({

  // A skill:
  // has one: name
  // belongs to many: users

  tableName: 'skills',

  users: function(){
    return this.belongsToMany(User, 'skills_users');
  }

});

var SkillUser = bookshelf.Model.extend({
  tableName: 'skills_users',
});

var Users = bookshelf.Collection.extend({
  model: User
});

// Format expected by client

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
//   }
// ];


exports.users = function(req, res){

  // // Other acceptable ways

  // Users.forge().fetch({withRelated: userRelations}).then(function(z){
  //   _.each(JSON.parse(JSON.stringify(z)), function(value, key, collection){
  //     console.log(value.skills)
  //   });
  // })

  // // OR

  // Users.forge().fetch({withRelated: userRelations}).then(function(collection){
  //   collection.forEach(function(user){
  //     user.load(userRelations)
  //         .then(function(model){
  //           JSON.stringify(model);
  //         });
  //   });
  // });

  var getUsers = bookshelf.knex('users')
    .join('skills_users', 'users.id', '=', 'skills_users.user_id')
    .join('skills', 'skills_users.skill_id', '=', 'skills.id')
    .select('name', 'email', 'level', 'skill_name')
    .then(function(rows){
      console.log(rows);
      var userObj = {};
      var counter = 1;
      var users = _.each(_.unique(_.pluck(rows, 'email')), function(value, key, collection){
        userObj[value] = ({email: value});
        userObj[value].id = counter;
        counter++;
      });
      _.each(rows, function(value, key, collection){
        userObj[value.email].name = value.name;
        if (!userObj[value.email].skills){
          userObj[value.email].skills = {};
        }
        userObj[value.email].skills[value.skill_name] = value.level;
      });
      var userArr = [];
      _.each(userObj, function(value, key, collection){
        userArr.push(value);
      });
      res.json(userArr);
    });
};


exports.addUser = function(req, res){
  var user = new User({
    name: req.body.name,
    email: req.body.email
  }).findOrCreate({withRelated: userRelations}).then(function(userModel){
    _.each(JSON.parse(req.body.skills), function(value, key, collection){
      var skill = new Skill ({
        skill_name: key
      }).findOrCreate().then(function(skillModel){
        SkillUser.forge({
          user_id: userModel.toJSON().id,
          skill_id: skillModel.toJSON().id,
          level: value
        }).findOrCreate().then(function(){
          res.send();
        });
      });
    });
  });
};
