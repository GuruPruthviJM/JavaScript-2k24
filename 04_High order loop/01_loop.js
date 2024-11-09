// for of

const arr = [1, 2, 3, 4, 5]

for (let val of arr) {
    console.log(val);
}

const greetings = "Hello World!"
console.log();
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// for each loop
console.log("for each: ");

arr.forEach((element, index) => {
    console.log(element, " ", index);
});

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')
map.set('IN', 'India')

console.log(map);

for (const key of map.keys()) {
    console.log(map.get(key));
}

map.forEach((val, key) => {
    console.log(key, ":-", val);
    
})

const myCodding = [
    {
        langName: "JavaScript",
        langFile: "js"
    },
    {
        langName: "Java",
        langFile: "java"
    },
    {
        langName: "Python",
        langFile: "py"
    }
]
console.log();

myCodding.forEach(element => {
    for (const key in element) {
        console.log(key, ":-", element[key]);
    }
    console.log();
});