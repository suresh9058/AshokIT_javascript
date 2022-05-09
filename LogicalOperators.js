function logicalOperator() {
    // conditional branching 
    let hour = 20; // if the office hours are from 10-18
    // if(hour<10 || hour>18) {//20<10 || 20>18
        // alert("office is closed");
    // }
    // if(isLoggedIn && isAdmin) {
        // delete the user
    // }

    // falsy values in javascript
    // 0, null, undefined, "", false, NaN
    let value = "AshokIT";
    let result = !value;// !false
    console.log(result); //true

    // if(1 || 0 ) {

    // }

// let a = null || 0 || undefined ;// logical OR first truth
// let a = 1 && null && 2 ;// null logical AND first falsy
let a = null || 2 && 3 || 4;// null || 3 || 4 
console.log("a:",a);//


}

logicalOperator();