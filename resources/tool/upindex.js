const path = require( 'path' );
const fs = require( 'fs' );
const readdirp = require( 'readdirp' );
const qs = require( 'querystring' );

const target = {
    nodejs: path.resolve( __dirname, '../..', 'nodejs' ),
    webkit: path.resolve( __dirname, '../..', 'webkit' )
};

let cliTarget = process.argv[ 2 ];

// 指定更新目标
if ( cliTarget != undefined && target[ cliTarget ] ) {
    handleIndex( cliTarget, target[ cliTarget ] );
}
else {
    for ( let key in target ) {
        handleIndex( key, target[ key ] );
    }
}

function handleIndex( key, tpath ) {
    var listArr = [ ];
    readdirp( { root: tpath, fileFilter: '*.html' }, ( o ) => {
        if ( o.name === 'index.html' ) return;
        listArr.push( o.name );
    }, () => {
        listArr.sort( ( a, b ) => {
            // 计划放到第一
            if ( a === '【计划】.html' ) return -1;
            if ( b === '【计划】.html' ) return 1;
            return ( a + '' ) > ( b + '' ) ? 1 : -1;
        } );
        postIndex( key, listArr );
    } );
}

function postIndex( key, listArr ) {

    var indexArr = [ ];
    listArr.forEach( ( el, inx ) => {
        indexArr.push(
            [
                '<a href="',
                qs.escape( el ),
                '">',
                el.substring( 0, el.lastIndexOf( '.html' ) ),
                '</a>'
            ].join( '' )
        );
    } );

    let targetFile = path.join( target[ key ], 'index.html' );
    let oldContent = fs.readFileSync( targetFile ).toString();

    fs.writeFileSync(
        targetFile,
        oldContent
            .replace(
                /<div class="list-container">(.|\n)*?<\/div>/,
                [
                    '<div class="list-container">',
                        indexArr.join( '<br />\n' ),
                    '</div>'
                ].join( '\n' )
            )
            .replace(
                /<p>更新日期：(.*)?<\/p>/,
                [
                    '<p>更新日期：',
                    ( new Date ).toString(),
                    '</p>'
                ].join( '' )
            )
    );

}