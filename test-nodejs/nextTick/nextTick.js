console.log('start');

setTimeout( () => {
    console.log( 'setTimeout callback' );
}, 0 );

debugger
process.nextTick( () => {
    debugger
    console.log( 'nextTick callback' );
} );
console.log('scheduled');
process.nextTick( () => {
    debugger
    console.log( 'nextTick 2 callback' )
} );
// Output:

// start
// scheduled
// nextTick callback
// nextTick 2 callback
// setTimeout callback
