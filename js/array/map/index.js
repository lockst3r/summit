"use strick";


//1. learn requirement
//2. Create step by step
//3. Write fraft solution & testing
//4. Refactoring final testing



// input arr, callback
// output arr


const mapArrayElements = (arr, callback) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
};

// test func
const testArr = [66, 6, 10, -4, 94, 5];

const testCallback = (el, ind, arr) => el * 2;

const res = mapArrayElements(testArr, testCallback);

