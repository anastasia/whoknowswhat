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

exports.users = function(req, res){
  res.json(users);
};
