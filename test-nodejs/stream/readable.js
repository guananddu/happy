const fs = require( 'fs' );
const path = require( 'path' );
const stream = require( 'stream' );

const filePath = path.resolve( __dirname, 'bigfile.txt' );

const readable = fs.createReadStream( filePath, {
    flags: 'r',
    encoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true,
    // Be aware that, unlike the default value set for highWaterMark on a
    // readable stream (16 kb), the stream returned by this method has a
    // default value of 64 kb for the same parameter.
    highWaterMark: 20000
} );

readable.setEncoding( 'utf8' );

readable.on( 'open', () => {
    console.log( `!readable: open event.` );
} );

readable.on( 'readable', () => {
    console.log( `!readable: readable event.` );
} );

readable.on( 'data', ( chunk ) => {
    console.log( `readable: received ${chunk.length} bytes of data.` );
} );

readable.on( 'close', () => {
    console.log( `!readable: close` );
} );

readable.on( 'end', () => {
    console.log( `!readable: there will be no more data.` );
} );
