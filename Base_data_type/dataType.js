var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var name1 = "bob";
name1 = "smith";
//模板字符串
/*
为什么没效果
*/
var name2 = 'Gene';
var age = 37;
var sentence = 'hello,my name is ${name2}gggggggg${age + 1} years old next month';
var sss = "${name2}";
document.body.innerHTML = sentence;
document.body.innerHTML = sss;
//数组泛型
var list = [1, 2, 3];
console.log(list);
//元组 Tuple
/*
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
*/
var x;
x = ['hello', 10];
//x = [10,'hello'];
//当访问一个越界的元素，会使用联合类型替代。
x[5] = 'world';
console.log(x[5].toString());
console.log(x[4]);
console.log(x[0].substr(1));
//console.log(x[1].substr(1));//error
//枚举
/*enum Color {Red = 1,Green,Blue}
let c: Color = Color.Green;
console.log(c);*/
/*enum Color{Red = 1,Green =2,Blue = 4}
let c: Color = Color.Green;
console.log(c);*/
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
alert(colorName);
