class minimumDemo {
  getMax(a) {
    let min = a[0];
    for (let i = 1; i < a.length; i++) {
      if (a[i] < min) {
        min = a[i];
      }
    }
    console.log("Minimum number is " + min);
  }
}

const ob = new minimumDemo();
ob.getMax([10, 20, 5, 15, 25, 80, 12, 18, 30, 3]);
