const path = require('path');
const express = require('express');
const pageInfo = require('./pageInfo');
const fs = require('fs');

const app = express();

app.set('view engine', 'pug');




app.get('/', function(request, response){
  response.render('index', pageInfo.index);
});

app.get('/about', function(request, response){
  response.render('about', pageInfo.about);
});

app.get('/contact', function(request, response){
  response.render('contact', pageInfo.contact);
});

app.get('/projects', function(request, response){
  response.render('projects', pageInfo.projects);
});




app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html').pipe(res)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});