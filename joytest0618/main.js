//Learning how the reduce function works...

// let arr = [1,2,3,4];

// let sum = arr.reduce((acc, val) => {
//   console.log('acc',acc,'val',val,'acc + val',acc+val)
//   return acc + val;
// });

// let sum = arr.reduce((acc, val) => {
//   return acc + val;
// }, 100);

// let sum = arr.reduce((acc, val) => acc + val, 100);

// Challenge-->Consider the following data:

let dataArr = [
  {
    country: "India",
    pop: 1339180127
  },
  {
    country: "China",
    pop: 1409517397
  },
  {
    country: "USA",
    pop: 324459463
  },
  {
    country: "Indonesia",
    pop: 263991379
  }
];

// Do This:  Using the reduce() method, how would you sum up the population of every country except China?
// This wasn't working---From Here!!!:

// let sumPopulationExceptChina = dataArr.reduce((accumTotal, eachItemArr) => {
//   console.log(typeof accumTotal)
//   console.log('accumTotal',accumTotal)
//   console.log(typeof eachItemArr.pop)
//   if (eachItemArr.country !== "China") {
//     // console.log('eachItemArr.country',eachItemArr.country,'accumTotal',accumTotal,'eachItem.pop',eachItemArr.pop)
//     return Number(accumTotal) + Number(eachItemArr.pop);
//   }
// })
// console.log('the Total',sumPopulationExceptChina);

// This wasn't working--To Here!!!

// This works!:

let sumPopulationExceptChina = dataArr.reduce((accumTotal, eachItemArr) => {
  if (eachItemArr.country !== "China") {
    return accumTotal + eachItemArr.pop;
  } else {
    return accumTotal;
  }
}, 0);
console.log("The Total Population of All Countries Except China", sumPopulationExceptChina);