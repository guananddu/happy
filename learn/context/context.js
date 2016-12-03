var T = {

    alias: 'TTT',

    test: function () {
        console.log( this.alias ); // undefined
        console.log( this ); // Window
    }

};

/**
 * TTT
 * Object { ... }
 * 此步在调用时，上下文是 T
 */
console.log( T.test() );

// setTimeout 第一个参数必须是函数类型！！！
// 这里只是将T作为了一个命名空间
// T.test 仅仅是一个函数指针【并没有调用】
// 这就是典雅的this错误版本
setTimeout( T.test, 500 );

// 怎么改正才能让 this 指向正确的上下文
setTimeout( function () {
    T.test(); // 明确调用
}, 500 );

// 高级办法
// bind 返回值是一个新函数
// 此新函数中的this指向T，逻辑和T.test一样
setTimeout( T.test.bind( T ), 500 );

// this 指向当前函数被调用时的上下文【就是说，此函数在什么地方被调用？？？】
// 
// 
// /////


// call && apply
window.T = window.T || { };

T.funcp = function ( a, b, c ) {
    console.log( a, b, c );
    console.log( this );
}

// undefined undefined undefined
// T Object { ... }
T.funcp();

// m b c
// { ppp: 1 }
T.funcp.call( { ppp: 1 }, 'm', 'b', 'c' );

// m b c
// { ppp: 1 }
T.funcp.apply( { ppp: 1 }, [ 'm', 'b', 'c' ] );





