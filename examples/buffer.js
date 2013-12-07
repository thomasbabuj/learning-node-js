/*

  Buffers helps node to transport data.
*/

// create a buffer from an UTF-8 string
var buf = new Buffer("Hello, world!");
console.log (buf);

// string with other encodings
var buf_new = new Buffer('8676fd3713ce', 'base64');
console.log( buf_new );

// accepted encodings are ascii, utf8, base64

//Create a empty buffer specific size
var emptyBuf = new Buffer(1024);

console.log (emptyBuf);
// manipulate the empty buffer
emptyBuf[20] = 56;

console.log ( emptyBuf);

// also convert the buffer into utf-8 string
var str = emptyBuf.toString('base64');
console.log (str);

// UTF-8 is the default encoding for Node, so in a genearl way, if you ommit it as we did on the buffer.toString() call, UTF-8 will be assumed.

// Slice Buffers 

/*
  Buffers can be sliced into smaller buffer by using the appropiately name slice() method like 


*/

var buffer = new Buffer ('this is the string in my buffer');
var slice = buffer.slice(10,20);

console.log (slice);

// Copy Buffer

var originalBuffer = new Buffer("this is the string in my buffer");
var sliceBuffer = new Buffer(10);

var targetStart= 0,
    sourceStart = 10,
    sourceEnd = 20;

originalBuffer.copy(sliceBuffer, targetStart, sourceStart, sourceEnd);

console.log( sliceBuffer);
