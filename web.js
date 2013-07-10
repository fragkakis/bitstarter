var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var responseStr = fs.readFileSync('index.html').toString();

  response.send(responseStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
