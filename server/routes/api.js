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
  },

});

var UserSkill = bookshelf.Model.extend({
  tableName: 'skills_users',
});

var Users = bookshelf.Collection.extend({
  model: User
});

// var usersObj = {};

var getUsers = bookshelf.knex('users')
    .join('skills_users', 'users.id', '=', 'skills_users.user_id')
    .join('skills', 'skills_users.skill_id', '=', 'skills.id')
    .select('name', 'email', 'level', 'skill_name')
    .then(function(users){
      // console.log(users);
      // console.log(_.pluck(users, 'email'));
      // // usersObj = {
      // //   userObj: _.unique(_.pluck(users, 'email')),
      // //   table: users
      // // };
      // console.log(_.groupBy(users, function(user){
      //   return user.email;
      // }));
      console.log(users)
      var obj = [];
      var users = {};
      _.each(users, function(value, key, collection){
        if (users[value.email]) {

        } else {
          users[value.email] = true;

        }
      })

      // var jsond = [];
      // _.chain(users)
      //               .groupBy(function(user){
      //                 return user.email;
      //               })
      //               .each(function(entries, user, collection){
      //                 _.each(entries, function(entry){
      //                   collection[user].skills = collection[user].skills || {};
      //                   collection[user].skills[entry.skill_name] = entry.level;
      //                   console.log(collection)
      //                   console.log(user)
      //                   console.log(collection[user])
      //                   jsond.push({
      //                     name: collection[user][0].name,
      //                     email: collection[user][0].email,
      //                     skills: _.last(collection[user])
      //                   })
      //                 })
      //                 console.log(jsond)
                    
      //               });
                    // .value();
      // console.log(usersObj); 
    });

// var users = new Users();
// users
//   .fetch()
//   .then(function(users){
//     console.log(users.models[0].attributes);
//   });

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
  // User.forge({})
  //   .query()
  //   .select()
  //   .then(function(model) {
  //     console.log("all users");
  //     console.log(model);
  //   });

  // Skill.forge({})
  //   .query()
  //   .select()
  //   .then(function(model) {
  //     console.log("all skills");
  //     console.log(model);
  //   });

  // UserSkill.forge({})
  //   .query()
  //   .select()
  //   .then(function(model) {
  //     console.log("all userskills");
  //     console.log(model);
  //   });

var getUsers = bookshelf.knex('users')
    .join('skills_users', 'users.id', '=', 'skills_users.user_id')
    .join('skills', 'skills_users.skill_id', '=', 'skills.id')
    .select('name', 'email', 'level', 'skill_name')
    .then(function(users){
      console.log("GETUSERS\n", users);
      usersObj = {
        userObj: _.unique(_.pluck(users, 'email')),
        table: users
      };
    });


  var newUser = new User({id: 1});

  var userObj = {
    skills: {}
  };

  newUser.fetch().then(function(user){
    _.extend(userObj, user.attributes);
    // console.log(userObj);
  });

  // newUser.skills().fetch().then(function(user){
  //   _.each(user.models, function(value, key, collection){
  //     console.log("value.attributes")
  //     console.log(value.attributes);
  //     _.extend(userObj.skills, value.attributes);
  //     // console.log(value.attributes);
  //     console.log(userObj);
  //   });
  // });
  newUser.skillLevels().fetch().then(function(user){
    // console.log(user)
    _.each(user.models, function(value, key, collection){
      // console.log("value")
      // console.log(value);
      _.extend(userObj.skills, value.attributes);
      // console.log(value.attributes);
      // console.log(userObj);
    });
  });


  var users = new Users();
  // Collen
  users.fetch().then(function(models){
    // console.log('models: \n', models.models);
    models.forEach(function(user){
      // console.log('user1: \n', user);
      user.fetch({
        withRelated: userRelations
      }).then(function(user){
        // console.log('user2x: \n', user);
        user.related('skillLevels').query("where", "user_id", "=", user.get('id')).fetch().then(function(levels){
          levels.forEach(function(level) {
            var skill = new Skill();
            skill.query("where", "id", "=", level.get('skill_id')).fetch().then(function(sk){
              user.attributes.skills = user.attributes.skills || {};
              user.attributes.skills[sk.get('skill_name')] = level.get('level');
              console.log("user attributes\n", user.attributes);
              console.log("user\n", user);
              // console.log(user.attributes, user.get('name'), sk.get('skill_name'), level.get('level'));
            });
            console.log("END?");
          });
          // console.log(_.pluck(user, 'attributes'));
          console.log('close levels\n,', user);
        });
        console.log('close user\n,', user);
      });
      console.log('close models\n,', user);
    });
    console.log('close users\n,', user);
  });
  console.log("DERP!");
  res.json(users);
};

exports.addUser = function(req, res){
  var user = new User({
    name: req.body.name,
    email: req.body.email
  }).findOrCreate().then(function(model){
    // console.log(model.toJSON());
  });

  _.each(req.body.skills, function(value, key, collection){
    var skill = new Skill ({
      name: key
    }).findOrCreate().then(function(model){
      // console.log(model.toJSON());
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
