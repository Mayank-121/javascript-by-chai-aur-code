//arrow function ke andar this nahi hota hai.
//browser ke andar jo global object hai vo hai window object.


const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //this give empty object {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);       //functions ke andar ham this ke use nahi kr skte. this eill give undefined.
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  //implicit return me return likhne ki jarurat nahin hai.

// const addTwo = (num1, num2) => ( num1 + num2 )   //parenthesis me bhi return nahi likhna padhta hai .it is used in react.

const addTwo = (num1, num2) => ({username: "hitesh"})  //object ko return krne ke liye hme parenthesis ka use krna padta hai.


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
