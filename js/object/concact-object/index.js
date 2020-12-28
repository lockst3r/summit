"use strick";
//1. learn requirement
//2. Create step by step
//3. Write fraft solution & testing
//4. Refactoring final testing

/*
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
*/


function buildObject (keysList , valuesList) {
return keysList.reduce((acc, key, index)=>{
return {...acc, [key]: valuesList[index] };
},{});
}




/*
function buildObject (keysList , valuesList) {
  let result = {};
  for (let i = 0; i < keysList.length; i++) {
debugger;
      result[keysList[i]] = valuesList[i];
  }
  return result;
};

*/

