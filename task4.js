
let car = {
  model: "Audi";
  speed: 120;
  run() {
    console.log(`${this.model} їде зі швидкістю ${this.speed}`);
  }
  stop() {
    console.log(`${this.model} зупинилася`);
  }
};
car.run();
car.stop();
