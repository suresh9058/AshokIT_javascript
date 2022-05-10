function ObjectExample() {
    let User = {
        name: "AshokIT",
        age: 31,
        "likes code": true
    }

    for(let prop in User) {
        console.log(prop);//all the keys of an object
        console.log(User[prop]); // all the values of an object
    }
    let arr = ["apple","orange","graphes"];
    // old way
    // for(let i=0; i<arr.length;i++) {
    //     console.log(arr[i]);
    // }

    // new way
    // for(let fruit of arr) {
    //     console.log(fruit);
    // }

    // if("balbla" in User) { // false
    //     // action 
    // } // true
    // console.log(User.name);//AshokIT
    // console.log(User["likes code"]);// true

    // let sum = {
    //     let: 10,
    //     return: 20,
    //     const: 30
    // }

    // console.log(sum.let+sum.const+sum.return);
}

ObjectExample();

// Pass by value
// function sqaure(x) {//10
//     x= x*x; //10*10 --> x=100
//     return x;
// }
// var y=10;
// var result= sqaure(y);//10

// console.log("y:",y);// 10
// console.log("result:",result);//100

// Pass by reference
// function animal(d) {
//     d.size = "small";
// }

// let dog= {
//     name: "hutch",
//     color:"white"
// }

// console.log("before:",dog); //
// animal(dog);
// console.log("after:",dog); //

let arr = ["apple","orange","graphes"];

arr[3] = "bananan";

console.log(arr.length); //4

// Array length

let fruits = [];
fruits[100] = "apple";

console.log(fruits.length); //101

// the highest index +1 this is the length of array
