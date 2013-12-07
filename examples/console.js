
// Node provides global "console" object to output string using

console.log ("Hello");  // this simply output strings into the process stdout after formating it

// You can also pass object instead of a string like this,

var a = {1: true, 2:false};
console.log(a); // now console outputs the object using util.inspect

// string interpolation like this
var a = { 1: true, 2:false};
console.log ("This is a number %d , and this is a string %s, and this is an object outputted as JSON: %j", 42, 'Hello', a);

// console also allows you to write into the stderr using
console.warn("Warning!");

// print stack trace
console.trace();



