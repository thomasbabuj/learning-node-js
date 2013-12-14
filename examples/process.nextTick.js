/* 
  
  process.nextTick  helps to schedule a callback function to run on 
  the next run of the event loop

*/

process.nextTick( function(){

	// this runs on the next event loop
	console.log ("yay!!");

});