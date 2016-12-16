console.log('start');

debugger

setTimeout( () => {
    console.log( 'setTimeout callback' );

    process.nextTick( () => {
        console.log( 'i am a inner nextTick callback!' );
    } );

}, 0 );

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
