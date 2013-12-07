/*

  Some Utility modules functions

 */

 var util = require("util");

 util.log('Hello');

 // inspect () is a nice utility which can aid in quick debugging by inspecting and printing an object properties 

 var a = { 1: true, 2: false};
 console.log(util.inspect(a));

 // inspect() accepts some arugments,

 //util.inspect( object, showHidden, depth=2, showColors);