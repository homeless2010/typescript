export  const numberPegexp = /^[0-9]+$/;
//import { StringValidator } from "./Validation";
// import { StringValidator as sv } from "./Validation";
import * as validator from "./Validation";

export  class ZipCodeValidator implements validator.StringValidator{
  isAcceptable(s: string) {
       return s.length === 5 && numberPegexp.test(s);
   }
}
