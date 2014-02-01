var http = require('http');
var https = require('https');
var url = require('url');
var _ = require('underscore');
var html = require('html');
var Promise = require('bluebird');

var bookshelf = require('bookshelf').PG;

var userRelations = ["skills", "skillLevels"];

var User = bookshelf.Model.extend({
  tableName: 'users',

  skills: function(){
    return this.hasMany(Skill, 'user_id').through(UserSkill, 'id');
  },

  skillLevels: function(){
    return this.hasMany(UserSkill, 'user_id');
  },

  email: function(){
    return this.email;
  }

});
  
var Skill = bookshelf.Model.extend({
  tableName: 'skills',

  users: function(){
    return this.belongsToMany(User, 'skills_users');
  }

});

var UserSkill = bookshelf.Model.extend({
  tableName: 'skills_users',
});

var Users = bookshelf.Collection.extend({
  model: User
});


// // Collen
// var users = new Users();

// users.fetch().then(function(models){
//   // console.log('models: \n', models);
//   models.forEach(function(user){
//     // console.log('user1: \n', user);
//     user.fetch({
//       withRelated: userRelations
//     }).then(function(user){
//       // console.log('user2x: \n', user);
//       user.related('skillLevels').query("where", "user_id", "=", user.get('id')).fetch().then(function(levels){

//         levels.forEach(function(level) {
//           var skill = new Skill();
//           skill.query("where", "id", "=", level.get('skill_id')).fetch().then(function(sk){
//             console.log(user.get('name'), sk.get('skill_name'), level.get('level'));
//           });
//         });
//       });
//     });
//   });
// });

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

    // User.forge({id: 1}).fetch({
    //   withRelated: ['skills', 'skillLevels']
    // }).then(function(user){
    //   console.log(user.related('skills').toJSON());
    //   console.log(user.related('skillLevels').toJSON());
    //   console.log(user);
    // });

    // var usersInTable = new Users();

    // usersInTable.fetch().then(function(users){
    //   users.forEach(function(user){
    //     user.fetch({
    //       withRelated: userRelations
    //     }).then(function(fetched){
    //       console.log('fetched\n', fetched);
    //     });
    //   })
    //   console.log('jsonusers\n', users.toJSON());
    //   console.log('users', users);
    // });

    // usersInTable.skills().fetch().then(function(users){
    //   console.log('skills\n', users.toJSON());
    //   console.log('skls', users);
    // });

    // Users.forge().fetch({withRelated: userRelations}).then(function(z){
    //   _.each(JSON.parse(JSON.stringify(z)), function(value, key, collection){
    //     console.log(value.skills)
    //   });
    // })


    // usersInTable.fetch({
    //   withRelated: userRelations
    // }).then(function(model){
    //   console.log('model\n', model)
    // });

    // usersInTable.query(function(qb){
    //   qb.where('')
    // })

    var getUsers = bookshelf.knex('users')
        .join('skills_users', 'users.id', '=', 'skills_users.user_id')
        .join('skills', 'skills_users.skill_id', '=', 'skills.id')
        .select('name', 'email', 'level', 'skill_name')
        .then(function(rows){
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
  // var user = new User({
  //   name: req.body.name,
  //   email: req.body.email
  // }).findOrCreate().then(function(model){
  //   // console.log(model.toJSON());
  // });

  // _.each(req.body.skills, function(value, key, collection){
  //   var skill = new Skill ({
  //     name: key
  //   }).findOrCreate().then(function(model){
  //     // console.log(model.toJSON());
  //   });
  // });

  // users.push({
  //   id: users.length + 1,
  //   name: req.body.name,
  //   email: req.body.email,
  //   skills: JSON.parse(req.body.skills)
  // });
  res.send();
};
