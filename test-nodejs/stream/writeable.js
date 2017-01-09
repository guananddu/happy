const fs = require( 'fs' );
const path = require( 'path' );
const stream = require( 'stream' );

const filePath = path.resolve( __dirname, 'output.txt' );

// 为了 debug，进入 fs.write 的回调函数
const oldFsWrite = fs.write;
fs.write = function () {
    var cb = arguments[ 5 ];
    arguments[ 5 ] = function ( er, bytes ) {
        debugger;
        cb( er, bytes );
    };
    oldFsWrite.apply( fs, arguments );
};

const writeable = fs.createWriteStream( filePath, {
    defaultEncoding: 'utf8'
} );

writeable.on( 'open', o => {
    console.log( 'open event!', o );
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
