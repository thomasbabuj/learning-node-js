/* 
   Schedules a given function to run every X seconds
*/

var period = 1000;
var internal = setInterval(function(){
	console.log ("tick");
}, period );

var internal = setInterval(function(){
	console.log("clear interval");
},1000);

clearInterval(internal);