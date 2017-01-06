const fs = require( 'fs' );
const path = require( 'path' );
const stream = require( 'stream' );

const filePath = path.resolve( __dirname, 'output.txt' );

const writeable = fs.createWriteStream( filePath, {
    defaultEncoding: 'utf8'
} );

writeable.on( 'close', o => {
    console.log( 'close event!', o );
} );

writeable.on( 'finish', o => {
    console.log( 'finish event!', o );
} );

writeable.write( 'abc\n' );

writeable.cork();

writeable.write( '测试输出\n' );

writeable.uncork();

writeable.write( Buffer.from( 'from buffer\n' ) );

writeable.end( 'the end' );