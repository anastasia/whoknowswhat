var http = require('http');
var https = require('https');
var url = require('url');
var _ = require('underscore');
var html = require('html');

exports.index = function(req, res){
  res.sendfile('client/index.html');
};

exports.client = function(req, res){
  console.log(req);
  res.sendfile('client/' + req.params[0]);
};

exports.api = function(req, res){
  var users = [{
    id: 1,
    name: "Doug's Beard",
    email: "doug@hackreactor.com",
    skills: []
  }];
  res.send(JSON.stringify(users));
};
