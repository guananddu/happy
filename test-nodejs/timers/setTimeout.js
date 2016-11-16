debugger
var timer = setTimeout( function () {
    debugger
    console.log( 'setTimeout 0 called!' );
}, 0 );

debugger
var timer2 = setTimeout( function () {
    debugger
    console.log( 'setTimeout 50 called!' );
}, 50 );

setImmediate( function () {
    console.log( 'setImmediate called!' );
} );