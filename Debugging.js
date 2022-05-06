function sum(a,b) {
    // console.log(a);
    // console.log(b);
    // debugger;
    if(typeof a !== "number") {
        a=parseInt(a);
    }
    if(typeof b !== "number") {
        b=parseInt(b); //parseInt("30a")-->NaN
    }
    let c = a+b;
    console.log(c);
}

sum(10,20); //
sum(10,"20");// 
sum("10","20");// 
sum("10",20);// 
sum("10","");