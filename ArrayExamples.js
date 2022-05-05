// let fruits = ['apple','orange','plum'];

// console.log(fruits[0]);//apple

// fruits[2] = 'banana';

// console.log(fruits); //['apple','orange','banana']

// fruits.push("kiwi"); // push method will add items to the top of array
// console.log(fruits);

// fruits.pop();// remove the top item 
// console.log(fruits);



// length 
// [1,2,3,4,5] --> 15
// let arr = [1,2,3,4,5]; 
// // i=i+1-->i++
// let sum = 0;
// for(let index=0; index<arr.length; index++) {
//     sum = sum+arr[index];//0+1, 1+2, 3+3, 6+4
// }
// console.log("sum of array elements:",sum);

// console.log(sum(10,20));
// // function declaration
// function sum(a,b) {
//     return a+b;
// }

// function expression
// console.log(sum(10,20)); //wrong error

// let sum = function(a,b) {
//     return a+b;
// }

// arrow function
// let sum = (a,b)=> a+b;

// let sum = (a,b)=> {
//     let c = a+b;
//     return c;
// }

// console.log(sum(10,20));

// Rest operator 

function sum(a,b,...c) {//c=[30,40,50]
    console.log(a);
    console.log(b);
    console.log(c);
}
// 1. rest operator list of items converted into array
// 2. rest operator should be the last parameter of the function
sum(10,20,30,40,50);

// spread operator
let sprd = [1,2,3];
// 1. convert the array into list of items
console.log(Math.min(1,2,3));// 1
console.log(Math.min(...sprd));// 1,2,3











