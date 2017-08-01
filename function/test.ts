{


}
let z = 100;

function addToZ(x,y){
    return x + y + z;
}

let myAdd: (x:number,y:number) => number =
  function(x: number,y: number): number { return x+y; };
//the parameters ‘x’ and 'y' have the type number
  let myAddd: (baseValue: number,increment:number) => number = function(x,y){return x + y;};

  function buildName(firstName:string){

  }

  let result1 = buildName(null);
  let result2 = buildName(undefined);

//可选参数

function buildName2(firstName: string,lastName?: string){

}
function buildName3(firstName: string,lastName = 'smith'){

}

let deck = {
  suits: ['hearts','spades','clubs'],
  cards: Array(52),
}

function f(this: void){
  console.info(this);
}
f();

//泛型
// function identity(arg: number): number {
//   return arg;
// }

//返回值的类型与传入参数的类型是相同的
function indentity1<T>(arg: T): T{
  return arg;
}

function identity2<T>(arg: T): T {
  return arg;
}

let myIdentiy: <U>(arg: U) => U = identity2;
