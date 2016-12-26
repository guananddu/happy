debugger
// Creates a zero-filled Buffer of length 20.
const buf1 = Buffer.alloc( 20 );
console.log( 'buf1: ', buf1 );

// Creates a Buffer of length 20, filled with 0x1.
const buf2 = Buffer.alloc( 20, 1 );
console.log( 'buf2: ', buf2 );

const buf2a1 = Buffer.alloc( 20, 'He', 'utf8' );
console.log( 'buf2a1: ', buf2a1 );

// Creates an uninitialized buffer of length 20.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using either fill() or write().
const buf3 = Buffer.allocUnsafe( 20 );
console.log( 'buf3: ', buf3 );

// Creates a Buffer containing [0x1, 0x2, 0x3].
const buf4 = Buffer.from( [ 1, 2, 3 ] );
console.log( 'buf4: ', buf4 );

// Creates a Buffer containing ASCII bytes.
const buf5 = Buffer.from( 'i am a buffer test!i am a buffer test!' );
console.log( 'buf5: ', buf5 );

// Creates a Buffer containing UTF-8 bytes.
const buf6 = Buffer.from( '这是一个 buffer 测试这是一个 buffer 测试', 'utf8' );
console.log( 'buf6: ', buf6 );