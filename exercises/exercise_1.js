/* 

create an uninitialized buffer with 100 bytes length and fill it with bytes with values starting from 0-99. and then print its contents.

*/

var buffer = new Buffer(100);
for(var i=0; i<buffer.length; i++){
	buffer[i] = i;
}
console.log( buffer);
console.log ( buffer.toString() );


// slice the buffer with bytes ranging 40 to 60 and print it

var slice = buffer.slice(40,60);
console.log ( slice );
console.log ( slice.toString());

// copy bytes ranging 40 to 60 into a new buffer

var copyBuffer = new Buffer(20);
copyBuffer.copy( slice );
console.log ( copyBuffer );
