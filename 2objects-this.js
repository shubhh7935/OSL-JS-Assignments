//MORE ON OBJECTS AND THIS KEYWORD
const car = {
  brand: "maruti",
  model: "Car",
  start: function () {
    console.log(this.brand + " " + this.model);
  },
};
car.start();