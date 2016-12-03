// abc 此变量指向一个匿名函数
var abc = function () {

};

// 外围第一个小括号是括起来匿名函数体
// 外围第二个小括号是函数调用
( function () {

} )();

// def === 1
var def = function () {
    return 1;
}();