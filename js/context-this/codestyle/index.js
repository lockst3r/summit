"use strick";

//1. learn requirement
//2. Create step by step
//3. Write fraft solution & testing
//4. Refactoring final testing

//function printMessage(country, city) {
//  console.log(
//    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
//  );
//}

// const user = {
//  firstName: "Andrey",
//  age: 113,
//};

//const printMessageBinded = printMessage.bind(user, 'Germany', 'Berlin');
//printMessageBinded();

// printMessage("Ukraine", "Kyiv");

//const printMessageBinded = printMessage.bind(user, 'Germany');
// printMessage('Berlin');
//printMessageBinded();

//printMessage.bind(user)('Germeny', 'Berlin');

// option 1
/* function bind(func, context, ...args) {
  return func.bind(context, ...args);
}

bind(printMessage, user);

function bind(func, context, ...args) {
  return func.bind(context, ...args);
}

bind(printMessage, user); */
// option 2
function bind(func, context, ...args) {
  return function (...rest) {
    return func.call(context, ...args, ...rest);
  };
}
/* // option 3

function myBind(func, context, ...args) {
return function() {
  const contextCopy = {...context};
contextCopy.tempFunc = func;
contextCopy.tempFunc(...args, ...params);
}
} */


