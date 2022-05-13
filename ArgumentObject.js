function test(a,...b) {//parameters
    // console.log(arguments.length);arguments [1,2]
    console.log(arguments[0]);
}


test();// arguments
test(1,2);// 2
test(1,2,3,4,5);// 5

test("name",1,true);