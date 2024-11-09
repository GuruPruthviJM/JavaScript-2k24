// Object Literals
const mySym = Symbol("Key1")
const JsUser = {
    name: "Guru Pruthvi J M",
    age: 22,
    [mySym]: "My key1", // Important 
    location: "Hunsur",
    email: "gurupruthvijm@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(JsUser.email);
JsUser.email="gurupruthvi61@gmail.com"
console.log(JsUser['email']);
console.log(JsUser[mySym])
JsUser[mySym]="key"
console.log(JsUser[mySym])

JsUser.greeting = function(){
    console.log("hii");
}
console.log(JsUser.greeting)

JsUser.greeting2 = function() {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting2())
Object.freeze(JsUser)
JsUser.email="maheshgupta5812@gmail.com"
console.log(JsUser.email);
console.log(JsUser);