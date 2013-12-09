/* 

  Create a pseudo-class and make it inherit from the EventEmitter
*/

var EventEmitter = require("events").EventEmitter,
    util		 = require("util");

// Here is MyClass constructor 
var MyClass = function(option1, option2) {
	this.option1 = option1;
	this.option2 = option2;
}

util.inherits(MyClass, EventEmitter);  // setting up the prototype chain so that you get the EventEmitter prototype methods available to your MyClass instances.

MyClass.prototype.someMethod =function() {
	this.emit("custom event", 'some arguments');  // here we are emitting event named custom event and sending some data
}

// Creating a client events

var myInstance = new MyClass(1,2);
myInstance.on('create event', function(){
	console.log( 'got a custom event');
});
