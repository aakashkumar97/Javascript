let out;
class Switch_demo {
  getValidate_days(days) {
    switch (days) {
      case "sunday": {
        out = "Holiday";
      }
      case "monday": {
        out = "1st day of week";
        break;
      }
      case "tuesday": {
        out = "1st day of week";
        break;
      }
      case "wednesday": {
        out = "1st day of week";
        break;
      }
      case "thursday": {
        out = "1st day of week";
        break;
      }
      case "friday": {
        out = "1st day of week";
        break;
      }
      case "saturday": {
        out = "1st day of week";
        break;
      }
      default: {
        out = "Wrong value";
      }
    }
    console.log(out);
  }
}
const ob = new Switch_demo();
ob.getValidate_days("monday");
