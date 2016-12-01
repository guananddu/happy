console.log('start');
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
// ...
