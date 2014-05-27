var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');
var app = express();

// simple logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// parse application/json and application/x-www-form-urlencoded
app.use(bodyParser());


var read_json = function read_json(filename, default_value) {
  try {
    return JSON.parse(fs.readFileSync(filename));
  } catch(e) {
    return default_value || {};
  }
};

var path = 'json';

app.get('/', function(req, res){
  console.dir(req.query);
  var data =  read_json(path + 'index' + '.get.json');
  res.json(data);
});

app.get('/:path', function(req, res){
  console.dir(req.query);
  var data =  read_json(path + req.path + '.get.json');
  res.json(data);
});

app.post('/', function(req, res){
  console.dir(req.body);
  var data =  read_json(path + 'index' + '.post.json');
  res.json(data);
});

app.post('/:path', function(req, res){
  console.dir(req.body);
  var data =  read_json(path + req.path + '.post.json');
  res.json(data);
});

app.put('/', function(req, res){
  var data =  read_json(path + 'index' + '.put.json');
  res.json(data);
});

app.put('/:path', function(req, res){
  console.dir(req.body);
  var data =  read_json(path + req.path + '.put.json');
  res.json(data);
});

app.delete('/', function(req, res){
  console.dir(req.body);
  var data =  read_json(path + 'index' + '.delete.json');
  res.json(data);
});

app.delete('/:path', function(req, res){
  console.dir(req.body);
  var data =  read_json(path + req.path + '.delete.json');
  res.json(data);
});

app.listen(process.env.PORT || 3000);
