/* eslint-disable */

// hoisting example 1
//console.log(message);
//var message = 'Hoisting is here!';

// hoisting example 2
/*
var a
a = 55;
console.log(a);

if (a) {
  var a = 1;

  console.log(a);
}

console.log(a);

// hoisting example 3
var a;
a = 77;
console.log(a);

function print() {
  var a = 2;
  console.log(a);
}
print();

console.log(a);
*/


// exp 4

function run() {
console.run('Run');
}


const go = () => {
console.log('Go');
}

//

 function createLogger() {
  const logger = [];

  function warn(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: "warn",
    });
  }

  function error(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: "error",
    });
  }

  function log(text) {
    logger.push({
      message: text,
      dateTime: new Date(),
      type: "log",
    });
  }

  function getRecords(type) {
    let res = logger.sort((a,b)=> a.dataTime < b.dateTime);
    return type ? sorted.filter(item=> item.type === type) : sorted;
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}



const logger = createLogger();
logger.error('we have a problem');
logger.error('error!!');
logger.log('Hello guys');


console.log(logger1.getRecords());