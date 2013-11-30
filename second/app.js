
// creating a simple blog engine and also refactoring the helloworld.js file

var http = require('http');
var url  = require('url');
var fs  = require('fs');

var newPostFormHTML = fs.readFileSync('views/post/new.html', 'UTF-8');

function renderNewPostForm(request, response){

	response.writeHead('200', {'Content-type' : 'text/html; charset=utf-8' });
	response.end(newPostFormHTML);

}

function render404(request,response){
	
	response.writeHead(404);
	response.end('404 File not found error');
}

var server = http.createServer(function(request, response){

	var newPostFormRegEx = new RegExp("^/posts/new/?$");
	var pathName = url.parse( request.url ).pathname;

	if( newPostFormRegEx.test(pathName)){
		renderNewPostForm(request,response);
	} else {
		render404(request, response);
	}

	
});

server.listen('8000');

console.log('Listening on http://localhost:8000');