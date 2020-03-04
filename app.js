const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html').pipe(res)
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

