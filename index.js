var http = require("http"),
  fs = require("fs"),
  host = "127.0.0.1",
  port = 8080;

fs.readFile("index.html", function(err, data) {
  var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });

  server.listen(port, host, function() {
    console.log("Listening now...");
  });
});
