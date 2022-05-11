// function x() {
//     return this;
// }

// console.log(x()); // window object

var a=1;// window.a =1

var nums = {
    a:2
}

// function test() {
//     return this.a; //window.a
// }

// console.log(test());//1
// console.log(test.call(nums));//2
// console.log(test.apply(nums));//2

function test(b,c) {
    return this.a+b+c;
}

console.log(test.call(nums,1,2));//5
console.log(test.apply(nums,[1,2]));//5

// console.time("for loop");
// for(let i=0;i<100;i++) {
//     console.log(i);
// }
// console.timeEnd("for loop");

// var startTime = performance.now();
// for(let i=0;i<100;i++) {
//     console.log(i);
// }
// var endTime = performance.now();

// console.log(endTime-startTime);

