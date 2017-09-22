//ECMAScript2015起原生类型
/*let sym1 = Symbol();

let sym2 = Symbol("key"); // 可选的字符串key
*/
var obj = (_a = {},
    _a["ass"] = "value",
    _a);
//for of
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); //1,"string",false
}
//for of vs for in
//for in迭代的是对象的键的列表，for of迭代对象对应的值
var list = [4, 5, 6];
for (var i in list) {
    console.log(i); //"0","1","2"
}
for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
    var i = list_1[_b];
    console.log(i); //"4","5","6"
}
//另一个区别是for..in可以操作任何对象；它提供了查看对象属性的一种方法。 但是for..of关注于迭代对象的值。内置对象Map和Set已经实现了Symbol.iterator方法，让我们可以访问它们保存的值。+
var a = null;
for (var i in a) {
    console.info(i + "1111111111");
}
var _a;


let pets =  new Set(["Cat","Hamster","Dog"]);
pets["species"] = "mammals";

for(let pet in pets){
  console.log(pet);
}

for(let pet of pets){
  console.log(pet);
}
