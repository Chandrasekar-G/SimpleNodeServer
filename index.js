var http = require("http"),
    host = "127.0.0.1",
    port = 8080;

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.end("Hello World!!!");
});

server.listen(port, host, function(){
    console.log("Listening now...");
});