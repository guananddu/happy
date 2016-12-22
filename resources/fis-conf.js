var path = require( 'path' );
var fs   = require( 'fs' );

var licenses = fs.readFileSync(
    path.resolve( __dirname, '..', 'extra/licenses.html' ) ).toString();
licenses = licenses.replace( /\[DATE\]/, ( new Date ).toString() );

var titleExtra = fs.readFileSync(
    path.resolve( __dirname, '..', 'extra/title.html' ) ).toString();

var titleExp = /<title>(.*)<\/title>/;

function STATIC_PATH_REPLACE( content, file, settings ) {

    var matchArr = titleExp.exec( content );
    var articleTitle = matchArr ? matchArr[ 1 ] : '';

    var titleHtml = titleExtra.replace( /\[TITLE\]/, articleTitle );

    return content
        // 图片样式 fix
        .replace(
            /height="\d+" width="\d+"/ig,
            'height="auto" width="100%"'
        )
        .replace(
            /<body>/,
            '<body>' + titleHtml
        )
        .replace(
            /<\/body>/,
            licenses + '</body>'
        );

}


// 发布模板字符串替换配置
fis.media( 'local' ).match( '*.html', {
    parser: [
        STATIC_PATH_REPLACE
    ],
    release: '$0'
}, true );

fis.set( 'project.ignore',
    fis.get( 'project.ignore' ).concat( [
        'output/**',
        'out/**',
        'build.sh',
        'node_modules',
        'tool/**'
    ] ) );