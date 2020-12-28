"use strick";
//1. learn requirement
//2. Create step by step
//3. Write fraft solution & testing
//4. Refactoring final testing


const mergeObjectsV1 = (obj1, obj2) =>{
  Object.assign({}, obj1, obj2);
  return obj1;
  }

  function mergeObjectsV2(obj1, obj2) {
    return Object.assign({}, obj2, obj1);
  }

  const mergeObjectsV3 = (obj1, obj2) =>{
    const result = { ...obj1, ...obj2 }; 
    return result;
    }

  const mergeObjectsV4 = (obj1, obj2) =>{
      const result = { ...obj2, ...obj1 }; 
      return result;
      }

const test1 ={
  cat: '1',
  dog: '5'
}


const test2 = {
  puppy: '8',
  fish: '3'
}
  console.log(mergeObjectsV2(test1, test2));

const test = 20;
let test1 = test;

const testObj1 = {
name: 'Tom',
age: 50
}

const testObj;

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData
 }

 
 }
function addPropertyV2(userData, userId) {
return Object.assign(userData, {[id] : userId});
}

function addPropertyV3(userData, userId) {
  return Object.assign({}, userData, { id: userId });
}

function addPropertyV3(userData, userId) {
  return {...userData, ...{ [id] : userId }};
}

const addPropertyV4 = (userData, userId) => {
  return {...userData, id: userId };
}