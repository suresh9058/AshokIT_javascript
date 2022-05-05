// 1. Hoisting (applicable to var, not to let and const)
// 2. scope
// 3. redeclare

// function hoistingExample() {
//     console.log(a);//
//     const a=10;
// }

// function hoistingExample() {
//     var a;
//     console.log(a);//undefined
//     a=10;
// }

// hoistingExample();

// function scopeExample() {
//     for(let i=0;i<3;i++) { // 0<3, 1<3, 2<3, 3<3

//     }
//     console.log(i);// 
// }

// scopeExample();

// var you can redeclare and update the values
// var a="global";
// var a="redeclare";

// let u can't redeclare but u can modify its value
// let a=10;
//  a=20;

// const we can't redeclare also we can't update the value
// const a=10;
// a=20;


// function redeclare() {
//     var a="global";
//     if(true) {
//         var a="local";
//     }
//     console.log(a);//local
// }

// function redeclare() {
//     let a="global";
//     if(true) {
//         let a="local";
//     }
//     console.log(a);// global
// }

// function sum(a,b) {
//   return a+b;
// }

// console.log(sum(10,20));// 30
// console.log(sum(10,"20"));// 1020

// map, filter are array method 
// map--data transformation
// filter -- only passed students
// let arr= [1,2,3,4]; // original 

// [2,4,6,8] // you expected output

// for(let i=0; i<arr.length;)

let arr= [1,2,3,4]; // [2,4]

// let doubled = arr.map(function(item, index){
//     item=item*2;//1*2, 2*2, 3*2, 4*2
//     return item;// 
// });

let doubled = arr.map(item=>{return item*2});
// let doubled = arr.map(item=>item*2);

console.log(doubled);

let filterData = arr.filter(item=> item%2 ===0);

console.log(filterData);

let Students = [
    {
        name: "abc",
        id:123,
        marks: 90
    },
    {
        name: "def",
        id:456,
        marks: 65
    },
    {
        name: "xyz",
        id:789,
        marks: 50
    }
];

let passedStudents = Students.filter(item=>item.marks>60);
console.log(passedStudents);

//  exeercise 
// map Employee data in which u need to hike emploee salary with 1000rs


