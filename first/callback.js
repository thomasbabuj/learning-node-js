// Testing Node Callbacks

var myAsyncFunction = function( someArg1, someArg2, callback) {
	// simulate some I/O was done
	console.log ("Before setTimeout");

	setTimeout( function(){
		// 1 second latter, we are done with the I/O, call the callback
		callback();
	}, 1000);

	console.log ("After setTimeout");
};

var callback1 = function() {
	console.log ("I am in callback");
};

myAsyncFunction("arg1", "arg2", callback1);