const path = require('path');
const express = require('express');
const fs = require('fs');
// const pug = require('views/index.pug');

// const compiledFunction = pug.compileFile('index.pug')
const app = express();

app.get('views/index.pug', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html').pipe(res)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

