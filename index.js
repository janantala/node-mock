var express = require('express');
var fs = require('fs');
var app = express();

var read_json = function read_json(filename, default_value) {
  try {
    return JSON.parse(fs.readFileSync(filename));
  } catch(e) {
    return default_value || {};
  }
};

var path = 'json';

app.get('/', function(req, res){
  var data =  read_json(path + 'index' + '.get.json');
  res.json(data);
});

app.get('/:path', function(req, res){
  var data =  read_json(path + req.originalUrl + '.get.json');
  res.json(data);
});

app.post('/', function(req, res){
  var data =  read_json(path + 'index' + '.post.json');
  res.json(data);
});

app.post('/', function(req, res){
  var data =  read_json(path + req.originalUrl + '.post.json');
  res.json(data);
});

app.put('/', function(req, res){
  var data =  read_json(path + 'index' + '.put.json');
  res.json(data);
});

app.put('/', function(req, res){
  var data =  read_json(path + req.originalUrl + '.put.json');
  res.json(data);
});

app.delete('/', function(req, res){
  var data =  read_json(path + 'index' + '.delete.json');
  res.json(data);
});

app.delete('/', function(req, res){
  var data =  read_json(path + req.originalUrl + '.delete.json');
  res.json(data);
});

app.listen(process.env.PORT || 3000);
