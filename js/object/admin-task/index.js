"use strick";

//1. learn requirement
//2. Create step by step
//3. Write fraft solution & testing
//4. Refactoring final testing

//input arr arr
//output arr

//algo

//1. literate array of Object - map
//2. chek if el is admin => add isAdmin true
/*
const adminIds = ["1", "3"];
const users = [
  { id: "1", name: "Bob" },
  { id: "2", name: "Tom" },
  { id: "3", name: "Sam" },
  { id: "4", name: "Tad" },
];
*/
// option 1
/*
function markAdmins(usersList, adminIds) {
  return usersList.map((el) => {
    if (adminIds.includes(el.id)) {
      return { ...el, isAdmin: true };
    }
    return { ...el, isAdmin: false };
  });
}
*/
// option 2

const markAdmins = (usersList, adminIds) =>
  usersList.map((el) =>
    adminIds.includes(el.id)
      ? { ...el, isAdmin: true }
      : { ...el, isAdmin: false }
  );

// option 3
/*
function markAdmins(usersList, adminIds) {
  return usersList.map((el) => {
    let isAdmin = adminIds.includes(el.id);

    return { ...el, isAdmin };
  });
}

console.log(markAdmins(users, adminIds));*/
