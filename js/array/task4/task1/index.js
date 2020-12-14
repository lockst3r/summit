"use strick";


"use strick";
//1. learn requirement
//2. Create step by step
//3. Write fraft solution & testing
//4. Refactoring final testing


//callback
//input number(el), num(index)





// input arr callback
//output array

//1. iterate array
//2. apply call back func
//3. if call back true at to result

const testArr = [5, 7, 10, -2, 44];


const filterArray = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};





const testCallback = (el, index, arr) => index > 3;
