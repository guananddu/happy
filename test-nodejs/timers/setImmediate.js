debugger;

setImmediate(
    function () {
        debugger;
        console.log( 'i am the first!' );
        console.log( this );
        console.log( arguments );
    },
    'first',
    123
);

setImmediate(
    function () {
        debugger;
        console.log( 'i am the second!' );
        console.log( this );
        console.log( arguments );
    },
    'second'
);