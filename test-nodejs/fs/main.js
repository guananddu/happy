const fs = require( 'fs' );
const path = require( 'path' );

const file = path.resolve( __dirname, 'myfile.txt' );

// let fsinternal = process.binding( 'fs' );
// let FSReqWrapOld = fsinternal.FSReqWrap;
//
// let handler = {
//     set: function ( obj, prop, value ) {
//         if ( prop !== 'oncomplete' ) {
//             obj[ prop ] = value;
//             return true;
//         }
//
//         obj.oncomplete = function () {
//             debugger;
//             console.log( 'set oncomplete...' );
//             value.apply( obj, arguments );
//         }
//
//         // Indicate success
//         return true;
//     },
//     get: function ( target, name ) {
//         console.log( 'get...' );
//         return target[ name ];
//     },
// };
//
// // 修改构造函数s
// fsinternal.FSReqWrap = function () {
//     FSReqWrapOld.apply( this, arguments );
//     new Proxy( this, handler );
// };

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