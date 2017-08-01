var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
//var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问
function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
f(true); // returns '10'
f(false); // returns 'undefined'
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
//let块作用域
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
//解构
//展开
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
console.info(search);
