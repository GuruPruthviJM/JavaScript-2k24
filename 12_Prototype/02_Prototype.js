// let myName = "Guru      "

// console.log(myName.trueLength);


let myHeros = ["guru", "Mahesh", "Nirmala"]

let heroPower = {
    guru: "hammer",
    mahesh: "chock piece",
    nirmala: "kitcken",

    getGuruPower: ()=>{
        console.log(`Guru power is ${this.guru}`);
    }
}

Object.prototype.hitesh = function(){
    console.log("Every sub-objects can access this prototype");
}

Array.prototype.heyGuru = function(){
    console.log("You can only accessed by array objects only.");
}

myHeros.hitesh()
heroPower.hitesh()
myHeros.heyGuru()
// heroPower.heyGuru() // This will produce an error

// Inheritance

const User = {
    name: "Guru",
    mail: "gurupruthvijm@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

// This is a old syntax
teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher) // teachingSupport.__proto__ = teacher

let anotherUserName = "Guru          "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"GuruPruthvi".trueLength()
"iceTea".trueLength()