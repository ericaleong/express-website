const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res, next){
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   res.send('index.html');
// });


// app.get('/', function(req, res) {
//   res.json(app.index);
// })


app.use(function(req, res, next) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html').pipe(res)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

