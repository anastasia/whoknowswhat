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
    skills: ["Angular", "Beard"]
  },
  {
    id: 2,
    name: "Marcus",
    email: "Marcus@hackreactor.com",
    skills: ["Everything"]
  }
];

var skills = {
  "Angular": [1],
  "Beard": [1],
  "Everything": [1]
};

var getSkills = function(users){
  var skillCount = {};
  _.each(users, function(user, key, collection){
    _.each(user.skills, function(skill){
      if (!skillCount[skill]) {
        skillCount[skill] = 1;
      } else {
        skillCount[skill] += 1;
      }
    });
  });

  console.log(_.keys(skillCount).sort());
  return skillCount;
};

exports.users = function(req, res){
  res.json(users);
};

exports.skills = function(req, res){
  res.json(getSkills(users));
};