/* Createing a simple server which returns hello world.js */

var http = require("http");

var server = http.createServer(function(request, response){
	response.writeHead(200, 
		{'content-type': 'text/plain'});
	response.end("Hello, World");
});

server.listen(8000);

console.log("Listening on http://localhost:8000");

