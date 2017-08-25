var strings = ["hello", "sb", "101"];
var myValidator;
(function (myValidator) {
    var Test = (function () {
        function Test() {
        }
        Test.prototype.isEq = function (s) {
            return s === "sb";
        };
        return Test;
    }());
    myValidator.Test = Test;
})(myValidator || (myValidator = {}));
/*class Test{
  isEq(s: string){
    return s === "sb";
  }
}
*/
var validators = {};
validators["aa"] = new myValidator.Test();
validators["aa"] = new myValidator.Test();
validators["bb"] = new myValidator.Test();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        var iseq = validators[name_1].isEq(s);
        console.log(iseq);
    }
}
