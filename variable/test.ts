//var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'

//let块作用域

for(let i = 0;i < 10; i++){
    setTimeout(function(){console.log(i);},100*i);
}
//解构

//展开
let defaults = {food:"spicy",price:"$$",ambiance:"noisy"};
let search = {...defaults,food:"rich"};
console.info(search);
