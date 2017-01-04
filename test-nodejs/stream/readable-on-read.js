const fs = require( 'fs' );
const path = require( 'path' );
const stream = require( 'stream' );

const filePath = path.resolve( __dirname, 'bigfile.txt' );

const readable = fs.createReadStream( filePath, {
    highWaterMark: 20000
} );

readable.on( 'data', ( chunk ) => {
    console.log( `readable on data: received ${chunk.length} bytes of data.` );
} );

//////////////

// const readable = fs.createReadStream( filePath, {
//     highWaterMark: 20000
// } );
//
// readable.on( 'data', ( chunk ) => {
//     console.log( `Received ${chunk.length} bytes of data.` );
//     readable.pause();
//     console.log( 'There will be no additional data for 1 second.' );
//     setTimeout( () => {
//         console.log( 'Now data will start flowing again.' );
//         readable.resume();
//     }, 1000 );
// } );

//////////////

// const readable = fs.createReadStream( filePath, {
//     highWaterMark: 20000
// } );
//
// readable.on( 'readable', () => {
//     var chunk;
//     while ( null !== ( chunk = readable.read() ) ) {
//         console.log( `Received ${chunk.length} bytes of data.` );
//     }
// } );
