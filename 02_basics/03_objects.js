// singleton
// Object.create

// object literals

// | Method               | When to use                    |
// | -------------------- | ------------------------------ |
// | Object literal `{}`  | Everyday objects (most common) |
// | `new Object()`       | Rarely needed                  |
// | Constructor function | Old JS pattern                 |
// | Class                | Structured OOP code            |
// | `Object.create()`    | Prototype control              |

// 100        // number literal
// "hi"       // string literal
// true       // boolean literal
// [1, 2]     // array literal
// {a: 1}     // object literal


const mySym = Symbol("key1")  //data types un javascript.


const JsUser = {
    name: "Hitesh",  //name apne aap me ek string hi hai.
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //by using this. function we can refer the keys which are used in jsUser. 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());  //here ut give a extra thing => undefined
