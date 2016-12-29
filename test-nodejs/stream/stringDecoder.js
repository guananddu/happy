// In the following example, the three UTF-8 encoded bytes of
// the European Euro symbol (€) are written over three separate operations:

const StringDecoder = require( 'string_decoder' ).StringDecoder;
const decoder = new StringDecoder( 'utf8' );

decoder.write( Buffer.from( [ 0xE2 ] ) );
decoder.write( Buffer.from( [ 0x82 ] ) );
console.log( decoder.end( Buffer.from( [ 0xAC ] ) ) );