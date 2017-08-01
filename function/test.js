{
}
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
var myAdd = function (x, y) { return x + y; };
//the parameters ‘x’ and 'y' have the type number
var myAddd = function (x, y) { return x + y; };
function buildName(firstName) {
}
var result1 = buildName(null);
var result2 = buildName(undefined);
//可选参数
function buildName2(firstName, lastName) {
}
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = 'smith'; }
}
var deck = {
    suits: ['hearts', 'spades', 'clubs'],
    cards: Array(52),
};
function f() {
    console.info(this);
}
f();
