const fs = require( 'fs' );
const path = require( 'path' );
const stream = require( 'stream' );

const filePath = path.resolve( __dirname, 'bigfile.txt' );
const outFilePath = path.resolve( __dirname, 'output.bigfile.txt' );

// 为了在所有的事件处理器回调函数中断住
const Stream = stream.Stream;

let onOld = Stream.prototype.on;

Stream.prototype.on = function ( ev, fn ) {
    var that = this;
    var innerFn = function () {
        debugger;
        fn.apply( that, arguments );
    }
    onOld.call( that, ev, innerFn );
};

const readable = fs.createReadStream( filePath );
const writable = fs.createWriteStream( outFilePath );

readable.pipe( writable );