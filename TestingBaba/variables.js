// what is variables?
// variables we have use to hold the value and data. we have 4 typs of variables but now in java script we only use 2 types of variables-
// i. let : if we declare let varibale so we can re-assign the value.
// ii. const: if we decalre const variable so we can't re-asign the value.

let a = 10;
let b = 20;
let c = 0;
class variables_demo {
  constructor() {
    console.log("Hello Constructor");
  }
  addition() {
    c = a + b;
    console.log("Addition is " + c);
  }
  subtraction() {
    a = 30;
    b = 20;
    c = a - b;
    console.log("Substarction is " + c);
  }
}
const ob = new variables_demo();
ob.addition();
ob.subtraction();

