var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  var buffer = new Buffer(256);
  buffer = fs.readFilesync('/index.html');
  buffer.toString('utf-8');
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
