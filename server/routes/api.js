var http = require('http');
var https = require('https');
var url = require('url');
var _ = require('underscore');
var html = require('html');

var users = [
  {
    id: 1,
    name: "Doug's Beard",
    email: "doug@hackreactor.com",
    skills: {
      "Angular": "Expert",
      "Beard": "Expert"
    }
  },
  {
    id: 2,
    name: "Marcus",
    email: "Marcus@hackreactor.com",
    skills: {
      "Everything": "Expert"
    }
  },
  {
    id: 3,
    name: "Doug",
    email: "doug@hackreactor.com",
    skills: {
      "Beard": "Expert",
      "Trolling": "Expert",
      "Talking": "Expert"
    }
  },
  {
    id: 4,
    name: "Fred",
    email: "fred@hackreactor.com",
    skills: {
      "Node": "Expert",
      "Angular": "Expert",
      "Backbone": "Expert",
      "Git": "Expert"
    }
  }
];

var getSkills = function(users){
  var skillCount = {};
  _.each(users, function(user, key, collection){
    _.each(user.skills, function(skillLevel, skill){
      if (!skillCount[skill]) {
        skillCount[skill] = 1;
      } else {
        skillCount[skill] += 1;
      }
    });
  });

  return skillCount;
};

exports.users = function(req, res){
  res.json(users);
};

exports.skills = function(req, res){
  res.json(getSkills(users));
};

exports.addUser = function(req, res){
  console.log(req);
  console.log(req.body);
  console.log(JSON.parse(req.body.skills))
  // TODO: Find out what gets submitted to the server on user.save()
  
  users.push(  {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    skills: JSON.parse(req.body.skills)
  });
  console.log(users);
  res.send();
};
