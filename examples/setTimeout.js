/*  
   This code will register a function to be called when the timeout expires.
*/

var timeout = 2000;

setTimeout(function(){
   console.log("timed out");
}, timeout);


setTimeout(function(){
  console.log("Zero timeout");
}, 0);  // If you sepcify 0 then the function get exectured some time after the stack clears, but with no waiting.


var timeoutHandle = setTimeout(function(){
	console.log ("yeaaa!");
}, 1000);

clearTimeout( timeoutHandle); //  yeaaa wont be printed on the screen since the timeout was cleared.