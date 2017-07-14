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
