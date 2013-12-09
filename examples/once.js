/*
  .once event emitter 
  Exmaple of .once event emitter. This code wont compile.

*/

server.once("connection", function(stream){
	console.log ("Ah, we have our first user");
});

function connListener(stream) {
	console.log( "Ah, we have our first user!");
	server.removeListener('connection', connListener);
}

server.on('connection', connListener);