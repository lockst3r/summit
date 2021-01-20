"use strick";
//1. learn requirement
//2. Create step by step
//3. Write fraft solution & testing
//4. Refactoring final testing

//input obj
//output arr obj

//algo

//1. copy object  & get object entries
//2. map array
//3.sort

/* eslint-disable */

const message = "Test";
const weight = 55;
let count = 0;

function run() {
  console.log("RUN");
}

function createMessenger() {
  let message = "Just learn it";
  let sender = "Gromcode";

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  function countMessage() {
    count++;
    console.log(count + "was send");
  }

  return {
    countMessage,
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
run();

// global lex envirenent
/*
{
  envirenentRecprds: {
  message: 'test';
  weight: 55,
  run: function,
  createMessenger: function
  },
  outer: 0,
}

*/

//loop lex envirement
/*
{
  envirenentRecprds: {
 i:0
  },
  outer: global,
}

*/

// createMessenger lex envirement
/*
{
  envirenentRecprds: {
 massege: '';
 sender: '';
 sendMessage: func;
 weight: 100;
  },
  outer: global,
}
*/
