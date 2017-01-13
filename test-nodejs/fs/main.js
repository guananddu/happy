const fs = require( 'fs' );
const path = require( 'path' );

const file = path.resolve( __dirname, 'myfile.txt' );

fs.access( file, fs.constants.R_OK | fs.constants.W_OK, ( err ) => {
    console.log( err ? 'no access!' : 'can read/write' );
    readFile( file );
} );

function readFile( file ) {
    fs.readFile( file, ( err, data ) => {
        if ( err ) throw err;
        console.log( `${data.toString().substring( 0, 20 )}....` );
        appendFile( file );
    } );
}

function appendFile( file ) {
    fs.appendFile( file, `\ndata to append: ${new Date().getTime()}`, ( err ) => {
        if ( err ) throw err;
        console.log( 'The "data to append" was appended to file!' );
    } );
    fs.stat( file, ( err, stats ) => {
        console.log( err, JSON.stringify( stats ) );
    } );
}