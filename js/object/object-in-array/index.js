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

/*
const getCustomersList = obj => {
const entries = Object.entries(obj);

const resArr = entries.map(arr => {
const resObj = arr[1];
return {...resObj, id: arr[0]}
});

return resArr.sort((a, b) => a.age - b.age);
}

*/

const getCustomersList = (obj) => {
  return Object.entries(obj)
    .map((arr) => ({ ...arr[1], id: arr[0] }))
    .sort((a, b) => a.age - b.age);
};

/*
//test func
const customers = {
  'customer-id-1': {
      name: 'William',
      age: 54
  },
  'customer-id-2': {
      name: 'Tom',
      age: 17
  },
};


getCustomersList(customers);*/
