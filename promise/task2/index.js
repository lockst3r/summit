"use strick";

//1. learn requirement
//2. Create step by step
//3. Write fraft solution & testing
//4. Refactoring final testing



//1.addEventList
//2.read form
//3.make post reqest
//4.

const user ={
  email: 'ushakovqq@gmai.com',
  firstName: 'Yevhenii',
  lastName: 'Ushakov',
  city: 'Kiev',
  age: '55'
}

fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users',
{
method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then(respon => {
    return response.json()
  })