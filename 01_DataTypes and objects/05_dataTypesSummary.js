// Primitive is a call by value
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// JS is a dynamic typed language

// Refernce Type or Non-Primitive
// Array, Objects, Functions

const heros = 0["Guru", "Pruthvi"]

let myObj={
    name: "Guru",
    age: 22,
}

const id=Symbol('123')
const id1=Symbol('123')
console.log(id1," ",id);


const myFunction = function () {
    console.log("Hello World");

}

console.log(typeof myFunction) 
myFunction()
