let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2023, 0, 23, 5, 10, 15);
let myCreatedDate = new Date("01-11-2002");
console.log(myCreatedDate.toLocaleString());

// Time Stramp
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(myDate.getDate());

console.log(newDate.toLocaleString('default', {
    weekday: "narrow",
}));
