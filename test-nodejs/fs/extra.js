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