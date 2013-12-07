/*
  Exmaple of blocking scenarios - Big loops

  Here we may be expecting, in one second the timeout will happen and set open to true, and that the while loop will stop and that we will get "opened" printed.

  But this never happens. Node will never execute the timeout callback becuase the event loop is stuck on this while loop.
*/


var open = false;

setTimeout(function(){
	open = true;	
}, 1000);

while( !open )
{
   console.log("waiting...");
}

console.log( "opened! ");