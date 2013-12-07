/*
  Callback that will generate events

  Wrapping whole thing inside a schedule() and are invoking it immediately
  after declaring it. 

  Here every callback we are registering a new one to be invoked one second latter, never letting Node finish and exit.

*/

(function schedule(){
	setTimeout(function(){
		console.log("Hello, World!");
		schedule();
	}, 1000);
})();