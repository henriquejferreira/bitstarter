var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

var buf = fs.readFileSync('index.html');
var finalString = buf.toString('utf-8',0,buf.lenght-1);

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  response.send(finalString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
