class IfElsedemo_1 {
  getvalidate(input) {
    if (input < 18) {
      console.log(input + " is not eligible");
    } else if ((input >= 18) & (input <= 60)) {
      console.log(input + " is eligible");
    } else {
      console.log(input + " is retired ");
    }
  }
}
const ob = new IfElsedemo_1();
ob.getvalidate(71);
