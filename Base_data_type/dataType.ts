let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let name1: string = "bob";
name1 = "smith";

//模板字符串
/*
为什么没效果
*/
let name2: string = 'Gene';
let age: number = 37;
let sentence: string = 'hello,my name is ${name2}gggggggg${age + 1} years old next month';
let sss: string =  "${name2}";
document.body.innerHTML = sentence;
document.body.innerHTML = sss;
//数组泛型
let list: Array<number> = [1,2,3];
console.log(list);
