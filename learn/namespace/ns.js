// namespace 说的是一种代码组织方式

// 从多人开发来说：A组，B组，C组都在同时开发

// A组：
var A = { };
// 所有的工具函数封装要放到这里，你要开发的
A.funcs = { };

/**
 * [fa description]
 * @return {[type]} [description]
 */
A.funcs.fa = function () {  };

/**
 * [fb description]
 * @return {[type]} [description]
 */
A.funcs.fb = function () { };

// 换种写法：
A.funcs = {
    fa: function () {},
    fb: function () {}
};

//////
// 我要开发
// 所有常量放到 
A.constants = { 
    ONE: '123',
    TWO: '456',
    FB: 'FB'
};


//////// 具体应用

window.events = {
    click: function ( e ) {},
    mouseover: function ( e ) {},
    mousemove: function ( e ) {},
    ...  
};

$target.addEventListener( 'click', window.events.click, false );


/// 纯粹代码组织思想
