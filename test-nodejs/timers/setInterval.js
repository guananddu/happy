debugger
var timer = setInterval( function () {
    debugger
    console.log( arguments );
}, 2000, 'first', 123 );

clearInterval( timer );

debugger
var timer2 = setInterval( function () {
    debugger
    console.log( arguments );
}, 4000, 'second', 456 );