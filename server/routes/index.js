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
