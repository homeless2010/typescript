let strings = ["hello","sb","101"];
namespace myValidator{
  export class Test{
    isEq(s: string){
      return s === "sb";
    }
  }
}
/*class Test{
  isEq(s: string){
    return s === "sb";
  }
}
*/
let validators: {[s: string]: myValidator.Test} = {};

validators["aa"] = new myValidator.Test();
validators["aa"] = new myValidator.Test();
validators["bb"] = new myValidator.Test();

for(let s of strings){
  for(let name in validators){
    let iseq = validators[name].isEq(s);
    console.log(iseq);
  }

}
