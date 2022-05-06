const User = {
    name: "AshokIT",
    email: "ashok@gmail.com",
    mobileNo: "96788765427",
    address: {
        city: 'hyderabad',
        state: 'Telagana'
    },
    permentAddress: {
        city: 'hyderabad2',
        state: 'Telagana2'
    },
    tempAddress: {
        city: 'hyderabad3',
        state: 'Telagana3'
    }
};

// let city = User.address.city;
// let name = User.name;

// let {name, email, address:{city, state}, tempAddress:{city: city2}} = User;
// let city = User.address.city;
// let city2 = User.tempAddress.city;

// const {name: firstName} = User;
// console.log(name);//Ashok
// console.log(firstName);//Ashok

// const firstName = User.name

// let name2 = User.name2;
// console.log(name);
// console.log(email);
// // console.log(address);
// console.log(city);
// console.log(state);

// let {name, email, ...otherProps}  = User;
// console.log(otherProps);

// let {name, mobileNo="999999999"} = User;

// console.log(mobileNo);//96788765427

// let mobileNo = User.mobileNo === undefined ? "defaultValue" : User.mobileNo

let arr = ["apple","banana"];

// let {} = User
let [fruit1,fruit2] = arr;

// let fruit1 = arr[0];
// let fruit2 = arr[1];

console.log(fruit1); // apple
console.log(fruit2); // banana

arr.pop();//[apple]

console.log(arr);
console.log(fruit2); 

let a=1;
let b=2;

// a=2, b=1
[a,b] = [b,a];





