//ECMAScript2015起原生类型
/*let sym1 = Symbol();

let sym2 = Symbol("key"); // 可选的字符串key
*/
let obj = {
    ["ass"]: "value"
};
//for of
let someArray = [1,"string",false];

for(let entry of someArray){
  console.log(entry);//1,"string",false
}

//for of vs for in
//for in迭代的是对象的键的列表，for of迭代对象对应的值

let list = [4,5,6];
for (let i in list){
  console.log(i);//"0","1","2"
}

for(let i of list){
  console.log(i);//"4","5","6"
}

//另一个区别是for..in可以操作任何对象；它提供了查看对象属性的一种方法。 但是for..of关注于迭代对象的值。内置对象Map和Set已经实现了Symbol.iterator方法，让我们可以访问它们保存的值。+
let a = null;
for(let i in a){
  console.info(i+"1111111111");
}
