/*
//1. learn requirement
//2. Create step by step
//3. Write fraft solution & testing
//4. Refactoring final testing


//callback
//input number(el), num(index)





// input num num num
//output num

//function multiply (){
//return  Object.values(arguments).reduce((acc, item) => acc * item);

//}
*/
const multiply = (...args) => {
return args.reduce((acc, el) => acc + el);
}

console.log(multiply(5));
console.log(multiply(3, 5, 10));


//spread
const testaRR = [6, 7, 6, 9, 0];
console.log(...testaRR);

const  testArrCopy = [...testaRR];



