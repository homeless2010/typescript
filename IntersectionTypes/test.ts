//交叉类型是将多个类型合并为一个类型 Person & Serializable $ Loggable
function extend<T,U>(first: T,second: U): T & U{
  let result = <T & U>{};
  for(let id in first){
    console.info(id);
    (<any>result)[id] = (<any>first)[id];
  }
  for(let id in second){
    if(!result.hasOwnProperty(id)){
      (<any>result)[id] = (<any>second)[id];
    }
    return result;
  }
}

class Person {
  constructor(public name: string){}
}

interface Loggable{
  log(): void;
}

class ConsoleLogger implements Loggable{
  log() {
    //
    console.info('凡是遇到问题先自己解决，自己实在解决不了再问人，讨厌那种一遇到问题根本不思考就问人的那种。虽然...');
  }
}

var jim = extend(new Person("Jim"), new ConsoleLogger());
console.log(jim);
var n = jim.name;
console.log(n);
jim.log();

//联合类型(Union Types)
function padLeft(value: string,padding: any){
  if(typeof padding === "number"){
    var array = Array(padding + 1)
    console.info(array.join(" ").length);
    return Array(padding + 1).join(" ") + value;
  }
  if(typeof padding === "string"){
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

console.info("haha"+padLeft("Hello world",4));

function Me(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
}
var mefun1 = new Me('fei','20','it');
var mefun2 = Me('fei','20','it');
var array1 = Array(1);
var array2 = new Array(1);
console.log(array1);
console.log(array2);
console.log(mefun1);
console.log(mefun2);
console.log(Me('fei','20','it'));
console.info(name);

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
    return;
}

let pet = getSmallPet();
pet.layEggs(); // okay
//pet.swim();    // errors

//类型保护与区分类型（Type Guards and Differentiating Types）
//类型断言
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}
//用户自定义的类型保护


//instanceof类型保护
interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
}
//看不懂？tell me why？？？
// instanceof的右侧要求是一个构造函数，TypeScript将细化为：
// 此构造函数的prototype属性的类型，如果它的类型不为any的话
// 构造签名所返回的类型的联合
// 以此顺序。

//可为null的类型
let s = "foo";
s = null; // 错误, 'null'不能赋值给'string'
let sn: string | null = "bar";
sn = null; // 可以

sn = undefined; // error, 'undefined'不能赋值给'string | null'

//注: 严格的 null 检查需要开启编译器选项 --strictNullChecks.
//使用了--strictNullChecks，可选参数会被自动地加上 | undefined;
function f(x: number,y?: number){
  return x + (y || 0);
}
f(1,2);
f(1);
f(1,undefined);
f(1,null); // error, 'null' is not assignable to 'number | undefined'

//可选属性也会有同样的处理:
class C{
  a: number;
  b?: number;
}

let c = new C();
c.a = 12;
c.a = undefined;//error
c.b = 13;
c.b = undefined;//ok
c.b = null//error

//类型保护和类型断言
function f1(sn: string | null): string{
  if(sn == null){
    return "default";
  }
  else{
    return sn;
  }
}

//使用短路运算符:
function f2(sn: string | null): string{
  return sn || "default";
}
//如果编译器不能够去除null或undefined，你可以使用类型断言手动去除。 语法是添加!后缀：identifier!从identifier的类型里去除了null和undefined：
function broken(name: string | null): string{
  function postfix(epithet: string){
    return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null

  }
  name = name || "Bob";
  return postfix("great");

}

function fixed(name: string | null): string{
  function postfix(epithet: string){
    return name!.charAt(0) + '.  the ' + epithet; // ok

  }
  name = name || "Bob";
  return postfix("great");
}
/*本例使用了嵌套函数，因为编译器无法去除嵌套函数的null（除非是立即调用的函数表达式）。 因为它无法跟踪所有对嵌套函数的调用，尤其是你将内层函数做为外层函数的返回值。 如果无法知道函数在哪里被调用，就无法知道调用时name的类型。
*/

//类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name{
  if(typeof n === 'string'){
    return n;
  }else{
    return n();
  }

}
//起别名不会新建一个类型，他创建了一个新名字来引用那个类型，给原始类型起别名通常没什么意思
//尽管可以做为文档的一种形式

//与交叉类型一起使用，我们可以创建出一些十分稀奇古怪的类型
type Container<T> = {value: T};
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}
type LinkedList<T> = T & { next: LinkedList<T>};

interface Person {
  name: string;
}

var people: LinkedList<Person>;
var a = people.name;
var a = people.next.name;
var a = people.next.next.name;
var a = people.next.next.next.name;

//然而类型别名不能出现在右侧的任何地方

//接口vs.类型别名
type Alias = {
  num: number
}
interface Interface{
    num: number;
}
declare function aliased(arg:Alias): Alias;
declare function interfaces(arg: Interface): Interface;
//字符串字面量类型
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement{
  animate(dx: number,dy: number,easing:  Easing){
    if(easing === "ease-in"){
      //...
    }
    else if(easing === "ease-out"){

    }
    else if(easing === "ease-in-out"){

    }else{
      // error! should not pass null or undefined.
    }
  }
}
let button = new UIElement();
button.animate(0,0,"ease-in");
button.animate(0,0,undefined);
//button.animate(0,0,"ccj");

/*function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
    // ... code goes here ...
}
*/

//可辨识联合（Discriminated Unions）
 interface Square{
   kind: "square";
   size: number;
 }
 interface Rectangle{
   kind: "rectangle";
   width: number;
   height: number;
 }
 interface Circle{
   kind: "circle";
   radius: number;
 }
type Shape = Square | Rectangle | Circle;

function area(s: Shape){
  switch(s.kind){
    case "square" : return s.size * s.size;
    case "rectangle": return s.height * s.width;
    case "circle": return Math.PI * s.radius ** 2;
  }
}
//完整性检查
//
//第二种方法使用never类型，编译器用它来进行完整性检查：
function assertNever(x:never): never{
  throw new Error("Unexpected object:" + x);
}
function area1(s: Shape){
  switch(s.kind){
    case"square": return s.size * s.size;
    case "rectangle": return s.height * s.width;
    case "circle": return Math.PI * s.radius ** 2;
    default: return assertNever(s);//error here if there are missing cases

  }
}

//多态的this类型
//多态的this类型表示的是某个包含类或接口的子类型
class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

let v = new BasicCalculator(2)
            .multiply(5)
            .add(1)
            .currentValue();
//由于这个类使用了this类型，你可以继承它，新的类可以直接使用之前的方法，不需要做任何的改变。
class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
    // ... other operations go here ...
}

let v1 = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();

        /*
如果没有this类型，ScientificCalculator就不能够在继承BasicCalculator的同时还保持接口的连贯性。 multiply将会返回BasicCalculator，它并没有sin方法。 然而，使用this类型，multiply会返回this，在这里就是ScientificCalculator。
        */
//索引类型（index types）
function pluck(o, names){
  return names.map(n => o[n]);
}
//在 typescript里使用此函数，通过索引类型查询和索引访问操作符
function pluck1<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]
//keyof T,索引类型查询操作符
//T[K],索引访问操作符
function getProperty<T,K extends keyof T>(o: T,name: K): T[K]{
  return o[name];//o[name] is of type T[K]
}
let name1: string = getProperty(person, 'name');
let age: number = getProperty(person, 'age');
//let unknow = getProperty(person, 'unknow');
//索引类型和字符串索引签名
interface Map<T>{
  [key: string]: T;
}
let keys: keyof Map<number>;//string
let value: Map<number>['foo'];//number

//映射类型
interface PersonPartial{
  name?: string;
  age?: number;
}

interface PersonReadonly{
  readonly name: string;
  readonly age: number;
}

type Readonly1<T> = {
  readonly[P in keyof T]: T[P];
}
type Partial1<T> = {
  [P in keyof T]?: T[P];
}

type PersonPartial1 = Partial<Person>;
type ReadonlyPerson1 = Readonly<Person>;
