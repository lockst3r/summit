"use strick";

const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];


 const getTotalRevenue = (arr) => arr.map(el => Object.values(el)[1]).reduce((acc, n) => acc+n);


console.log(getTotalRevenue(dayTransactions));