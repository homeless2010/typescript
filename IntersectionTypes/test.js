//交叉类型是将多个类型合并为一个类型 Person & Serializable $ Loggable
function extend(first, second) {
    var result = {};
    for (var id in first) {
        console.info(id);
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
        return result;
    }
}
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        //
        console.info('凡是遇到问题先自己解决，自己实在解决不了再问人，讨厌那种一遇到问题根本不思考就问人的那种。虽然...');
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
console.log(jim);
var n = jim.name;
console.log(n);
jim.log();
//联合类型(Union Types)
function padLeft(value, padding) {
    if (typeof padding === "number") {
        var array = Array(padding + 1);
        console.info(array.join(" ").length);
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
console.info("haha" + padLeft("Hello world", 4));
function Me(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
var mefun1 = new Me('fei', '20', 'it');
var mefun2 = Me('fei', '20', 'it');
var array1 = Array(1);
var array2 = new Array(1);
console.log(array1);
console.log(array2);
console.log(mefun1);
console.log(mefun2);
console.log(Me('fei', '20', 'it'));
console.info(name);
function getSmallPet() {
    // ...
    return;
}
var pet = getSmallPet();
pet.layEggs(); // okay
//pet.swim();    // errors
//类型保护与区分类型（Type Guards and Differentiating Types）
//类型断言
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
var SpaceRepeatingPadder = (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}
// 类型为SpaceRepeatingPadder | StringPadder
var padder = getRandomPadder();
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
var s = "foo";
s = null;
var sn = "bar";
sn = null;
sn = undefined;
