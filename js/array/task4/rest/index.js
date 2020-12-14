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


multiply(5);


