class Forloop_demo {
  getTable(num) {
    for (let i = 1; i <= 10; i++) {
      console.log(num * i);
    }
  }
}
const ob = new Forloop_demo();
ob.getTable(5);
