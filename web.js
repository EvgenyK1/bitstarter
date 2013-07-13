var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(128);
buffer = fs.readFileSync("./index.html", "utf-8");

console.log("Buffer is: " + buffer.toString(buffer));
app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8", 0, 28));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
