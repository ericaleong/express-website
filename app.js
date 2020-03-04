const path = require('path');
const express = require('express');
const pageInfo = require('./pageInfo');
const fs = require('fs');

// --- Run express --- //
const app = express();

// --- Run pug --- //
app.set('view engine', 'pug');


// --- Moment module for the date in footer --- //
app.locals.moment = require('moment');


// --- GET endpoint handlers --- //
app.get('/', function(request, response){
  response.render('index', pageInfo.index);
});

app.get('/about', function(request, response){
  response.render('about', pageInfo.about);
});

app.get('/contact', function(request, response){
  response.render('contact', pageInfo.contact);
});

app.get('/gallery', function(request, response){
  response.render('gallery', pageInfo.gallery);
});


// --- Serving static assets such as the CSS styling --- //
app.use(express.static(path.join(__dirname, 'public')));



// --- The 404 error page set up a little differently, I used this example from Netninja --- //
app.use(function(req, res, next) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html').pipe(res);
});


// --- Localhost: 3000 --- //
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});