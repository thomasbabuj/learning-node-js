
// creating a simple blog engine and also refactoring the helloworld.js file

var http = require('http');

function renderNewPostForm(request, response){

	response.writeHead('200', {'Content-type' : 'text/plain' });
	response.end('Hello, World - Blogging');

}

var server = http.createServer(function(request, response){

	renderNewPostForm(request,response);
});

server.listen('8000');

console.log('Listening on http://localhost:8000');