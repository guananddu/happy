const fs = require( 'fs' );
const path = require( 'path' );
const stream = require( 'stream' );

const filePath = path.resolve( __dirname, 'bigfile.txt' );
const outFilePath = path.resolve( __dirname, 'output.bigfile.txt' );

const readable = fs.createReadStream( filePath );
const writable = fs.createWriteStream( outFilePath );

readable.pipe( writable );