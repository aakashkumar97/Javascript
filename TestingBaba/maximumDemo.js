class maximumDemo {
  getMax(a) {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
      if (a[i] > max) {
        max = a[i];
      }
    }
    console.log("Maximum number is " + max);
  }
}

const ob = new maximumDemo();
ob.getMax([10, 20, 5, 15, 25, 80, 12, 18, 30, 3]);
