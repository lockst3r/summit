class Sportsman {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, swimmingStyle) {
    //  can use context 1
    super(name);
    this.swimmingStyle = swimmingStyle;
  }

  swim() {
    console.log(`${this.name} is swimming ${this.swimmingStyle}`);
  }
}

/* const obj ={
  name: 'Test',
  run(){
  console.log('test');
  }
  } */

/* const sportsman = new Sportsman("dens");
const swimmer = new Swimming("user", "somestyle"); */

//  can no use context 1
// super (name);

/*  // lose context 2
console.log('Static Call');
Swimmer.swim()
 */
// const swomFunc = swimmer.swim;
// swomFunc();
// example 4
/* function testFunc() {
  setInterval(() => this.swim, 1000);
}

testFunc.apply(Swimmer);
 */
